import { Star } from "lucide-react";

const reviews = [
  {
    name: "Samira B.",
    city: "Roubaix",
    text: "Pizza bien garnie, pâte croustillante et livraison rapide. Le genre d'adresse qu'on garde sous la main."
  },
  {
    name: "Mehdi L.",
    city: "Tourcoing",
    text: "Service efficace, pizzas chaudes à l'arrivée et très bon rapport qualité-prix pour les menus."
  },
  {
    name: "Claire D.",
    city: "Croix",
    text: "Ambiance propre et chaleureuse, commande simple par téléphone, parfait pour une soirée pizza."
  }
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-eyebrow">Avis clients</p>
            <h2 className="section-title">Ils recommandent La Dioza</h2>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-dioza-cream px-5 py-3 font-black text-dioza-deep">
            <Star size={18} className="fill-dioza-gold text-dioza-gold" />
            4,8/5 satisfaction locale
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-zinc-200 bg-dioza-cream p-6 shadow-sm">
              <div className="flex gap-1 text-dioza-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} className="fill-current" />
                ))}
              </div>
              <p className="mt-5 leading-8 text-zinc-700">"{review.text}"</p>
              <div className="mt-6 border-t border-zinc-200 pt-4">
                <p className="font-black text-dioza-deep">{review.name}</p>
                <p className="text-sm font-semibold text-zinc-500">{review.city}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
