import fallbackHero from "../assets/hero-pizza.png";
import fallbackClassic from "../assets/pizza-margherita.png";
import fallbackMeat from "../assets/pizza-carnivore.png";
import fallbackVeggie from "../assets/pizza-vegetarienne.png";

const pexels = (id, width = 1200, height = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop&q=82`;

export const siteImages = {
  hero: {
    src: pexels("31007263", 1920, 1280),
    fallback: fallbackHero,
    alt: "Pizza artisanale italienne avec fromage fondu et pâte croustillante chez Pizzeria La Dioza à Roubaix"
  },
  classic: {
    src: pexels("32605621", 900, 675),
    fallback: fallbackClassic,
    alt: "Pizza Margherita artisanale avec mozzarella fondue, basilic frais et pâte napolitaine"
  },
  meat: {
    src: pexels("16586525", 900, 675),
    fallback: fallbackMeat,
    alt: "Pizza artisanale généreuse avec viande, fromage fondu et croûte dorée"
  },
  veggie: {
    src: pexels("17637108", 900, 675),
    fallback: fallbackVeggie,
    alt: "Pizza végétarienne artisanale avec légumes frais, mozzarella et pâte croustillante"
  },
  pizzeria: {
    src: pexels("34425639", 1100, 825),
    fallback: fallbackClassic,
    alt: "Ambiance pizzeria italienne chaleureuse avec pizzas artisanales sur table en bois"
  },
  oven: {
    src: pexels("29021745", 1100, 825),
    fallback: fallbackHero,
    alt: "Pizza italienne cuite au four avec fromage fondu et croûte dorée"
  },
  delivery: {
    src: pexels("4109069", 1100, 825),
    fallback: fallbackMeat,
    alt: "Livraison rapide de pizzas chaudes à Roubaix et villes proches"
  },
  ingredients: {
    src: pexels("10048321", 1100, 825),
    fallback: fallbackVeggie,
    alt: "Ingrédients frais de cuisine italienne pour pizzas artisanales"
  }
};

export const galleryImages = [
  siteImages.classic,
  siteImages.pizzeria,
  siteImages.oven,
  siteImages.ingredients,
  siteImages.delivery,
  siteImages.veggie
];
