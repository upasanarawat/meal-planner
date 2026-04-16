import { useStyletron } from 'baseui'
import { Button, SIZE as BTN_SIZE, KIND as BTN_KIND } from 'baseui/button'
import { StatefulPopover, PLACEMENT } from 'baseui/popover'
import { StatefulMenu } from 'baseui/menu'
import { Avatar } from 'baseui/avatar'
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation'
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
    <HeaderNavigation overrides={{
      Root: {
        style: {
          position: 'sticky',
          top: 0,
          zIndex: 100,
          paddingTop: theme.sizing.scale300,
          paddingBottom: theme.sizing.scale300,
        },
      },
    }}>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <span className={css({ ...theme.typography.HeadingSmall })}>
            My Meal Planner
          </span>
        </StyledNavigationItem>
      </StyledNavigationList>

      <StyledNavigationList $align={ALIGN.center} />

      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StatefulPopover
            placement={PLACEMENT.bottomRight}
            content={({ close }) => (
              <StatefulMenu
                items={CALORIE_OPTIONS.map(opt => ({
                  label: (
                    <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' })}>
                      <span>{opt.label}</span>
                      {calorieTarget === opt.value && <Check size={16} color={theme.colors.contentPositive} />}
                    </div>
                  ),
                  value: opt.value,
                }))}
                onItemSelect={({ item }) => { onCalorieTargetChange(item.value); close() }}
              />
            )}
          >
            <Button kind={BTN_KIND.secondary} size={BTN_SIZE.compact} endEnhancer={() => <ChevronDown size={18} />}>
              <div className={css({ textAlign: 'left' })}>
                <div className={css({ ...theme.typography.LabelXSmall, color: theme.colors.contentTertiary, textTransform: 'uppercase', letterSpacing: '0.06em' })}>
                  Daily Goal
                </div>
                <div className={css({ ...theme.typography.LabelSmall, color: theme.colors.contentPrimary })}>
                  {activeLabel}
                </div>
              </div>
            </Button>
          </StatefulPopover>
        </StyledNavigationItem>

        <StyledNavigationItem>
          <Button onClick={onGenerate} disabled={loading} isLoading={loading} size={BTN_SIZE.compact}>
            {loading ? 'Generating...' : hasPlan ? 'Regenerate' : 'Generate Plan'}
          </Button>
        </StyledNavigationItem>

        {user && (
          <StyledNavigationItem>
            <StatefulPopover
              placement={PLACEMENT.bottomRight}
              content={({ close }) => (
                <div className={css({ padding: theme.sizing.scale600, minWidth: '200px' })}>
                  <div className={css({ ...theme.typography.LabelMedium, color: theme.colors.contentPrimary, marginBottom: theme.sizing.scale100 })}>
                    {user.displayName}
                  </div>
                  <div className={css({ ...theme.typography.ParagraphXSmall, color: theme.colors.contentTertiary, marginBottom: theme.sizing.scale600 })}>
                    {user.email}
                  </div>
                  <Button kind={BTN_KIND.tertiary} size={BTN_SIZE.compact} onClick={() => { close(); onLogout() }}
                    overrides={{ BaseButton: { style: { width: '100%' } } }}>
                    Sign out
                  </Button>
                </div>
              )}
            >
              <div className={css({ cursor: 'pointer' })}>
                <Avatar
                  name={user.displayName || user.email || '?'}
                  src={user.photoURL || undefined}
                  size="scale900"
                />
              </div>
            </StatefulPopover>
          </StyledNavigationItem>
        )}
      </StyledNavigationList>
    </HeaderNavigation>
  )
}
