import { useStyletron } from 'baseui'
import { Button, SIZE as BTN_SIZE, KIND as BTN_KIND } from 'baseui/button'
import { StatefulPopover, PLACEMENT } from 'baseui/popover'
import { StatefulMenu } from 'baseui/menu'
import ChevronDown from 'baseui/icon/chevron-down'
import Check from 'baseui/icon/check'

const CALORIE_OPTIONS = [
  { value: null, label: 'No limit' },
  { value: 1200, label: '1,200 kcal' },
  { value: 1500, label: '1,500 kcal' },
  { value: 1800, label: '1,800 kcal' },
  { value: 2000, label: '2,000 kcal' },
  { value: 2500, label: '2,500 kcal' },
  { value: 3000, label: '3,000 kcal' },
]

export default function Header({ calorieTarget, onCalorieTargetChange, onGenerate, loading, hasPlan, user, onLogout }) {
  const [css, theme] = useStyletron()

  const activeLabel = calorieTarget
    ? `${calorieTarget.toLocaleString()} kcal/day`
    : 'No limit'

  return (
    <header className={css({
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: theme.colors.backgroundPrimary,
      borderBottom: `1px solid ${theme.colors.borderOpaque}`,
    })}>
      <div className={css({
        maxWidth: '1536px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: theme.sizing.scale300,
        paddingTop: theme.sizing.scale400,
        paddingBottom: theme.sizing.scale400,
        paddingLeft: theme.sizing.scale500,
        paddingRight: theme.sizing.scale500,
        '@media screen and (min-width: 768px)': {
          paddingLeft: theme.sizing.scale600,
          paddingRight: theme.sizing.scale600,
        },
        '@media screen and (min-width: 1024px)': {
          paddingLeft: theme.sizing.scale900,
          paddingRight: theme.sizing.scale900,
        },
      })}>
        {/* Brand */}
        <div className={css({ flexGrow: 1, minWidth: 0 })}>
          <div className={css({
            ...theme.typography.HeadingXSmall,
            '@media screen and (min-width: 768px)': {
              ...theme.typography.HeadingSmall,
            },
          })}>
            My Meal Planner
          </div>
        </div>

        {/* Calorie selector */}
        <StatefulPopover
          placement={PLACEMENT.bottomRight}
          content={({ close }) => (
            <StatefulMenu
              items={CALORIE_OPTIONS.map(opt => ({
                label: (
                  <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' })}>
                    <span>{opt.label}</span>
                    {calorieTarget === opt.value && (
                      <Check size={16} color={theme.colors.contentPositive} />
                    )}
                  </div>
                ),
                value: opt.value,
              }))}
              onItemSelect={({ item }) => {
                onCalorieTargetChange(item.value)
                close()
              }}
            />
          )}
        >
          <Button
            kind="secondary"
            size={BTN_SIZE.compact}
            endEnhancer={() => <ChevronDown size={18} />}
          >
            <div className={css({ textAlign: 'left' })}>
              <div className={css({
                ...theme.typography.LabelXSmall,
                color: theme.colors.contentTertiary,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              })}>
                Daily Goal
              </div>
              <div className={css({
                ...theme.typography.LabelSmall,
                color: theme.colors.contentPrimary,
              })}>
                {activeLabel}
              </div>
            </div>
          </Button>
        </StatefulPopover>

        {/* Generate button */}
        <Button
          onClick={onGenerate}
          disabled={loading}
          isLoading={loading}
          size={BTN_SIZE.compact}
        >
          {loading ? 'Generating...' : hasPlan ? 'Regenerate' : 'Generate Plan'}
        </Button>

        {/* User profile */}
        {user && (
          <StatefulPopover
            placement={PLACEMENT.bottomRight}
            content={({ close }) => (
              <div className={css({
                padding: theme.sizing.scale600,
                minWidth: '200px',
              })}>
                <div className={css({
                  ...theme.typography.LabelMedium,
                  color: theme.colors.contentPrimary,
                  marginBottom: theme.sizing.scale100,
                })}>
                  {user.displayName}
                </div>
                <div className={css({
                  ...theme.typography.ParagraphXSmall,
                  color: theme.colors.contentTertiary,
                  marginBottom: theme.sizing.scale500,
                })}>
                  {user.email}
                </div>
                <Button
                  kind={BTN_KIND.secondary}
                  size={BTN_SIZE.compact}
                  onClick={() => { close(); onLogout() }}
                  overrides={{
                    BaseButton: { style: { width: '100%' } },
                  }}
                >
                  Sign out
                </Button>
              </div>
            )}
          >
            <button className={css({
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: `2px solid ${theme.colors.borderOpaque}`,
              padding: 0,
              cursor: 'pointer',
              overflow: 'hidden',
              backgroundColor: theme.colors.backgroundSecondary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'border-color 0.2s',
              ':hover': {
                borderColor: theme.colors.borderAccent,
              },
            })}>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt=""
                  referrerPolicy="no-referrer"
                  className={css({ width: '100%', height: '100%', objectFit: 'cover' })}
                />
              ) : (
                <span className={css({ ...theme.typography.LabelSmall, color: theme.colors.contentSecondary })}>
                  {(user.displayName || user.email || '?')[0].toUpperCase()}
                </span>
              )}
            </button>
          </StatefulPopover>
        )}
      </div>
    </header>
  )
}
