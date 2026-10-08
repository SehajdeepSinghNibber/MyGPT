# MyGPT

A simple React + Vite chat-style interface powered by a Groq/OpenAI-compatible API. The app includes a sidebar, separation panel, chat section, and a reusable AI response helper.

## Features

- Minimal chat UI layout
- Sidebar with expand/collapse interaction
- Dark/light mode toggle
- API integration through a reusable `response` function
- Vite-based frontend setup for quick local development

## Tech Stack

- React 19
- Vite
- OpenAI Node SDK
- React Icons

## Project Structure

```bash
mygpt/
├── src/
│   ├── App.jsx
│   ├── gemini.js
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── ChatSection/
│   │   ├── Seperation/
│   │   ├── Sidebar/
│   │   └── ToggleBtn/
│   └── context/
│       └── UserContext.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add your API key:

```bash
VITE_GROQ_API_KEY=your_api_key_here
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Build

To create a production build:

```bash
npm run build
```

## Preview

To preview the production build locally:

```bash
npm run preview
```

## Notes

- The AI call is defined in `src/gemini.js` and uses the Groq/OpenAI-compatible endpoint.
- The app is currently a front-end UI prototype and can be extended with chat input handling, message state, and conversation history.
