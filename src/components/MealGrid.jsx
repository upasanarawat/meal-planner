import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Skeleton from '@mui/material/Skeleton'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import MealCard, { MealCardSkeleton } from './MealCard'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const DAY_ABBR = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MEAL_TYPES = ['breakfast', 'lunch', 'dinner']

export default function MealGrid({ plan, loading, todayIndex, regeneratingMeal, onRegenerateMeal }) {
  if (!plan && !loading) {
    return (
      <Box sx={{ textAlign: 'center', py: 10, color: 'text.secondary' }}>
        <RestaurantIcon sx={{ fontSize: 56, mb: 2, color: 'action.disabled' }} />
        <Typography variant="body1" sx={{ maxWidth: 400, mx: 'auto', lineHeight: 1.6 }}>
          Select your dietary preferences and generate a meal plan to get started.
        </Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ width: '100%', overflowX: 'auto', pb: 1 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(7, minmax(150px, 1fr))', lg: 'repeat(7, 1fr)' },
          gap: { xs: 1, md: 1.5 },
          minWidth: { xs: 900, lg: 'auto' },
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
              elevation={isToday ? 2 : 0}
              sx={{
                p: { xs: 1, md: 1.5 },
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                bgcolor: isToday ? 'warning.light' : 'transparent',
                border: isToday ? '2px solid' : '1px solid',
                borderColor: isToday ? 'warning.main' : 'divider',
                borderRadius: 2,
              }}
            >
              {/* Day header */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, py: 0.5 }}>
                <Typography variant="h3" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  {DAY_ABBR[dayIndex]}
                </Typography>
                {isToday && (
                  <Chip label="Today" size="small" color="primary" sx={{ height: 20, fontSize: '0.65rem', fontWeight: 700 }} />
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
                  />
                )
              })}

              {/* Daily total */}
              <Box sx={{ textAlign: 'center', pt: 0.5 }}>
                {loading ? (
                  <Skeleton variant="text" width="60%" sx={{ mx: 'auto' }} />
                ) : (
                  <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                    {dailyCalories.toLocaleString()} kcal
                  </Typography>
                )}
              </Box>
            </Paper>
          )
        })}
      </Box>
    </Box>
  )
}
