import { LockKeyhole } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminPassword } from '../../config'
import { isAdminAuthenticated, setAdminAuthenticated } from '../../utils/storage'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAdminAuthenticated()) navigate('/admin', { replace: true })
  }, [navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password === adminPassword) {
      setAdminAuthenticated(true)
      navigate('/admin', { replace: true })
      return
    }
    setError('Mot de passe incorrect.')
  }

  return (
    <main className="grid min-h-screen place-items-center bg-dioza-deep px-4 py-12 text-white">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-white p-8 text-dioza-deep shadow-2xl">
        <div className="mb-8">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-dioza-red text-white shadow-glow">
            <LockKeyhole size={24} />
          </span>
          <p className="mt-5 text-sm font-black uppercase tracking-[0.22em] text-dioza-red">Back-office</p>
          <h1 className="mt-2 font-display text-4xl font-black">Connexion admin</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="text-sm font-black text-zinc-700">Mot de passe</span>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
                setError('')
              }}
              className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 font-semibold outline-none transition focus:border-dioza-red focus:ring-4 focus:ring-dioza-red/10"
              autoComplete="current-password"
              autoFocus
            />
          </label>
          {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</p> : null}
          <button type="submit" className="btn-primary w-full">
            Se connecter
          </button>
        </form>
      </section>
    </main>
  )
}
