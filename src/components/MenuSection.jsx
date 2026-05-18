import { Pizza, Sparkles } from 'lucide-react'
import { drinks, extras, images, pizzas, prices } from '../data/menu'

const imageByCategory = {
  classic: images.pizzaClassic,
  meat: images.pizzaMeat,
  veggie: images.pizzaVeggie,
  sea: images.pizzaSea,
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-zinc-600">{text}</p> : null}
    </div>
  )
}

function PriceCard({ item }) {
  return (
    <article className="card p-5 transition duration-300 hover:-translate-y-1 hover:border-dioza-gold/60">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-dioza-red">{item.note}</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <h3 className="font-display text-2xl font-black text-dioza-deep">{item.name}</h3>
        <p className="whitespace-nowrap text-2xl font-black text-dioza-red">{item.price}</p>
      </div>
    </article>
  )
}

function PizzaCard({ pizza }) {
  const image = imageByCategory[pizza.category] || images.pizzaClassic

  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-dioza-cream">
        <img
          src={image.src}
          alt={`${image.alt} - ${pizza.name}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-black text-dioza-deep">{pizza.name}</h3>
          <span className="rounded-full bg-dioza-cream px-3 py-1 text-xs font-black text-dioza-red">HALAL</span>
        </div>
        <p className="mt-3 leading-7 text-zinc-600">{pizza.ingredients}</p>
      </div>
    </article>
  )
}

function SimpleList({ title, items, icon: Icon }) {
  return (
    <div className="card p-4">
      <div className="mb-3 flex items-center gap-3 px-2 pt-2">
        <Icon className="text-dioza-red" size={24} />
        <h3 className="font-display text-3xl font-black text-dioza-deep">{title}</h3>
      </div>
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-between gap-4 rounded-2xl px-4 py-4 odd:bg-dioza-cream/75">
          <span className="font-bold text-dioza-deep">{item.name}</span>
          <span className="whitespace-nowrap font-black text-dioza-red">{item.price}</span>
        </div>
      ))}
    </div>
  )
}

export default function MenuSection() {
  return (
    <>
      <section id="menus" className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="Menus & tarifs"
            title="Des formats pour toutes les faims"
            text="Solo, Large, Mega ou menus à partager : appelez et commandez simplement."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {prices.map((item) => (
              <PriceCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="pizzas" className="bg-white py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Carte des pizzas"
            title="Pizzas artisanales, généreuses et 100% HALAL"
            text="Une carte claire, gourmande et rassurante, avec des recettes classiques, viande, légumes et poissons."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pizzas.map((pizza) => (
              <PizzaCard key={pizza.name} pizza={pizza} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <SimpleList title="Pâtes, desserts" items={extras} icon={Pizza} />
          <SimpleList title="Boissons" items={drinks} icon={Sparkles} />
        </div>
      </section>
    </>
  )
}
