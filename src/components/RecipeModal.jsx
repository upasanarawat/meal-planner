import { useState } from 'react'
import { useStyletron } from 'baseui'
import { Modal, ModalBody, ROLE } from 'baseui/modal'
import { Checkbox, STYLE_TYPE } from 'baseui/checkbox'

export default function RecipeModal({ meal, open, onClose }) {
  const [css] = useStyletron()
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
      closeable
      animate
      autoFocus
      overrides={{
        Dialog: {
          style: {
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            maxWidth: '560px',
            width: '90vw',
            maxHeight: '85vh',
            overflow: 'auto',
            boxShadow: '0 24px 80px rgba(0,0,0,0.16)',
          },
        },
        Close: {
          style: {
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            backgroundColor: 'white',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            ':hover': {
              backgroundColor: '#F7F7F7',
            },
          },
        },
      }}
    >
      <ModalBody>
        {/* Header */}
        <div className={css({ paddingTop: '8px', paddingBottom: '16px' })}>
          <div className={css({ fontSize: '2.5rem', lineHeight: 1, marginBottom: '12px' })}>{meal.emoji}</div>
          <div className={css({
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#222222',
            lineHeight: 1.3,
            marginBottom: '8px',
            paddingRight: '40px',
          })}>
            {meal.name}
          </div>
          <div className={css({
            fontSize: '0.875rem',
            color: '#717171',
            lineHeight: 1.5,
            marginBottom: '16px',
          })}>
            {meal.description}
          </div>

          {/* Meta chips */}
          <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '12px' })}>
            <MetaChip label={`${meal.calories} kcal`} color="#D03660" />
            {meal.prepTime != null && (
              <MetaChip icon={<ClockIcon />} label={`${meal.prepTime}m prep`} />
            )}
            {meal.cookTime != null && (
              <MetaChip icon={<ClockIcon />} label={`${meal.cookTime}m cook`} />
            )}
            {meal.servingSize && <MetaChip label={meal.servingSize} />}
          </div>
        </div>

        <hr className={css({ border: 'none', borderTop: '1px solid #EBEBEB', margin: 0 })} />

        {/* Ingredients */}
        {meal.ingredients && meal.ingredients.length > 0 && (
          <div className={css({ paddingTop: '20px', paddingBottom: '20px' })}>
            <div className={css({
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#222222',
              marginBottom: '12px',
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
                    gap: '4px',
                    paddingTop: '4px',
                    paddingBottom: '4px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    marginLeft: '-8px',
                    marginRight: '-8px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    ':hover': {
                      backgroundColor: '#F7F7F7',
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
                      Checkmark: {
                        style: {
                          width: '18px',
                          height: '18px',
                          borderTopColor: checkedIngredients[i] ? '#D03660' : '#DDDDDD',
                          borderRightColor: checkedIngredients[i] ? '#D03660' : '#DDDDDD',
                          borderBottomColor: checkedIngredients[i] ? '#D03660' : '#DDDDDD',
                          borderLeftColor: checkedIngredients[i] ? '#D03660' : '#DDDDDD',
                          backgroundColor: checkedIngredients[i] ? '#D03660' : 'transparent',
                        },
                      },
                    }}
                  />
                  <span className={css({
                    fontSize: '0.875rem',
                    color: checkedIngredients[i] ? '#AAAAAA' : '#222222',
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

        <hr className={css({ border: 'none', borderTop: '1px solid #EBEBEB', margin: 0 })} />

        {/* Instructions */}
        {meal.instructions && meal.instructions.length > 0 && (
          <div className={css({ paddingTop: '20px', paddingBottom: '32px' })}>
            <div className={css({
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#222222',
              marginBottom: '16px',
            })}>
              Instructions
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
              {meal.instructions.map((step, i) => (
                <div key={i} className={css({ display: 'flex', gap: '12px' })}>
                  <div className={css({
                    width: '28px',
                    height: '28px',
                    minWidth: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#F7F7F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '1px',
                  })}>
                    <span className={css({ fontSize: '0.75rem', fontWeight: 700, color: '#D03660' })}>
                      {i + 1}
                    </span>
                  </div>
                  <span className={css({
                    fontSize: '0.875rem',
                    color: '#484848',
                    lineHeight: 1.6,
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

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  )
}

function MetaChip({ icon, label, color }) {
  const [css] = useStyletron()
  return (
    <span className={css({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      paddingLeft: '12px',
      paddingRight: '12px',
      paddingTop: '4px',
      paddingBottom: '4px',
      borderRadius: '100px',
      backgroundColor: color ? `${color}10` : '#F7F7F7',
      border: '1px solid',
      borderColor: color ? `${color}30` : '#EBEBEB',
    })}>
      {icon && <span className={css({ display: 'flex', color: color || '#717171' })}>{icon}</span>}
      <span className={css({ fontSize: '0.75rem', fontWeight: 600, color: color || '#484848' })}>
        {label}
      </span>
    </span>
  )
}
