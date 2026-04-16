import { useState, useCallback, useEffect, useRef } from 'react'
import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import { Spinner } from 'baseui/spinner'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider, loadUserData, saveUserData } from './firebase'
import Header from './components/Header'
import MealGrid from './components/MealGrid'
import LoginScreen from './components/LoginScreen'
import { generatePlan, regenerateMeal, banMealName, setExternalBannedList } from './meals'

function getTodayIndex() {
  const jsDay = new Date().getDay()
  return jsDay === 0 ? 6 : jsDay - 1
}

export default function App() {
  const [css, theme] = useStyletron()
  const [user, setUser] = useState(undefined)
  const [calorieTarget, setCalorieTarget] = useState(null)
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [regeneratingMeal, setRegeneratingMeal] = useState(null)
  const [loginLoading, setLoginLoading] = useState(false)
  const [bannedMeals, setBannedMeals] = useState([])
  const saveTimer = useRef(null)

  const todayIndex = getTodayIndex()

  useEffect(() => { setExternalBannedList(bannedMeals) }, [bannedMeals])

  useEffect(() => {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        try {
          const data = await loadUserData(firebaseUser.uid)
          if (data) {
            if (data.plan) setPlan(data.plan)
            if (data.calorieTarget !== undefined) setCalorieTarget(data.calorieTarget)
            if (data.bannedMeals) setBannedMeals(data.bannedMeals)
          }
        } catch (e) { console.error('Failed to load user data:', e) }
      } else {
        setUser(null); setPlan(null); setCalorieTarget(null); setBannedMeals([]); setExternalBannedList(null)
      }
    })
  }, [])

  const saveToFirestore = useCallback((updates) => {
    if (!auth.currentUser) return
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      saveUserData(auth.currentUser.uid, updates).catch(e => console.error('Failed to save:', e))
    }, 500)
  }, [])

  const handleGoogleLogin = async () => {
    setLoginLoading(true)
    try { await signInWithPopup(auth, googleProvider) } catch (e) { console.error('Login failed:', e) }
    setLoginLoading(false)
  }

  const handleLogout = async () => { await signOut(auth) }

  const handleCalorieTargetChange = useCallback((value) => {
    setCalorieTarget(value)
    saveToFirestore({ calorieTarget: value })
  }, [saveToFirestore])

  const handleGenerate = useCallback(() => {
    setLoading(true); setPlan(null)
    setTimeout(() => {
      const newPlan = generatePlan(calorieTarget)
      setPlan(newPlan); setLoading(false)
      saveToFirestore({ plan: newPlan })
    }, 600)
  }, [calorieTarget, saveToFirestore])

  const handleRegenerate = useCallback((dayIndex, mealType) => {
    if (!plan) return
    const currentMeal = plan.days[dayIndex].meals[mealType]
    setRegeneratingMeal(`${dayIndex}-${mealType}`)
    setTimeout(() => {
      const newMeal = regenerateMeal(mealType, currentMeal.name, calorieTarget)
      setPlan(prev => {
        const updated = JSON.parse(JSON.stringify(prev))
        updated.days[dayIndex].meals[mealType] = newMeal
        saveToFirestore({ plan: updated })
        return updated
      })
      setRegeneratingMeal(null)
    }, 400)
  }, [plan, calorieTarget, saveToFirestore])

  const handleBan = useCallback((dayIndex, mealType) => {
    if (!plan) return
    const currentMeal = plan.days[dayIndex].meals[mealType]
    const newBanned = [...bannedMeals]
    if (!newBanned.includes(currentMeal.name)) newBanned.push(currentMeal.name)
    setBannedMeals(newBanned)
    banMealName(currentMeal.name)
    setRegeneratingMeal(`${dayIndex}-${mealType}`)
    setTimeout(() => {
      const newMeal = regenerateMeal(mealType, currentMeal.name, calorieTarget)
      setPlan(prev => {
        const updated = JSON.parse(JSON.stringify(prev))
        updated.days[dayIndex].meals[mealType] = newMeal
        saveToFirestore({ plan: updated, bannedMeals: newBanned })
        return updated
      })
      setRegeneratingMeal(null)
    }, 400)
  }, [plan, calorieTarget, bannedMeals, saveToFirestore])

  if (user === undefined) {
    return (
      <Block display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
        <Spinner />
      </Block>
    )
  }

  if (!user) return <LoginScreen onGoogleLogin={handleGoogleLogin} loading={loginLoading} />

  return (
    <Block minHeight="100vh" backgroundColor={theme.colors.backgroundPrimary}>
      <Header
        calorieTarget={calorieTarget}
        onCalorieTargetChange={handleCalorieTargetChange}
        onGenerate={handleGenerate}
        loading={loading}
        hasPlan={!!plan}
        user={user}
        onLogout={handleLogout}
      />
      <Block maxWidth="1200px" marginLeft="auto" marginRight="auto"
        paddingTop="scale600" paddingBottom="scale600" paddingLeft="scale600" paddingRight="scale600">
        <MealGrid
          plan={plan}
          loading={loading}
          todayIndex={todayIndex}
          regeneratingMeal={regeneratingMeal}
          onRegenerateMeal={handleRegenerate}
          onBanMeal={handleBan}
        />
      </Block>
    </Block>
  )
}
