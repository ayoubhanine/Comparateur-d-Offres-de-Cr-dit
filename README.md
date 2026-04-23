# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## ⚡ Installation de Tailwind CSS avec React (Vite)

### 1. Créer un projet React avec Vite

```bash
npm create vite@latest my-project
cd my-project
npm install
```

---

### 2. Installer Tailwind CSS

```bash
npm install -D tailwindcss @tailwindcss/vite
```

---

### 3. Configurer Vite

Dans `vite.config.js` :

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

### 4. Ajouter Tailwind dans ton CSS

Dans `src/index.css` :

```css
@import "tailwindcss";
```

---

### 5. Lancer le projet

```bash
npm run dev
```

---

### 6. Tester Tailwind

Dans `App.jsx` :

```jsx
function App() {
  return (
    <h1 className="text-3xl font-bold text-blue-500">
      Tailwind fonctionne 
    </h1>
  );
}

export default App;
```

---

##  Résultat

Si le texte apparaît en bleu avec une grande taille, Tailwind est bien configuré.

---

##  Remarques

* Tailwind fonctionne avec des **classes utilitaires** (utility-first)
* Tu peux styliser directement dans `className`
* Compatible avec React, Vite et projets modernes

---

