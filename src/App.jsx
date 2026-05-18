import { BadgeCheck, Bike, Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuList from "./components/MenuList";
import OptimizedImage from "./components/OptimizedImage";
import PizzaCard from "./components/PizzaCard";
import PriceCard from "./components/PriceCard";
import SectionTitle from "./components/SectionTitle";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import { siteImages } from "./data/images";
import { business, drinks, pizzas, prices, services, sides } from "./data/menu";

function ServicePill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-dioza-gold/30 bg-white px-4 py-2 text-sm font-bold text-dioza-deep shadow-sm">
      <BadgeCheck size={16} className="text-dioza-red" />
      {children}
    </span>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-dioza-cream text-zinc-900">
        <Header />
        <main>
        <Hero />

        <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-4 shadow-soft md:grid-cols-3">
            <div className="feature-strip">
              <Phone className="text-dioza-red" />
              <div>
                <p className="font-black text-dioza-deep">Commande directe</p>
                <p className="text-sm text-zinc-600">{business.phone}</p>
              </div>
            </div>
            <div className="feature-strip">
              <Clock className="text-dioza-red" />
              <div>
                <p className="font-black text-dioza-deep">Ouvert tous les jours</p>
                <p className="text-sm text-zinc-600">{business.hours}</p>
              </div>
            </div>
            <div className="feature-strip">
              <Bike className="text-dioza-red" />
              <div>
                <p className="font-black text-dioza-deep">Livraison rapide</p>
                <p className="text-sm text-zinc-600">Roubaix et alentours</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pizzas" className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <SectionTitle
                eyebrow="Nos pizzas"
                title="Une carte généreuse, chaude, fondante."
                text="Des recettes incontournables, une pâte dorée, des ingrédients gourmands et une sélection halal pensée pour commander sans hésiter."
              />
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {services.map((service) => (
                  <ServicePill key={service}>{service}</ServicePill>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />

        <section id="tarifs" className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Tarifs"
              title="Formats et menus pour toutes les faims"
              text="Solo, Large, Mega ou menus complets : choisissez votre format et appelez pour commander."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {prices.map((item) => (
                <PriceCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Carte des pizzas"
              title="Les classiques de La Dioza"
              text="Chaque carte affiche une image gourmande, le nom de la pizza et sa composition pour faciliter le choix."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pizzas.map((pizza) => (
                <PizzaCard key={pizza.name} pizza={pizza} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionTitle eyebrow="Autres plats" title="Pâtes, croques et desserts" />
              <div className="mt-8">
                <MenuList items={sides} />
              </div>
            </div>
            <div>
              <SectionTitle eyebrow="Boissons" title="Fraîcheur à emporter" />
              <div className="mt-8">
                <MenuList items={drinks} />
              </div>
            </div>
          </div>
        </section>

        <Gallery />

        <section id="livraison" className="overflow-hidden bg-dioza-deep py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 shadow-2xl shadow-black/20">
              <Bike size={46} className="text-dioza-gold" />
              <h2 className="mt-5 font-display text-4xl font-black">Livraison chaude, rapide et locale</h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Envie d'une pizza sans bouger ? La Dioza livre rapidement sur Roubaix, Tourcoing, Croix, Hem,
                Mouvaux, Wasquehal et les villes proches. Appelez, précommandez, récupérez ou faites livrer :
                l'objectif reste le même, une pizza généreuse qui arrive encore chaude.
              </p>
              <a href={business.phoneHref} className="btn-primary mt-8">
                <ShoppingBag size={20} />
                Commander maintenant
              </a>
            </div>
            <div className="space-y-4">
              <figure className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/30">
                <OptimizedImage
                  src={siteImages.delivery.src}
                  fallback={siteImages.delivery.fallback}
                  alt={siteImages.delivery.alt}
                  className="aspect-[16/10] w-full object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </figure>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Roubaix", "Tourcoing", "Croix", "Hem", "Mouvaux", "Wasquehal"].map((city) => (
                  <div key={city} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.2em] text-dioza-gold">Zone</p>
                    <p className="mt-1 font-display text-2xl font-bold">{city}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <section id="adresse" className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-[0.82fr_1.18fr]">
              <div className="p-8 sm:p-10">
                <SectionTitle eyebrow="Adresse" title="Au coeur de Roubaix" />
                <div className="mt-8 space-y-5 text-zinc-700">
                  <p className="contact-line"><MapPin /> {business.address}</p>
                  <p className="contact-line"><Clock /> {business.hours}</p>
                  <p className="contact-line"><Phone /> {business.phone}</p>
                </div>
                <a href={business.phoneHref} className="btn-primary mt-8">
                  Appeler La Dioza
                </a>
              </div>
              <iframe
                title="Carte Pizzeria La Dioza"
                className="h-[420px] w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=3%20Rue%20Pierre%20Motte%2C%2059100%20Roubaix&output=embed"
              />
            </div>
          </div>
        </section>
        </main>
        <Footer />
        <a href={business.phoneHref} className="fixed-call" aria-label="Appeler Pizzeria La Dioza">
          <Phone size={20} />
          Appeler
        </a>
      </div>
    </ErrorBoundary>
  );
}
