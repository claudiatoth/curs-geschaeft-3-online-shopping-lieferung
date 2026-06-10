// ============================================
// EXERCIȚII - Geschäft Teil 3: Online-Shopping & Lieferung (A2/B1)
// Claudia Toth · 5 exerciții interactive
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}

// ============================================
// EX1: Lückentext
// ============================================
const ex1Items = [
    { id: 'a', before: 'Ich lege die Schuhe in den', after: '. (coș)', answer: 'Warenkorb' },
    { id: 'b', before: 'Dann gebe ich die', after: 'auf. (comanda)', answer: 'Bestellung' },
    { id: 'c', before: 'Ab 30 Euro ist der', after: 'kostenlos. (transportul)', answer: 'Versand' },
    { id: 'd', before: 'Mit der', after: 'sehe ich, wo das Paket ist. (urmărirea coletului)', answer: 'Sendungsverfolgung' },
    { id: 'e', before: 'Mein', after: 'ist noch nicht angekommen. (coletul)', answer: 'Paket' },
    { id: 'f', before: 'Die', after: 'ist einen Tag verspätet. (livrarea)', answer: 'Lieferung' },
    { id: 'g', before: 'Wenn die Schuhe nicht passen, mache ich eine', after: '. (retur)', answer: 'Rücksendung', accept: ['Ruecksendung'] },
    { id: 'h', before: 'Ich habe eine', after: 'per E-Mail bekommen. (confirmare)', answer: 'Bestätigung', accept: ['Bestaetigung'] },
    { id: 'i', before: 'Der', after: 'hat das Paket beim Nachbarn abgegeben. (curierul)', answer: 'Bote' },
    { id: 'j', before: 'Die', after: 'sind 4,99 Euro. (costurile de transport)', answer: 'Versandkosten' }
];
function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>✍️ Completează cu cuvântul potrivit.</strong><br>Cuvinte: <em>Warenkorb · Bestellung · Versand · Sendungsverfolgung · Paket · Lieferung · Rücksendung · Bestätigung · Bote · Versandkosten</em></div>`;
    ex1Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.before} <input type="text" id="ex1-${item.id}" placeholder="..." style="width:185px;display:inline-block;"> ${item.after}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx1() { return checkTextItems(ex1Items, 'ex1'); }
function resetEx1() { buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: Multiple Choice
// ============================================
const ex2Items = [
    { id: 'a', q: 'Was ist „der Warenkorb"?', options: ['coșul de cumpărături online', 'coletul', 'curierul'], correct: 0, explanation: 'der Warenkorb = coșul (unde pui produsele înainte de comandă).' },
    { id: 'b', q: 'Was sind „die Versandkosten"?', options: ['costurile de transport', 'prețul produsului', 'taxa de retur'], correct: 0, explanation: 'die Versandkosten = costurile de transport (numai plural).' },
    { id: 'c', q: 'Wozu dient „die Sendungsverfolgung"?', options: ['a vedea unde e coletul', 'a plăti factura', 'a returna marfa'], correct: 0, explanation: 'die Sendungsverfolgung = urmărirea coletului (tracking).' },
    { id: 'd', q: '„Die Lieferung ist verspätet" bedeutet:', options: ['livrarea întârzie', 'livrarea e gratuită', 'livrarea a sosit'], correct: 0, explanation: 'verspätet = întârziat(ă).' },
    { id: 'e', q: 'Was macht man bei einer Rücksendung?', options: ['das Label ausdrucken und das Paket abgeben', 'mehr bestellen', 'die Steuer zahlen'], correct: 0, explanation: 'La retur printezi eticheta (Label) și predai coletul.' }
];
function buildEx2() { buildMC('ex2', ex2Items, '<strong>🎯 Alege varianta corectă.</strong>'); }
function checkEx2() { return checkMC('ex2', ex2Items); }
function resetEx2() { ex2Items.forEach(i => delete mcPicked['ex2-' + i.id]); buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: Match vocabular DE ↔ RO
// ============================================
const ex3Pairs = [
    { de: 'die Bestellung', ro: 'comanda' },
    { de: 'der Warenkorb', ro: 'coșul de cumpărături' },
    { de: 'der Versand', ro: 'expedierea' },
    { de: 'die Lieferung', ro: 'livrarea' },
    { de: 'das Paket', ro: 'coletul' },
    { de: 'die Sendungsverfolgung', ro: 'urmărirea coletului' },
    { de: 'die Versandkosten', ro: 'costurile de transport' },
    { de: 'die Rücksendung', ro: 'returul' },
    { de: 'die Bestätigung', ro: 'confirmarea' },
    { de: 'der Bote', ro: 'curierul' }
];
function buildEx3() { buildClickMatch('ex3', ex3Pairs, '<strong>🔗 Potrivește termenul cu traducerea.</strong><br>Click pe cuvântul german, apoi pe traducerea corectă.', '🇩🇪 Begriff', '🇷🇴 Traducere'); }
function checkEx3() { const s = dmState['ex3']; return { correct: Object.keys(s.matched).length, total: ex3Pairs.length }; }
function resetEx3() { buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Traduceri RO → DE
// ============================================
const ex4Items = [
    { id: 'a', q: 'Aș vrea să comand asta.', answer: 'Ich möchte das bestellen.', accept: ['Ich moechte das bestellen.'] },
    { id: 'b', q: 'Cât sunt costurile de transport?', answer: 'Wie hoch sind die Versandkosten?' },
    { id: 'c', q: 'Când vine livrarea?', answer: 'Wann kommt die Lieferung?' },
    { id: 'd', q: 'Unde este coletul meu?', answer: 'Wo ist mein Paket?' },
    { id: 'e', q: 'Livrarea este întârziată.', answer: 'Die Lieferung ist verspätet.', accept: ['Die Lieferung ist verspaetet.'] },
    { id: 'f', q: 'Aș vrea să trimit coletul înapoi.', answer: 'Ich möchte das Paket zurückschicken.', accept: ['Ich moechte das Paket zurückschicken.', 'Ich möchte das Paket zurueckschicken.', 'Ich moechte das Paket zurueckschicken.'] },
    { id: 'g', q: 'Returul este gratuit?', answer: 'Ist die Rücksendung kostenlos?', accept: ['Ist die Ruecksendung kostenlos?'] },
    { id: 'h', q: 'Am primit o confirmare.', answer: 'Ich habe eine Bestätigung bekommen.', accept: ['Ich habe eine Bestaetigung bekommen.'] }
];
function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>🇷🇴→🇩🇪 Tradu în germană.</strong><br>Scrie propoziția în germană. (Diferențele mici de topică/articol sunt acceptate; punctul final e opțional — compară cu varianta-model.)</div>`;
    ex4Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>🇷🇴 ${item.q}</label><input type="text" id="ex4-${item.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex4-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx4() { return checkTextItems(ex4Items, 'ex4'); }
function resetEx4() { buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

// ============================================
// EX5: Potrivește situația cu expresia-cheie
// ============================================
const ex5Pairs = [
    { de: 'Ich lege es in den Warenkorb.', ro: 'Începi o comandă online' },
    { de: 'Wie hoch sind die Versandkosten?', ro: 'Întrebi de transport' },
    { de: 'Wo ist mein Paket?', ro: 'Coletul nu a venit' },
    { de: 'Die Lieferung ist verspätet.', ro: 'Livrarea întârzie' },
    { de: 'Ist die Rücksendung kostenlos?', ro: 'Vrei să returnezi ceva' }
];
function buildEx5() { buildClickMatch('ex5', ex5Pairs, '<strong>🎭 Potrivește expresia cu situația.</strong><br>Click pe expresia germană, apoi pe situația potrivită.', '🇩🇪 Expresie', '📦 Situație'); }
function checkEx5() { const s = dmState['ex5']; return { correct: Object.keys(s.matched).length, total: ex5Pairs.length }; }
function resetEx5() { buildEx5(); const s = document.getElementById('score-5'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); });
