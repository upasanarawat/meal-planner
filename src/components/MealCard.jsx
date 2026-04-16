import { useStyletron } from 'baseui'
import { Card, StyledBody } from 'baseui/card'
import { Button, KIND, SIZE } from 'baseui/button'
import { Skeleton } from 'baseui/skeleton'
import { Block } from 'baseui/block'

const MEAL_COLORS = {
  breakfast: 'warning400',
  lunch: 'positive400',
  tea: 'accent200',
  dinner: 'accent400',
}

export function MealCardSkeleton({ mealType }) {
  const [css, theme] = useStyletron()
  return (
    <Block>
      <div className={css({ ...theme.typography.LabelXSmall, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.colors[MEAL_COLORS[mealType]] || theme.colors.contentTertiary, marginBottom: theme.sizing.scale200 })}>
        {mealType}
      </div>
      <Card overrides={{ Root: { style: { borderRadius: theme.borders.radius300 } } }}>
        <StyledBody>
          <Block display="flex" flexDirection="column" gridGap={theme.sizing.scale300}>
            <Skeleton width="60%" height="18px" animation />
            <Skeleton width="100%" height="14px" animation />
            <Skeleton width="40%" height="14px" animation />
          </Block>
        </StyledBody>
      </Card>
    </Block>
  )
}

export default function MealCard({ meal, mealType, isRegenerating, onRegenerate, onBan, onClick }) {
  const [css, theme] = useStyletron()

  const baseServings = parseInt(meal.servingSize) || 1
  const perServingCal = Math.round(meal.calories / baseServings)
  const color = theme.colors[MEAL_COLORS[mealType]] || theme.colors.contentAccent

  return (
    <Block>
      <div className={css({ ...theme.typography.LabelXSmall, textTransform: 'uppercase', letterSpacing: '0.08em', color, marginBottom: theme.sizing.scale200 })}>
        {mealType}
      </div>
      <div data-card="true" onClick={onClick} className={css({ cursor: 'pointer', opacity: isRegenerating ? 0.5 : 1, transition: 'opacity 0.2s' })}>
        <Card overrides={{
          Root: {
            style: {
              borderRadius: theme.borders.radius300,
              transition: 'box-shadow 0.2s',
              ':hover': { boxShadow: theme.lighting.shadow500 },
            },
          },
        }}>
          <StyledBody>
            <Block display="flex" alignItems="flex-start" justifyContent="space-between">
              <Block flex="1" minWidth="0">
                <Block display="flex" alignItems="center" gridGap={theme.sizing.scale300} marginBottom={theme.sizing.scale200}>
                  <span className={css({ fontSize: '1.5rem', lineHeight: 1 })}>{meal.emoji}</span>
                  <span className={css({ ...theme.typography.LabelLarge, color: theme.colors.contentPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' })}>
                    {meal.name}
                  </span>
                </Block>
                <div className={css({ ...theme.typography.ParagraphSmall, color: theme.colors.contentSecondary, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: theme.sizing.scale300 })}>
                  {meal.description}
                </div>
                <Block display="flex" alignItems="center" justifyContent="space-between">
                  <span className={css({ ...theme.typography.LabelSmall, color })}>
                    {perServingCal} kcal / serving
                  </span>
                  {meal.time && (
                    <span className={css({ ...theme.typography.ParagraphXSmall, color: theme.colors.contentTertiary })}>
                      {meal.time}m
                    </span>
                  )}
                </Block>
              </Block>
              <Block display="flex" flexDirection="column" gridGap={theme.sizing.scale100} marginLeft={theme.sizing.scale300}>
                <div data-refresh="true">
                  <Button kind={KIND.secondary} size={SIZE.mini}
                    onClick={(e) => { e.stopPropagation(); onRegenerate() }}
                    disabled={isRegenerating}
                    overrides={{ BaseButton: { style: { '@media screen and (min-width: 1024px)': { opacity: 0 }, '[data-card]:hover &': { opacity: 1 } } } }}
                  >
                    ↻
                  </Button>
                </div>
                <div data-refresh="true">
                  <Button kind={KIND.tertiary} size={SIZE.mini}
                    onClick={(e) => { e.stopPropagation(); onBan() }}
                    disabled={isRegenerating}
                    overrides={{ BaseButton: { style: { '@media screen and (min-width: 1024px)': { opacity: 0 }, '[data-card]:hover &': { opacity: 1 } } } }}
                  >
                    ✕
                  </Button>
                </div>
              </Block>
            </Block>
          </StyledBody>
        </Card>
      </div>
    </Block>
  )
}
