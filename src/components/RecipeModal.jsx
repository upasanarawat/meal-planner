import { useState, useEffect } from 'react'
import { useStyletron } from 'baseui'
import { Modal, ModalHeader, ModalBody, ROLE, SIZE } from 'baseui/modal'
import { Block } from 'baseui/block'
import { Button, KIND as BTN_KIND, SIZE as BTN_SIZE } from 'baseui/button'
import { ButtonGroup } from 'baseui/button-group'
import { Tag, KIND, HIERARCHY } from 'baseui/tag'
import { ListItem, ListItemLabel } from 'baseui/list'

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
        Root: { style: { zIndex: 200 } },
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
        Close: { style: { zIndex: 10 } },
      }}
    >
      {/* Sticky header */}
      <Block
        display="flex"
        alignItems="center"
        padding={theme.sizing.scale600}
        $style={{
          flexShrink: 0,
          borderBottom: `1px solid ${theme.colors.borderOpaque}`,
          gap: theme.sizing.scale400,
        }}
      >
        <span className={css({ fontSize: '1.75rem', lineHeight: 1 })}>{meal.emoji}</span>
        <span className={css({ ...theme.typography.HeadingSmall, flex: 1, paddingRight: theme.sizing.scale900 })}>
          {meal.name}
        </span>
      </Block>

      {/* Scrollable body */}
      <Block flex="1" $style={{ overflowY: 'auto' }} padding={theme.sizing.scale600}>
        {/* Description */}
        <Block marginBottom={theme.sizing.scale600}>
          <span className={css({ ...theme.typography.ParagraphMedium, color: theme.colors.contentSecondary })}>
            {meal.description}
          </span>
        </Block>

        {/* Servings counter */}
        <Block display="flex" alignItems="center" gridGap={theme.sizing.scale300} marginBottom={theme.sizing.scale300}>
          <span className={css({ ...theme.typography.LabelMedium })}>Servings:</span>
          <ButtonGroup size={BTN_SIZE.mini} kind={BTN_KIND.secondary}>
            <Button onClick={() => setServings(s => Math.max(1, s - 1))} disabled={servings <= 1}>−</Button>
            <Button disabled overrides={{ BaseButton: { style: { cursor: 'default' } } }}>{servings}</Button>
            <Button onClick={() => setServings(s => s + 1)}>+</Button>
          </ButtonGroup>
        </Block>

        {/* Calorie summary */}
        <Block marginBottom={theme.sizing.scale600}>
          <span className={css({ ...theme.typography.ParagraphSmall, color: theme.colors.contentSecondary })}>
            {totalCal} kcal total · {perServingCal} kcal per serving
          </span>
        </Block>

        {/* Meta tags */}
        <Block display="flex" gridGap={theme.sizing.scale200} marginBottom={theme.sizing.scale600}>
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
        </Block>

        {/* Ingredients */}
        {meal.ingredients && meal.ingredients.length > 0 && (
          <Block marginBottom={theme.sizing.scale600}>
            <Block marginBottom={theme.sizing.scale300}>
              <span className={css({ ...theme.typography.LabelMedium, textTransform: 'uppercase', letterSpacing: '0.06em' })}>
                Ingredients
              </span>
            </Block>
            <ul className={css({ listStyle: 'none', padding: 0, margin: 0 })}>
              {meal.ingredients.map((ingredient, i) => (
                <ListItem key={i} overrides={{ Root: { style: { paddingLeft: 0, paddingRight: 0 } } }}>
                  <ListItemLabel>{scaleIngredient(ingredient, multiplier)}</ListItemLabel>
                </ListItem>
              ))}
            </ul>
          </Block>
        )}

        {/* Instructions */}
        {meal.instructions && meal.instructions.length > 0 && (
          <Block>
            <Block marginBottom={theme.sizing.scale300}>
              <span className={css({ ...theme.typography.LabelMedium, textTransform: 'uppercase', letterSpacing: '0.06em' })}>
                Instructions
              </span>
            </Block>
            <ol className={css({ listStyle: 'none', padding: 0, margin: 0, counterReset: 'step' })}>
              {meal.instructions.map((step, i) => (
                <ListItem key={i}
                  artwork={() => (
                    <Block display="flex" alignItems="center" justifyContent="center"
                      width="28px" height="28px" $style={{ borderRadius: '50%', backgroundColor: theme.colors.backgroundSecondary, flexShrink: 0 }}>
                      <span className={css({ ...theme.typography.LabelXSmall, color: theme.colors.contentAccent })}>
                        {i + 1}
                      </span>
                    </Block>
                  )}
                  overrides={{ Root: { style: { paddingLeft: 0, paddingRight: 0, alignItems: 'flex-start' } } }}
                >
                  <ListItemLabel>
                    <span className={css({ ...theme.typography.ParagraphSmall, color: theme.colors.contentSecondary, lineHeight: '1.6' })}>
                      {step}
                    </span>
                  </ListItemLabel>
                </ListItem>
              ))}
            </ol>
          </Block>
        )}
      </Block>
    </Modal>
  )
}
