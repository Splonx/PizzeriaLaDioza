<<<<<<< HEAD
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dioza-deep/92 text-white shadow-xl backdrop-blur-xl">
      <nav className="container-page flex items-center justify-between py-3">
        <a href="#accueil" className="flex items-center gap-3" aria-label="Accueil Pizzeria La Dioza">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-dioza-gold/50 bg-dioza-red font-black shadow-glow">
            LD
          </span>
          <span>
            <span className="block font-display text-xl font-black leading-none">La Dioza</span>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-dioza-gold">Roubaix</span>
=======
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business } from "../data/menu";

const links = [
  { href: "#pizzas", label: "Nos pizzas" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#livraison", label: "Livraison" },
  { href: "#adresse", label: "Adresse" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dioza-deep/90 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#accueil" className="group flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-dioza-gold/50 bg-dioza-red text-lg font-black shadow-lg shadow-red-950/30">
            LD
          </span>
          <span>
            <span className="block font-display text-xl font-bold leading-none">La Dioza</span>
            <span className="text-xs uppercase tracking-[0.22em] text-dioza-gold">Roubaix</span>
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
<<<<<<< HEAD
            <a key={link.href} href={link.href} className="text-sm font-bold uppercase tracking-[0.15em] text-white/75 transition hover:text-dioza-gold">
=======
            <a key={link.href} href={link.href} className="nav-link">
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
<<<<<<< HEAD
          <a href={business.phoneHref} className="btn-primary hidden sm:inline-flex">
=======
          <a className="btn-primary hidden sm:inline-flex" href={business.phoneHref}>
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
            <Phone size={18} />
            Commander
          </a>
          <button
<<<<<<< HEAD
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 md:hidden"
=======
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
<<<<<<< HEAD

      {open ? (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 rounded-2xl bg-white/10 p-3">
=======
      {open ? (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 rounded-2xl bg-white/10 p-3 backdrop-blur">
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
<<<<<<< HEAD
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-bold text-white/90 hover:bg-white/10"
=======
                className="rounded-xl px-4 py-3 font-bold text-white/85 hover:bg-white/10"
                onClick={() => setOpen(false)}
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
              >
                {link.label}
              </a>
            ))}
<<<<<<< HEAD
            <a href={business.phoneHref} onClick={() => setOpen(false)} className="btn-primary mt-1">
=======
            <a className="btn-primary mt-1" href={business.phoneHref} onClick={() => setOpen(false)}>
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
              <Phone size={18} />
              Commander
            </a>
          </div>
        </div>
      ) : null}
    </header>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
}
