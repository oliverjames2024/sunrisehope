import { instagramPosts, social } from '../content'
import { InstagramIcon, SubstackIcon } from './Icons'

export default function Follow() {
  return (
    <section id="follow" className="follow">
      <div className="follow-card">
        <p className="eyebrow">
          <InstagramIcon /> Instagram
        </p>
        <h2>Follow along</h2>
        <div className="follow-grid">
          {instagramPosts.map((p) => (
            <a key={p.url} href={p.url} target="_blank" rel="noreferrer" aria-label="View post on Instagram">
              <img src={p.image} alt="" />
            </a>
          ))}
        </div>
        <a className="button button-outline" href={social.instagram.url} target="_blank" rel="noreferrer">
          {social.instagram.handle}
        </a>
      </div>
      <div className="follow-card follow-substack">
        <p className="eyebrow">
          <SubstackIcon /> Substack
        </p>
        <h2>{social.substack.name}</h2>
        <p className="follow-tagline">{social.substack.tagline}</p>
        <p>Christina’s writing on the invisible side that lives all around us — delivered to your inbox.</p>
        <a className="button" href={social.substack.url} target="_blank" rel="noreferrer">
          Read &amp; subscribe
        </a>
      </div>
    </section>
  )
}
