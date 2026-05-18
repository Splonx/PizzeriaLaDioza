import { siteImages } from "./images";

export const business = {
  name: "Pizzeria La Dioza",
  slogan: "Les meilleures pizzas de Roubaix",
  phone: "03 62 23 01 80",
  phoneHref: "tel:+33362230180",
  address: "3 Rue Pierre Motte, 59100 Roubaix",
  hours: "7j/7 de 11h à 23h",
  email: "contact@pizzeria-la-dioza.fr",
  deliveryArea: "Roubaix, Tourcoing, Croix, Hem, Mouvaux, Wasquehal et villes proches"
};

export const services = [
  "Sur place",
  "À emporter",
  "Livraison rapide",
  "Précommande",
  "Pizzas halal"
];

export const prices = [
  { name: "Pizza Solo", price: "8,50 €", highlight: "Format individuel" },
  { name: "Pizza Large", price: "12 €", highlight: "À partager" },
  { name: "Pizza Mega", price: "17,50 €", highlight: "Grande faim" },
  {
    name: "Menu Deluxe",
    price: "12 €",
    highlight: "1 pizza solo + 1 dessert + 1 boisson 33cl"
  },
  { name: "Menu 3 Solo", price: "20 €", highlight: "Soirée simple" },
  { name: "Menu 2 Mega", price: "29,90 €", highlight: "Duo généreux" },
  { name: "Menu 3 Large", price: "29,90 €", highlight: "Table conviviale" }
];

const imageByStyle = {
  classic: siteImages.classic,
  meat: siteImages.meat,
  veggie: siteImages.veggie
};

export const pizzas = [
  { name: "Bolognaise", ingredients: "viande hachée, mozzarella, poivrons", image: imageByStyle.meat },
  {
    name: "Rosana",
    ingredients: "crème fraîche, bœuf haché, jambon de dinde, mozzarella",
    image: imageByStyle.meat
  },
  {
    name: "Végétarienne",
    ingredients: "mozzarella, poivrons, champignons, oignons, olives",
    image: imageByStyle.veggie
  },
  { name: "Reine", ingredients: "mozzarella, jambon de dinde, champignons", image: imageByStyle.classic },
  { name: "Sicilienne", ingredients: "mozzarella, anchois, olives", image: imageByStyle.classic },
  {
    name: "Paysanne",
    ingredients: "mozzarella, jambon, poivrons, pomme de terre",
    image: imageByStyle.classic
  },
  { name: "Chorizo", ingredients: "mozzarella, chorizo, poivrons", image: imageByStyle.meat },
  {
    name: "L'orientale",
    ingredients: "mozzarella, merguez, oignons, poivrons",
    image: imageByStyle.meat
  },
  { name: "Margherita", ingredients: "mozzarella, olives", image: imageByStyle.classic },
  { name: "Chicken", ingredients: "mozzarella, poulet, oignons", image: imageByStyle.meat },
  { name: "Thon", ingredients: "mozzarella, thon, oignons, poivrons", image: imageByStyle.classic },
  { name: "Carnivore", ingredients: "mozzarella, viande hachée, merguez", image: imageByStyle.meat },
  { name: "3 fromages", ingredients: "mozzarella, chèvre, bleu", image: imageByStyle.classic },
  { name: "Saumon", ingredients: "mozzarella, saumon", image: imageByStyle.classic },
  {
    name: "Savoyarde",
    ingredients: "mozzarella, jambon de dinde, pomme de terre, oignon",
    image: imageByStyle.classic
  },
  {
    name: "Forestière",
    ingredients: "mozzarella, poulet, champignons, pomme de terre",
    image: imageByStyle.veggie
  },
  { name: "Fruits de mer", ingredients: "mozzarella, fruits de mer", image: imageByStyle.classic }
];

export const sides = [
  { name: "Penne box", price: "7,50 €" },
  { name: "Tagliatelles gratinées", price: "9,50 €" },
  { name: "Croque Monsieur", price: "3 €" },
  { name: "Croque Saumon", price: "3,50 €" },
  { name: "Tiramisu", price: "3,20 €" }
];

export const drinks = [
  { name: "Soda 33cl", price: "1,50 €" },
  { name: "Bouteille 1,5L", price: "3 €" },
  { name: "Bouteille 2L", price: "3,50 €" },
  { name: "Eau", price: "1 €" }
];
