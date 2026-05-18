import { Clock3, HeartHandshake, Leaf, ShieldCheck, Truck } from 'lucide-react'
import { gallery, images } from '../data/menu'

const reasons = [
  {
    icon: ShieldCheck,
    title: '100% HALAL',
    text: 'Une cuisine rassurante, propre et préparée avec soin pour chaque commande.',
  },
  {
    icon: Leaf,
    title: 'Ingrédients frais',
    text: 'Mozzarella fondante, légumes colorés et recettes généreuses.',
  },
  {
    icon: Truck,
    title: 'Livraison rapide',
    text: 'Des pizzas chaudes livrées sur Roubaix et les villes proches.',
  },
  {
    icon: Clock3,
    title: 'Ouvert 7j/7',
    text: 'Tous les jours de 11h à 23h pour les repas du midi et du soir.',
  },
]

const reviews = [
  {
    name: 'Samira B.',
    city: 'Roubaix',
    text: 'Pizza bien garnie, pâte croustillante et livraison rapide. Très bonne adresse.',
  },
  {
    name: 'Mehdi L.',
    city: 'Tourcoing',
    text: 'Commande simple, pizzas chaudes et menus généreux. Je recommande.',
  },
  {
    name: 'Claire D.',
    city: 'Croix',
    text: 'Site clair, accueil sérieux et pizzas très gourmandes. Parfait pour commander vite.',
  },
]

export default function WhyChooseUs() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow">Pourquoi nous choisir ?</p>
            <h2 className="section-title">Confiance, gourmandise et rapidité.</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              La Dioza mise sur une expérience simple : une pizza généreuse, un service efficace et une cuisine 100% HALAL.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl shadow-soft">
              <img src={images.ambience.src} alt={images.ambience.alt} className="aspect-[16/10] w-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl border border-zinc-200 bg-dioza-cream p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-dioza-red text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-black text-dioza-deep">{title}</h3>
                <p className="mt-2 leading-7 text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Galerie photo</p>
            <h2 className="section-title">Une ambiance moderne, chaude et appétissante</h2>
          </div>
          <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-4">
            {gallery.map((image, index) => (
              <figure key={image.src} className={`overflow-hidden rounded-3xl shadow-soft ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Avis clients</p>
              <h2 className="section-title">Ils commandent chez La Dioza</h2>
            </div>
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-dioza-cream px-5 py-3 font-black text-dioza-deep">
              <HeartHandshake className="text-dioza-red" />
              Satisfaction locale
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-3xl border border-zinc-200 bg-dioza-cream p-6 shadow-sm">
                <p className="text-dioza-gold">★★★★★</p>
                <p className="mt-4 leading-8 text-zinc-700">"{review.text}"</p>
                <div className="mt-6 border-t border-zinc-200 pt-4">
                  <p className="font-black text-dioza-deep">{review.name}</p>
                  <p className="text-sm font-bold text-zinc-500">{review.city}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
