import { useState, useRef, useEffect } from 'react'
import './Header.css'

const CALORIE_OPTIONS = [
  { value: null, label: 'No limit' },
  { value: 1200, label: '1,200 kcal' },
  { value: 1500, label: '1,500 kcal' },
  { value: 1800, label: '1,800 kcal' },
  { value: 2000, label: '2,000 kcal' },
  { value: 2500, label: '2,500 kcal' },
  { value: 3000, label: '3,000 kcal' },
]

export default function Header({ weeklyCalories, hasPlan, calorieTarget, onCalorieTargetChange }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const activeLabel = calorieTarget
    ? `${calorieTarget.toLocaleString()} kcal/day`
    : 'No limit'

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <h1 className="header-title">Mise en Place</h1>
          <p className="header-subtitle">Your weekly meal planner</p>
        </div>

        <div className="header-right">
          {hasPlan && (
            <div className="header-stats">
              <span className="stat-label">Weekly Total</span>
              <span className="stat-value">{weeklyCalories.toLocaleString()} kcal</span>
            </div>
          )}

          <div className="calorie-selector" ref={menuRef}>
            <button
              className="calorie-btn"
              onClick={() => setOpen(o => !o)}
              type="button"
            >
              <span className="calorie-btn-icon">🔥</span>
              <span className="calorie-btn-text">
                <span className="calorie-btn-label">Daily Goal</span>
                <span className="calorie-btn-value">{activeLabel}</span>
              </span>
              <span className={`calorie-btn-arrow ${open ? 'calorie-btn-arrow-open' : ''}`}>▾</span>
            </button>

            {open && (
              <div className="calorie-menu">
                {CALORIE_OPTIONS.map(opt => (
                  <button
                    key={String(opt.value)}
                    className={`calorie-option ${calorieTarget === opt.value ? 'calorie-option-active' : ''}`}
                    onClick={() => {
                      onCalorieTargetChange(opt.value)
                      setOpen(false)
                    }}
                    type="button"
                  >
                    {opt.label}
                    {calorieTarget === opt.value && <span className="calorie-check">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
