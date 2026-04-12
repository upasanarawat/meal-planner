import MealCard from './MealCard'
import './MealGrid.css'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const DAY_ABBR = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MEAL_TYPES = ['breakfast', 'lunch', 'dinner']
const MEAL_LABELS = { breakfast: 'Breakfast', lunch: 'Lunch', dinner: 'Dinner' }

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-emoji skeleton-pulse" />
      <div className="skeleton-line skeleton-line-title skeleton-pulse" />
      <div className="skeleton-line skeleton-line-desc skeleton-pulse" />
      <div className="skeleton-line skeleton-line-cal skeleton-pulse" />
    </div>
  )
}

export default function MealGrid({ plan, loading, todayIndex, regeneratingMeal, onRegenerateMeal }) {
  if (!plan && !loading) {
    return (
      <div className="grid-empty">
        <p className="grid-empty-icon">🍽️</p>
        <p className="grid-empty-text">
          Select your dietary preferences and generate a meal plan to get started.
        </p>
      </div>
    )
  }

  return (
    <div className="grid-wrapper">
      <div className="meal-grid">
        {/* Row labels column */}
        <div className="grid-labels">
          <div className="grid-label-header" />
          {MEAL_TYPES.map(type => (
            <div key={type} className="grid-label">
              {MEAL_LABELS[type]}
            </div>
          ))}
          <div className="grid-label grid-label-total">Daily Total</div>
        </div>

        {/* Day columns */}
        {DAYS.map((day, dayIndex) => {
          const dayData = plan?.days?.[dayIndex]
          const dailyCalories = dayData
            ? Object.values(dayData.meals).reduce((s, m) => s + m.calories, 0)
            : 0
          const isToday = dayIndex === todayIndex

          return (
            <div key={day} className={`grid-day ${isToday ? 'grid-day-today' : ''}`}>
              <div className="grid-day-header">
                <span className="day-name">{DAY_ABBR[dayIndex]}</span>
                {isToday && <span className="today-badge">Today</span>}
              </div>

              {MEAL_TYPES.map(mealType => {
                const mealKey = `${dayIndex}-${mealType}`
                const isRegenerating = regeneratingMeal === mealKey

                if (loading) {
                  return <SkeletonCard key={mealType} />
                }

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

              <div className="daily-total">
                {loading ? (
                  <div className="skeleton-line skeleton-line-cal skeleton-pulse" />
                ) : (
                  <>{dailyCalories.toLocaleString()} kcal</>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
