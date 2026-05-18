import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { business } from '../data/menu'

const links = [
  { href: '#menus', label: 'Menus' },
  { href: '#pizzas', label: 'Pizzas' },
  { href: '#livraison', label: 'Livraison' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dioza-deep/95 text-white shadow-xl backdrop-blur-xl">
      <nav className="container-page flex items-center justify-between py-3">
        <a href="#accueil" className="flex items-center gap-3" aria-label="Accueil Pizzeria La Dioza">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-dioza-gold/50 bg-dioza-red font-black shadow-glow">
            LD
          </span>
          <span>
            <span className="block font-display text-xl font-black leading-none">La Dioza</span>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-dioza-gold">Roubaix</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-bold uppercase tracking-[0.15em] text-white/75 transition hover:text-dioza-gold">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={business.platforms[0].url} target="_blank" rel="noreferrer" className="hidden rounded-full bg-teal-500 px-4 py-2 text-sm font-black text-white transition hover:-translate-y-0.5 md:inline-flex">
            Deliveroo
          </a>
          <a href={business.phoneHref} className="btn-primary hidden sm:inline-flex">
            <Phone size={18} />
            Commander
          </a>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 rounded-2xl bg-white/10 p-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-bold text-white/90 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            {business.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className={`${platform.color} rounded-xl px-4 py-3 text-center font-black text-white`}
              >
                Commander sur {platform.name}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
