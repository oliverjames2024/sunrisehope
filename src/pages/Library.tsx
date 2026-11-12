import { Link } from 'react-router'
import heroBg from '../assets/images/portrait-stone-archway-full-length.jpg'
import { BOOKING_URL, library } from '../content'

export default function Library() {
  return (
    <>
      <section className="hero hero-short">
        <div className="hero-blur" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="hero-inner">
          <p className="hero-name">The Self-Education Library</p>
          <h1>
            Healing begins with <em>curiosity.</em>
          </h1>
          <p className="hero-lead">
            A growing collection of books, writing, recipes, and practices Christina returns to. Browse by category and
            explore what speaks to you.
          </p>
        </div>
      </section>

      <nav className="library-chips" aria-label="Library categories">
        {library.map((s) => (
          <a key={s.id} href={`#${s.id}`}>{s.title}</a>
        ))}
      </nav>

      <div className="library">
        {library.map((section, i) => (
          <section key={section.id} id={section.id} className="library-section">
            <div className="library-head">
              <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
              <h2>{section.title}</h2>
              <p>{section.intro}</p>
            </div>
            <ul className="library-items">
              {section.items.map((item) => (
                <li key={item.title}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer" className="library-title">
                      {item.title} ↗
                    </a>
                  ) : (
                    <span className="library-title">{item.title}</span>
                  )}
                  {item.by && <span className="library-by">{item.by}</span>}
                  {item.note && <span className="library-note">{item.note}</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="closing">
        <div className="closing-inner">
          <img className="closing-mark" src="/brand/mark-light.svg" alt="" />
          <h2>Your body is trying to tell you <em>something.</em></h2>
          <p>Let’s listen together.</p>
          <Link to={BOOKING_URL} className="button button-sun">Book a session</Link>
        </div>
      </section>
    </>
  )
}
