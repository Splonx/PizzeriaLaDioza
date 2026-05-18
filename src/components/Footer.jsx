import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { business } from "../data/menu";

export default function Footer() {
  return (
    <footer className="bg-dioza-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <p className="font-display text-3xl font-black">Pizzeria La Dioza</p>
          <p className="mt-3 max-w-md text-white/70">{business.slogan}. Pizzas halal, service rapide et accueil chaleureux au coeur de Roubaix.</p>
        </div>
        <div className="space-y-3 text-white/80">
          <p className="footer-line"><Phone size={18} /> {business.phone}</p>
          <p className="footer-line"><MapPin size={18} /> {business.address}</p>
          <p className="footer-line"><Clock size={18} /> {business.hours}</p>
        </div>
        <div className="space-y-3 text-white/80">
          <p className="footer-line"><Mail size={18} /> {business.email}</p>
          <a className="btn-primary mt-2" href={business.phoneHref}>Commander</a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/50">
        © 2026 Pizzeria La Dioza. Site vitrine original.
      </div>
    </footer>
  );
}
