# KTOC Learning Hub

A simple, no-login training hub built with plain React + Vite. No database,
no backend, no authentication — just static pages you can edit directly.

## Running it locally

```
npm install
npm run dev
```
Then open the URL shown in your terminal (usually http://localhost:5173).

## Where to edit things

| What you want to change              | File to edit                          |
|----------------------------------------|----------------------------------------|
| Add/edit/remove training videos         | `src/data/videos.ts`                   |
| Homepage welcome text                   | `src/pages/Intro.tsx` (top of file)    |
| Community page link                     | `src/pages/Community.tsx`              |
| Chatbot link / embed                    | `src/pages/Chatbot.tsx`                |
| Menu tabs (add/remove/rename)            | `src/components/PageShell.tsx`         |
| Logo letter/text, brand colors          | `src/components/PageShell.tsx` (logo), `tailwind.config.js` (colors) |
| Add a brand-new page                    | See instructions at the top of `src/App.tsx` |

## Adding your SharePoint videos

Open `src/data/videos.ts` and edit the `learningVideos` and `oldVideos`
arrays. Each video needs at minimum a `title`, `description`, and `url`
(a normal SharePoint share link works fine — clicking "Watch video" opens
it in a new tab).

If you'd rather have the video play directly on the page instead of opening
a new tab, get an **embed link** from SharePoint (Share → Embed → copy the
URL inside `<iframe src="...">`) and add it as `embedUrl` on that video.

## Deploying

Run `npm run build` — this produces a `dist/` folder of static files you can
upload to any static web host (SharePoint page, Netlify, an internal web
server, etc.).
