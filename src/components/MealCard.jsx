import { useStyletron } from 'baseui'
import { Skeleton } from 'baseui/skeleton'
import { Tag, KIND } from 'baseui/tag'

export function MealCardSkeleton() {
  const [css, theme] = useStyletron()
  return (
    <div className={css({
      height: '168px',
      borderRadius: theme.borders.radius300,
      border: `1px solid ${theme.colors.borderOpaque}`,
      padding: theme.sizing.scale600,
      display: 'flex',
      flexDirection: 'column',
      gap: theme.sizing.scale300,
    })}>
      <Skeleton width="36px" height="36px" animation overrides={{ Root: { style: { borderRadius: '50%' } } }} />
      <Skeleton width="80%" height="16px" animation />
      <Skeleton width="100%" height="12px" animation />
      <Skeleton width="50%" height="12px" animation />
    </div>
  )
}

export default function MealCard({ meal, isRegenerating, onRegenerate, onClick }) {
  const [css, theme] = useStyletron()

  return (
    <div
      onClick={onClick}
      data-card="true"
      className={css({
        height: '168px',
        position: 'relative',
        overflow: 'hidden',
        opacity: isRegenerating ? 0.5 : 1,
        cursor: 'pointer',
        borderRadius: theme.borders.radius300,
        border: `1px solid ${theme.colors.borderOpaque}`,
        boxShadow: 'none',
        transition: 'box-shadow 0.2s ease-in-out',
        backgroundColor: theme.colors.backgroundPrimary,
        ':hover': {
          boxShadow: theme.lighting.shadow500,
        },
      })}
    >
      {isRegenerating && (
        <div className={css({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.5) 50%, transparent 75%)',
          backgroundSize: '200% 100%',
          animationName: {
            '0%': { backgroundPosition: '200% 0' },
            '100%': { backgroundPosition: '-200% 0' },
          },
          animationDuration: '1.5s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          zIndex: 1,
        })} />
      )}
      <div className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.sizing.scale100,
        padding: theme.sizing.scale600,
        height: '100%',
      })}>
        <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
          <span className={css({ fontSize: '1.5rem', lineHeight: 1 })}>{meal.emoji}</span>
          <button
            onClick={(e) => { e.stopPropagation(); onRegenerate() }}
            disabled={isRegenerating}
            data-refresh="true"
            className={css({
              opacity: 0,
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease-in-out',
              ...theme.typography.LabelSmall,
              color: theme.colors.contentTertiary,
              ':hover': {
                backgroundColor: theme.colors.backgroundAccent,
                color: theme.colors.contentOnColor,
                opacity: '1 !important',
              },
            })}
          >
            ↻
          </button>
        </div>
        <div className={css({
          ...theme.typography.LabelSmall,
          color: theme.colors.contentPrimary,
          marginTop: theme.sizing.scale100,
        })}>
          {meal.name}
        </div>
        <div className={css({
          flex: 1,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          ...theme.typography.ParagraphXSmall,
          color: theme.colors.contentSecondary,
        })}>
          {meal.description}
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
          <Tag closeable={false} kind={KIND.accent} size="small">
            {meal.calories} kcal
          </Tag>
          {meal.time && (
            <span className={css({ display: 'flex', alignItems: 'center', gap: '3px', color: theme.colors.contentTertiary, ...theme.typography.ParagraphXSmall })}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              {meal.time}m
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
