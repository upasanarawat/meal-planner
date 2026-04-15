import { useStyletron } from 'baseui'
import { Modal, ModalHeader, ModalBody, ROLE, SIZE } from 'baseui/modal'
import { Tag, KIND, HIERARCHY } from 'baseui/tag'

export default function RecipeModal({ meal, open, onClose }) {
  const [css, theme] = useStyletron()

  if (!meal) return null

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
            overflowY: 'auto',
            '@media screen and (min-width: 768px)': {
              alignItems: 'flex-start',
              paddingTop: theme.sizing.scale600,
            },
          },
        },
        Dialog: {
          style: {
            width: '100vw',
            maxWidth: '100vw',
            maxHeight: '92vh',
            overflowY: 'auto',
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
      }}
    >
      <ModalHeader>
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
          '@media screen and (min-width: 768px)': {
            ...theme.typography.HeadingSmall,
          },
        })}>
          {meal.name}
        </div>
        <div className={css({
          ...theme.typography.ParagraphSmall,
          color: theme.colors.contentSecondary,
          marginBottom: theme.sizing.scale500,
          '@media screen and (min-width: 768px)': {
            ...theme.typography.ParagraphMedium,
            color: theme.colors.contentSecondary,
            marginBottom: theme.sizing.scale600,
          },
        })}>
          {meal.description}
        </div>

        {/* Meta tags */}
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: theme.sizing.scale200 })}>
          <Tag closeable={false} kind={KIND.accent} size="small">
            {meal.calories} kcal
          </Tag>
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
          {meal.servingSize && (
            <Tag closeable={false} kind={KIND.neutral} hierarchy={HIERARCHY.secondary} size="small">
              {meal.servingSize}
            </Tag>
          )}
        </div>
      </ModalHeader>

      <ModalBody>
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
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        )}

        <hr className={css({ border: 'none', borderTop: `1px solid ${theme.colors.borderOpaque}`, margin: 0 })} />

        {/* Instructions */}
        {meal.instructions && meal.instructions.length > 0 && (
          <div className={css({ paddingTop: theme.sizing.scale700, paddingBottom: theme.sizing.scale800 })}>
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
      </ModalBody>
    </Modal>
  )
}
