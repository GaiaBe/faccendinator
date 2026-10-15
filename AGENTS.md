# Faccendinator - AGENTS.md

## 🏠 Visione del Progetto

**Faccendinator** è un'app web che aiuta le coppie/coinquilini a gestire e dividere equamente le faccende domestiche.

### Problema che risolve
- Litigi per le pulizie in casa
- Non sapere cosa fare e quando
- Disuguaglianza nel carico di lavoro domestico

### Soluzione
- Database predefinito di faccende con frequenze
- Assegnamento automatico basato sui giorni a casa
- Vista pulita con checklist giornaliera/settimanale/mensile

---

## 🛠 Tech Stack

| Tecnologia | Scelta | Motivazione |
|-----------|--------|-------------|
| Framework | React 18 | Conoscenza dell'utente |
| Linguaggio | TypeScript | Type safety |
| Styling | Tailwind CSS | Design minimal, veloce |
| State | Redux Toolkit | Conoscenza dell'utente |
| i18n | i18next | IT + EN |
| Build | Vite | Moderno, veloce |
| PWA | vite-plugin-pwa | Installabile come app |
| Persistenza | localStorage | Semplice, no backend |

---

## 📁 Struttura Progetto

```
src/
├── components/
│   ├── layout/           # Header, Footer, Layout
│   ├── setup/            # SetupWizard, DayPicker, UserForm
│   ├── dashboard/        # Dashboard, TodayView, WeeklyView
│   ├── tasks/            # TaskCard, TaskList, MonthlyTasks
│   └── common/           # Button, Card, Modal riutilizzabili
├── data/
│   └── chores.ts         # Database predefinito faccende
├── store/
│   ├── index.ts          # Configurazione store
│   ├── userSlice.ts      # Dati utenti + giorni
│   └── choresSlice.ts    # Task assegnate + stato
├── utils/
│   ├── assignment.ts     # Algoritmo assegnamento
│   ├── storage.ts        # Persistenza localStorage
│   └── date.ts           # Utility date
├── i18n/
│   ├── index.ts          # Config i18next
│   ├── it.json           # Traduzioni IT
│   └── en.json           # Traduzioni EN
├── types/
│   └── index.ts          # Interfacce TypeScript
├── hooks/
│   └── useLocalStorage.ts # Hook persistenza
└── App.tsx
```

---

## 🎨 Design Guidelines

### Palette Colori
- **Primario**: `#10B981` (verde fresco, pulito)
- **Secondario**: `#6366F1` (indaco per accenti)
- **Background**: `#FFFFFF` / `#0F172A` (dark mode)
- **Testo**: `#1E293B` / `#F8FAFC`
- **Grigio**: `#94A3B8`

### Font
- **Primario**: Inter (moderno, leggibile)
- **Alternate**:系统默认

### Stile
- Card con ombra leggera
- Border radius: 8-12px
- Spaziature multiple di 4 (4, 8, 12, 16, 24, 32)
- Transizioni fluide (200ms)
- Ikon material-style

### Responsive
- Mobile-first
- Breakpoints: 640px (sm), 768px (md), 1024px (lg)

---

## 📏 Coding Conventions

### TypeScript
- Usare interfacce per gli oggetti
- Evitare `any` - usare tipi specifici
- Export default per componenti, named export per utility

### React
- Functional components con hooks
- Un componente per file
- Nome file in PascalCase (es: `TaskCard.tsx`)
- Nome hook con `use` prefix

### CSS/Tailwind
- Classi in ordine: layout → spacing → typography → colors → effects
- Usare `@apply` solo per pattern ripetuti
- Dark mode con `dark:` prefix

### Stato
- Redux Toolkit con slices
- Azioni atomiche
- Derived state con selectors

### Testing (futuro)
- Vitest + React Testing Library
- Test nei file `.test.tsx` accanto al componente

---

## 🚀 Script Disponibili

```bash
npm run dev          # Dev server
npm run build        # Build production
npm run preview      # Preview build
npm run lint         # ESLint check
npm run typecheck    # TypeScript check
```

---

## 📋 Regole di Sviluppo

### PRIMA di iniziare
1. Leggere questo AGENTS.md
2. `npm install` per installare dipendenze
3. `npm run dev` per avviare il server

### Commit messages
- Formato: `tipo(scope): descrizione`
- Esempi:
  - `feat(tasks): aggiunta vista mensile`
  - `fix(assignment): corretto calcolo giorni`
  - `style(design): refactor colori dark mode`

### Branch strategy
- `main`: codice stabile
- `feat/nome-feature`: nuove feature
- `fix/nome-fix`: bug fix

### Code review
- Prima di mergiare, controllare:
  - TypeScript errors (`npm run typecheck`)
  - Linting (`npm run lint`)
  - Test passano (`npm test`)

---

## 🎯 Milestone

### MVP (v1.0)
- [ ] Setup wizard (nomi + giorni)
- [ ] Database faccende predefinite
- [ ] Algoritmo assegnamento
- [ ] Dashboard con vista oggi
- [ ] Vista settimanale
- [ ] Vista mensile
- [ ] Persistenza localStorage
- [ ] i18n IT + EN
- [ ] PWA installabile

### v1.1
- [ ] Dark mode
- [ ] Animazioni micro-interazioni
- [ ] Statistiche个人完成率

### v2.0
- [ ] Export Google Cal/Reminders
- [ ] Scambio turni tra utenti
- [ ] Notifiche push
- [ ] Database customizable

---

## 🤖 Modo di Lavoro: PM + Developer Senior

**IMPORTANTE**: Questo è un progetto formativo. Gaia farà tutto il coding, Claude fa da PM/mentor.

### Il Contratto
- **Gaia** → scrive il codice, fa le decisioni, impara in autonomia
- **Claude** → guida architetturale, code review, domande che aiutano a pensare, best practices
- ❌ Claude NON scrive codice al posto di Gaia
- ✅ Claude suggerisce, spiega, chiede "e se...?" e "hai considerato...?"

### Come Claude aiuta
1. **Pianificazione** → "Ecco i passi in ordine, inizia da X"
2. **Architettura** → "Questa folder/component structure ha senso? Considera Y"
3. **Blocchi** → "Stai facendo A, ma B potrebbe non funzionare. Prova Z"
4. **Code Review** → "Qui c'è un bug/pattern mancante/opportunità di riuso"
5. **Celebrazioni** → Quando qualcosa funziona 🎉

### Pattern della sessione
1. Gaia dice cosa vuole fare
2. Claude chiede domande per aiutarla a verificare il piano (o suggerisce miglioramenti)
3. Gaia scrive il codice
4. Claude reviewa e fa notare (se serve)
5. Repeat

---

## 🤖 Regole per AI Agents (Vecchio - ora deprecato)

### Quando modifichi codice
1. Mantieni la struttura esistente
2. Segui le naming conventions
3. Aggiungi tipi TypeScript ovunque
4. Testa che il codice compili (`npm run typecheck`)
5. Aggiorna questo file se cambi architettura

### Quando crei nuovi componenti
1. Crea il file in `src/components/[category]/`
2. Aggiungi i tipi in `src/types/`
3. Esporta il componente come default
4. Aggiorna gli import in `App.tsx` o nel parent

### Quando lavori sullo store
1. Crea uno slice per dominio
2. Usa Redux Toolkit (createSlice)
3. Mantieni lo state immutabile
4. Aggiungi selectors tipizzati

---

## 📞 Contatti & Risorse

- **Repo**: ~/git/faccendinator
- **Stack**: React + TS + Tailwind + Redux
- **Deploy**: TBD (Vercel/Netlify)

---

*Ultimo aggiornamento: $(date)*
