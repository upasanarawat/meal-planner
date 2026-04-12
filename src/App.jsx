import { useState, useCallback } from 'react'
import Header from './components/Header'
import DietaryChips from './components/DietaryChips'
import MealGrid from './components/MealGrid'
import './App.css'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function getTodayIndex() {
  const jsDay = new Date().getDay()
  return jsDay === 0 ? 6 : jsDay - 1
}

export default function App() {
  const [preferences, setPreferences] = useState([])
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

  const generatePlan = useCallback(async () => {
    setLoading(true)
    setPlan(null)
    try {
      const res = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferences }),
      })
      if (!res.ok) throw new Error('Failed to generate plan')
      const data = await res.json()
      setPlan(data)
    } catch (err) {
      console.error(err)
      alert('Failed to generate meal plan. Check that your API key is set and the server is running.')
    } finally {
      setLoading(false)
    }
  }, [preferences])

  const regenerateMeal = useCallback(async (dayIndex, mealType) => {
    if (!plan) return
    const day = plan.days[dayIndex]
    const currentMeal = day.meals[mealType]
    const key = `${dayIndex}-${mealType}`

    setRegeneratingMeal(key)
    try {
      const res = await fetch('/api/regenerate-meal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          day: day.day,
          mealType,
          preferences,
          currentMealName: currentMeal.name,
        }),
      })
      if (!res.ok) throw new Error('Failed to regenerate meal')
      const newMeal = await res.json()

      setPlan(prev => {
        const updated = JSON.parse(JSON.stringify(prev))
        updated.days[dayIndex].meals[mealType] = newMeal
        return updated
      })
    } catch (err) {
      console.error(err)
      alert('Failed to regenerate meal.')
    } finally {
      setRegeneratingMeal(null)
    }
  }, [plan, preferences])

  return (
    <div className="app">
      <Header weeklyCalories={weeklyCalories} hasPlan={!!plan} />
      <main className="main">
        <DietaryChips selected={preferences} onChange={setPreferences} />
        <button
          className="generate-btn"
          onClick={generatePlan}
          disabled={loading}
        >
          {loading ? 'Generating…' : plan ? 'Regenerate Week Plan' : 'Generate Week Plan'}
        </button>
        <MealGrid
          plan={plan}
          loading={loading}
          todayIndex={todayIndex}
          regeneratingMeal={regeneratingMeal}
          onRegenerateMeal={regenerateMeal}
        />
      </main>
    </div>
  )
}
