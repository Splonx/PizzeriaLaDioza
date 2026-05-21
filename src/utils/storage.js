import { categories, defaultProducts } from '../data/defaultMenu'
import { defaultSettings } from '../data/defaultSettings'

export const MENU_STORAGE_KEY = 'dioza.products.v1'
export const SETTINGS_STORAGE_KEY = 'dioza.settings.v1'
export const ADMIN_SESSION_KEY = 'dioza.admin.session.v1'
export const DATA_CHANGE_EVENT = 'dioza:data-change'

const clone = (value) => JSON.parse(JSON.stringify(value))
const createId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `product-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

const canUseStorage = () => typeof window !== 'undefined' && window.localStorage

const readJson = (key, fallback) => {
  if (!canUseStorage()) return clone(fallback)

  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : clone(fallback)
  } catch {
    return clone(fallback)
  }
}

const writeJson = (key, value) => {
  if (!canUseStorage()) return
  window.localStorage.setItem(key, JSON.stringify(value))
  window.dispatchEvent(new CustomEvent(DATA_CHANGE_EVENT, { detail: { key } }))
}

const digitsOnly = (value = '') => value.replace(/\D/g, '')

export const enrichSettings = (settings = {}) => {
  const merged = { ...defaultSettings, ...settings }
  const localPhone = digitsOnly(merged.phone)
  const internationalPhone = localPhone.startsWith('0') ? `33${localPhone.slice(1)}` : localPhone
  const whatsappNumber = digitsOnly(merged.whatsappNumber) || internationalPhone

  return {
    ...merged,
    deliveryZones: Array.isArray(merged.deliveryZones) ? merged.deliveryZones : defaultSettings.deliveryZones,
    platforms: Array.isArray(merged.platforms) ? merged.platforms : defaultSettings.platforms,
    phoneHref: `tel:+${internationalPhone}`,
    whatsappHref: `https://wa.me/${whatsappNumber}`,
    mapHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(merged.mapQuery || merged.address)}`,
    mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(merged.mapQuery || merged.address)}&output=embed`,
  }
}

export const getProducts = () => {
  const products = readJson(MENU_STORAGE_KEY, defaultProducts)
  return Array.isArray(products) ? products : clone(defaultProducts)
}

export const saveProducts = (products) => {
  const normalized = Array.isArray(products) ? products : defaultProducts
  writeJson(MENU_STORAGE_KEY, normalized)
  return normalized
}

export const getSettings = () => enrichSettings(readJson(SETTINGS_STORAGE_KEY, defaultSettings))

export const saveSettings = (settings) => {
  const normalized = enrichSettings(settings)
  writeJson(SETTINGS_STORAGE_KEY, normalized)
  return normalized
}

export const resetToDefaults = () => {
  saveProducts(clone(defaultProducts))
  saveSettings(clone(defaultSettings))
}

export const exportSiteData = () => ({
  version: 1,
  exportedAt: new Date().toISOString(),
  products: getProducts(),
  settings: getSettings(),
})

export const importSiteData = (payload) => {
  if (!payload || !Array.isArray(payload.products)) {
    throw new Error('Le fichier JSON doit contenir une propriété "products" sous forme de tableau.')
  }

  const products = payload.products.map((product) => ({
    id: product.id || createId(),
    name: String(product.name || '').trim(),
    category: categories.includes(product.category) ? product.category : 'Pizzas',
    price: String(product.price || '').trim(),
    ingredients: String(product.ingredients || '').trim(),
    imageUrl: String(product.imageUrl || '').trim(),
    active: Boolean(product.active),
  }))

  if (products.some((product) => !product.name || !product.category || !product.price)) {
    throw new Error('Chaque produit importé doit contenir un nom, une catégorie et un prix.')
  }

  saveProducts(products)
  if (payload.settings) saveSettings(payload.settings)
  return { products, settings: getSettings() }
}

export const getGroupedActiveProducts = (products = getProducts()) =>
  categories.reduce((groups, category) => {
    groups[category] = products.filter((product) => product.active && product.category === category)
    return groups
  }, {})

export const isAdminAuthenticated = () => {
  if (!canUseStorage()) return false
  return window.localStorage.getItem(ADMIN_SESSION_KEY) === 'true'
}

export const setAdminAuthenticated = (value) => {
  if (!canUseStorage()) return
  if (value) {
    window.localStorage.setItem(ADMIN_SESSION_KEY, 'true')
  } else {
    window.localStorage.removeItem(ADMIN_SESSION_KEY)
  }
}
