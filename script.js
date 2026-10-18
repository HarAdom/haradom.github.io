/* HarAdom — local configuration. No analytics, no network requests. */
// Paste the full private Signal share URL here, e.g. the link copied from
// Signal > Settings > Profile > QR code or link. Leave empty to hide the button.
const SIGNAL_URL = "";

// When you export your public GPG key as public-key.asc into this directory,
// change this to true to show the download link. Never publish a PRIVATE key.
const GPG_PUBLIC_KEY_UPLOADED = false;

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#footer-year').textContent = new Date().getFullYear();

if (SIGNAL_URL.startsWith('https://signal.me/')) {
  const signalLink = document.querySelector('#signal-link');
  signalLink.href = SIGNAL_URL;
  signalLink.hidden = false;
  document.querySelector('#signal-missing').hidden = true;
}
if (GPG_PUBLIC_KEY_UPLOADED) {
  document.querySelector('#download-gpg').hidden = false;
}

const copyBtn = document.querySelector('#copy-fingerprint');
copyBtn.addEventListener('click', async () => {
  const fingerprint = document.querySelector('#fingerprint').textContent.replace(/\s/g, '');
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(fingerprint);
    status.textContent = 'Fingerprint copiato negli appunti.';
    copyBtn.firstChild.textContent = 'Copiato! ';
    window.setTimeout(() => { copyBtn.firstChild.textContent = 'Copia fingerprint '; }, 2200);
  } catch (error) {
    status.textContent = 'Seleziona e copia manualmente il fingerprint.';
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#fingerprint'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
});
