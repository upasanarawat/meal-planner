import { useState } from 'react'
import { useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import { Button, KIND, SIZE } from 'baseui/button'
import { Tag, KIND as TAG_KIND } from 'baseui/tag'
import MealCard, { MealCardSkeleton } from './MealCard'
import RecipeModal from './RecipeModal'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const DAY_ABBR = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MEAL_TYPES = ['breakfast', 'lunch', 'tea', 'dinner']

export default function MealGrid({ plan, loading, todayIndex, regeneratingMeal, onRegenerateMeal, onBanMeal }) {
  const [css, theme] = useStyletron()
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [activeIndex, setActiveIndex] = useState(todayIndex)

  const goPrev = () => setActiveIndex(i => Math.max(0, i - 1))
  const goNext = () => setActiveIndex(i => Math.min(6, i + 1))

  if (!plan && !loading) {
    return (
      <Block display="flex" flexDirection="column" alignItems="center" paddingTop="scale1200" paddingBottom="scale1200">
        <svg className={css({ marginBottom: theme.sizing.scale600, color: theme.colors.contentTertiary })} width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
        <Block maxWidth="360px" $style={{ textAlign: 'center' }}>
          <span className={css({ ...theme.typography.ParagraphMedium, color: theme.colors.contentSecondary })}>
            Generate a weekly Indian meal plan to get started.
          </span>
        </Block>
      </Block>
    )
  }

  const dayData = plan?.days?.[activeIndex]
  const dailyCalories = dayData
    ? Object.values(dayData.meals).reduce((s, m) => s + m.calories, 0)
    : 0
  const isToday = activeIndex === todayIndex

  return (
    <Block>
      {/* Day navigation */}
      <Block display="flex" alignItems="center" justifyContent="center" gridGap={theme.sizing.scale600} marginBottom={theme.sizing.scale600}>
        <Button kind={KIND.tertiary} size={SIZE.large} onClick={goPrev} disabled={activeIndex === 0}>
          ‹
        </Button>
        <Block display="flex" flexDirection="column" alignItems="center" minWidth="200px">
          <Block display="flex" alignItems="center" gridGap={theme.sizing.scale300}>
            <span className={css({ ...theme.typography.HeadingXXLarge })}>
              {DAYS[activeIndex]}
            </span>
            {isToday && (
              <Tag closeable={false} kind={TAG_KIND.accent} size="small">Today</Tag>
            )}
          </Block>
          {!loading && (
            <span className={css({ ...theme.typography.LabelMedium, color: theme.colors.contentTertiary, marginTop: theme.sizing.scale200 })}>
              {dailyCalories.toLocaleString()} kcal total
            </span>
          )}
        </Block>
        <Button kind={KIND.tertiary} size={SIZE.large} onClick={goNext} disabled={activeIndex === 6}>
          ›
        </Button>
      </Block>

      {/* Day dot indicators */}
      <Block display="flex" justifyContent="center" gridGap={theme.sizing.scale200} marginBottom={theme.sizing.scale900}>
        {DAYS.map((day, i) => (
          <button
            key={day}
            onClick={() => setActiveIndex(i)}
            title={day}
            className={css({
              width: i === activeIndex ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
              backgroundColor: i === activeIndex
                ? theme.colors.contentPrimary
                : i === todayIndex
                  ? theme.colors.accent400
                  : theme.colors.mono400,
            })}
          />
        ))}
      </Block>

      {/* Meal cards */}
      <Block maxWidth="600px" marginLeft="auto" marginRight="auto">
        <Block display="flex" flexDirection="column" gridGap={theme.sizing.scale600}>
          {MEAL_TYPES.map(mealType => {
            const mealKey = `${activeIndex}-${mealType}`
            const isRegenerating = regeneratingMeal === mealKey

            if (loading) return <MealCardSkeleton key={mealType} mealType={mealType} />

            const meal = dayData?.meals?.[mealType]
            if (!meal) return null

            return (
              <MealCard
                key={mealType}
                meal={meal}
                mealType={mealType}
                isRegenerating={isRegenerating}
                onRegenerate={() => onRegenerateMeal(activeIndex, mealType)}
                onBan={() => onBanMeal(activeIndex, mealType)}
                onClick={() => setSelectedMeal(meal)}
              />
            )
          })}
        </Block>
      </Block>

      <RecipeModal meal={selectedMeal} open={!!selectedMeal} onClose={() => setSelectedMeal(null)} />
    </Block>
  )
}
