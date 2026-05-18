import { Clock, MapPin, Phone, Sparkles } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import { siteImages } from "../data/images";
import { business, services } from "../data/menu";

export default function Hero() {
  return (
    <section id="accueil" className="relative isolate overflow-hidden bg-dioza-deep text-white">
      <div className="absolute inset-0 -z-10">
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

      <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl content-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div className="max-w-3xl animate-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-dioza-gold/40 bg-white/10 px-4 py-2 text-sm font-semibold text-dioza-gold backdrop-blur">
            <Sparkles size={16} />
            Pizzas halal • Livraison rapide
          </p>
          <h1 className="font-display text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
            {business.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90 sm:text-2xl">{business.slogan}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={business.phoneHref} className="btn-primary text-base">
              <Phone size={20} />
              Appeler {business.phone}
            </a>
            <a href="#tarifs" className="btn-ghost">
              Voir les tarifs
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="hero-info">
              <Clock className="text-dioza-gold" />
              <span>{business.hours}</span>
            </div>
            <div className="hero-info">
              <MapPin className="text-dioza-gold" />
              <span>{business.address}</span>
            </div>
          </div>
        </div>

        <div className="hidden items-end justify-end lg:flex">
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-dioza-gold">Services</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <span key={service} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-dioza-deep">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
