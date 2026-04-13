import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CachedIcon from '@mui/icons-material/Cached'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Skeleton from '@mui/material/Skeleton'

export function MealCardSkeleton() {
  return (
    <Card sx={{ height: 168 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2, '&:last-child': { pb: 2 } }}>
        <Skeleton variant="circular" width={36} height={36} />
        <Skeleton variant="text" width="80%" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" width="100%" sx={{ fontSize: '0.75rem' }} />
        <Skeleton variant="text" width="50%" sx={{ fontSize: '0.75rem' }} />
      </CardContent>
    </Card>
  )
}

export default function MealCard({ meal, isRegenerating, onRegenerate, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{
        height: 168,
        position: 'relative',
        overflow: 'hidden',
        opacity: isRegenerating ? 0.5 : 1,
        cursor: 'pointer',
        '&:hover .refresh-btn': { opacity: 1 },
      }}
    >
      {isRegenerating && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.5) 50%, transparent 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s ease-in-out infinite',
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '200% 0' },
              '100%': { backgroundPosition: '-200% 0' },
            },
            zIndex: 1,
          }}
        />
      )}
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, p: 2, '&:last-child': { pb: 2 }, height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1.5rem', lineHeight: 1 }}>{meal.emoji}</Typography>
          <IconButton
            className="refresh-btn"
            size="small"
            onClick={(e) => { e.stopPropagation(); onRegenerate() }}
            disabled={isRegenerating}
            sx={{
              opacity: 0,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(90deg, #D03660 0%, #D73B53 100%)',
                color: 'white',
              },
            }}
          >
            <CachedIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography variant="h3" sx={{ fontSize: '0.875rem', lineHeight: 1.3, mt: 0.5 }}>
          {meal.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            flex: 1,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.4,
            fontSize: '0.75rem',
          }}
        >
          {meal.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#D03660', fontSize: '0.75rem' }}>
            {meal.calories} kcal
          </Typography>
          {meal.time && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
              <AccessTimeIcon sx={{ fontSize: 12, color: 'text.secondary' }} />
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                {meal.time}m
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}
