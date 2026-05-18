import { Bike, ExternalLink, Phone, ShieldCheck } from 'lucide-react'
import { business, images } from '../data/menu'

export default function DeliverySection() {
  return (
    <section id="livraison" className="overflow-hidden bg-dioza-deep py-20 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-dioza-gold">Livraison rapide</p>
          <h2 className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">
            Des pizzas chaudes, livrées vite autour de Roubaix.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            Commandez par téléphone, précommandez votre repas ou faites livrer rapidement. La Dioza couvre Roubaix,
            Tourcoing, Croix, Hem, Mouvaux, Wasquehal et les villes proches.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={business.phoneHref} className="btn-primary">
              <Phone size={20} />
              Commander maintenant
            </a>
            <a href={business.whatsappHref} className="btn-secondary">
              WhatsApp
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {business.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className={`${platform.color} flex items-center justify-center gap-2 rounded-2xl px-5 py-4 font-black text-white shadow-xl transition hover:-translate-y-0.5`}
              >
                Commander sur {platform.name}
                <ExternalLink size={18} />
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <p className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 font-bold">
              <Bike className="text-dioza-gold" />
              Livraison rapide
            </p>
            <p className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 font-bold">
              <ShieldCheck className="text-dioza-gold" />
              Nourriture 100% HALAL
            </p>
          </div>
        </div>

        <div>
          <figure className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/30">
            <img src={images.delivery.src} alt={images.delivery.alt} className="aspect-[16/10] w-full object-cover" loading="lazy" />
          </figure>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {business.zones.map((zone) => (
              <span key={zone} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center font-display text-2xl font-black">
                {zone}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
