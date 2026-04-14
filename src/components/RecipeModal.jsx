import { useState } from 'react'
import { useStyletron } from 'baseui'
import { Modal, ModalHeader, ModalBody, ROLE, SIZE } from 'baseui/modal'
import { Checkbox, STYLE_TYPE } from 'baseui/checkbox'
import { Tag, KIND, HIERARCHY } from 'baseui/tag'

export default function RecipeModal({ meal, open, onClose }) {
  const [css, theme] = useStyletron()
  const [checkedIngredients, setCheckedIngredients] = useState({})

  if (!meal) return null

  const toggleIngredient = (index) => {
    setCheckedIngredients(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const handleClose = () => {
    setCheckedIngredients({})
    onClose()
  }

  return (
    <Modal
      isOpen={open}
      onClose={handleClose}
      role={ROLE.dialog}
      size={SIZE.default}
      closeable
      animate
      autoFocus
    >
      <ModalHeader>
        <div className={css({ fontSize: '2.5rem', lineHeight: 1, marginBottom: theme.sizing.scale500 })}>{meal.emoji}</div>
        <div className={css({
          ...theme.typography.HeadingSmall,
          marginBottom: theme.sizing.scale300,
        })}>
          {meal.name}
        </div>
        <div className={css({
          ...theme.typography.ParagraphMedium,
          color: theme.colors.contentSecondary,
          marginBottom: theme.sizing.scale600,
        })}>
          {meal.description}
        </div>

        {/* Meta tags */}
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: theme.sizing.scale300 })}>
          <Tag closeable={false} kind={KIND.accent}>
            {meal.calories} kcal
          </Tag>
          {meal.prepTime != null && (
            <Tag closeable={false} kind={KIND.neutral} hierarchy={HIERARCHY.secondary}>
              {meal.prepTime}m prep
            </Tag>
          )}
          {meal.cookTime != null && (
            <Tag closeable={false} kind={KIND.neutral} hierarchy={HIERARCHY.secondary}>
              {meal.cookTime}m cook
            </Tag>
          )}
          {meal.servingSize && (
            <Tag closeable={false} kind={KIND.neutral} hierarchy={HIERARCHY.secondary}>
              {meal.servingSize}
            </Tag>
          )}
        </div>
      </ModalHeader>

      <ModalBody>
        {/* Ingredients */}
        {meal.ingredients && meal.ingredients.length > 0 && (
          <div className={css({ paddingBottom: theme.sizing.scale800 })}>
            <div className={css({
              ...theme.typography.LabelMedium,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: theme.colors.contentPrimary,
              marginBottom: theme.sizing.scale500,
            })}>
              Ingredients
            </div>
            <ul className={css({ listStyle: 'none', padding: 0, margin: 0 })}>
              {meal.ingredients.map((ingredient, i) => (
                <li
                  key={i}
                  onClick={() => toggleIngredient(i)}
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.sizing.scale100,
                    paddingTop: theme.sizing.scale100,
                    paddingBottom: theme.sizing.scale100,
                    cursor: 'pointer',
                    borderRadius: theme.borders.radius200,
                    marginLeft: `-${theme.sizing.scale300}`,
                    marginRight: `-${theme.sizing.scale300}`,
                    paddingLeft: theme.sizing.scale300,
                    paddingRight: theme.sizing.scale300,
                    ':hover': {
                      backgroundColor: theme.colors.backgroundSecondary,
                    },
                  })}
                >
                  <Checkbox
                    checked={!!checkedIngredients[i]}
                    onChange={() => toggleIngredient(i)}
                    checkmarkType={STYLE_TYPE.toggle_round}
                    overrides={{
                      Root: {
                        style: { paddingLeft: 0 },
                      },
                    }}
                  />
                  <span className={css({
                    ...theme.typography.ParagraphSmall,
                    color: checkedIngredients[i] ? theme.colors.contentTertiary : theme.colors.contentPrimary,
                    textDecoration: checkedIngredients[i] ? 'line-through' : 'none',
                    transition: 'all 0.15s ease',
                  })}>
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <hr className={css({ border: 'none', borderTop: `1px solid ${theme.colors.borderOpaque}`, margin: 0 })} />

        {/* Instructions */}
        {meal.instructions && meal.instructions.length > 0 && (
          <div className={css({ paddingTop: theme.sizing.scale800, paddingBottom: theme.sizing.scale900 })}>
            <div className={css({
              ...theme.typography.LabelMedium,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: theme.colors.contentPrimary,
              marginBottom: theme.sizing.scale600,
            })}>
              Instructions
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', gap: theme.sizing.scale600 })}>
              {meal.instructions.map((step, i) => (
                <div key={i} className={css({ display: 'flex', gap: theme.sizing.scale500 })}>
                  <div className={css({
                    width: '28px',
                    height: '28px',
                    minWidth: '28px',
                    borderRadius: '50%',
                    backgroundColor: theme.colors.backgroundSecondary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '1px',
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
      </ModalBody>
    </Modal>
  )
}
