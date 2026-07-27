import onlineTvImage from '../../assets/figma/placement-scenarios/online-tv-img.png'
import smartVodImage from '../../assets/figma/placement-scenarios/smart-vod-img.png'

const placementScenarioCards = [
  {
    id: 'smart-vod',
    tags: ['IVI', 'KION', 'WINK'],
    title: 'Smart VOD',
    description: 'Реклама перед контентом, который зритель выбрал сам',
    bullets: [
      'Показывайте ролик перед началом фильма или сериала и при возвращении к просмотру после паузы. Ваш бренд появляется в момент, когда зритель уже выбрал контент и готов смотреть',
      'Основной формат: Multi-roll',
    ],
    imageSrc: smartVodImage,
    imageAlt: '26 млн устройств, до 63 млн зрителей',
  },
  {
    id: 'online-tv',
    tags: ['операторы', 'онлайн-кинотеатры и ТВ-приложения'],
    title: 'Online TV',
    description: 'Реклама в эфире тематических онлайн-телеканалов',
    bullets: [
      'Охватывайте зрителей во время просмотра телеканалов через интернет. Сочетайте масштаб телевизионной рекламы с точным таргетингом, прозрачной статистикой и проверкой каждого показа',
    ],
    imageSrc: onlineTvImage,
    imageAlt: '19 млн устройств, до 46 млн зрителей',
  },
]

function PlacementScenarioCard({ card }) {
  return (
    <article className="placement-scenarios-section__card">
      <div className="placement-scenarios-section__card-copy">
        <div className="placement-scenarios-section__tags" aria-label="Площадки">
          {card.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="placement-scenarios-section__intro">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
        <ul className="placement-scenarios-section__features">
          {card.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <img
        className="placement-scenarios-section__image"
        src={card.imageSrc}
        alt={card.imageAlt}
      />
    </article>
  )
}

export function PlacementScenariosSection() {
  return (
    <section
      id="placement-scenarios"
      className="placement-scenarios-section scroll-reveal"
      aria-labelledby="placement-scenarios-title"
    >
      <div className="placement-scenarios-section__content">
        <h2 id="placement-scenarios-title">
          Два сценария размещения —
          <br />
          под разные задачи кампании
        </h2>
        <div className="placement-scenarios-section__cards">
          {placementScenarioCards.map((card) => (
            <PlacementScenarioCard card={card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
