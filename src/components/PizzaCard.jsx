import OptimizedImage from "./OptimizedImage";

export default function PizzaCard({ pizza }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-dioza-cream">
        <OptimizedImage
          src={pizza.image.src}
          fallback={pizza.image.fallback}
          alt={`${pizza.image.alt} - ${pizza.name} chez Pizzeria La Dioza`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-bold text-dioza-deep">{pizza.name}</h3>
          <span className="rounded-full bg-dioza-cream px-3 py-1 text-xs font-black uppercase tracking-wider text-dioza-red">
            Halal
          </span>
        </div>
        <p className="mt-3 leading-7 text-zinc-600">{pizza.ingredients}</p>
      </div>
    </article>
  );
}
