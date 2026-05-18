export const business = {
  name: 'Pizzeria La Dioza',
  address: '3 Rue Pierre Motte, 59100 Roubaix',
  phone: '03 62 23 01 80',
  phoneHref: 'tel:+33362230180',
  whatsappHref: 'https://wa.me/33362230180',
  email: 'contact@pizzeria-la-dioza.fr',
  hours: '7j/7 de 11h à 23h',
  zones: ['Roubaix', 'Tourcoing', 'Croix', 'Hem', 'Mouvaux', 'Wasquehal'],
  services: ['Sur place', 'À emporter', 'Livraison rapide', 'Précommande'],
  platforms: [
    {
      name: 'Deliveroo',
      url: 'https://deliveroo.fr/fr/menu/lille/roubaix-centre/la-dioza-patisseries-orientales',
      color: 'bg-teal-500',
    },
    {
      name: 'Uber Eats',
      url: 'https://www.ubereats.com/fr/store/la-dioza-pizzeria/PnY4OVvgWuWQtdrsjUHTDg?srsltid=AfmBOoqR9hhtM3gu3WIXMp5C8k5mCgLvy1JtFXvC_tvSPeHgO9bausLn',
      color: 'bg-green-600',
    },
  ],
}

export const images = {
  hero: {
    src: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=2200&q=85',
    alt: 'Pizza artisanale italienne avec fromage fondu et pâte croustillante',
  },
  ambience: {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=82',
    alt: 'Ambiance chaleureuse de restaurant italien moderne',
  },
  ingredients: {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=82',
    alt: 'Ingrédients frais pour pizza artisanale italienne',
  },
  kitchen: {
    src: 'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=1400&q=82',
    alt: 'Pizza premium en cuisine moderne avec fromage fondu',
  },
  delivery: {
    src: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1400&q=82',
    alt: 'Livraison rapide de pizzas chaudes à Roubaix',
  },
  cheese: {
    src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1400&q=82',
    alt: 'Pizza gourmande avec mozzarella fondue et croûte dorée',
  },
  pizzaClassic: {
    src: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=82',
    alt: 'Pizza artisanale classique halal avec mozzarella',
  },
  pizzaMeat: {
    src: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=900&q=82',
    alt: 'Pizza halal généreuse avec viande et fromage fondu',
  },
  pizzaVeggie: {
    src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=82',
    alt: 'Pizza végétarienne artisanale avec légumes frais',
  },
  pizzaSea: {
    src: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=900&q=82',
    alt: 'Pizza artisanale au saumon et mozzarella',
  },
}

export const prices = [
  { name: 'Pizza Solo', price: '8,50 €', note: 'Format individuel' },
  { name: 'Pizza Large', price: '12 €', note: 'À partager' },
  { name: 'Pizza Mega', price: '17,50 €', note: 'Grande faim' },
  { name: 'Menu Deluxe', price: '12 €', note: 'Pizza solo + dessert + boisson 33cl' },
  { name: 'Menu 3 Solo', price: '20 €', note: 'Idéal à plusieurs' },
  { name: 'Menu 2 Mega', price: '29,90 €', note: 'Duo généreux' },
  { name: 'Menu 3 Large', price: '29,90 €', note: 'Repas convivial' },
]

export const pizzas = [
  { name: 'Bolognaise', ingredients: 'viande hachée, mozzarella, poivrons', category: 'meat' },
  { name: 'Rosana', ingredients: 'crème fraîche, bœuf haché, jambon de dinde, mozzarella', category: 'meat' },
  { name: 'Végétarienne', ingredients: 'mozzarella, poivrons, champignons, oignons, olives', category: 'veggie' },
  { name: 'Reine', ingredients: 'mozzarella, jambon de dinde, champignons', category: 'classic' },
  { name: 'Sicilienne', ingredients: 'mozzarella, anchois, olives', category: 'sea' },
  { name: 'Orientale', ingredients: 'mozzarella, merguez, oignons, poivrons', category: 'meat' },
  { name: 'Margherita', ingredients: 'mozzarella, olives', category: 'classic' },
  { name: 'Chicken', ingredients: 'mozzarella, poulet, oignons', category: 'meat' },
  { name: 'Thon', ingredients: 'mozzarella, thon, oignons, poivrons', category: 'sea' },
  { name: 'Carnivore', ingredients: 'mozzarella, viande hachée, merguez', category: 'meat' },
  { name: '3 Fromages', ingredients: 'mozzarella, chèvre, bleu', category: 'classic' },
  { name: 'Saumon', ingredients: 'mozzarella, saumon', category: 'sea' },
]

export const extras = [
  { name: 'Penne box', price: '7,50 €' },
  { name: 'Tagliatelles gratinées', price: '9,50 €' },
  { name: 'Croque Monsieur', price: '3 €' },
  { name: 'Croque Saumon', price: '3,50 €' },
  { name: 'Tiramisu', price: '3,20 €' },
]

export const drinks = [
  { name: 'Soda 33cl', price: '1,50 €' },
  { name: 'Bouteille 1,5L', price: '3 €' },
  { name: 'Bouteille 2L', price: '3,50 €' },
  { name: 'Eau', price: '1 €' },
]

export const gallery = [
  images.hero,
  images.cheese,
  images.ingredients,
  images.ambience,
  images.delivery,
  images.kitchen,
]
