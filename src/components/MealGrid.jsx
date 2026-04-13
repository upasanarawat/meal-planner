import { useState } from 'react'
import { useStyletron } from 'baseui'
import { Skeleton } from 'baseui/skeleton'
import { Tag, KIND } from 'baseui/tag'
import MealCard, { MealCardSkeleton } from './MealCard'
import RecipeModal from './RecipeModal'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const DAY_ABBR = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MEAL_TYPES = ['breakfast', 'lunch', 'tea', 'dinner']

export default function MealGrid({ plan, loading, todayIndex, regeneratingMeal, onRegenerateMeal }) {
  const [css, theme] = useStyletron()
  const [selectedMeal, setSelectedMeal] = useState(null)

  if (!plan && !loading) {
    return (
      <div className={css({
        textAlign: 'center',
        paddingTop: '96px',
        paddingBottom: '96px',
        color: theme.colors.contentSecondary,
      })}>
        <svg className={css({ marginBottom: theme.sizing.scale600, color: theme.colors.contentTertiary })} width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
        <div className={css({
          ...theme.typography.ParagraphMedium,
          maxWidth: '360px',
          marginLeft: 'auto',
          marginRight: 'auto',
        })}>
          Generate a weekly Indian meal plan to get started.
        </div>
      </div>
    )
  }

  return (
    <div className={css({ width: '100%', overflowX: 'auto', paddingBottom: '4px' })}>
      <div className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(7, minmax(155px, 1fr))',
        gap: theme.sizing.scale300,
        minWidth: '950px',
        '@media screen and (min-width: 1024px)': {
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: theme.sizing.scale600,
          minWidth: 'auto',
        },
      })}>
        {DAYS.map((day, dayIndex) => {
          const dayData = plan?.days?.[dayIndex]
          const dailyCalories = dayData
            ? Object.values(dayData.meals).reduce((s, m) => s + m.calories, 0)
            : 0
          const isToday = dayIndex === todayIndex

          return (
            <div
              key={day}
              className={css({
                padding: theme.sizing.scale300,
                display: 'flex',
                flexDirection: 'column',
                gap: theme.sizing.scale300,
                backgroundColor: isToday ? theme.colors.backgroundLightAccent : 'transparent',
                border: `${isToday ? '2px' : '1px'} solid`,
                borderColor: isToday ? theme.colors.borderAccent : theme.colors.borderOpaque,
                borderRadius: theme.borders.radius300,
                '@media screen and (min-width: 1024px)': {
                  padding: theme.sizing.scale500,
                },
              })}
            >
              {/* Day header */}
              <div className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: theme.sizing.scale300,
                paddingTop: theme.sizing.scale300,
                paddingBottom: theme.sizing.scale300,
              })}>
                <span className={css({
                  ...theme.typography.LabelMedium,
                  color: theme.colors.contentPrimary,
                })}>
                  {DAY_ABBR[dayIndex]}
                </span>
                {isToday && (
                  <Tag closeable={false} kind={KIND.accent} size="small">
                    Today
                  </Tag>
                )}
              </div>

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
              <div className={css({ textAlign: 'center', paddingTop: theme.sizing.scale100, paddingBottom: theme.sizing.scale100 })}>
                {loading ? (
                  <Skeleton width="60%" height="14px" animation overrides={{ Root: { style: { marginLeft: 'auto', marginRight: 'auto' } } }} />
                ) : (
                  <span className={css({ ...theme.typography.LabelSmall, color: theme.colors.contentSecondary })}>
                    {dailyCalories.toLocaleString()} kcal
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <RecipeModal meal={selectedMeal} open={!!selectedMeal} onClose={() => setSelectedMeal(null)} />
    </div>
  )
}
