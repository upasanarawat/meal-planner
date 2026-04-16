import { useState, useEffect } from 'react'
import { useStyletron } from 'baseui'
import { Modal, ROLE, SIZE } from 'baseui/modal'
import { Button, KIND as BTN_KIND, SIZE as BTN_SIZE, SHAPE } from 'baseui/button'
import { Tag, KIND, HIERARCHY } from 'baseui/tag'

function scaleIngredient(ingredient, multiplier) {
  if (multiplier === 1) return ingredient
  return ingredient.replace(/(\d+\.?\d*)(\/(\d+\.?\d*))?/g, (match, whole, _, denom) => {
    const num = denom ? parseFloat(whole) / parseFloat(denom) : parseFloat(whole)
    const scaled = num * multiplier
    if (Number.isInteger(scaled)) return String(scaled)
    return scaled.toFixed(1).replace(/\.0$/, '')
  })
}

export default function RecipeModal({ meal, open, onClose }) {
  const [css, theme] = useStyletron()
  const [servings, setServings] = useState(1)

  const baseServings = parseInt(meal?.servingSize) || 1

  useEffect(() => {
    if (open && meal) setServings(baseServings)
  }, [open, meal, baseServings])

  if (!meal) return null

  const multiplier = servings / baseServings
  const totalCal = Math.round(meal.calories * multiplier)
  const perServingCal = Math.round(meal.calories / baseServings)

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      role={ROLE.dialog}
      size={SIZE.default}
      closeable
      animate
      autoFocus
      overrides={{
        Root: {
          style: {
            zIndex: 200,
          },
        },
        DialogContainer: {
          style: {
            alignItems: 'flex-end',
            paddingTop: 0,
            '@media screen and (min-width: 768px)': {
              alignItems: 'flex-start',
              paddingTop: theme.sizing.scale600,
            },
          },
        },
        Dialog: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            width: '100vw',
            maxWidth: '100vw',
            maxHeight: '92vh',
            borderTopLeftRadius: theme.borders.radius400,
            borderTopRightRadius: theme.borders.radius400,
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
            marginLeft: '0',
            marginRight: '0',
            marginTop: '0',
            marginBottom: '0',
            '@media screen and (min-width: 768px)': {
              width: '90vw',
              maxWidth: '560px',
              maxHeight: 'calc(100vh - 32px)',
              borderTopLeftRadius: theme.borders.radius400,
              borderTopRightRadius: theme.borders.radius400,
              borderBottomLeftRadius: theme.borders.radius400,
              borderBottomRightRadius: theme.borders.radius400,
              marginLeft: 'auto',
              marginRight: 'auto',
            },
          },
        },
        Close: {
          style: {
            zIndex: 10,
          },
        },
      }}
    >
      {/* Fixed header — does not scroll */}
      <div className={css({
        flexShrink: 0,
        backgroundColor: theme.colors.backgroundPrimary,
        paddingTop: theme.sizing.scale700,
        paddingBottom: theme.sizing.scale600,
        paddingLeft: theme.sizing.scale700,
        paddingRight: theme.sizing.scale700,
        borderBottom: `1px solid ${theme.colors.borderOpaque}`,
        '@media screen and (min-width: 768px)': {
          paddingTop: theme.sizing.scale800,
          paddingLeft: theme.sizing.scale800,
          paddingRight: theme.sizing.scale800,
        },
      })}>
        <div className={css({
          fontSize: '2rem',
          lineHeight: 1,
          marginBottom: theme.sizing.scale400,
          '@media screen and (min-width: 768px)': {
            fontSize: '2.5rem',
            marginBottom: theme.sizing.scale500,
          },
        })}>{meal.emoji}</div>
        <div className={css({
          ...theme.typography.HeadingXSmall,
          marginBottom: theme.sizing.scale300,
          paddingRight: theme.sizing.scale900,
          '@media screen and (min-width: 768px)': {
            ...theme.typography.HeadingSmall,
          },
        })}>
          {meal.name}
        </div>
        <div className={css({
          ...theme.typography.ParagraphSmall,
          color: theme.colors.contentSecondary,
          paddingRight: theme.sizing.scale600,
          '@media screen and (min-width: 768px)': {
            ...theme.typography.ParagraphMedium,
            color: theme.colors.contentSecondary,
          },
        })}>
          {meal.description}
        </div>
      </div>

      {/* Scrollable body */}
      <div className={css({
        flex: 1,
        overflowY: 'auto',
        paddingLeft: theme.sizing.scale700,
        paddingRight: theme.sizing.scale700,
        paddingBottom: theme.sizing.scale800,
        '@media screen and (min-width: 768px)': {
          paddingLeft: theme.sizing.scale800,
          paddingRight: theme.sizing.scale800,
        },
      })}>
        {/* Servings counter */}
        <div className={css({
          display: 'flex',
          alignItems: 'center',
          gap: theme.sizing.scale400,
          paddingTop: theme.sizing.scale600,
          marginBottom: theme.sizing.scale400,
        })}>
          <span className={css({
            ...theme.typography.LabelSmall,
            color: theme.colors.contentPrimary,
          })}>
            Servings:
          </span>
          <div className={css({
            display: 'flex',
            alignItems: 'center',
            gap: theme.sizing.scale200,
          })}>
            <Button
              kind={BTN_KIND.secondary}
              size={BTN_SIZE.mini}
              shape={SHAPE.circle}
              onClick={() => setServings(s => Math.max(1, s - 1))}
              disabled={servings <= 1}
            >
              −
            </Button>
            <span className={css({
              ...theme.typography.LabelMedium,
              color: theme.colors.contentPrimary,
              minWidth: '24px',
              textAlign: 'center',
            })}>
              {servings}
            </span>
            <Button
              kind={BTN_KIND.secondary}
              size={BTN_SIZE.mini}
              shape={SHAPE.circle}
              onClick={() => setServings(s => s + 1)}
            >
              +
            </Button>
          </div>
        </div>

        {/* Calorie summary */}
        <div className={css({
          ...theme.typography.ParagraphSmall,
          color: theme.colors.contentSecondary,
          marginBottom: theme.sizing.scale500,
        })}>
          {totalCal} kcal total · {perServingCal} kcal per serving
        </div>

        {/* Meta tags */}
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: theme.sizing.scale200, marginBottom: theme.sizing.scale700 })}>
          {meal.prepTime != null && (
            <Tag closeable={false} kind={KIND.neutral} hierarchy={HIERARCHY.secondary} size="small">
              {meal.prepTime}m prep
            </Tag>
          )}
          {meal.cookTime != null && (
            <Tag closeable={false} kind={KIND.neutral} hierarchy={HIERARCHY.secondary} size="small">
              {meal.cookTime}m cook
            </Tag>
          )}
        </div>

        {/* Ingredients */}
        {meal.ingredients && meal.ingredients.length > 0 && (
          <div className={css({ paddingBottom: theme.sizing.scale700 })}>
            <div className={css({
              ...theme.typography.LabelSmall,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: theme.colors.contentPrimary,
              marginBottom: theme.sizing.scale400,
              '@media screen and (min-width: 768px)': {
                ...theme.typography.LabelMedium,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: theme.sizing.scale500,
              },
            })}>
              Ingredients
            </div>
            <ul className={css({
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: theme.sizing.scale200,
            })}>
              {meal.ingredients.map((ingredient, i) => (
                <li
                  key={i}
                  className={css({
                    ...theme.typography.ParagraphSmall,
                    color: theme.colors.contentPrimary,
                    paddingLeft: theme.sizing.scale500,
                    position: 'relative',
                    '::before': {
                      content: '"•"',
                      position: 'absolute',
                      left: 0,
                      color: theme.colors.contentTertiary,
                    },
                  })}
                >
                  {scaleIngredient(ingredient, multiplier)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <hr className={css({ border: 'none', borderTop: `1px solid ${theme.colors.borderOpaque}`, margin: 0 })} />

        {/* Instructions */}
        {meal.instructions && meal.instructions.length > 0 && (
          <div className={css({ paddingTop: theme.sizing.scale700 })}>
            <div className={css({
              ...theme.typography.LabelSmall,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: theme.colors.contentPrimary,
              marginBottom: theme.sizing.scale500,
              '@media screen and (min-width: 768px)': {
                ...theme.typography.LabelMedium,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: theme.sizing.scale600,
              },
            })}>
              Instructions
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', gap: theme.sizing.scale500 })}>
              {meal.instructions.map((step, i) => (
                <div key={i} className={css({ display: 'flex', gap: theme.sizing.scale400 })}>
                  <div className={css({
                    width: '24px',
                    height: '24px',
                    minWidth: '24px',
                    borderRadius: '50%',
                    backgroundColor: theme.colors.backgroundSecondary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                    '@media screen and (min-width: 768px)': {
                      width: '28px',
                      height: '28px',
                      minWidth: '28px',
                    },
                  })}>
                    <span className={css({ ...theme.typography.LabelXSmall, color: theme.colors.contentAccent })}>
                      {i + 1}
                    </span>
                  </div>
                  <span className={css({
                    ...theme.typography.ParagraphSmall,
                    color: theme.colors.contentSecondary,
                    lineHeight: '1.6',
                    flex: 1,
                  })}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}
