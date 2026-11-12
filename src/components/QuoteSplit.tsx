import type { Testimonial } from '../content'

/** A photo beside a blurred copy of itself, with a client quote over the blur. */
export default function QuoteSplit({
  image,
  alt,
  quote,
  position = "center",
  zoom = 1,
}: {
  image: string
  alt: string
  quote: Testimonial
  position?: string
  /** Enlarge the photo around `position`, to crop out edges. */
  zoom?: number
}) {
  return (
    <section className="quote-split">
      <div className="quote-split-blur">
        <div className="quote-split-bg" style={{ backgroundImage: `url(${image})` }} />
        <blockquote>
          <p>
            “{quote.before}
            <em>{quote.emphasis}</em>
            {quote.after}”
          </p>
          <footer>— {quote.name}</footer>
        </blockquote>
      </div>
      <div className="quote-split-photo">
        <img
          src={image}
          alt={alt}
          style={{ objectPosition: position, transform: zoom === 1 ? undefined : `scale(${zoom})`, transformOrigin: position }}
        />
      </div>
    </section>
  )
}
