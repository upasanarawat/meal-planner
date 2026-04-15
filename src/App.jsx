import { useState, useCallback } from 'react'
import { useStyletron } from 'baseui'
import Header from './components/Header'
import MealGrid from './components/MealGrid'
import { generatePlan, regenerateMeal, banMealName } from './meals'

function getTodayIndex() {
  const jsDay = new Date().getDay()
  return jsDay === 0 ? 6 : jsDay - 1
}

export default function App() {
  const [css, theme] = useStyletron()
  const [calorieTarget, setCalorieTarget] = useState(null)
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [regeneratingMeal, setRegeneratingMeal] = useState(null)

  const todayIndex = getTodayIndex()

  const handleGenerate = useCallback(() => {
    setLoading(true)
    setPlan(null)
    setTimeout(() => {
      const newPlan = generatePlan(calorieTarget)
      setPlan(newPlan)
      setLoading(false)
    }, 600)
  }, [calorieTarget])

  const handleRegenerate = useCallback((dayIndex, mealType) => {
    if (!plan) return
    const currentMeal = plan.days[dayIndex].meals[mealType]
    const key = `${dayIndex}-${mealType}`

    setRegeneratingMeal(key)
    setTimeout(() => {
      const newMeal = regenerateMeal(mealType, currentMeal.name, calorieTarget)
      setPlan(prev => {
        const updated = JSON.parse(JSON.stringify(prev))
        updated.days[dayIndex].meals[mealType] = newMeal
        return updated
      })
      setRegeneratingMeal(null)
    }, 400)
  }, [plan, calorieTarget])

  const handleBan = useCallback((dayIndex, mealType) => {
    if (!plan) return
    const currentMeal = plan.days[dayIndex].meals[mealType]
    const key = `${dayIndex}-${mealType}`

    banMealName(currentMeal.name)

    setRegeneratingMeal(key)
    setTimeout(() => {
      const newMeal = regenerateMeal(mealType, currentMeal.name, calorieTarget)
      setPlan(prev => {
        const updated = JSON.parse(JSON.stringify(prev))
        updated.days[dayIndex].meals[mealType] = newMeal
        return updated
      })
      setRegeneratingMeal(null)
    }, 400)
  }, [plan, calorieTarget])

  return (
    <div className={css({
      minHeight: '100vh',
      backgroundColor: theme.colors.backgroundPrimary,
    })}>
      <Header
        calorieTarget={calorieTarget}
        onCalorieTargetChange={setCalorieTarget}
        onGenerate={handleGenerate}
        loading={loading}
        hasPlan={!!plan}
      />
      <div className={css({
        maxWidth: '1536px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: theme.sizing.scale600,
        paddingBottom: theme.sizing.scale600,
        paddingLeft: theme.sizing.scale500,
        paddingRight: theme.sizing.scale500,
        '@media screen and (min-width: 1024px)': {
          paddingTop: theme.sizing.scale800,
          paddingBottom: theme.sizing.scale800,
          paddingLeft: '48px',
          paddingRight: '48px',
        },
      })}>
        <MealGrid
          plan={plan}
          loading={loading}
          todayIndex={todayIndex}
          regeneratingMeal={regeneratingMeal}
          onRegenerateMeal={handleRegenerate}
          onBanMeal={handleBan}
        />
      </div>
    </div>
  )
}
