import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CachedIcon from '@mui/icons-material/Cached'
import Skeleton from '@mui/material/Skeleton'

export function MealCardSkeleton() {
  return (
    <Card variant="outlined" sx={{ height: 160 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 1.5, '&:last-child': { pb: 1.5 } }}>
        <Skeleton variant="circular" width={32} height={32} />
        <Skeleton variant="text" width="80%" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" width="100%" sx={{ fontSize: '0.75rem' }} />
        <Skeleton variant="text" width="50%" sx={{ fontSize: '0.75rem' }} />
      </CardContent>
    </Card>
  )
}

export default function MealCard({ meal, isRegenerating, onRegenerate }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: 160,
        position: 'relative',
        overflow: 'hidden',
        opacity: isRegenerating ? 0.5 : 1,
        transition: 'all 0.2s ease',
        '&:hover': { boxShadow: 3 },
        '&:hover .refresh-btn': { opacity: 1 },
      }}
    >
      {isRegenerating && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
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
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, p: 1.5, '&:last-child': { pb: 1.5 }, height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1.5rem', lineHeight: 1 }}>{meal.emoji}</Typography>
          <IconButton
            className="refresh-btn"
            size="small"
            onClick={onRegenerate}
            disabled={isRegenerating}
            sx={{
              opacity: 0,
              transition: 'opacity 0.15s ease',
              bgcolor: 'action.hover',
              '&:hover': { bgcolor: 'primary.main', color: 'white' },
            }}
          >
            <CachedIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography variant="h6" sx={{ fontSize: '0.9rem', lineHeight: 1.2, mt: 0.25 }}>
          {meal.name}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            flex: 1,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.4,
          }}
        >
          {meal.description}
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 600, color: 'primary.main' }}>
          {meal.calories} kcal
        </Typography>
      </CardContent>
    </Card>
  )
}
