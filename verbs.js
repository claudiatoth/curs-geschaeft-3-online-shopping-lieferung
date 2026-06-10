// ============================================
// VERB-KONJUGATION - Geschäft Teil 3 (A2/B1)
// Claudia Toth · verbe pentru comenzi online/livrare · PONS-verified
// Präteritum = IMPERFECT. Perfekt = timp vorbit.
// ============================================

const verbsData = [
    {
        infinitiv: 'bestellen', ro: 'a comanda', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'bestelle', ro: 'comand' },
            { p: 'du', f: 'bestellst', ro: 'comanzi' },
            { p: 'er/sie/es', f: 'bestellt', ro: 'comandă' },
            { p: 'wir', f: 'bestellen', ro: 'comandăm' },
            { p: 'ihr', f: 'bestellt', ro: 'comandați' },
            { p: 'sie/Sie', f: 'bestellen', ro: 'comandă / comandați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'bestellte', ro: 'comandam' },
            { p: 'du', f: 'bestelltest', ro: 'comandai' },
            { p: 'er/sie/es', f: 'bestellte', ro: 'comanda' },
            { p: 'wir', f: 'bestellten', ro: 'comandam (noi)' },
            { p: 'ihr', f: 'bestelltet', ro: 'comandați' },
            { p: 'sie/Sie', f: 'bestellten', ro: 'comandau' }
        ],
        perfekt: 'ich habe die Schuhe online bestellt', perfektRo: 'am comandat pantofii online',
        notes: 'Verb regulat cu prefix NEseparabil be- → Perfekt FĂRĂ „ge-": bestellt. „etwas online / im Internet bestellen" = a comanda online.'
    },
    {
        infinitiv: 'liefern', ro: 'a livra', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'liefere', ro: 'livrez' },
            { p: 'du', f: 'lieferst', ro: 'livrezi' },
            { p: 'er/sie/es', f: 'liefert', ro: 'livrează' },
            { p: 'wir', f: 'liefern', ro: 'livrăm' },
            { p: 'ihr', f: 'liefert', ro: 'livrați' },
            { p: 'sie/Sie', f: 'liefern', ro: 'livrează / livrați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'lieferte', ro: 'livram' },
            { p: 'du', f: 'liefertest', ro: 'livrai' },
            { p: 'er/sie/es', f: 'lieferte', ro: 'livra' },
            { p: 'wir', f: 'lieferten', ro: 'livram (noi)' },
            { p: 'ihr', f: 'liefertet', ro: 'livrați' },
            { p: 'sie/Sie', f: 'lieferten', ro: 'livrau' }
        ],
        perfekt: 'die Firma hat das Paket schnell geliefert', perfektRo: 'firma a livrat coletul repede',
        notes: 'Verb regulat simplu → Perfekt cu „ge-": geliefert. „etwas nach Hause liefern" = a livra acasă. Substantiv înrudit: die Lieferung.'
    },
    {
        infinitiv: 'verfolgen', ro: 'a urmări (coletul)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'verfolge', ro: 'urmăresc' },
            { p: 'du', f: 'verfolgst', ro: 'urmărești' },
            { p: 'er/sie/es', f: 'verfolgt', ro: 'urmărește' },
            { p: 'wir', f: 'verfolgen', ro: 'urmărim' },
            { p: 'ihr', f: 'verfolgt', ro: 'urmăriți' },
            { p: 'sie/Sie', f: 'verfolgen', ro: 'urmăresc / urmăriți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'verfolgte', ro: 'urmăream' },
            { p: 'du', f: 'verfolgtest', ro: 'urmăreai' },
            { p: 'er/sie/es', f: 'verfolgte', ro: 'urmărea' },
            { p: 'wir', f: 'verfolgten', ro: 'urmăream (noi)' },
            { p: 'ihr', f: 'verfolgtet', ro: 'urmăreați' },
            { p: 'sie/Sie', f: 'verfolgten', ro: 'urmăreau' }
        ],
        perfekt: 'ich habe mein Paket online verfolgt', perfektRo: 'mi-am urmărit coletul online',
        notes: 'Verb regulat cu prefix NEseparabil ver- → Perfekt FĂRĂ „ge-": verfolgt. „eine Sendung verfolgen" = a urmări un colet (tracking).'
    },
    {
        infinitiv: 'zustellen', ro: 'a livra / a înmâna', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'stelle ... zu', ro: 'livrez (la ușă)' },
            { p: 'du', f: 'stellst ... zu', ro: 'livrezi' },
            { p: 'er/sie/es', f: 'stellt ... zu', ro: 'livrează' },
            { p: 'wir', f: 'stellen ... zu', ro: 'livrăm' },
            { p: 'ihr', f: 'stellt ... zu', ro: 'livrați' },
            { p: 'sie/Sie', f: 'stellen ... zu', ro: 'livrează / livrați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'stellte ... zu', ro: 'livram' },
            { p: 'du', f: 'stelltest ... zu', ro: 'livrai' },
            { p: 'er/sie/es', f: 'stellte ... zu', ro: 'livra' },
            { p: 'wir', f: 'stellten ... zu', ro: 'livram (noi)' },
            { p: 'ihr', f: 'stelltet ... zu', ro: 'livrați' },
            { p: 'sie/Sie', f: 'stellten ... zu', ro: 'livrau' }
        ],
        perfekt: 'der Bote hat das Paket zugestellt', perfektRo: 'curierul a livrat (înmânat) coletul',
        notes: 'Verb regulat SEPARABIL (zu-): prefixul pleacă la sfârșit (Der Bote stellt das Paket zu). Perfekt cu „-ge-": zu-ge-stellt. Mai formal/oficial decât „liefern" (folosit de poștă/curieri).'
    },
    {
        infinitiv: 'abholen', ro: 'a ridica (un colet)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'hole ... ab', ro: 'ridic' },
            { p: 'du', f: 'holst ... ab', ro: 'ridici' },
            { p: 'er/sie/es', f: 'holt ... ab', ro: 'ridică' },
            { p: 'wir', f: 'holen ... ab', ro: 'ridicăm' },
            { p: 'ihr', f: 'holt ... ab', ro: 'ridicați' },
            { p: 'sie/Sie', f: 'holen ... ab', ro: 'ridică / ridicați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'holte ... ab', ro: 'ridicam' },
            { p: 'du', f: 'holtest ... ab', ro: 'ridicai' },
            { p: 'er/sie/es', f: 'holte ... ab', ro: 'ridica' },
            { p: 'wir', f: 'holten ... ab', ro: 'ridicam (noi)' },
            { p: 'ihr', f: 'holtet ... ab', ro: 'ridicați' },
            { p: 'sie/Sie', f: 'holten ... ab', ro: 'ridicau' }
        ],
        perfekt: 'ich habe das Paket bei der Post abgeholt', perfektRo: 'am ridicat coletul de la poștă',
        notes: 'Verb regulat SEPARABIL (ab-): prefixul pleacă la sfârșit (Ich hole das Paket ab). Perfekt cu „-ge-": ab-ge-holt. „etwas bei der Post / im Paketshop abholen" = a ridica de la poștă.'
    }
];

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = `
        <div class="theory-box" style="background:#fffbeb;border-left:4px solid #f59e0b">
            <h4>📌 Verbe pentru comenzi online și livrare</h4>
            <p>Atenție: <strong>bestellen</strong> (be-) și <strong>verfolgen</strong> (ver-) au prefix neseparabil → Perfekt FĂRĂ „ge-". <strong>liefern</strong> e regulat simplu (geliefert). <strong>zustellen</strong> (zu-) și <strong>abholen</strong> (ab-) sunt separabile → „-ge-" la mijloc.</p>
            <p style="margin-top:8px"><strong>Reamintire:</strong> Präteritum = IMPERFECT (comanda, livra). Perfekt = perfect compus (a comandat, a livrat).</p>
        </div>
    `;
    verbsData.forEach((v, idx) => {
        const auxColor = v.aux === 'sein' ? '#3b82f6' : '#10b981';
        const typeColor = v.type === 'strong' ? '#dc2626' : '#10b981';
        const typeLabel = v.type === 'strong' ? 'TARE (neregulat)' : 'REGULAT';
        let praesensRows = ''; v.praesens.forEach(r => { praesensRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        let praeteritumRows = ''; v.praeteritum.forEach(r => { praeteritumRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        html += `
            <div class="sub-section">
                <div class="sub-section-header" onclick="toggleSubSection(${idx + 100})">
                    <span><strong>${idx + 1}. ${v.infinitiv}</strong> — <em>${v.ro}</em>
                        <span style="background:${typeColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:8px">${typeLabel}</span>
                        <span style="background:${auxColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:4px">Perfekt + ${v.aux}</span>
                    </span>
                    <span class="sub-arrow">▼</span>
                </div>
                <div class="sub-section-content" id="sub-section-${idx + 100}">
                    <h4 style="color:#065f46;margin-bottom:8px">📘 Präsens</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praesensRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📗 Präteritum (imperfect / timp scris)</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praeteritumRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📕 Perfekt (timp vorbit)</h4>
                    <div class="example-box"><div class="de">${v.perfekt}</div><div class="ro">${v.perfektRo}</div></div>
                    <div class="theory-box" style="margin-top:12px;background:#f0fdf4"><p><strong>📌 Notă:</strong> ${v.notes}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

buildVerbs();
