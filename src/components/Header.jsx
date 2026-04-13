import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
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
    <AppBar position="static" sx={{ bgcolor: 'primary.dark' }}>
      <Toolbar sx={{ maxWidth: 'xl', width: '100%', mx: 'auto', px: { xs: 2, md: 4 }, py: 1, flexWrap: 'wrap', gap: 1 }}>
        {/* Brand */}
        <Box sx={{ flexGrow: 1, minWidth: 180 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'white', lineHeight: 1.1 }}>
            My Meal Planner
          </Typography>
          <Typography variant="caption" sx={{ color: 'secondary.main', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Your weekly meal planner
          </Typography>
        </Box>

        {/* Calorie selector */}
        <Button
          onClick={(e) => setAnchorEl(e.currentTarget)}
          startIcon={<LocalFireDepartmentIcon />}
          endIcon={<ArrowDropDownIcon />}
          sx={{
            color: 'white',
            border: '1.5px solid rgba(255,255,255,0.2)',
            borderRadius: 2,
            px: 2,
            py: 1,
            textAlign: 'left',
            '&:hover': { borderColor: 'rgba(255,255,255,0.4)', bgcolor: 'rgba(255,255,255,0.08)' },
          }}
        >
          <Box>
            <Typography variant="caption" sx={{ color: 'secondary.main', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', lineHeight: 1.2 }}>
              Daily Goal
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
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
        >
          {CALORIE_OPTIONS.map(opt => (
            <MenuItem
              key={String(opt.value)}
              selected={calorieTarget === opt.value}
              onClick={() => { onCalorieTargetChange(opt.value); setAnchorEl(null) }}
            >
              {opt.label}
              {calorieTarget === opt.value && (
                <ListItemIcon sx={{ ml: 2, minWidth: 'auto' }}>
                  <CheckIcon fontSize="small" color="primary" />
                </ListItemIcon>
              )}
            </MenuItem>
          ))}
        </Menu>

        {/* Generate button */}
        <Button
          variant="contained"
          onClick={onGenerate}
          disabled={loading}
          startIcon={<AutoAwesomeIcon />}
          sx={{
            bgcolor: 'white',
            color: 'primary.dark',
            fontWeight: 700,
            px: { xs: 2, md: 3 },
            py: 1,
            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
            '&:disabled': { bgcolor: 'rgba(255,255,255,0.4)' },
          }}
        >
          {loading ? 'Generating...' : hasPlan ? 'Regenerate' : 'Generate Plan'}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
