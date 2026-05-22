# ✦ Noir Ink Studio — Landing Page

Site estático para estúdio de tatuagem desenvolvido com **Astro + TypeScript**.

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse em: [http://localhost:4321](http://localhost:4321)

### Build para produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

---

## 📁 Estrutura do Projeto

```
src/
  components/
    Header.astro          — Cabeçalho com navegação responsiva
    Footer.astro          — Rodapé com links, contato e horários
    Hero.astro            — Banner principal da home
    SectionTitle.astro    — Título reutilizável de seções
    ArtistPreview.astro   — Preview do artista na home
    ArtGallery.astro      — Galeria com filtro por categoria
    GalleryModal.astro    — Modal de detalhe das tatuagens
    ContactSection.astro  — Seção de contato + horários
    LocationSection.astro — Mapa e endereço
    WhatsAppButton.astro  — Botão flutuante de WhatsApp
    TestimonialSection.astro — Depoimentos de clientes
    FAQSection.astro      — Perguntas frequentes

  layouts/
    BaseLayout.astro      — Layout base com Header + Footer

  pages/
    index.astro           — Home
    artista.astro         — Página do artista
    artes.astro           — Galeria de tatuagens
    piercing.astro        — Galeria de piercings

  data/
    siteConfig.ts         — ⚙️ Configurações gerais do site
    artist.ts             — Dados do artista
    arts.ts               — Lista de tatuagens
    piercings.ts          — Lista de piercings
    testimonials.ts       — Depoimentos de clientes
    faq.ts                — Perguntas frequentes

  styles/
    global.css            — Estilos globais e variáveis CSS
```

---

## ⚙️ Configuração

Todas as configurações ficam em `src/data/siteConfig.ts`:

```ts
export const siteConfig = {
  name: "Noir Ink Studio",
  contact: {
    whatsapp: "5531999887766",   // Número com DDI
    instagram: "@noirinkstudiio",
    email: "contato@noirinkstudio.com.br",
  },
  address: { ... },
  hours: [ ... ],
  showPiercing: true,   // ← false para ocultar a seção e página de Piercing
};
```

### Ativar/desativar Piercing

```ts
// src/data/siteConfig.ts
showPiercing: true   // mostra a aba e página de Piercing
showPiercing: false  // oculta completamente
```

---

## 🖼️ Substituir imagens

As imagens usam placeholders do Unsplash. Para trocar, edite os arquivos em `src/data/`:

- `arts.ts` — campo `image` em cada tatuagem
- `piercings.ts` — campo `image` em cada piercing
- `artist.ts` — campos `photo` e `photoCover`

---

## 🎨 Personalização Visual

As variáveis CSS ficam em `src/styles/global.css`:

```css
:root {
  --gold: #c9a84c;        /* Cor de destaque dourada */
  --black: #080808;       /* Fundo principal */
  --white: #f5f0eb;       /* Texto claro */
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'Cormorant Garamond', serif;
  --font-mono: 'DM Mono', monospace;
}
```

---

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: 1280px+
- **Tablet**: 768px–900px
- **Mobile**: até 767px

---

## 🔗 WhatsApp

Os links de WhatsApp usam `encodeURIComponent` para mensagens pré-preenchidas. Para mudar as mensagens, edite os componentes ou os arquivos de páginas diretamente.

---

## 📦 Stack

| Tecnologia | Uso |
|---|---|
| Astro 4 | Framework principal (SSG) |
| TypeScript | Tipagem dos dados |
| CSS Customizado | Design system completo |
| Google Fonts | Bebas Neue + Cormorant Garamond + DM Mono |
| Unsplash | Imagens placeholder |

---

*Desenvolvido para Noir Ink Studio — Arte que dura para sempre na sua pele.*
