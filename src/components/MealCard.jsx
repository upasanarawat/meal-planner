import './MealCard.css'

export default function MealCard({ meal, isRegenerating, onRegenerate }) {
  return (
    <div className={`meal-card ${isRegenerating ? 'meal-card-loading' : ''}`}>
      <div className="meal-card-top">
        <span className="meal-emoji">{meal.emoji}</span>
        <button
          className="meal-refresh"
          onClick={onRegenerate}
          disabled={isRegenerating}
          title="Regenerate this meal"
          type="button"
        >
          ↻
        </button>
      </div>
      <h3 className="meal-name">{meal.name}</h3>
      <p className="meal-desc">{meal.description}</p>
      <span className="meal-cal">{meal.calories} kcal</span>
    </div>
  )
}
