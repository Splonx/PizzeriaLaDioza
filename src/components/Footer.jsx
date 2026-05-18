import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { business } from '../data/menu'

export default function Footer() {
  return (
    <footer className="bg-dioza-deep text-white">
      <div className="container-page grid gap-8 py-12 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="font-display text-3xl font-black">Pizzeria La Dioza</p>
          <p className="mt-3 max-w-md leading-7 text-white/70">
            Site vitrine moderne pour une pizzeria 100% HALAL à Roubaix. Sur place, à emporter, livraison rapide,
            précommande, Deliveroo et Uber Eats.
          </p>
        </div>
        <div className="space-y-3 text-white/75">
          <p className="flex gap-3"><Phone className="text-dioza-gold" size={20} /> {business.phone}</p>
          <p className="flex gap-3"><MapPin className="text-dioza-gold" size={20} /> {business.address}</p>
          <p className="flex gap-3"><Mail className="text-dioza-gold" size={20} /> {business.email}</p>
        </div>
        <div className="space-y-3">
          <a href={business.phoneHref} className="btn-primary">Commander</a>
          {business.platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-bold text-white/80 transition hover:border-dioza-gold hover:text-dioza-gold"
            >
              {platform.name}
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/50">
        © 2026 Pizzeria La Dioza. Tous droits réservés.
      </div>
    </footer>
  )
}
