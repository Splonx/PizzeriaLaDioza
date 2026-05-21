import { MessageCircle, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminLogin from './components/admin/AdminLogin'
import ContactSection from './components/ContactSection'
import DeliverySection from './components/DeliverySection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import WhyChooseUs from './components/WhyChooseUs'
import {
  DATA_CHANGE_EVENT,
  getProducts,
  getSettings,
  isAdminAuthenticated,
} from './utils/storage'

function usePublicData() {
  const [data, setData] = useState(() => ({
    products: getProducts(),
    settings: getSettings(),
  }))

  useEffect(() => {
    const refresh = () => {
      setData({
        products: getProducts(),
        settings: getSettings(),
      })
    }

    window.addEventListener(DATA_CHANGE_EVENT, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(DATA_CHANGE_EVENT, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  return data
}

function PublicSite() {
  const { products, settings } = usePublicData()

  return (
    <div className="min-h-screen bg-dioza-cream text-zinc-900">
      <Header settings={settings} />
      <main>
        <Hero settings={settings} />
        <MenuSection products={products} />
        <WhyChooseUs settings={settings} />
        <DeliverySection settings={settings} />
        <ContactSection settings={settings} />
      </main>
      <Footer settings={settings} />

      <div className="floating-call">
        <a href={settings.phoneHref} className="bg-dioza-red" aria-label="Appeler Pizzeria La Dioza">
          <Phone size={20} />
          Appeler
        </a>
        <a href={settings.whatsappHref} className="bg-green-600" aria-label="Commander via WhatsApp">
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </div>
    </div>
  )
}

function ProtectedAdmin() {
  return isAdminAuthenticated() ? <AdminDashboard /> : <Navigate to="/admin/login" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicSite />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<ProtectedAdmin />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
