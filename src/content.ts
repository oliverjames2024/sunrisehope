// All site copy lives here so it can be edited in one place.
// Anything marked SAMPLE is placeholder text — replace it with Christina's own.

import energyCareImg from './assets/images/session-hands-on-head-bw.jpg'
import massageEnergyImg from './assets/images/session-room-wide-bw.jpg'
import massageImg from './assets/images/session-hands-at-neck-bw.jpg'
import ig1 from './assets/instagram/post-1.jpg'
import ig2 from './assets/instagram/post-2.jpg'
import ig3 from './assets/instagram/post-3.jpg'
import ig4 from './assets/instagram/post-4.jpg'
import ig5 from './assets/instagram/post-5.jpg'
import ig6 from './assets/instagram/post-6.jpg'

// Every "Book" button leads to the inquiry form, which emails INQUIRY_EMAIL.
export const BOOKING_URL = '/book'
export const INQUIRY_EMAIL = 'sunrisehope33@gmail.com'

export const business = {
  name: 'Sunrise Hope Wellness',
  legalName: 'Sunrise Hope Wellness LLC',
  practitioner: 'Christina Terrell',
  credential: 'LMT', // Licensed Massage Therapist
  established: 2012,
  location: 'Spokane, Washington',
  heroQuote: 'Where the body is heard, the spirit is welcomed, and space is made for healing.',
}

export const social = {
  instagram: {
    handle: '@sunrisehopewellness',
    url: 'https://www.instagram.com/sunrisehopewellness/',
  },
  substack: {
    name: 'A Student of the Veil',
    tagline: 'Ancient wisdom. Thin veils. I still lose my keys.',
    url: 'https://christinaterrell.substack.com/',
  },
}

export const welcome = {
  heading: 'Welcome,',
  subheading: 'I’m Christina.',
  body: 'An intuitive at heart, drawn to the unseen connections between the body, energy, and spirit. Through energy care, massage, and intuitive guidance, I help create space for messages to be received, awareness to unfold, and each person to connect more deeply with what is ready to be seen and heard.',
}

export type Service = {
  title: string
  minutes: number
  price: number
  description: string
  image: string
  imageAlt: string
  /** CSS object-position, to keep faces in frame when the photo is cropped. */
  imagePosition?: string
}

export const services: Service[] = [
  {
    title: 'Energy Care',
    minutes: 75,
    price: 150,
    description:
      'Your body is your best medicine. An intuitive blend of energy work, hands-on bodywork, somatic care, and messages from the other side to create space for release, discovery, healing, and reconnection.',
    image: energyCareImg,
    imageAlt: 'Christina cradling a client’s head in her treatment room',
  },
  {
    title: 'Massage with Energy Care',
    minutes: 90,
    price: 175,
    description:
      'An intuitive combination of massage, energy work, and somatic care to support release, healing, and reconnection with yourself.',
    image: massageEnergyImg,
    imageAlt: 'Christina, eyes closed, with her hands resting on a client beneath a soft blanket in her treatment room',
    imagePosition: '60% center',
  },
  {
    title: 'Massage',
    minutes: 60,
    price: 95,
    description:
      'A restorative massage designed to encourage relaxation, support circulation, and bring attention to areas of the body that need a little extra care.',
    image: massageImg,
    imageAlt: 'Christina’s hands supporting a client’s neck',
  },
]

// Latest posts from @sunrisehopewellness (snapshot, November 2026).
// To refresh: replace the images in src/assets/instagram/ and the links here.
export const instagramPosts = [
  { image: ig1, url: 'https://www.instagram.com/p/Dedf-3IAC_W/' },
  { image: ig2, url: 'https://www.instagram.com/p/DFTrNokylUO/' },
  { image: ig3, url: 'https://www.instagram.com/p/DbTh6OAGDD8/' },
  { image: ig4, url: 'https://www.instagram.com/p/DfZ2WtIAU8X/' },
  { image: ig5, url: 'https://www.instagram.com/reel/DdhC852gP9k/' },
  { image: ig6, url: 'https://www.instagram.com/p/DcWLGTHG-wp/' },
]

// Client testimonials, from Christina's Instagram post:
// https://www.instagram.com/p/DFTrNokylUO/
export const testimonialsFull = [
  {
    name: 'K',
    text: 'Christina is an amazing soul healer who is rooted in light and integrity. She has an innate wisdom that is evident when I am in her healing space. Whether you need bodywork, sound therapy, or insight into systemic disharmony, she will uncover the root issue and help guide you to homeostasis and peace. 10/10',
  },
  {
    name: 'Carey',
    text: 'I cannot say enough about Christina and the solace she provides. Her caring and peaceful nature create a space where I have always felt safe to grow, heal, and release. Christina’s role in my healing and evolution has been life-changing and freeing. I will forever be grateful.',
  },
  {
    name: 'Jodi',
    text: 'I came to Christina two years ago. I was searching for an energy worker and my close friend referred me. I moved here from the East Coast leaving my friends, career, and a toxic relationship behind, to take care of my elderly mom in Idaho. My energy was nonexistent. She has transformed my life in these last few years. I am now on the path of healing past traumas, giving more self love, and being more self-aware. Christina is as beautiful inside as well as outside. She keeps it real! Her hugs before and after a session are a ray of sunshine! If you need your chakras and energy aligned, she has a true gift, and I highly recommend her!',
  },
  {
    name: 'Cathy',
    text: 'Working with Christina has been a life-changing journey of emotional healing and growth. Through our sessions, my body has released emotions I didn’t even realize I was carrying. The process is gentle, powerful, and deeply impactful. I feel lighter, more balanced, and more aligned with my true self than ever before. If you’re looking for a compassionate and skilled guide and experience lasting transformation, Christina is the person to see. She will never try to do more than what your body tells her it’s ready for. Her ability to create a safe, welcoming space is unparalleled. This is more than a service, it is a gift. Thank you, Christina, for helping me step into a brighter, freer future.',
  },
  {
    name: 'Ellen',
    text: 'I cannot say enough about Christina and her incredible energy work. She’s worked on me several times, and I had the privilege of witnessing her work on my sister, Lori. What I saw was one of the most extraordinary things I’ve ever experienced. She picked up on something so specific, something none of us could have known at the time. When we later asked my mom about it, she confirmed it, leaving us amazed. Christina has a truly special gift. She’s calm, kind, and deeply intuitive. If you’re looking for an energy shift or healing in any way, she’s the only person I’d recommend.',
  },
]

// Short excerpts from the testimonials above, for the sliding "Kind words" band.
export const kindWords = [
  { text: 'rooted in light and integrity', name: 'K' },
  { text: 'a space where I have always felt safe to grow, heal, and release', name: 'Carey' },
  { text: 'she has transformed my life', name: 'Jodi' },
  { text: 'I feel lighter, more balanced, and more aligned with my true self', name: 'Cathy' },
  { text: 'calm, kind, and deeply intuitive', name: 'Ellen' },
  { text: 'her hugs before and after a session are a ray of sunshine', name: 'Jodi' },
  { text: 'she will uncover the root issue', name: 'K' },
  { text: 'one of the most extraordinary things I’ve ever experienced', name: 'Ellen' },
]

// Quotes for the photo + blurred photo sections.
export type Testimonial = { before: string; emphasis: string; after?: string; name: string }

export const featuredQuotes = {
  carey: {
    before: 'Christina’s role in my healing and evolution has been ',
    emphasis: 'life changing and freeing',
    after: '.',
    name: 'Carey',
  },
  cathy: { before: 'This is more than a service, this is a ', emphasis: 'gift', after: '.', name: 'Cathy' },
} satisfies Record<string, Testimonial>

// The first six answers are in Christina’s words, from her “How a Session Unfolds” post:
// https://www.instagram.com/p/DbTh6OAGDD8/
// The last two are drafted — Christina should review them.
export const faqs: { q: string; a: string }[] = [
  {
    q: 'What is energy care?',
    a: 'Your body is your best medicine. Energy care is an intuitive blend of energy work, hands-on bodywork, somatic care, and messages from the other side — creating space for release, discovery, healing, and reconnection.',
  },
  {
    q: 'Who leads the session?',
    a: 'I don’t lead the session. I’m not in charge of what comes through — your higher self is. It always finds its way.',
  },
  {
    q: 'Will I receive messages?',
    a: 'It’s more than messages. The energy shifts as it comes through. It’s not only what’s spoken — it’s felt in the body, a somatic experience as much as a message.',
  },
  {
    q: 'Do I need to come with a question?',
    a: 'Come with a question, or none at all. An intention is welcome. So is arriving with nothing but curiosity.',
  },
  {
    q: 'What may come up during a session?',
    a: 'Whatever the body and spirit are ready for — the body itself, other timelines, ancestral work, those who’ve crossed over.',
  },
  {
    q: 'Am I doing this alone?',
    a: 'You have a spiritual team walking with you. Our souls are connected to something greater than this one life — to Divine source, and to the guides who’ve walked before us, here to help us along the way.',
  },
  {
    q: 'Do you offer remote sessions?',
    a: 'Yes — remote sessions are available, so you can receive care from wherever you are.',
  },
  {
    q: 'Which service should I book?',
    a: 'Energy Care is the deepest dive into energy work and intuitive guidance. Massage with Energy Care blends the two. Massage is a restorative session focused on the physical body. If you’re unsure, reach out and we’ll find the right fit together.',
  },
]

// SAMPLE — the Self-Education Library. Replace with Christina's own picks.
export type LibraryItem = { title: string; by?: string; note?: string; url?: string }
export type LibrarySection = { id: string; title: string; intro: string; items: LibraryItem[] }

export const library: LibrarySection[] = [
  {
    id: 'books',
    title: 'Books on Energy Work',
    intro: 'Foundational reads for understanding the body’s energy and the unseen.',
    items: [
      { title: 'Hands of Light', by: 'Barbara Ann Brennan' },
      { title: 'Energy Medicine', by: 'Donna Eden' },
      { title: 'Wheels of Life', by: 'Anodea Judith' },
      { title: 'Anatomy of the Spirit', by: 'Caroline Myss' },
      { title: 'The Body Keeps the Score', by: 'Bessel van der Kolk' },
    ],
  },
  {
    id: 'writing',
    title: 'From the Blog',
    intro: 'Reflections from A Student of the Veil, Christina’s Substack.',
    items: [
      { title: 'A Student of the Veil', note: 'Ancient wisdom. Thin veils. I still lose my keys.', url: social.substack.url },
      { title: 'We are not walking through life alone', note: 'On guides, timelines, and asking for help.' },
      { title: 'When you feel stuck, do something different', note: 'Small shifts that move stuck energy.' },
    ],
  },
  {
    id: 'recipes',
    title: 'Nourishing Recipes',
    intro: 'Simple, grounding food for before and after a session.',
    items: [
      { title: 'Golden milk', note: 'Turmeric, ginger, and warm spice to wind down.' },
      { title: 'Root vegetable broth', note: 'A warm, grounding bowl for the days after deep work.' },
      { title: 'Dandelion & nettle tea', note: 'A gentle herbal infusion.' },
    ],
  },
  {
    id: 'practices',
    title: 'Practices to Try at Home',
    intro: 'Small rituals to keep the space you create in session open.',
    items: [
      { title: 'Grounding breath', note: 'Five minutes of slow breathing with your feet on the earth.' },
      { title: 'Body scan', note: 'Listening to the body from head to toe, without fixing anything.' },
      { title: 'Journaling prompts', note: 'What is ready to be seen and heard today?' },
    ],
  },
  {
    id: 'follow',
    title: 'Voices Worth Following',
    intro: 'Teachers, writers, and podcasts that inspire the work.',
    items: [
      { title: 'David Whyte', note: 'Poet and philosopher of belonging.' },
      { title: 'Sunrise Hope Wellness on Instagram', note: social.instagram.handle, url: social.instagram.url },
    ],
  },
]
