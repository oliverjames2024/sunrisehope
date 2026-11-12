import { kindWords } from '../content'

/** Slowly scrolling band of short client phrases. */
export default function KindWords() {
  // Two copies side by side so the loop is seamless.
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined}>
      {kindWords.map((w) => (
        <li key={w.text}>
          “{w.text}” <span>— {w.name}</span>
        </li>
      ))}
    </ul>
  )
  return (
    <section className="kind-words" aria-label="Kind words from clients">
      <p className="eyebrow">Kind words · Testimonials</p>
      <div className="marquee">
        <div className="marquee-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  )
}
