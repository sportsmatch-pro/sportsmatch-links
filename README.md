# SportsMatch Links

Lloc web estàtic amb les pàgines legals i de suport de SportsMatch: termes d'ús, política de privacitat, cookies, eliminació de compte, etc. Construït amb HTML, CSS i JavaScript vanilla. Sense framework ni pas de build.

## Desenvolupament local

Serveix els fitxers directament amb qualsevol servidor HTTP estàtic:

```bash
npx serve .        # http://localhost:3000
# o també:
python3 -m http.server 8080
```

> Les pàgines carreguen contingut des de fitxers JSON (`/lang/`) via `fetch`, per tant cal un servidor HTTP — no funcionen obrint l'HTML directament al navegador (`file://`).

## Estructura

```text
index.html              # Índex de totes les pàgines legals
termsofuse.html         # Termes d'ús
privacity.html          # Política de privacitat
cookies.html            # Política de cookies
delete-account.html     # Instruccions per eliminar el compte
safety.html             # Seguretat
comunity.html           # Normes de comunitat
content.html            # Política de contingut
brand.html              # Ús de marca
music.html              # Política de música
misuse.html             # Ús indegut
promotedposts.html      # Posts promocionats
promotedoffers.html     # Ofertes promocionades
embed.html              # Embed
links.css               # Estils globals
render.js               # Renderitzador de contingut des de JSON
js/
  translate.js          # Sistema de traducció
  language-selector.js  # Selector d'idioma
  menu.js               # Menú de navegació
lang/
  ca-ES.json            # Traduccions en català
  es-ES.json            # Traduccions en castellà
  en-GB.json            # Traduccions en anglès
img/                    # Imatges i recursos gràfics
```

## Deployment a Cloudflare Pages

No hi ha pas de build — Cloudflare Pages serveix els fitxers estàtics directament.

### Configuració inicial (una sola vegada)

1. Ves a [Cloudflare Pages](https://pages.cloudflare.com/) i crea un nou projecte connectat a aquest repositori de GitHub.
2. Configura el build:
   - **Build command:** *(buit, no cal)*
   - **Output directory:** `/` (arrel del projecte)

### Deploy automàtic via GitHub Actions

El fitxer `.github/workflows/deploy.yml` utilitza `cloudflare/pages-action@v1` per fer el deploy automàticament en cada push.

Perquè funcioni cal afegir aquests secrets al repositori de GitHub (**Settings → Secrets and variables → Actions**):

| Secret          | Contingut                            | On trobar-lo                          |
| --------------- | ------------------------------------ | ------------------------------------- |
| `CF_API_TOKEN`  | Token d'API amb permisos per a Pages | Cloudflare → My Profile → API Tokens  |
| `CF_ACCOUNT_ID` | El teu Cloudflare Account ID         | Cloudflare Dashboard → Overview       |
