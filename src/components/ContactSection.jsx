import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

export default function ContactSection({ settings }) {
  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-8 sm:p-10">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Commander ou venir chez La Dioza</h2>
            <div className="mt-8 space-y-5">
              <p className="contact-line"><MapPin /> {settings.address}</p>
              <p className="contact-line"><Phone /> {settings.phone}</p>
              <p className="contact-line"><Mail /> {settings.email}</p>
              <p className="contact-line"><Clock /> {settings.hours}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={settings.phoneHref} className="btn-primary">
                Appeler pour commander
              </a>
              <a href={settings.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-xl transition hover:-translate-y-0.5">
                WhatsApp
                <MessageCircle size={16} />
              </a>
              {settings.platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`${platform.color} inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-xl transition hover:-translate-y-0.5`}
                >
                  {platform.name}
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </div>
          <iframe
            title="Carte Pizzeria La Dioza à Roubaix"
            className="h-[420px] w-full lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={settings.mapEmbedUrl}
          />
        </div>
      </div>
    </section>
  )
}
