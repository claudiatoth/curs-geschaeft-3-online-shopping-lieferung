// ============================================
// FLASHCARDS - Geschäft Teil 3: Online-Shopping & Lieferung (A2/B1)
// Claudia Toth · 32 carduri cu TTS · substantive Sg·Pl
// ============================================

const flashcardsData = [
    { de: "die Bestellung · die Bestellungen", ro: "comanda · comenzile" },
    { de: "der Warenkorb · die Warenkörbe", ro: "coșul de cumpărături · ... (Umlaut o→ö)" },
    { de: "der Versand", ro: "expedierea / transportul (de obicei Sg.)" },
    { de: "die Lieferung · die Lieferungen", ro: "livrarea · livrările" },
    { de: "das Paket · die Pakete", ro: "coletul · coletele" },
    { de: "die Sendung · die Sendungen", ro: "trimiterea / expedierea · ..." },
    { de: "die Sendungsverfolgung · die Sendungsverfolgungen", ro: "urmărirea coletului (tracking) · ..." },
    { de: "die Lieferadresse · die Lieferadressen", ro: "adresa de livrare · ..." },
    { de: "die Versandkosten", ro: "costurile de transport (numai plural)" },
    { de: "der Liefertermin · die Liefertermine", ro: "data de livrare · ..." },
    { de: "die Bestätigung · die Bestätigungen", ro: "confirmarea · ... (Umlaut a→ä)" },
    { de: "die Rücksendung · die Rücksendungen", ro: "returul (online) · ... (Umlaut u→ü)" },
    { de: "der Bote · die Boten", ro: "curierul · curierii (f: die Botin)" },
    { de: "das Kundenkonto · die Kundenkonten", ro: "contul de client (online) · ..." },
    { de: "der Gutschein · die Gutscheine", ro: "voucherul / codul de reducere · ..." },
    { de: "die Bestellnummer · die Bestellnummern", ro: "numărul de comandă · ..." },
    { de: "das Rücksendelabel · die Rücksendelabels", ro: "eticheta de retur · ..." },
    { de: "die Benachrichtigung · die Benachrichtigungen", ro: "avizul / notificarea · ..." },
    { de: "der Nachbar · die Nachbarn", ro: "vecinul · vecinii (f: die Nachbarin)" },
    { de: "der Onlineshop · die Onlineshops", ro: "magazinul online · ..." },
    { de: "kostenlos / kostenpflichtig", ro: "gratuit / cu plată" },
    { de: "unterwegs / verspätet", ro: "pe drum / întârziat" },
    { de: "bestellen", ro: "a comanda" },
    { de: "liefern", ro: "a livra" },
    { de: "verfolgen", ro: "a urmări (coletul)" },
    { de: "zustellen", ro: "a livra / a înmâna (un colet)" },
    { de: "abholen", ro: "a ridica (un colet)" },
    { de: "in den Warenkorb legen", ro: "a pune în coș" },
    { de: "eine Bestellung aufgeben", ro: "a plasa o comandă" },
    { de: "das Paket zurückschicken", ro: "a trimite coletul înapoi" },
    { de: "Wo ist mein Paket?", ro: "Unde este coletul meu?" },
    { de: "Wann kommt die Lieferung?", ro: "Când vine livrarea?" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: vocabularul cumpărăturilor online și al livrării.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
