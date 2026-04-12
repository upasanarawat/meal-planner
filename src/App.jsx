import { useState, useCallback } from 'react'
import Header from './components/Header'
import DietaryChips from './components/DietaryChips'
import MealGrid from './components/MealGrid'
import { generatePlan, regenerateMeal } from './meals'
import './App.css'

function getTodayIndex() {
  const jsDay = new Date().getDay()
  return jsDay === 0 ? 6 : jsDay - 1
}

export default function App() {
  const [preferences, setPreferences] = useState([])
  const [calorieTarget, setCalorieTarget] = useState(null)
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [regeneratingMeal, setRegeneratingMeal] = useState(null)

  const todayIndex = getTodayIndex()

  const weeklyCalories = plan
    ? plan.days.reduce((total, day) => {
        const dayTotal = Object.values(day.meals).reduce((s, m) => s + m.calories, 0)
        return total + dayTotal
      }, 0)
    : 0

  const handleGenerate = useCallback(() => {
    setLoading(true)
    setPlan(null)
    // Small delay for skeleton UX
    setTimeout(() => {
      const newPlan = generatePlan(preferences, calorieTarget)
      setPlan(newPlan)
      setLoading(false)
    }, 600)
  }, [preferences, calorieTarget])

  const handleRegenerate = useCallback((dayIndex, mealType) => {
    if (!plan) return
    const currentMeal = plan.days[dayIndex].meals[mealType]
    const key = `${dayIndex}-${mealType}`

    setRegeneratingMeal(key)
    setTimeout(() => {
      const newMeal = regenerateMeal(mealType, preferences, currentMeal.name, calorieTarget)
      setPlan(prev => {
        const updated = JSON.parse(JSON.stringify(prev))
        updated.days[dayIndex].meals[mealType] = newMeal
        return updated
      })
      setRegeneratingMeal(null)
    }, 400)
  }, [plan, preferences, calorieTarget])

  return (
    <div className="app">
      <Header
        weeklyCalories={weeklyCalories}
        hasPlan={!!plan}
        calorieTarget={calorieTarget}
        onCalorieTargetChange={setCalorieTarget}
      />
      <main className="main">
        <DietaryChips selected={preferences} onChange={setPreferences} />
        <button
          className="generate-btn"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? 'Generating…' : plan ? 'Regenerate Week Plan' : 'Generate Week Plan'}
        </button>
        <MealGrid
          plan={plan}
          loading={loading}
          todayIndex={todayIndex}
          regeneratingMeal={regeneratingMeal}
          onRegenerateMeal={handleRegenerate}
        />
      </main>
    </div>
  )
}
