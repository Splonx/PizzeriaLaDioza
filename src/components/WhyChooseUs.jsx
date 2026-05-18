import { Clock3, HeartHandshake, Leaf, ShieldCheck, Truck } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Pizzas halal",
    text: "Une carte rassurante, généreuse et adaptée à toutes les envies."
  },
  {
    icon: Leaf,
    title: "Ingrédients frais",
    text: "Mozzarella fondante, légumes colorés et recettes gourmandes."
  },
  {
    icon: Clock3,
    title: "Ouvert 7j/7",
    text: "Service continu de 11h à 23h pour les repas simples ou les grosses faims."
  },
  {
    icon: Truck,
    title: "Livraison rapide",
    text: "Roubaix et alentours, avec des pizzas qui arrivent chaudes."
  },
  {
    icon: HeartHandshake,
    title: "Accueil local",
    text: "Une pizzeria de quartier, moderne, chaleureuse et efficace."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Pourquoi nous choisir ?</p>
            <h2 className="section-title">Le goût, la confiance, la rapidité.</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              La Dioza mise sur une expérience simple : une belle pizza artisanale, un service clair et une commande sans friction.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-zinc-200 bg-dioza-cream p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-dioza-red text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-dioza-deep">{title}</h3>
                <p className="mt-2 leading-7 text-zinc-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
