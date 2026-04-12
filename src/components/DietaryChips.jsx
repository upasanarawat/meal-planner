import './DietaryChips.css'

const DIETS = [
  { id: 'vegetarian', label: 'Vegetarian', icon: '🥬' },
  { id: 'vegan', label: 'Vegan', icon: '🌱' },
  { id: 'keto', label: 'Keto', icon: '🥑' },
  { id: 'gluten-free', label: 'Gluten-Free', icon: '🌾' },
  { id: 'dairy-free', label: 'Dairy-Free', icon: '🥛' },
  { id: 'high-protein', label: 'High Protein', icon: '💪' },
  { id: 'low-carb', label: 'Low Carb', icon: '📉' },
  { id: 'mediterranean', label: 'Mediterranean', icon: '🫒' },
]

export default function DietaryChips({ selected, onChange }) {
  const toggle = (id) => {
    onChange(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  return (
    <div className="chips-container">
      <span className="chips-label">Dietary Preferences</span>
      <div className="chips">
        {DIETS.map(diet => (
          <button
            key={diet.id}
            className={`chip ${selected.includes(diet.id) ? 'chip-active' : ''}`}
            onClick={() => toggle(diet.id)}
            type="button"
          >
            <span className="chip-icon">{diet.icon}</span>
            {diet.label}
          </button>
        ))}
      </div>
    </div>
  )
}
