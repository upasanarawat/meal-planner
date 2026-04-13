import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import CheckIcon from '@mui/icons-material/Check'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const CALORIE_OPTIONS = [
  { value: null, label: 'No limit' },
  { value: 1200, label: '1,200 kcal' },
  { value: 1500, label: '1,500 kcal' },
  { value: 1800, label: '1,800 kcal' },
  { value: 2000, label: '2,000 kcal' },
  { value: 2500, label: '2,500 kcal' },
  { value: 3000, label: '3,000 kcal' },
]

export default function Header({ calorieTarget, onCalorieTargetChange, onGenerate, loading, hasPlan }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const activeLabel = calorieTarget
    ? `${calorieTarget.toLocaleString()} kcal/day`
    : 'No limit'

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Toolbar sx={{ maxWidth: 'xl', width: '100%', mx: 'auto', px: { xs: 2, md: 4 }, py: 1.5, flexWrap: 'wrap', gap: 1 }}>
        {/* Brand */}
        <Box sx={{ flexGrow: 1, minWidth: 180 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
            My Meal Planner
          </Typography>
        </Box>

        {/* Calorie selector */}
        <Button
          onClick={(e) => setAnchorEl(e.currentTarget)}
          endIcon={<ArrowDropDownIcon />}
          sx={{
            color: 'text.primary',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '8px',
            px: 2,
            py: 1,
            textAlign: 'left',
            '&:hover': { borderColor: 'text.primary', bgcolor: 'transparent' },
          }}
        >
          <Box>
            <Typography variant="caption" sx={{ display: 'block', lineHeight: 1.2, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Daily Goal
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
              {activeLabel}
            </Typography>
          </Box>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          slotProps={{ paper: { sx: { borderRadius: '12px', mt: 1, boxShadow: '0 6px 20px rgba(0,0,0,0.12)' } } }}
        >
          {CALORIE_OPTIONS.map(opt => (
            <MenuItem
              key={String(opt.value)}
              selected={calorieTarget === opt.value}
              onClick={() => { onCalorieTargetChange(opt.value); setAnchorEl(null) }}
              sx={{ py: 1.5, px: 3 }}
            >
              {opt.label}
              {calorieTarget === opt.value && (
                <ListItemIcon sx={{ ml: 2, minWidth: 'auto' }}>
                  <CheckIcon fontSize="small" sx={{ color: '#D03660' }} />
                </ListItemIcon>
              )}
            </MenuItem>
          ))}
        </Menu>

        {/* Generate button */}
        <Button
          variant="contained"
          color="primary"
          onClick={onGenerate}
          disabled={loading}
          startIcon={<AutoAwesomeIcon />}
          sx={{ px: { xs: 2, md: 3 }, py: 1.2 }}
        >
          {loading ? 'Generating...' : hasPlan ? 'Regenerate' : 'Generate Plan'}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
