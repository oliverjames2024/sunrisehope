import { Fragment, useState, type ReactNode } from 'react'
import { Link } from 'react-router'
import heroBg from '../assets/images/portrait-stone-archway-full-length.jpg'
import {
  BOOKING_URL,
  INQUIRY_EMAIL,
  bookLink,
  bookshelf,
  librarySections,
  practices,
  voices,
  type Book,
  type Shelf,
} from '../content'

const covers = import.meta.glob<string>('../assets/covers/*.jpg', { eager: true, import: 'default' })
const coverFor = (name?: string) => (name ? covers[`../assets/covers/${name}.jpg`] : undefined)

/** Renders *word* as italics; the library copy uses it for book titles and emphasis. */
function Rich({ text }: { text: string }) {
  return text.split(/\*([^*]+)\*/).map((part, i): ReactNode => (i % 2 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>))
}

const num = (i: number) => String(i + 1).padStart(2, '0')

function SectionHead({ eyebrow, title, intro }: { eyebrow?: string; title: ReactNode; intro: string }) {
  return (
    <header className="lib-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      <p>{intro}</p>
    </header>
  )
}

function BookCard({ book }: { book: Book }) {
  const cover = coverFor(book.cover)
  return (
    <li className="shelf-book">
      <a href={bookLink(book)} target="_blank" rel="noreferrer" className="shelf-cover">
        {cover ? (
          <img src={cover} alt="" loading="lazy" />
        ) : (
          <span className="shelf-cover-type">
            <span>{book.title}</span>
            <small>{book.author}</small>
          </span>
        )}
      </a>
      <a href={bookLink(book)} target="_blank" rel="noreferrer" className="shelf-title">
        {book.title}
      </a>
      <span className="shelf-author">
        {book.author}
        {book.fiction && <span className="shelf-tag">Fiction</span>}
      </span>
      {book.note && <span className="shelf-note">“{book.note}”</span>}
    </li>
  )
}

function ShelfRow({ shelf, index, open, onSeeAll }: { shelf: Shelf; index: number; open: boolean; onSeeAll: () => void }) {
  return (
    <section className="shelf" aria-labelledby={`shelf-${shelf.id}`}>
      <div className="shelf-head">
        <span className="faq-num">{num(index)}</span>
        <h3 id={`shelf-${shelf.id}`}>{shelf.title}</h3>
        <p>{shelf.intro}</p>
        {!open && (
          <button type="button" className="text-link shelf-all" onClick={onSeeAll}>
            See all {shelf.books.length}
          </button>
        )}
      </div>
      <ul className={open ? 'shelf-books shelf-books-open' : 'shelf-books'}>
        {shelf.books.map((b) => (
          <BookCard key={b.title} book={b} />
        ))}
      </ul>
    </section>
  )
}

function Bookshelf() {
  const [filter, setFilter] = useState('all')
  const shown = bookshelf.shelves.map((s, i) => ({ s, i })).filter(({ s }) => filter === 'all' || s.id === filter)

  function choose(id: string) {
    setFilter(id)
    document.getElementById('bookshelf')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="bookshelf" className="lib-section lib-books">
      <SectionHead eyebrow="The Bookshelf" title={<Rich text={bookshelf.title} />} intro={bookshelf.intro} />

      <div className="shelf-filters" role="group" aria-label="Filter the bookshelf">
        {[{ id: 'all', title: 'All' }, ...bookshelf.shelves].map((s) => (
          <button key={s.id} type="button" aria-pressed={filter === s.id} onClick={() => setFilter(s.id)}>
            {s.title}
          </button>
        ))}
      </div>

      {shown.map(({ s, i }) => (
        <ShelfRow key={s.id} shelf={s} index={i} open={filter !== 'all'} onSeeAll={() => choose(s.id)} />
      ))}

      <p className="shelf-closing">
        Have a book that changed you?{' '}
        <a href={`mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent('A book for the shelf')}`}>Send it my way.</a>{' '}
        This shelf is always growing.
      </p>
    </section>
  )
}

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
            The practices, teachers, and books Christina returns to again and again, gathered so you can keep the work
            going between sessions.
          </p>
        </div>
      </section>

      <nav className="library-chips" aria-label="Library sections">
        {librarySections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>{s.title}</a>
        ))}
      </nav>

      <section id="practices" className="lib-section">
        <SectionHead title="Practices to Try at Home" intro={practices.intro} />
        <div className="practices">
          {practices.items.map((p, i) => (
            <article key={p.title} className="practice">
              <div className="practice-head">
                <span className="faq-num">{num(i)}</span>
                <h3>{p.title}</h3>
              </div>
              <div className="practice-body">
                <p>{p.body}</p>
                <p className="practice-label">{p.listLabel}</p>
                <ul>
                  {p.list.map((item) => (
                    <li key={item}>
                      <Rich text={item} />
                    </li>
                  ))}
                </ul>
                {p.after && (
                  <p className="practice-after">
                    <Rich text={p.after} />
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="voices" className="lib-section lib-voices">
        <SectionHead title="Voices Worth Following" intro={voices.intro} />
        <div className="voices">
          {voices.items.map((v) => (
            <article key={v.name} className="voice">
              <h3>{v.name}</h3>
              <p className="voice-links">
                <a href={`https://www.instagram.com/${v.instagram}/`} target="_blank" rel="noreferrer">@{v.instagram}</a>
                <span aria-hidden="true">·</span>
                <a href={`https://${v.site}`} target="_blank" rel="noreferrer">{v.site}</a>
              </p>
              <p>
                <Rich text={v.about} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <Bookshelf />

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
