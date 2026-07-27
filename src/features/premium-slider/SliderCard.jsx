export function SliderCard({ slide }) {
  return (
    <article className={`slider-card slider-card--${slide.id}`}>
      <img className="slider-card__background" src={slide.background} alt="" />
      {slide.logos?.map((logoItem) => (
        <img
          className={`slider-card__logo ${logoItem.className}`}
          src={logoItem.src}
          alt=""
          key={logoItem.className}
        />
      ))}
      <div className="slider-card__copy">
        <h3>{slide.title}</h3>
        <p>{slide.description}</p>
      </div>
      {slide.button && (
        <a
          className={`premium-video-button slider-card__button ${slide.buttonClassName ?? ''}`}
          href="#lead-form"
        >
          {slide.button}
        </a>
      )}
    </article>
  )
}
