import './Header.css'

export default function Header({ weeklyCalories, hasPlan }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <h1 className="header-title">Mise en Place</h1>
          <p className="header-subtitle">Your weekly meal planner</p>
        </div>
        {hasPlan && (
          <div className="header-stats">
            <span className="stat-label">Weekly Total</span>
            <span className="stat-value">{weeklyCalories.toLocaleString()} kcal</span>
          </div>
        )}
      </div>
    </header>
  )
}
