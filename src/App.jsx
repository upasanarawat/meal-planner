import { useState, useCallback } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import Header from './components/Header'
import DietaryChips from './components/DietaryChips'
import MealGrid from './components/MealGrid'
import { generatePlan, regenerateMeal } from './meals'

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
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header
        weeklyCalories={weeklyCalories}
        hasPlan={!!plan}
        calorieTarget={calorieTarget}
        onCalorieTargetChange={setCalorieTarget}
      />
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 3 }, px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 2, md: 3 } }}>
          <DietaryChips selected={preferences} onChange={setPreferences} />
          <Button
            variant="contained"
            size="large"
            onClick={handleGenerate}
            disabled={loading}
            startIcon={<AutoAwesomeIcon />}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '0.95rem',
              boxShadow: 3,
              '&:hover': { boxShadow: 6, transform: 'translateY(-1px)' },
              transition: 'all 0.2s ease',
            }}
          >
            {loading ? 'Generating...' : plan ? 'Regenerate Week Plan' : 'Generate Week Plan'}
          </Button>
          <MealGrid
            plan={plan}
            loading={loading}
            todayIndex={todayIndex}
            regeneratingMeal={regeneratingMeal}
            onRegenerateMeal={handleRegenerate}
          />
        </Box>
      </Container>
    </Box>
  )
}
