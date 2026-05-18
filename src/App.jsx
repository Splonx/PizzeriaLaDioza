import { MessageCircle, Phone } from 'lucide-react'
import ContactSection from './components/ContactSection'
import DeliverySection from './components/DeliverySection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import WhyChooseUs from './components/WhyChooseUs'
import { business } from './data/menu'

export default function App() {
  return (
    <div className="min-h-screen bg-dioza-cream text-zinc-900">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <WhyChooseUs />
        <DeliverySection />
        <ContactSection />
      </main>
      <Footer />

      <div className="floating-call">
        <a href={business.phoneHref} className="bg-dioza-red" aria-label="Appeler Pizzeria La Dioza">
          <Phone size={20} />
          Appeler
        </a>
        <a href={business.whatsappHref} className="bg-green-600" aria-label="Commander via WhatsApp">
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
