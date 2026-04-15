import { useState, useRef, useEffect, useCallback } from 'react'
import { useStyletron } from 'baseui'
import { Skeleton } from 'baseui/skeleton'
import { Tag, KIND } from 'baseui/tag'
import MealCard, { MealCardSkeleton } from './MealCard'
import RecipeModal from './RecipeModal'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const MEAL_TYPES = ['breakfast', 'lunch', 'tea', 'dinner']

export default function MealGrid({ plan, loading, todayIndex, regeneratingMeal, onRegenerateMeal, onBanMeal }) {
  const [css, theme] = useStyletron()
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [activeIndex, setActiveIndex] = useState(todayIndex)
  const scrollRef = useRef(null)
  const hasScrolledRef = useRef(false)

  // Scroll to today on first load / plan change
  useEffect(() => {
    if ((plan || loading) && scrollRef.current) {
      const el = scrollRef.current
      const children = el.children
      if (children[todayIndex]) {
        // Use instant scroll on initial load, smooth after
        const behavior = hasScrolledRef.current ? 'smooth' : 'instant'
        children[todayIndex].scrollIntoView({ behavior, inline: 'start', block: 'nearest' })
        hasScrolledRef.current = true
        setActiveIndex(todayIndex)
      }
    }
  }, [plan, loading, todayIndex])

  // Track which day is in view via scroll position
  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const scrollLeft = el.scrollLeft
    const childWidth = el.children[0]?.offsetWidth || 1
    const gap = 16
    const idx = Math.round(scrollLeft / (childWidth + gap))
    setActiveIndex(Math.min(Math.max(idx, 0), 6))
  }, [])

  const scrollTo = useCallback((index) => {
    const el = scrollRef.current
    if (!el || !el.children[index]) return
    el.children[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }, [])

  const goPrev = () => {
    // On desktop we show 3, so step back by 3; on mobile step by 1
    const isMobile = window.innerWidth < 1024
    const step = isMobile ? 1 : 3
    scrollTo(Math.max(0, activeIndex - step))
  }

  const goNext = () => {
    const isMobile = window.innerWidth < 1024
    const step = isMobile ? 1 : 3
    scrollTo(Math.min(6, activeIndex + step))
  }

  if (!plan && !loading) {
    return (
      <div className={css({
        textAlign: 'center',
        paddingTop: theme.sizing.scale1200,
        paddingBottom: theme.sizing.scale1200,
        color: theme.colors.contentSecondary,
      })}>
        <svg className={css({ marginBottom: theme.sizing.scale600, color: theme.colors.contentTertiary })} width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
        <div className={css({
          ...theme.typography.ParagraphMedium,
          maxWidth: '360px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme.sizing.scale600,
          paddingRight: theme.sizing.scale600,
        })}>
          Generate a weekly Indian meal plan to get started.
        </div>
      </div>
    )
  }

  return (
    <div className={css({ position: 'relative' })}>
      {/* Arrow buttons — desktop only */}
      <button
        onClick={goPrev}
        disabled={activeIndex === 0}
        className={css({
          display: 'none',
          '@media screen and (min-width: 1024px)': {
            display: 'flex',
          },
          position: 'absolute',
          left: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: `1px solid ${theme.colors.borderOpaque}`,
          backgroundColor: theme.colors.backgroundPrimary,
          boxShadow: theme.lighting.shadow500,
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          ...theme.typography.LabelLarge,
          color: activeIndex === 0 ? theme.colors.contentTertiary : theme.colors.contentPrimary,
          transition: 'opacity 0.2s',
          opacity: activeIndex === 0 ? 0.4 : 1,
          ':hover': {
            backgroundColor: theme.colors.backgroundSecondary,
          },
        })}
      >
        ‹
      </button>
      <button
        onClick={goNext}
        disabled={activeIndex >= 4}
        className={css({
          display: 'none',
          '@media screen and (min-width: 1024px)': {
            display: 'flex',
          },
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: `1px solid ${theme.colors.borderOpaque}`,
          backgroundColor: theme.colors.backgroundPrimary,
          boxShadow: theme.lighting.shadow500,
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          ...theme.typography.LabelLarge,
          color: activeIndex >= 4 ? theme.colors.contentTertiary : theme.colors.contentPrimary,
          transition: 'opacity 0.2s',
          opacity: activeIndex >= 4 ? 0.4 : 1,
          ':hover': {
            backgroundColor: theme.colors.backgroundSecondary,
          },
        })}
      >
        ›
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={css({
          display: 'flex',
          gap: theme.sizing.scale600,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          '::-webkit-scrollbar': { display: 'none' },
          paddingBottom: theme.sizing.scale300,
        })}
      >
        {DAYS.map((day, dayIndex) => {
          const dayData = plan?.days?.[dayIndex]
          const dailyCalories = dayData
            ? Object.values(dayData.meals).reduce((s, m) => s + m.calories, 0)
            : 0
          const isToday = dayIndex === todayIndex

          return (
            <div
              key={day}
              className={css({
                // Mobile: 1 day at a time (full width)
                flex: '0 0 100%',
                scrollSnapAlign: 'start',
                // Desktop: 3 days visible (calc with gap)
                '@media screen and (min-width: 1024px)': {
                  flex: '0 0 calc((100% - 32px) / 3)',
                },
              })}
            >
              <div
                className={css({
                  padding: theme.sizing.scale600,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: theme.sizing.scale400,
                  backgroundColor: isToday ? theme.colors.backgroundLightAccent : theme.colors.backgroundPrimary,
                  border: `${isToday ? '2px' : '1px'} solid`,
                  borderColor: isToday ? theme.colors.borderAccent : theme.colors.borderOpaque,
                  borderRadius: theme.borders.radius300,
                  height: '100%',
                })}
              >
                {/* Day header */}
                <div className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: theme.sizing.scale200,
                })}>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: theme.sizing.scale300 })}>
                    <span className={css({
                      ...theme.typography.HeadingXSmall,
                      color: theme.colors.contentPrimary,
                    })}>
                      {day}
                    </span>
                    {isToday && (
                      <Tag closeable={false} kind={KIND.accent} size="small">
                        Today
                      </Tag>
                    )}
                  </div>
                  {!loading && (
                    <span className={css({ ...theme.typography.LabelSmall, color: theme.colors.contentSecondary })}>
                      {dailyCalories.toLocaleString()} kcal
                    </span>
                  )}
                </div>

                {/* Meal cards — vertical stack */}
                <div className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: theme.sizing.scale400,
                  flex: 1,
                })}>
                  {MEAL_TYPES.map(mealType => {
                    const mealKey = `${dayIndex}-${mealType}`
                    const isRegenerating = regeneratingMeal === mealKey

                    if (loading) return <MealCardSkeleton key={mealType} />

                    const meal = dayData?.meals?.[mealType]
                    if (!meal) return null

                    return (
                      <MealCard
                        key={mealType}
                        meal={meal}
                        isRegenerating={isRegenerating}
                        onRegenerate={() => onRegenerateMeal(dayIndex, mealType)}
                        onBan={() => onBanMeal(dayIndex, mealType)}
                        onClick={() => setSelectedMeal(meal)}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Dot indicators — mobile only */}
      <div className={css({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.sizing.scale200,
        paddingTop: theme.sizing.scale500,
        '@media screen and (min-width: 1024px)': {
          display: 'none',
        },
      })}>
        {DAYS.map((day, i) => (
          <button
            key={day}
            onClick={() => scrollTo(i)}
            className={css({
              width: i === activeIndex ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
              backgroundColor: i === activeIndex
                ? theme.colors.contentAccent
                : i === todayIndex
                  ? theme.colors.borderAccent
                  : theme.colors.contentTertiary,
              opacity: i === activeIndex ? 1 : 0.4,
            })}
          />
        ))}
      </div>

      <RecipeModal meal={selectedMeal} open={!!selectedMeal} onClose={() => setSelectedMeal(null)} />
    </div>
  )
}
