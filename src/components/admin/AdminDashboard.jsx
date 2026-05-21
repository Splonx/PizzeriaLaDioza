import { Download, LogOut, RotateCcw, Upload } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { categories } from '../../data/defaultMenu'
import {
  exportSiteData,
  getProducts,
  getSettings,
  importSiteData,
  resetToDefaults,
  saveProducts,
  saveSettings,
  setAdminAuthenticated,
} from '../../utils/storage'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
import SiteSettingsForm from './SiteSettingsForm'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [products, setProducts] = useState(() => getProducts())
  const [settings, setSettings] = useState(() => getSettings())
  const [editingProduct, setEditingProduct] = useState(null)
  const [message, setMessage] = useState('')
  const [activeSection, setActiveSection] = useState('products')

  const persistProducts = (nextProducts, successMessage) => {
    setProducts(saveProducts(nextProducts))
    setMessage(successMessage)
  }

  const handleSaveProduct = (product) => {
    const exists = products.some((item) => item.id === product.id)
    const nextProducts = exists
      ? products.map((item) => (item.id === product.id ? product : item))
      : [product, ...products]

    persistProducts(nextProducts, exists ? 'Produit modifié avec succès.' : 'Produit ajouté avec succès.')
    setEditingProduct(null)
  }

  const handleDeleteProduct = (productId) => {
    const product = products.find((item) => item.id === productId)
    if (!window.confirm(`Supprimer "${product?.name || 'ce produit'}" ?`)) return
    persistProducts(products.filter((item) => item.id !== productId), 'Produit supprimé avec succès.')
  }

  const handleToggleProduct = (productId) => {
    persistProducts(
      products.map((product) => (product.id === productId ? { ...product, active: !product.active } : product)),
      'Statut du produit mis à jour.'
    )
  }

  const handleSaveSettings = (nextSettings) => {
    setSettings(saveSettings(nextSettings))
    setMessage('Informations générales enregistrées.')
  }

  const handleReset = () => {
    if (!window.confirm('Réinitialiser tous les produits et réglages par défaut ?')) return
    resetToDefaults()
    setProducts(getProducts())
    setSettings(getSettings())
    setEditingProduct(null)
    setMessage('Données par défaut restaurées.')
  }

  const handleExport = () => {
    const data = JSON.stringify(exportSiteData(), null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'pizzeria-la-dioza-menu.json'
    link.click()
    URL.revokeObjectURL(url)
    setMessage('Export JSON généré.')
  }

  const handleImport = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      try {
        const imported = importSiteData(JSON.parse(reader.result))
        setProducts(imported.products)
        setSettings(imported.settings)
        setMessage('Import JSON effectué avec succès.')
      } catch (error) {
        setMessage(error.message)
      } finally {
        event.target.value = ''
      }
    }
    reader.readAsText(file)
  }

  const logout = () => {
    setAdminAuthenticated(false)
    navigate('/admin/login', { replace: true })
  }

  const categoryCounts = categories.map((category) => ({
    category,
    count: products.filter((product) => product.category === category).length,
  }))

  return (
    <main className="min-h-screen bg-dioza-cream text-zinc-900">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="bg-dioza-deep p-5 text-white lg:sticky lg:top-0 lg:h-screen">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-dioza-red font-black shadow-glow">LD</span>
            <div>
              <p className="font-display text-2xl font-black">La Dioza</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-dioza-gold">Admin</p>
            </div>
          </div>

          <nav className="mt-8 grid gap-2">
            <button type="button" onClick={() => setActiveSection('products')} className={`rounded-2xl px-4 py-3 text-left font-black ${activeSection === 'products' ? 'bg-white text-dioza-deep' : 'text-white/75 hover:bg-white/10'}`}>
              Produits & menus
            </button>
            <button type="button" onClick={() => setActiveSection('settings')} className={`rounded-2xl px-4 py-3 text-left font-black ${activeSection === 'settings' ? 'bg-white text-dioza-deep' : 'text-white/75 hover:bg-white/10'}`}>
              Informations générales
            </button>
          </nav>

          <div className="mt-8 grid gap-2">
            <Link to="/" className="rounded-2xl border border-white/10 px-4 py-3 text-center font-black text-white/80 hover:bg-white/10">
              Voir le site public
            </Link>
            <button type="button" onClick={logout} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 font-black text-white hover:bg-white/15">
              <LogOut size={18} />
              Déconnexion
            </button>
          </div>
        </aside>

        <section className="p-4 sm:p-6 lg:p-8">
          <header className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
            <div>
              <p className="eyebrow">Back-office localStorage</p>
              <h1 className="section-title">Gestion du contenu</h1>
              <p className="mt-3 max-w-3xl text-zinc-600">
                Les modifications sont sauvegardées automatiquement dans ce navigateur et reflétées sur le site public.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={handleExport} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-3 font-black text-zinc-700 shadow-sm hover:bg-zinc-50">
                <Download size={18} />
                Export JSON
              </button>
              <button type="button" onClick={() => fileInputRef.current?.click()} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-3 font-black text-zinc-700 shadow-sm hover:bg-zinc-50">
                <Upload size={18} />
                Import JSON
              </button>
              <input ref={fileInputRef} type="file" accept="application/json" onChange={handleImport} className="hidden" />
              <button type="button" onClick={handleReset} className="inline-flex items-center gap-2 rounded-full bg-dioza-deep px-4 py-3 font-black text-white shadow-sm hover:bg-black">
                <RotateCcw size={18} />
                Réinitialiser
              </button>
            </div>
          </header>

          {message ? (
            <p className="mt-6 rounded-2xl border border-dioza-gold/40 bg-white px-4 py-3 font-bold text-dioza-deep">
              {message}
            </p>
          ) : null}

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {categoryCounts.map((item) => (
              <article key={item.category} className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-black text-zinc-500">{item.category}</p>
                <p className="mt-1 font-display text-4xl font-black text-dioza-red">{item.count}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-8">
            {activeSection === 'products' ? (
              <>
                <ProductForm editingProduct={editingProduct} onCancel={() => setEditingProduct(null)} onSave={handleSaveProduct} />
                <ProductTable products={products} onDelete={handleDeleteProduct} onEdit={setEditingProduct} onToggle={handleToggleProduct} />
              </>
            ) : (
              <SiteSettingsForm settings={settings} onSave={handleSaveSettings} />
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
