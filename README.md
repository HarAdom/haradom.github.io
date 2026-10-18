# HarAdom — GitHub Pages

Sito statico e minimale: HTML, CSS, JavaScript vanilla. Nessuna dipendenza, nessun tracciamento, nessun cookie.

## Pubblicazione

Carica **tutti i file di questa cartella nella radice** del repository GitHub `HarAdom/haradom.github.io` (non la cartella `haradom-pages`):

- `index.html`
- `styles.css`
- `script.js`
- `favicon.svg`
- `.nojekyll`
- `README.md` (facoltativo)

Se la pubblicazione su GitHub Pages è già attiva, basta fare commit/push su `main` e visitare https://haradom.github.io/ .

Dal Mac (repository già presente in locale):

```bash
cd haradom.github.io
# copia i file del progetto nella cartella del repository
 git add index.html styles.css script.js favicon.svg .nojekyll README.md
 git commit -m "Add minimal personal website"
 git push origin main
```

## Personalizzare il testo / i viaggi

Apri `index.html` in un editor di testo, come VS Code. Tutti i viaggi sono HTML statico dentro la sezione con `id="journeys"`, facilmente modificabili senza installare nulla.

Le date riportate indicano **solo gli anni** comunicati, non date precise.

## Abilitare il contatto Signal

1. Nell'app Signal, apri le opzioni relative al tuo nome utente e copia il **link di condivisione** (solitamente `https://signal.me/#eu/...`).
2. Apri `script.js` e sostituisci `const SIGNAL_URL = "";` con il tuo URL completo tra virgolette.
3. Salva e pubblica. Il pulsante **Contattami su Signal** apparirà automaticamente.

⚠️ Il sito non può generare da solo un URL Signal valido: il link deve venire dal tuo account. Evita di mettere il numero di telefono sul sito se vuoi mantenere la privacy.

## Chiave pubblica GPG

Il sito mostra il fingerprint già condiviso in passato:

`8625 E5C5 C3C3 ECC4 E33D 99F1 C2A6 355A 79FB 4750`

**Verifica che sia ancora la tua chiave attuale** con `gpg --fingerprint` sul Mac. Per rendere scaricabile la chiave pubblica:

```bash
gpg --armor --export C2A6355A79FB4750 > public-key.asc
```

Metti `public-key.asc` nella radice del repository e in `script.js` imposta:

```javascript
const GPG_PUBLIC_KEY_UPLOADED = true;
```

Poi fai commit e push. Pubblica soltanto la **chiave pubblica**, mai la chiave privata o file generati da `--export-secret-keys`.

## Anteprima sul Mac

Apri `index.html` con Safari oppure avvia un server locale dalla cartella:

```bash
python3 -m http.server 8000
```

Visita `http://localhost:8000/`. Per il pulsante **Copia fingerprint**, usa GitHub Pages in HTTPS oppure localhost.
