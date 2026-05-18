import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { business } from '../data/menu'

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-8 sm:p-10">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Commander ou venir chez La Dioza</h2>
            <div className="mt-8 space-y-5">
              <p className="contact-line"><MapPin /> {business.address}</p>
              <p className="contact-line"><Phone /> {business.phone}</p>
              <p className="contact-line"><Mail /> {business.email}</p>
              <p className="contact-line"><Clock /> {business.hours}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={business.phoneHref} className="btn-primary">
                Appeler pour commander
              </a>
              {business.platforms.map((platform) => (
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
            src="https://www.google.com/maps?q=3%20Rue%20Pierre%20Motte%2C%2059100%20Roubaix&output=embed"
          />
        </div>
      </div>
    </section>
  )
}
