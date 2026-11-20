import { Link } from 'react-router'
import bg from '../assets/images/candle-books.jpg'
import { librarySections } from '../content'

export default function LibraryTeaser() {
  return (
    <section className="library-teaser">
      <div className="library-teaser-bg" style={{ backgroundImage: `url(${bg})` }} />
      <p className="eyebrow">The Self-Education Library</p>
      <h2>
        Keep learning <em>between sessions.</em>
      </h2>
      <p>
        Clients often ask what I’d recommend: practices, teachers, and books to carry the work home. This is my
        growing library of the resources I trust and return to.
      </p>
      <ul className="library-teaser-cats">
        {librarySections.map((s) => (
          <li key={s.id}>
            <Link to={`/library#${s.id}`}>{s.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/library" className="button button-sun">Browse the library</Link>
    </section>
  )
}
