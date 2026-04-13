import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, width: '100%' }}>
      <Typography variant="subtitle2" color="text.secondary">
        Dietary Preferences
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
        {DIETS.map(diet => (
          <Chip
            key={diet.id}
            label={`${diet.icon} ${diet.label}`}
            variant={selected.includes(diet.id) ? 'filled' : 'outlined'}
            color={selected.includes(diet.id) ? 'primary' : 'default'}
            onClick={() => toggle(diet.id)}
            sx={{
              fontSize: '0.8rem',
              py: 2.2,
              px: 0.5,
              '& .MuiChip-label': { px: 1.5 },
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
