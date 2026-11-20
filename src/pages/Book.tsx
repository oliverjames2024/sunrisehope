import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router'
import heroBg from '../assets/images/session-room-lamp-warm.jpg'
import { INQUIRY_EMAIL, services } from '../content'

// Web3Forms emails each submission to the inbox the access key was created for (sunrisehope33@gmail.com).
// The key is public by design: it only says where to deliver, so it is safe in client code.
const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = '0e1cb4df-04fe-4b7d-9499-4be130db52f6'

const SESSION_TYPES = ['In person', 'Distance'] as const

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Book() {
  const [params] = useSearchParams()
  const preset = services.find((s) => s.title === params.get('service'))?.title ?? ''
  const [service, setService] = useState(preset)
  const [status, setStatus] = useState<Status>('idle')

  const offersDistance = service === 'Energy Care'

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    if (data._honey) return // a bot filled the hidden field

    setStatus('sending')
    try {
      // Sent as plain form data (not JSON) so the browser makes a simple request with no CORS preflight.
      const fields: Record<string, string> = {
        access_key: ACCESS_KEY,
        subject: `Booking inquiry: ${data.service} from ${data.name}`,
        from_name: 'Sunrise Hope Wellness website',
        replyto: data.email,
        Name: data.name,
        Service: data.service,
        ...(offersDistance && { 'Session type': data.sessionType }),
        Phone: data.phone || '—',
        Email: data.email,
        Message: data.message || '—',
      }
      const body = new FormData()
      for (const [k, v] of Object.entries(fields)) body.append(k, v)
      const res = await fetch(ENDPOINT, { method: 'POST', body })
      const json: { success?: boolean } = await res.json().catch(() => ({}))
      if (!res.ok || !json.success) throw new Error()
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="hero hero-short">
        <div className="hero-blur" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="hero-inner">
          <p className="hero-name">Book a session</p>
          <h1>
            Let’s make <em>space</em> for you.
          </h1>
          <p className="hero-lead">
            Share a little about what you’re looking for and Christina will be in touch to find a time.
          </p>
        </div>
      </section>

      <section className="book">
        {status === 'sent' ? (
          <div className="book-card book-thanks" role="status">
            <img src="/brand/mark.svg" alt="" />
            <h2>Thank you.</h2>
            <p>Your message is on its way. Christina will reach out soon to schedule your session.</p>
            <Link to="/" className="button">Back to home</Link>
          </div>
        ) : (
          <form className="book-card" onSubmit={onSubmit}>
            <label className="book-field">
              <span>Name</span>
              <input name="name" autoComplete="name" required />
            </label>

            <label className="book-field">
              <span>Service</span>
              <select name="service" required value={service} onChange={(e) => setService(e.target.value)}>
                <option value="" disabled>
                  Choose a service
                </option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title} · {s.minutes} min · ${s.price}
                  </option>
                ))}
              </select>
            </label>

            {offersDistance && (
              <fieldset className="book-field book-choice">
                <legend>In person or distance?</legend>
                {SESSION_TYPES.map((t, i) => (
                  <label key={t}>
                    <input type="radio" name="sessionType" value={t} required defaultChecked={i === 0} />
                    <span>{t}</span>
                  </label>
                ))}
              </fieldset>
            )}

            <div className="book-row">
              <label className="book-field">
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label className="book-field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>

            <label className="book-field">
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="Anything you’d like Christina to know" />
            </label>

            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="book-honey" aria-hidden="true" />

            {status === 'error' && (
              <p className="book-error" role="alert">
                Something went wrong sending your message. Please try again, or email{' '}
                <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>.
              </p>
            )}

            <button type="submit" className="button button-sun" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send inquiry'}
            </button>
          </form>
        )}
      </section>
    </>
  )
}
