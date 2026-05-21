import { Edit3, Trash2 } from 'lucide-react'

export default function ProductTable({ products, onDelete, onEdit, onToggle }) {
  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-soft">
      <div className="border-b border-zinc-200 p-5">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-dioza-red">Catalogue</p>
        <h2 className="font-display text-3xl font-black text-dioza-deep">{products.length} produits</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200">
          <thead className="bg-dioza-cream text-left text-xs font-black uppercase tracking-[0.16em] text-zinc-600">
            <tr>
              <th className="px-4 py-4">Produit</th>
              <th className="px-4 py-4">Catégorie</th>
              <th className="px-4 py-4">Prix</th>
              <th className="px-4 py-4">Statut</th>
              <th className="px-4 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {products.map((product) => (
              <tr key={product.id} className="align-top">
                <td className="px-4 py-4">
                  <div className="flex min-w-[260px] gap-3">
                    <img
                      src={product.imageUrl || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=70'}
                      alt=""
                      className="h-14 w-14 rounded-2xl object-cover"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=70'
                      }}
                    />
                    <div>
                      <p className="font-black text-dioza-deep">{product.name}</p>
                      <p className="line-clamp-2 text-sm text-zinc-500">{product.ingredients || 'Sans ingrédients renseignés'}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 font-bold text-zinc-700">{product.category}</td>
                <td className="whitespace-nowrap px-4 py-4 font-black text-dioza-red">{product.price}</td>
                <td className="px-4 py-4">
                  <button
                    type="button"
                    onClick={() => onToggle(product.id)}
                    className={`rounded-full px-3 py-1 text-xs font-black ${product.active ? 'bg-green-100 text-green-700' : 'bg-zinc-100 text-zinc-500'}`}
                  >
                    {product.active ? 'Actif' : 'Masqué'}
                  </button>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => onEdit(product)} className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 text-zinc-700 hover:bg-zinc-50" aria-label={`Modifier ${product.name}`}>
                      <Edit3 size={17} />
                    </button>
                    <button type="button" onClick={() => onDelete(product.id)} className="grid h-10 w-10 place-items-center rounded-full bg-red-50 text-red-700 hover:bg-red-100" aria-label={`Supprimer ${product.name}`}>
                      <Trash2 size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
