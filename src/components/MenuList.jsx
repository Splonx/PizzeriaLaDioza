export default function MenuList({ items }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-3 shadow-soft">
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-between gap-4 rounded-2xl px-4 py-4 odd:bg-dioza-cream/70">
          <span className="font-semibold text-dioza-deep">{item.name}</span>
          <span className="whitespace-nowrap font-black text-dioza-red">{item.price}</span>
        </div>
      ))}
    </div>
  );
}
