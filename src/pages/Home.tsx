import { Link } from 'react-router'
import heroBg from '../assets/images/portrait-autumn-tree-full-length.jpg'
import christinaPortrait from '../assets/images/portrait-through-leaves-looking-away.jpg'
import bodyworkPhoto from '../assets/images/session-room-lamp-warm.jpg'
import closingBg from '../assets/images/portrait-brick-wall.jpg'
import flowerHandsPhoto from '../assets/images/hands-cupping-protea.jpg'
import Faq from '../components/Faq'
import Follow from '../components/Follow'
import KindWords from '../components/KindWords'
import LibraryTeaser from '../components/LibraryTeaser'
import QuoteSplit from '../components/QuoteSplit'
import { BOOKING_URL, business, featuredQuotes, services, welcome } from '../content'

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-inner">
          <h1 className="hero-logo">
            <img src="/brand/logo-light.svg" alt={business.name} />
          </h1>
          <p className="hero-name">
            {business.practitioner}, {business.credential}
            <span className="hero-sep" aria-hidden="true">·</span>
            <span className="hero-location">Spokane, WA</span>
          </p>
          <blockquote className="hero-quote">“{business.heroQuote}”</blockquote>
          <Link to={BOOKING_URL} className="button button-sun">Book a session</Link>
        </div>
      </section>

      <section id="about" className="welcome">
        <div className="welcome-text">
          <h2>
            {welcome.heading}
            <span>{welcome.subheading}</span>
          </h2>
          <p>{welcome.body}</p>
        </div>
        <img className="welcome-photo" src={christinaPortrait} alt="Christina Terrell among autumn leaves, looking into the distance" />
      </section>

      <div className="explore">
        <Link to="/#services" className="button button-outline">Explore my services</Link>
      </div>

      <QuoteSplit
        image={bodyworkPhoto}
        alt="Christina doing bodywork in her treatment room"
        quote={featuredQuotes.carey}
      />

      <section id="services" className="services">
        <h2>Services Offered</h2>
        {services.map((s) => (
          <article key={s.title} className="service">
            <img src={s.image} alt={s.imageAlt} style={{ objectPosition: s.imagePosition }} />
            <div>
              <h3>{s.title}</h3>
              <p className="service-meta">
                {s.minutes} minutes · ${s.price}
              </p>
              <p>{s.description}</p>
              <Link to={`${BOOKING_URL}?service=${encodeURIComponent(s.title)}`} className="text-link">Book {s.title} →</Link>
            </div>
          </article>
        ))}
      </section>

      <QuoteSplit
        image={flowerHandsPhoto}
        alt="Cupped hands holding a red pincushion protea flower"
        position="center 55%"
        quote={featuredQuotes.cathy}
      />

      <KindWords />

      <Faq />

      <LibraryTeaser />

      <Follow />

      <section id="book" className="closing">
        <div className="closing-bg" style={{ backgroundImage: `url(${closingBg})` }} />
        <div className="closing-inner">
          <img className="closing-mark" src="/brand/mark-light.svg" alt="" />
          <h2>Ready when you are.</h2>
          <p>{business.heroQuote}</p>
          <Link to={BOOKING_URL} className="button button-sun">Book a session</Link>
        </div>
      </section>
    </>
  )
}
