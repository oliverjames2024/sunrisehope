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
// Christina's own FAQ (her "Frequently asked questions website page" note). Each string is a paragraph.
export const faqs: { q: string; a: string[] }[] = [
  {
    q: 'What is energy care?',
    a: [
      'Energy care is attention paid to the parts of you that don’t show up on an X-ray. It works with the subtle layer underneath the muscle and bone, where stress, grief, and old patterns tend to settle in and stay a while.',
      'It’s a way to bring more harmony to your physical body, to how you feel about yourself energetically, and to how you fit into this world. A session can include somatic work, messages from the other side that I’ll deliver to you, and sometimes acupressure as we hold space for the aches that are lingering in your body.',
    ],
  },
  {
    q: 'Who leads the session?',
    a: [
      'You do. When you come in and settle onto the table, trust that your higher self will bring forward whatever you’re ready for, and whatever you’re growing out of.',
      'I’m there the whole time to listen, hold space, and deliver what comes through, but the wisdom is yours.',
    ],
  },
  {
    q: 'Do I need to come with a question?',
    a: [
      'You’re welcome to come in with an intention or a question, and to trust that your higher self will guide the session where it needs to go. If you don’t have anything specific in mind, that’s okay too. The nudge that brought you in is enough.',
    ],
  },
  {
    q: 'What may come up during a session?',
    a: [
      'This is where things get creative, beautiful, and unique to each client. It all depends on what your spirit needs. Messages may come from the guides I work with, who are always present with us and protecting us. They can also come from your own guides, your loved ones and ancestors on the other side, and other timelines. All of it is welcomed into the space with safety and protection.',
      'That’s why I include therapeutic work like somatic practices and acupressure. It keeps your body grounded so you can safely feel through whatever needs to come up.',
    ],
  },
  {
    q: 'Do you offer remote sessions?',
    a: [
      'I do! On the day of your session, I’ll ask you to send a photo of your face so I can connect with you. I clear a quiet space just as I would if you were on my table, and I ask you to set aside that time to rest or journal. Please keep your phone nearby. We’ll talk on and off throughout the session as I’m guided to call, and we’ll wrap up together at the end so you can ask any questions.',
      'Remote sessions can be very powerful because you’re in your own space. Some clients find it comforting to be at home while moving through something difficult and tender. Whether you’re on my table or in the privacy of your own space, energy care meets us where we are.',
    ],
  },
  {
    q: 'Which service should I book?',
    a: [
      'Bodywork is an essential part of keeping the body and mind balanced. Start with whatever feels most comfortable to you. For some, that’s a massage. Others feel called to Massage and Messages, or straight to a channeling session. Your work with me can grow into other types of sessions over time, or stay right where it is. Both are perfect.',
    ],
  },
]


// The Self-Education Library, written by Christina.
// In any library text, *words* render in italics (book titles, emphasis).

export const librarySections = [
  { id: 'practices', title: 'Practices to Try at Home' },
  { id: 'voices', title: 'Voices Worth Following' },
  { id: 'bookshelf', title: 'The Bookshelf' },
] as const

export type Practice = { title: string; body: string; listLabel: string; list: string[]; after?: string }

export const practices = {
  intro: 'Simple ways to carry the work home and stay grounded between sessions.',
  items: [
    {
      title: 'Journaling After a Session',
      body: 'Some of the most important parts of a session show up later: in the car, in the shower, or as you’re falling asleep that night. Keep a journal nearby for the next day or two and write down whatever comes through, even if it doesn’t make sense yet. That might be messages, images, memories, dreams, or sensations in your body. You don’t need to write well or interpret anything. Just catch it, because these pieces often connect later in ways that surprise you.',
      listLabel: 'A few prompts to start',
      list: [
        'What did I feel in my body during or after the session?',
        'What words, images, or memories keep coming back?',
        'What feels lighter? What still feels tender?',
        'If my body could speak right now, what would it say?',
      ],
    },
    {
      title: 'Keep an Oracle Deck at Hand',
      body: 'When you feel scattered, unsure, or pulled in too many directions, an oracle deck can bring you back to center. Keep one somewhere easy to reach, like your nightstand, desk, or car. Take a breath, hold the deck for a moment, and pull a single card. You don’t need to ask a perfect question. Just let the card be a gentle anchor: a word or image to carry with you for the day, and a reminder that guidance is always closer than it feels.',
      listLabel: 'A simple way to begin',
      list: [
        'Shuffle slowly and breathe while you do.',
        'Ask, “What do I need to know right now?”',
        'Pull one card and sit with it before reading the guidebook.',
        'Notice what you feel first. That’s often the real message.',
      ],
      after: 'The deck I reach for again and again is *Work Your Light* by Rebecca Campbell, with artwork by Danielle Noel. The paintings alone feel like medicine.',
    },
    {
      title: 'The Evening Check-In',
      body: 'Your days shape your energy as much as any session does. Try to organize your day as best you can. Then, at the end of it, pause and notice how you feel. If you feel scattered, drained, or out of balance, don’t judge it. Get curious. Ask yourself what you could switch up tomorrow to feel more grounded, even if it’s one small thing.',
      listLabel: 'Ask yourself',
      list: [
        'What overstimulated me today?',
        'What can I *add* tomorrow? A grounding food, a walk outside, a few quiet minutes, or time with my oracle deck.',
        'What can I *take away*? Less screen time, fewer conversations, or one less thing on my list.',
        'What would make tomorrow feel a little softer?',
      ],
      after: 'Small changes add up. Over time, you’ll learn what your body and energy need to feel steady.',
    },
  ] satisfies Practice[],
}

export type Voice = { name: string; instagram: string; site: string; about: string }

export const voices = {
  intro: 'Teachers and writers I truly resonate with, and trust to carry the work forward between sessions.',
  items: [
    {
      name: 'Dr. Zach Bush',
      instagram: 'zachbushmd',
      site: 'zachbushmd.com',
      about: 'A physician whose work ties the health of our bodies to the health of the soil. He trained in internal medicine, endocrinology, and hospice care, and he founded the nonprofit Farmer’s Footprint. I come back to him for the bigger picture of how our food, the earth, and our own healing are all connected.',
    },
    {
      name: 'Jillian Turecki',
      instagram: 'jillianturecki',
      site: 'jillianturecki.com',
      about: 'A certified relationship coach and teacher who has spent 20 years helping people build fulfilling relationships. Her podcast *Jillian on Love* and her book *It Begins With You: The 9 Hard Truths About Love That Will Change Your Life* are clear and kind, and they’re honest about how love starts with how we treat ourselves.',
    },
    {
      name: 'Sheleana Aiyana',
      instagram: 'risingwoman',
      site: 'risingwoman.com',
      about: 'The founder of Rising Woman, a community of more than 3 million readers. Her approach draws on somatic healing, family systems, and inherited family trauma, and it treats relationship as a spiritual path. Her book *Becoming the One* is the one I’d hand someone who’s ready to heal old patterns and come home to themselves.',
    },
  ] satisfies Voice[],
}

// Covers live in src/assets/covers/<cover>.jpg. A book without one gets a lettered cover.
export type Book = { title: string; author: string; cover?: string; note?: string; fiction?: boolean }
export type Shelf = { id: string; title: string; intro: string; books: Book[] }

export const bookshelf = {
  title: 'Spirituality is a way of *living.*',
  intro: 'Books for the whole of it: the heart, the body, the soul, and the kitchen.',
  closing: 'Have a book that changed you? Send it my way. This shelf is always growing.',
  shelves: [
    {
      id: 'grief',
      title: 'Grief & Loss',
      intro: 'Company for the hardest seasons, and for what comes after.',
      books: [
        { title: 'The Wild Edge of Sorrow', author: 'Francis Weller', cover: 'wild-edge-of-sorrow', note: 'My favorite book on grief.' },
        { title: 'It’s OK That You’re Not OK', author: 'Megan Devine', cover: 'its-ok-that-youre-not-ok' },
        { title: 'Bearing the Unbearable', author: 'Joanne Cacciatore' },
        { title: 'When Things Fall Apart', author: 'Pema Chödrön', cover: 'when-things-fall-apart' },
        { title: 'The Year of Magical Thinking', author: 'Joan Didion', cover: 'year-of-magical-thinking' },
      ],
    },
    {
      id: 'mind-body',
      title: 'Mind, Body & Healing',
      intro: 'How stress, emotion, and trauma live in the body, and how it heals.',
      books: [
        { title: 'What My Bones Know', author: 'Stephanie Foo', cover: 'what-my-bones-know' },
        { title: 'The Fear Cure', author: 'Lissa Rankin', cover: 'the-fear-cure' },
        { title: 'The Last Best Cure', author: 'Donna Jackson Nakazawa' },
        { title: 'When the Body Says No', author: 'Gabor Maté', cover: 'when-the-body-says-no' },
        { title: 'Becoming Supernatural', author: 'Joe Dispenza', cover: 'becoming-supernatural' },
        { title: 'The Emotion Code', author: 'Dr. Bradley Nelson', cover: 'the-emotion-code' },
        { title: 'The Secret Language of Your Body', author: 'Inna Segal', cover: 'secret-language-of-your-body' },
      ],
    },
    {
      id: 'spirituality',
      title: 'Everyday Spirituality',
      intro: 'Living awake to the sacred in ordinary days.',
      books: [
        { title: 'Anam Cara', author: 'John O’Donohue', cover: 'anam-cara', note: 'One of my absolute favorites.' },
        { title: 'Many Lives, Many Masters', author: 'Brian Weiss', cover: 'many-lives-many-masters' },
        { title: 'Shamanic Power Animals', author: 'don Jose Ruiz', cover: 'shamanic-power-animals' },
        { title: 'Braiding Sweetgrass', author: 'Robin Wall Kimmerer', cover: 'braiding-sweetgrass' },
      ],
    },
    {
      id: 'kitchen',
      title: 'The Kitchen Apothecary',
      intro: 'Tonics, herbs, and nourishing food from your own kitchen.',
      books: [
        { title: 'Tonic', author: 'Tanita de Ruijt', cover: 'tonic' },
        { title: 'Nourishing Traditions', author: 'Sally Fallon', cover: 'nourishing-traditions' },
        { title: 'The Anti-Inflammatory Kitchen Cookbook', author: 'Leslie Langevin', cover: 'anti-inflammatory-kitchen-cookbook' },
        { title: 'The Green Witch’s Garden', author: 'Arin Murphy-Hiscock', cover: 'green-witchs-garden' },
        { title: 'DIY Bitters', author: 'Jovial King & Guido Masé', cover: 'diy-bitters' },
        { title: 'The Lost Book of Herbal Remedies', author: 'Claude Davis & Dr. Nicole Apelian', cover: 'lost-book-of-herbal-remedies' },
      ],
    },
    {
      id: 'inner-witch',
      title: 'Waking the Inner Witch',
      intro: '“I don’t cast spells. I believe our words, our prayers, and our intentions already are.”',
      books: [
        { title: 'Heal the Witch Wound', author: 'Celeste Larsen', cover: 'heal-the-witch-wound' },
        { title: 'The Green Witch', author: 'Arin Murphy-Hiscock', cover: 'the-green-witch' },
        { title: 'The Wellness Witch', author: 'Nikki Van De Car', cover: 'the-wellness-witch' },
        { title: 'Women Who Run with the Wolves', author: 'Clarissa Pinkola Estés', cover: 'women-who-run-with-the-wolves' },
        { title: 'The Dance of the Dissident Daughter', author: 'Sue Monk Kidd', cover: 'dance-of-the-dissident-daughter' },
        { title: 'Brida', author: 'Paulo Coelho', cover: 'brida', fiction: true },
        { title: 'The Witch of Portobello', author: 'Paulo Coelho', cover: 'witch-of-portobello', fiction: true },
      ],
    },
  ] satisfies Shelf[],
}

/** Where a book title links: a Bookshop.org search, which supports independent bookstores. */
export const bookLink = (b: Book) =>
  `https://bookshop.org/search?keywords=${encodeURIComponent(`${b.title} ${b.author.split(' & ')[0]}`)}`
