# Pizzeria La Dioza

Site vitrine moderne, responsive et chaleureux pour **Pizzeria La Dioza** a Roubaix.

Le site presente les pizzas, les menus, les zones de livraison, les horaires, l'adresse, les avis clients et les appels a l'action pour commander rapidement par telephone.

## Installation

```bash
npm install
```

## Lancement local

```bash
npm run dev
```

Vite affichera une URL locale, par exemple :

```bash
http://localhost:5173
```

## Build production

```bash
npm run build
```

Le build de production est genere dans le dossier :

```bash
dist
```

## Apercu du build

```bash
npm run preview
```

## Deploiement Vercel

1. Pousser le projet sur GitHub.
2. Creer un nouveau projet sur Vercel.
3. Importer le depot GitHub.
4. Laisser Vercel detecter le framework **Vite**.
5. Verifier les parametres :
   - Build Command : `npm run build`
   - Output Directory : `dist`
   - Install Command : `npm install`
6. Lancer le deploiement.

Le dossier `node_modules` et le dossier `dist` ne doivent pas etre ajoutes au depot GitHub. Ils sont ignores via `.gitignore`.

## Images

Les photos principales utilisent des URLs CDN Pexels optimisées pour le web (`auto=compress`, largeur/hauteur cible, crop et qualité ajustée). Les images locales dans `src/assets` servent de fallback si une image distante ne charge pas.
