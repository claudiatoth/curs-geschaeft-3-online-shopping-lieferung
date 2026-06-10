// ============================================
// TEORIE - Geschäft Teil 3: Online-Shopping & Lieferung (A2/B1)
// Claudia Toth · germană pentru cumpărături online și livrare
// Sursă: extindere PONS-verified pe seria Geschäft & Einzelhandel
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Cumpărături online și livrare (Online-Shopping & Lieferung)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">A treia lecție din seria <strong>Geschäft &amp; Einzelhandel</strong>! Azi cumpărăm <strong>online</strong>: înveți pașii unei comenzi (Bestellung), ce e coșul (Warenkorb) și costurile de transport (Versandkosten), cum urmărești un colet (Sendungsverfolgung) și ce faci când livrarea (Lieferung) întârzie. La final ascult un dialog real cu Herr Fischer de la serviciul de livrare.</div>
                </div>
            </div>
            <div class="theory-box" style="background:#fef3c7;border-color:#f59e0b;">
                <h4>✍️ Notă despre diacritice (ä, ö, ü, ß)</h4>
                <p>Verificarea e blândă: poți scrie Umlaut-urile corect (<em>der Warenkorb, die Warenkörbe, die Bestätigung</em>) sau cu varianta de înlocuire (<em>Warenkoerbe, Bestaetigung</em>). Ambele sunt acceptate. La fel, punctul de la finalul propoziției e opțional.</p>
            </div>
        </div>
    </div>

    <!-- 1: Vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📦 2. Vocabular: comenzi online și livrare (Grundwortschatz)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-vocabular.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#fef3c7;border-color:#f59e0b;">
                <h4>🚨 Substantivele se învață ÎNTOTDEAUNA cu pluralul</h4>
                <p>În germană pluralul e imprevizibil (-e, -en, Umlaut sau identic). De aceea fiecare substantiv apare aici la <strong>singular · plural</strong>. Învață-le împreună, ca pe o pereche.</p>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Exemplu (DE)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">die Bestellung</td><td class="verb">die Bestellungen</td><td>comanda · comenzile</td><td><em>Meine Bestellung ist unterwegs.</em></td></tr>
                    <tr><td class="verb">der Warenkorb</td><td class="verb">die Warenkörbe</td><td>coșul de cumpărături · ... (Umlaut o→ö)</td><td><em>Ich lege das Produkt in den Warenkorb.</em></td></tr>
                    <tr><td class="verb">der Versand</td><td class="verb">— (de obicei Sg.)</td><td>expedierea / transportul</td><td><em>Der Versand dauert zwei Tage.</em></td></tr>
                    <tr><td class="verb">die Lieferung</td><td class="verb">die Lieferungen</td><td>livrarea · livrările</td><td><em>Die Lieferung kommt morgen.</em></td></tr>
                    <tr><td class="verb">das Paket</td><td class="verb">die Pakete</td><td>coletul · coletele</td><td><em>Das Paket ist schon da.</em></td></tr>
                    <tr><td class="verb">die Sendung</td><td class="verb">die Sendungen</td><td>trimiterea / expedierea · ...</td><td><em>Die Sendung ist registriert.</em></td></tr>
                    <tr><td class="verb">die Sendungsverfolgung</td><td class="verb">die Sendungsverfolgungen</td><td>urmărirea coletului (tracking) · ...</td><td><em>Mit der Sendungsverfolgung sehe ich das Paket.</em></td></tr>
                    <tr><td class="verb">die Lieferadresse</td><td class="verb">die Lieferadressen</td><td>adresa de livrare · ...</td><td><em>Bitte prüfen Sie die Lieferadresse.</em></td></tr>
                    <tr><td class="verb">die Versandkosten</td><td class="verb">— (numai Pl.)</td><td>costurile de transport (numai plural)</td><td><em>Die Versandkosten sind 4,99 Euro.</em></td></tr>
                    <tr><td class="verb">der Liefertermin</td><td class="verb">die Liefertermine</td><td>data / termenul de livrare · ...</td><td><em>Der Liefertermin ist Freitag.</em></td></tr>
                    <tr><td class="verb">die Bestätigung</td><td class="verb">die Bestätigungen</td><td>confirmarea · ...</td><td><em>Ich habe eine Bestätigung per E-Mail bekommen.</em></td></tr>
                    <tr><td class="verb">die Rücksendung</td><td class="verb">die Rücksendungen</td><td>returul (online) · ... (Umlaut u→ü)</td><td><em>Die Rücksendung ist kostenlos.</em></td></tr>
                    <tr><td class="verb">der Bote / die Botin</td><td class="verb">die Boten / die Botinnen</td><td>curierul · curierii</td><td><em>Der Bote bringt das Paket.</em></td></tr>
                    <tr><td class="verb">das Kundenkonto</td><td class="verb">die Kundenkonten</td><td>contul de client (online) · ...</td><td><em>Ich logge mich in mein Kundenkonto ein.</em></td></tr>
                    <tr><td class="verb">der Gutschein</td><td class="verb">die Gutscheine</td><td>voucherul / codul de reducere · ...</td><td><em>Ich habe einen Gutschein-Code.</em></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 2: Schritte beim Online-Kauf + Probleme -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>⚖️ 3. Pașii unei comenzi · Când coletul nu vine</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-schritte.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#f0fdf4;">
                <h4>💡 De la coș la ușă — pașii unei comenzi online</h4>
                <p><strong>Warenkorb</strong> (coș) → <strong>Bestellung</strong> (comandă) → <strong>Bezahlung</strong> (plată) → <strong>Versand</strong> (expediere) → <strong>Sendungsverfolgung</strong> (urmărire) → <strong>Lieferung</strong> (livrare la ușă).</p>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Termen / situație (DE)</th><th>Ce înseamnă (RO)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">in den Warenkorb legen</td><td>a pune în coș</td></tr>
                    <tr><td class="verb">die Bestellung abschicken</td><td>a trimite comanda</td></tr>
                    <tr><td class="verb">kostenloser Versand</td><td>transport gratuit</td></tr>
                    <tr><td class="verb">das Paket ist unterwegs</td><td>coletul e pe drum</td></tr>
                    <tr><td class="verb">die Lieferung ist verspätet</td><td>livrarea este întârziată</td></tr>
                    <tr><td class="verb">das Paket ist beschädigt / verloren</td><td>coletul e deteriorat / pierdut</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Sfat util: după ce trimiți o comandă, primești mereu o <strong>Bestätigung</strong> (confirmare) pe e-mail, cu un număr de urmărire. Cu <strong>Sendungsverfolgung</strong> vezi unde e coletul în fiecare moment. Dacă <strong>die Lieferung ist verspätet</strong> sau coletul nu vine, sună la serviciul de livrare — ai dreptul la informații sau la banii înapoi. 💚</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Situații practice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎭 4. Situații practice (comandă online & livrare)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-situatii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box"><h4>🛒 A face o comandă — Eine Bestellung aufgeben</h4>
                <p class="de"><em>„Ich lege die Schuhe in den Warenkorb und gebe die Bestellung auf. Wie hoch sind die Versandkosten?" — „Ab 30 Euro ist der Versand kostenlos."</em></p>
                <p class="ro">Expresii: <strong>in den Warenkorb legen</strong> (a pune în coș) · <strong>eine Bestellung aufgeben</strong> (a plasa o comandă) · <strong>kostenloser Versand</strong> (transport gratuit)</p>
            </div>
            <div class="theory-box"><h4>📍 Unde e coletul? — Wo ist mein Paket?</h4>
                <p class="de"><em>„Wo ist mein Paket? Es sollte gestern kommen." — „Mit der Sendungsverfolgung sehe ich: Es ist unterwegs und kommt heute."</em></p>
                <p class="ro">Expresii: <strong>die Sendungsverfolgung</strong> (urmărirea coletului) · <strong>unterwegs</strong> (pe drum) · <strong>es sollte ... kommen</strong> (ar fi trebuit să vină)</p>
            </div>
            <div class="theory-box"><h4>⏰ Livrarea întârzie — Die Lieferung ist verspätet</h4>
                <p class="de"><em>„Die Lieferung ist drei Tage verspätet. Was kann ich tun?" — „Ich prüfe das sofort und melde mich bei Ihnen."</em></p>
                <p class="ro">Expresii: <strong>verspätet sein</strong> (a fi întârziat) · <strong>Was kann ich tun?</strong> (Ce pot face?) · <strong>sich melden</strong> (a reveni cu un răspuns)</p>
            </div>
            <div class="theory-box"><h4>↩️ A returna online — Eine Rücksendung</h4>
                <p class="de"><em>„Die Schuhe passen nicht. Wie funktioniert die Rücksendung?" — „Sie drucken das Rücksendelabel aus und geben das Paket bei der Post ab."</em></p>
                <p class="ro">Expresii: <strong>die Rücksendung</strong> (returul) · <strong>das Label ausdrucken</strong> (a printa eticheta) · <strong>bei der Post abgeben</strong> (a preda la poștă)</p>
            </div>
            <div class="theory-box"><h4>🚪 Nu ești acasă — Der Bote war da</h4>
                <p class="de"><em>„Ich war nicht zu Hause. Wo ist mein Paket?" — „Der Bote hat es beim Nachbarn abgegeben. Hier ist die Benachrichtigung."</em></p>
                <p class="ro">Expresii: <strong>nicht zu Hause sein</strong> (a nu fi acasă) · <strong>beim Nachbarn abgeben</strong> (a lăsa la vecin) · <strong>die Benachrichtigung</strong> (avizul)</p>
            </div>
        </div>
    </div>

    <!-- 4: Expresii utile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>💬 5. Expresii utile (online & la livrare)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-expresii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Expresie (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Ich möchte das bestellen.</td><td>Aș vrea să comand asta.</td></tr>
                    <tr><td class="verb">Wie hoch sind die Versandkosten?</td><td>Cât sunt costurile de transport?</td></tr>
                    <tr><td class="verb">Wann kommt die Lieferung?</td><td>Când vine livrarea?</td></tr>
                    <tr><td class="verb">Wo ist mein Paket?</td><td>Unde este coletul meu?</td></tr>
                    <tr><td class="verb">Die Lieferung ist verspätet.</td><td>Livrarea este întârziată.</td></tr>
                    <tr><td class="verb">Ich möchte das Paket zurückschicken.</td><td>Aș vrea să trimit coletul înapoi.</td></tr>
                    <tr><td class="verb">Ist die Rücksendung kostenlos?</td><td>Returul este gratuit?</td></tr>
                    <tr><td class="verb">Ich habe eine Bestätigung bekommen.</td><td>Am primit o confirmare.</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Cumpărăturile online sunt comode, dar e bine să știi cuvintele potrivite când ceva nu merge. „Wo ist mein Paket?" și „Die Lieferung ist verspätet" îți rezolvă majoritatea problemelor. Verifică mereu <strong>Versandkosten</strong> și politica de <strong>Rücksendung</strong> înainte de comandă. Acum ascultă dialogul cu Herr Fischer de la serviciul de livrare. 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
