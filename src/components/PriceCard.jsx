export default function PriceCard({ item }) {
  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-dioza-gold/50">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-dioza-red">{item.highlight}</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <h3 className="font-display text-2xl font-bold text-dioza-deep">{item.name}</h3>
        <p className="whitespace-nowrap text-2xl font-black text-dioza-red">{item.price}</p>
      </div>
    </article>
  );
}
