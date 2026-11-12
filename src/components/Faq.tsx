import portrait from '../assets/images/portrait-stone-archway-full-length.jpg'
import { faqs } from '../content'

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="faq-intro">
        <p className="eyebrow">Q &amp; A</p>
        <h2>Frequently Asked Questions</h2>
        <img src={portrait} alt="Christina smiling in a stone archway, hands resting on either side" />
      </div>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <details key={f.q} name="faq">
            <summary>
              <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="faq-q">{f.q}</span>
              <span className="faq-icon" aria-hidden="true" />
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
