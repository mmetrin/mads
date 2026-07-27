export function AdvantageCard({ advantage }) {
  return (
    <article
      className="advantage-card reveal-item"
      style={{ '--reveal-delay': '0.62s' }}
    >
      <div className="advantage-card__copy">
        <h2>
          {advantage.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p>{advantage.description}</p>
      </div>
      <img
        className={`advantage-card__image ${advantage.imageClassName}`}
        src={advantage.image}
        alt=""
      />
    </article>
  )
}
