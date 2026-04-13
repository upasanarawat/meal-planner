import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Skeleton from '@mui/material/Skeleton'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import MealCard, { MealCardSkeleton } from './MealCard'
import RecipeModal from './RecipeModal'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const DAY_ABBR = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MEAL_TYPES = ['breakfast', 'lunch', 'tea', 'dinner']

export default function MealGrid({ plan, loading, todayIndex, regeneratingMeal, onRegenerateMeal }) {
  const [selectedMeal, setSelectedMeal] = useState(null)

  if (!plan && !loading) {
    return (
      <Box sx={{ textAlign: 'center', py: 12, color: 'text.secondary' }}>
        <RestaurantIcon sx={{ fontSize: 56, mb: 2, color: '#DDDDDD' }} />
        <Typography variant="body1" sx={{ maxWidth: 360, mx: 'auto', lineHeight: 1.6 }}>
          Generate a weekly Indian meal plan to get started.
        </Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ width: '100%', overflowX: 'auto', pb: 1 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(7, minmax(155px, 1fr))', lg: 'repeat(7, 1fr)' },
          gap: { xs: 1, md: 2 },
          minWidth: { xs: 950, lg: 'auto' },
        }}
      >
        {DAYS.map((day, dayIndex) => {
          const dayData = plan?.days?.[dayIndex]
          const dailyCalories = dayData
            ? Object.values(dayData.meals).reduce((s, m) => s + m.calories, 0)
            : 0
          const isToday = dayIndex === todayIndex

          return (
            <Paper
              key={day}
              elevation={0}
              sx={{
                p: { xs: 1, md: 1.5 },
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                bgcolor: isToday ? '#FFF8F6' : 'transparent',
                border: '1px solid',
                borderColor: isToday ? '#D03660' : 'divider',
                borderRadius: '12px',
              }}
            >
              {/* Day header */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, py: 1 }}>
                <Typography variant="h3" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  {DAY_ABBR[dayIndex]}
                </Typography>
                {isToday && (
                  <Chip
                    label="Today"
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      background: 'linear-gradient(90deg, #D03660 0%, #D73B53 100%)',
                      color: 'white',
                    }}
                  />
                )}
              </Box>

              {/* Meal cards */}
              {MEAL_TYPES.map(mealType => {
                const mealKey = `${dayIndex}-${mealType}`
                const isRegenerating = regeneratingMeal === mealKey

                if (loading) return <MealCardSkeleton key={mealType} />

                const meal = dayData?.meals?.[mealType]
                if (!meal) return null

                return (
                  <MealCard
                    key={mealType}
                    meal={meal}
                    isRegenerating={isRegenerating}
                    onRegenerate={() => onRegenerateMeal(dayIndex, mealType)}
                    onClick={() => setSelectedMeal(meal)}
                  />
                )
              })}

              {/* Daily total */}
              <Box sx={{ textAlign: 'center', py: 0.5 }}>
                {loading ? (
                  <Skeleton variant="text" width="60%" sx={{ mx: 'auto' }} />
                ) : (
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', fontSize: '0.75rem' }}>
                    {dailyCalories.toLocaleString()} kcal
                  </Typography>
                )}
              </Box>
            </Paper>
          )
        })}
      </Box>
      <RecipeModal meal={selectedMeal} open={!!selectedMeal} onClose={() => setSelectedMeal(null)} />
    </Box>
  )
}
