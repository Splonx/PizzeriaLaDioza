export default function SectionTitle({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-zinc-600">{text}</p> : null}
    </div>
  );
}
