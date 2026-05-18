<<<<<<< HEAD
import { BadgeCheck, Clock, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { business, images } from '../data/menu'
=======
import { Clock, MapPin, Phone, Sparkles } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import { siteImages } from "../data/images";
import { business, services } from "../data/menu";
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-dioza-deep text-white">
<<<<<<< HEAD
      <div className="absolute inset-0">
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dioza-deep via-dioza-deep/82 to-dioza-deep/25" />
      </div>

      <div className="container-page relative grid min-h-[calc(100vh-73px)] content-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-dioza-gold/50 bg-white/12 px-4 py-2 text-sm font-black text-dioza-gold backdrop-blur">
              <ShieldCheck size={16} />
              100% HALAL
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              🍕 Pizzas artisanales 100% HALAL à Roubaix
            </span>
          </div>

          <h1 className="font-display text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
            Pizzeria La Dioza
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90 sm:text-2xl">
            Des ingrédients frais et une cuisine 100% HALAL préparée avec soin.
          </p>
=======
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={siteImages.hero.src}
          fallback={siteImages.hero.fallback}
          alt={siteImages.hero.alt}
          loading="eager"
          className="h-full w-full object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dioza-deep via-dioza-deep/78 to-dioza-deep/15" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl content-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-dioza-gold/40 bg-white/10 px-4 py-2 text-sm font-semibold text-dioza-gold backdrop-blur">
            <Sparkles size={16} />
            Pizzas halal • Livraison rapide
          </p>
          <h1 className="font-display text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
            {business.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90 sm:text-2xl">{business.slogan}</p>
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={business.phoneHref} className="btn-primary text-base">
              <Phone size={20} />
<<<<<<< HEAD
              Commander {business.phone}
            </a>
            <a href="#menus" className="btn-secondary">
              Voir la carte
=======
              Appeler {business.phone}
            </a>
            <a href="#tarifs" className="btn-ghost">
              Voir les tarifs
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
<<<<<<< HEAD
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <Clock className="mb-3 text-dioza-gold" />
              <p className="font-black">{business.hours}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <MapPin className="mb-3 text-dioza-gold" />
              <p className="font-black">{business.address}</p>
=======
            <div className="hero-info">
              <Clock className="text-dioza-gold" />
              <span>{business.hours}</span>
            </div>
            <div className="hero-info">
              <MapPin className="text-dioza-gold" />
              <span>{business.address}</span>
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="hidden lg:flex lg:items-end lg:justify-end">
          <div className="card max-w-md bg-white/95 p-6 text-dioza-deep">
            <p className="eyebrow">Qualité & confiance</p>
            <h2 className="mt-2 font-display text-3xl font-black">Une pizza chaude, propre et généreuse.</h2>
            <div className="mt-5 grid gap-3">
              {['Nourriture 100% HALAL', 'Livraison rapide', 'Précommande simple'].map((item) => (
                <p key={item} className="flex items-center gap-3 rounded-2xl bg-dioza-cream p-3 font-bold">
                  <BadgeCheck className="text-dioza-red" size={20} />
                  {item}
                </p>
=======
        <div className="hidden items-end justify-end lg:flex">
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-dioza-gold">Services</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <span key={service} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-dioza-deep">
                  {service}
                </span>
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> b71261e2b21366fe825a03d156ce099445bfac82
}
