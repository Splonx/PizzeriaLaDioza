import { Save } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function SiteSettingsForm({ settings, onSave }) {
  const [form, setForm] = useState({
    ...settings,
    deliveryZonesText: settings.deliveryZones.join(', '),
  })

  useEffect(() => {
    setForm({
      ...settings,
      deliveryZonesText: settings.deliveryZones.join(', '),
    })
  }, [settings])

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { deliveryZonesText, ...values } = form
    onSave({
      ...values,
      deliveryZones: deliveryZonesText.split(',').map((zone) => zone.trim()).filter(Boolean),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-soft">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.18em] text-dioza-red">Informations générales</p>
        <h2 className="font-display text-3xl font-black text-dioza-deep">Réglages du site</h2>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <label className="block">
          <span className="text-sm font-black text-zinc-700">Téléphone</span>
          <input value={form.phone} onChange={(event) => updateField('phone', event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
        <label className="block">
          <span className="text-sm font-black text-zinc-700">Email</span>
          <input type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
        <label className="block lg:col-span-2">
          <span className="text-sm font-black text-zinc-700">Adresse</span>
          <input value={form.address} onChange={(event) => updateField('address', event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
        <label className="block">
          <span className="text-sm font-black text-zinc-700">Horaires</span>
          <input value={form.hours} onChange={(event) => updateField('hours', event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
        <label className="block">
          <span className="text-sm font-black text-zinc-700">Numéro WhatsApp</span>
          <input value={form.whatsappNumber} onChange={(event) => updateField('whatsappNumber', event.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
        <label className="block lg:col-span-2">
          <span className="text-sm font-black text-zinc-700">Zones de livraison</span>
          <input value={form.deliveryZonesText} onChange={(event) => updateField('deliveryZonesText', event.target.value)} placeholder="Roubaix, Tourcoing, Croix" className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
        <label className="block lg:col-span-2">
          <span className="text-sm font-black text-zinc-700">Texte 100% HALAL</span>
          <textarea value={form.halalText} onChange={(event) => updateField('halalText', event.target.value)} rows="3" className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10" />
        </label>
      </div>

      <button type="submit" className="btn-primary mt-5">
        <Save size={18} />
        Enregistrer les réglages
      </button>
    </form>
  )
}
