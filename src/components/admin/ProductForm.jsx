import { ImagePlus, Save, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { categories } from '../../data/defaultMenu'

const emptyProduct = {
  name: '',
  category: 'Pizzas',
  price: '',
  ingredients: '',
  imageUrl: '',
  active: true,
}

const createId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `product-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export default function ProductForm({ editingProduct, onCancel, onSave }) {
  const [form, setForm] = useState(emptyProduct)
  const [error, setError] = useState('')

  useEffect(() => {
    setForm(editingProduct || emptyProduct)
    setError('')
  }, [editingProduct])

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim()) return setError('Le nom est obligatoire.')
    if (!form.category) return setError('La catégorie est obligatoire.')
    if (!form.price.trim()) return setError('Le prix est obligatoire.')

    onSave({
      ...form,
      id: form.id || createId(),
      name: form.name.trim(),
      price: form.price.trim(),
      ingredients: form.ingredients.trim(),
      imageUrl: form.imageUrl.trim(),
      active: Boolean(form.active),
    })

    setForm(emptyProduct)
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-soft">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-dioza-red">Produit</p>
          <h2 className="font-display text-3xl font-black text-dioza-deep">
            {editingProduct ? 'Modifier un produit' : 'Ajouter un produit'}
          </h2>
        </div>
        {editingProduct ? (
          <button type="button" onClick={onCancel} className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-4 py-2 font-black text-zinc-700 hover:bg-zinc-50">
            <X size={18} />
            Annuler
          </button>
        ) : null}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <label className="block">
          <span className="text-sm font-black text-zinc-700">Nom *</span>
          <input value={form.name} onChange={(event) => updateField('name', event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
        <label className="block">
          <span className="text-sm font-black text-zinc-700">Catégorie *</span>
          <select value={form.category} onChange={(event) => updateField('category', event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10">
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-black text-zinc-700">Prix *</span>
          <input value={form.price} onChange={(event) => updateField('price', event.target.value)} placeholder="Ex : 9,50 €" className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
        <label className="flex items-center gap-3 rounded-2xl border border-zinc-200 px-4 py-3">
          <input type="checkbox" checked={form.active} onChange={(event) => updateField('active', event.target.checked)} className="h-5 w-5 rounded border-zinc-300 text-dioza-red focus:ring-dioza-red" />
          <span className="font-black text-zinc-700">Produit actif sur le site public</span>
        </label>
        <label className="block lg:col-span-2">
          <span className="text-sm font-black text-zinc-700">Ingrédients</span>
          <textarea value={form.ingredients} onChange={(event) => updateField('ingredients', event.target.value)} rows="3" className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
        <label className="block lg:col-span-2">
          <span className="text-sm font-black text-zinc-700">URL image</span>
          <input value={form.imageUrl} onChange={(event) => updateField('imageUrl', event.target.value)} placeholder="https://..." className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
      </div>

      {form.imageUrl ? (
        <figure className="mt-5 overflow-hidden rounded-2xl border border-zinc-200 bg-dioza-cream">
          <img src={form.imageUrl} alt={`Aperçu ${form.name || 'produit'}`} className="h-56 w-full object-cover" loading="lazy" />
        </figure>
      ) : (
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-5 text-zinc-500">
          <ImagePlus size={22} />
          <span className="font-bold">Ajoutez une URL pour afficher la prévisualisation.</span>
        </div>
      )}

      {error ? <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</p> : null}

      <button type="submit" className="btn-primary mt-5">
        <Save size={18} />
        {editingProduct ? 'Enregistrer les modifications' : 'Ajouter le produit'}
      </button>
    </form>
  )
}
