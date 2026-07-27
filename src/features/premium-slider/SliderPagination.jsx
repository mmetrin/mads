import {
  sliderPaginationProgressStates,
  sliderPaginationStates,
  sliderSlides,
} from './sliderConfig'
import { interpolateValue } from './sliderMath'

function getPaginationState(activeIndex, progress) {
  const baseState = sliderPaginationStates[activeIndex]
  const progressState = sliderPaginationProgressStates[activeIndex]
  const baseActiveDot = baseState.dots[activeIndex]
  const progressActiveDot = progressState.dots[activeIndex]
  const baseActiveWidth = baseActiveDot.width ?? baseActiveDot.size
  const baseActiveHeight = baseActiveDot.height ?? baseActiveDot.size

  return {
    left: interpolateValue(baseState.left, progressState.left, progress),
    width: interpolateValue(baseState.width, progressState.width, progress),
    indicator: {
      x: interpolateValue(baseActiveDot.x, progressActiveDot.x, progress),
      y: interpolateValue(baseActiveDot.y, progressActiveDot.y, progress),
      width: interpolateValue(baseActiveWidth, progressActiveDot.width, progress),
      height: interpolateValue(baseActiveHeight, progressActiveDot.height, progress),
    },
    dots: baseState.dots.map((baseDot, dotIndex) => {
      const progressDot = progressState.dots[dotIndex]
      const baseWidth = baseDot.width ?? baseDot.size
      const baseHeight = baseDot.height ?? baseDot.size

      return {
        x: interpolateValue(baseDot.x, progressDot.x, progress),
        y: interpolateValue(baseDot.y, progressDot.y, progress),
        width: interpolateValue(baseWidth, progressDot.width, progress),
        height: interpolateValue(baseHeight, progressDot.height, progress),
      }
    }),
  }
}

export function SliderPagination({ activeSlide, progress }) {
  const activeIndex = activeSlide % sliderSlides.length
  const isProgressing = progress > 0
  const paginationState = getPaginationState(activeIndex, progress)

  return (
    <div className="slider-pagination" aria-hidden="true">
      <div
        className={`slider-pagination__auto${isProgressing ? ' is-progressing' : ''}`}
        style={{
          '--pager-left': `${paginationState.left}px`,
          '--pager-width': `${paginationState.width}px`,
        }}
      >
        {paginationState.dots.map((dot, dotIndex) => {
          const isActiveDot = dotIndex === activeIndex

          return (
            <span
              className={`slider-pagination__dot${isActiveDot ? ' is-current' : ''}`}
              style={{
                '--dot-x': `${dot.x}px`,
                '--dot-y': `${dot.y}px`,
                '--dot-width': `${dot.width}px`,
                '--dot-height': `${dot.height}px`,
              }}
              key={sliderSlides[dotIndex].id}
            />
          )
        })}
        <span
          className={`slider-pagination__indicator${isProgressing ? ' is-progressing' : ''}`}
          style={{
            '--indicator-x': `${paginationState.indicator.x}px`,
            '--indicator-y': `${paginationState.indicator.y}px`,
            '--indicator-width': `${paginationState.indicator.width}px`,
            '--indicator-height': `${paginationState.indicator.height}px`,
          }}
        >
          {isProgressing && (
            <span
              className="slider-pagination__progress"
              style={{ '--progress-width': `${progress * 100}%` }}
            />
          )}
        </span>
      </div>
    </div>
  )
}
