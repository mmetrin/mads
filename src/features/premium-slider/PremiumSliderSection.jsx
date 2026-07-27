import { sliderTrack } from './sliderConfig'
import { getSliderIndex } from './sliderMath'
import { SliderCard } from './SliderCard.jsx'
import { SliderPagination } from './SliderPagination.jsx'
import { usePremiumSlider } from './usePremiumSlider'

export function PremiumSliderSection() {
  const {
    activeSlide,
    autoProgress,
    isDragging,
    isSnapping,
    trackOffset,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    setIsHovering,
  } = usePremiumSlider()

  return (
    <section
      id="slider-section"
      className="slider-section"
      aria-label="MTS Ads Premium Video: слайды"
    >
      <div className="slider-section__header scroll-reveal">
        <h2>MTS ADS Premium Video</h2>
        <SliderPagination
          activeSlide={getSliderIndex(activeSlide)}
          progress={isDragging ? 0 : autoProgress}
        />
      </div>
      <div
        className={`slider-section__viewport scroll-reveal${isDragging ? ' is-dragging' : ''}`}
        style={{ '--reveal-delay': '0.12s' }}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className={`slider-section__track${isSnapping ? ' is-snapping' : ''}`}
          style={{ transform: `translate3d(${-trackOffset}px, 0, 0)` }}
        >
          {sliderTrack.map((slide, index) => (
            <SliderCard slide={slide} key={`${slide.id}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
