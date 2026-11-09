const header = document.querySelector('[data-header]');
const revealItems = document.querySelectorAll('.reveal');
const year = document.querySelector('[data-year]');

const translations = [
  ['.skip-link', 'ข้ามไปยังเนื้อหา'],
  ['nav a[href="#about"]', 'เกี่ยวกับ'], ['nav a[href="#work"]', 'ผลงาน'], ['nav a[href="#skills"]', 'ทักษะ'], ['nav a[href="#contact"]', 'ติดต่อ'],
  ['.hero .eyebrow', '<span></span> นักศึกษาฝึกงานด้าน AI Engineer'],
  ['.hero-intro', 'นักศึกษาชั้นปีที่ 3 สาขาเทคโนโลยีสารสนเทศอัจฉริยะ มหาวิทยาลัยวลัยลักษณ์ มีความสนใจด้านการพัฒนา AI และแอปพลิเคชันที่ขับเคลื่อนด้วย LLM'],
  ['.button-primary', 'ดูผลงาน <span aria-hidden="true">↘</span>'], ['.button-secondary', 'ดาวน์โหลดเรซูเม่'],
  ['.hero-contact-title', 'ติดต่อ'], ['.hero-facts div:nth-child(1) dt', 'อีเมล'], ['.hero-facts div:nth-child(3) dt', 'ที่อยู่'], ['.hero-facts div:nth-child(3) dd', 'ยะลา ประเทศไทย'], ['.hero-facts div:nth-child(4) dt', 'โทรศัพท์'],
  ['.availability', '<span></span> สนใจโอกาสฝึกงาน'], ['.portrait-note', 'ระบบ AI · ระบบอัตโนมัติ · การแก้ปัญหาในโลกจริง'],
  ['#about .section-label p', 'เกี่ยวกับ'],
  ['#about-title', 'ประวัติส่วนตัว'],
  ['.about-detail p:nth-child(1)', 'นักศึกษาชั้นปีที่ 3 สาขาเทคโนโลยีสารสนเทศอัจฉริยะ มหาวิทยาลัยวลัยลักษณ์ มีความสนใจด้านการพัฒนา AI และแอปพลิเคชันที่ขับเคลื่อนด้วย LLM'],
  ['.about-detail p:nth-child(2)', 'มีประสบการณ์ในการออกแบบ Logic ของระบบ AI พัฒนา Workflow แบบ Multi-Agent และเชื่อมต่อ RAG และ MCP สำหรับการค้นคืนข้อมูล มุ่งพัฒนาแอปพลิเคชันอัจฉริยะและระบบอัตโนมัติเพื่อแก้ไขปัญหาในโลกการทำงานจริง'],
  ['#work .section-label p', 'ผลงาน'], ['.work-heading .kicker', 'โปรเจกต์'], ['.project-type', 'ระบบสร้างเอกสารด้วย AI'],
  ['.project-summary h3', 'ระบบสร้างเอกสาร AUN-QA ด้วย AI (Generator Service)'],
  ['.project-summary > p:not(.project-type)', 'พัฒนาระบบสร้างเอกสารประเมินคุณภาพการศึกษาตามเกณฑ์ AUN-QA โดยใช้ Multi-Agent Architecture และ LLM ร่วมกับ RAG เพื่อค้นคืนข้อมูลและ Evidence ที่เกี่ยวข้อง สำหรับสร้างเนื้อหาในเอกสาร DOCX ตาม Template ที่กำหนด'],
  ['.map-source small', 'แหล่งข้อมูล'], ['.map-core small', 'ค้นคืนข้อมูล'], ['.map-node:nth-of-type(3) small', 'ประสานงาน'], ['.map-output small', 'ผลลัพธ์'], ['.contributions-title', 'หน้าที่และผลงาน'],
  ['.contributions li:nth-child(1) p', 'ออกแบบ Logic ของระบบและพัฒนา PS Criterion Agent พร้อมพัฒนา Master Agent Workflow เพื่อควบคุมและประสานการทำงานระหว่าง AI Agents และกระบวนการค้นคืนข้อมูล'],
  ['.contributions li:nth-child(2) p', 'พัฒนาระบบ DOCX Template Parsing เพื่อวิเคราะห์โครงสร้างเอกสาร ทั้ง Section, Heading, Table และ Content Slot ก่อนแปลงเป็น JSON'],
  ['.contributions li:nth-child(3) p', 'เชื่อมต่อระบบ MCP-based Retrieval เพื่อค้นคืนข้อมูลและ Evidence จาก ChromaDB, MongoDB และแหล่งข้อมูล Document/OCR ผ่าน Retrieval Manager'],
  ['.contributions li:nth-child(4) p', 'พัฒนากระบวนการ Verification, Retry และ Reference Mapping เพื่อตรวจสอบผลลัพธ์จาก AI Agent และเชื่อมโยงเนื้อหากับแหล่งข้อมูลต้นฉบับเพื่อให้ตรวจสอบย้อนกลับได้'],
  ['.contributions li:nth-child(5) p', 'พัฒนา Template Injection เพื่อนำเนื้อหาที่ผ่านการตรวจสอบแล้วใส่ลงใน DOCX Template โดยรักษาโครงสร้างเอกสารเดิม รองรับการสร้างไฟล์ DOCX และ HTML Preview'],
  ['.dee-kicker', 'โปรเจกต์'], ['.dee-type', 'โปรเจกต์ส่วนบุคคล · แอปสภาพอากาศและผู้ช่วย AI สำหรับ Android'],
  ['.dee-summary', 'โปรเจกต์ส่วนบุคคลที่รวมการพยากรณ์อากาศและผู้ช่วย AI “ดี้” ไว้ในแอป Android ผู้ใช้สามารถดูอากาศตามตำแหน่ง เช็กพยากรณ์รายชั่วโมง และคุยกับดี้เพื่อสอบถามข้อมูล ขอคำแนะนำในการวางแผนชีวิตประจำวัน หรือสนทนาเรื่องทั่วไปด้วยภาษาไทยที่เข้าใจง่าย'],
  ['.dee-map-app', 'แอป Android'], ['.dee-map-app-value', 'อากาศ<br />แชต'], ['.dee-map-backend', 'ระบบหลังบ้าน'], ['.dee-map-context', 'ข้อมูลประกอบ'], ['.dee-map-context-value', 'พยากรณ์<br />ประวัติสนทนา'], ['.dee-map-output', 'คำตอบจาก AI'],
  ['.dee-concept-title', 'แนวคิดของโปรเจกต์'],
  ['.dee-concept-copy', 'ข้อมูลอากาศมักแสดงเป็นตัวเลขและกราฟที่ผู้ใช้ต้องตีความเอง ดี้จึงใช้ข้อมูลพยากรณ์จาก Open-Meteo เป็นบริบทในการอธิบายสภาพอากาศและให้คำแนะนำตามคำถาม เช่น ควรเตรียมตัวอย่างไรก่อนออกจากบ้าน หรือช่วงเวลาใดเหมาะกับกิจกรรมที่วางแผนไว้'],
  ['.dee-flow-copy', 'แอปส่งคำถามและพิกัดที่ผู้ใช้เลือกไปยัง Backend จากนั้นระบบจัดเตรียมข้อมูลอากาศจาก Open-Meteo และประวัติสนทนาที่เกี่ยวข้อง ก่อนส่งให้ LLM สร้างคำตอบและคำแนะนำกลับมาแสดงในแชต ส่วนหน้าอากาศและกราฟแสดงข้อมูลจาก API โดยตรง'],
  ['.dee-contributions-title', 'สิ่งที่พัฒนา'],
  ['.dee-contributions li:nth-child(1) p', 'พัฒนาแอป Android ด้วย React Native, Expo และ TypeScript พร้อมหน้าอากาศ แชต สถานที่ และการตั้งค่า'],
  ['.dee-contributions li:nth-child(2) p', 'พัฒนา Backend ด้วย Python และ FastAPI เพื่อดึงและจัดเตรียมข้อมูลอากาศปัจจุบัน พยากรณ์รายชั่วโมง และรายวันตามพิกัดผู้ใช้'],
  ['.dee-contributions li:nth-child(3) p', 'เชื่อมต่อ Gemini API โดยใช้ข้อมูลอากาศ ประวัติการสนทนา และข้อความที่ผู้ใช้เลือกตอบกลับเป็นบริบท'],
  ['.dee-contributions li:nth-child(4) p', 'ออกแบบ Prompt ให้ดี้สนทนาอย่างเป็นกันเอง แยกข้อมูลปัจจุบันออกจากพยากรณ์ และให้คำตอบตามข้อมูลที่ได้รับ'],
  ['.dee-contributions li:nth-child(5) p', 'ออกแบบลำดับโมเดลหลักและโมเดลสำรอง รวมถึงรองรับ Local AI ผ่าน Ollama'],
  ['.dee-contributions li:nth-child(6) p', 'พัฒนากราฟอุณหภูมิ ความชื้น ฝน ลม และ UV พร้อมธีมที่เปลี่ยนตามข้อมูลอากาศของชั่วโมงปัจจุบัน'],
  ['.dee-result-title', 'ผลลัพธ์'], ['.dee-result-copy', 'แอป Android ที่รวมการดูพยากรณ์อากาศและการสนทนากับ AI ไว้ในที่เดียว พร้อมไฟล์ APK ให้ดาวน์โหลดและติดตั้งใช้งานจริง'], ['.dee-download', 'ดาวน์โหลด Dee <span aria-hidden="true">↗</span>'], ['.generator-github', 'ดู GitHub <span aria-hidden="true">↗</span>'], ['.dee-github', 'ดู GitHub <span aria-hidden="true">↗</span>'],
  ['#skills .section-label p', 'ความสามารถ'], ['#skills-title', 'เครื่องมือและทักษะ'],
  ['.skill-groups article:nth-child(1) h3', 'AI และ LLM'], ['.skill-groups article:nth-child(2) h3', 'การเขียนโปรแกรม'], ['.skill-groups article:nth-child(3) h3', 'เฟรมเวิร์กและการพัฒนา'], ['.skill-groups article:nth-child(4) h3', 'เครื่องมือ AI และการพัฒนา'],
  ['.education .section-label p', 'การศึกษา'], ['.education .kicker', 'มหาวิทยาลัยวลัยลักษณ์'], ['#education-title', 'เทคโนโลยีสารสนเทศอัจฉริยะ'], ['.education-meta p:nth-child(1) span', 'ชั้นปี'], ['.education-meta p:nth-child(1) strong', 'ปีที่ 3'],
  ['.footer-bottom a', 'กลับขึ้นด้านบน ↑']
];

const localizedElements = translations.map(([selector, thai]) => {
  const element = document.querySelector(selector);
  return element ? { element, thai, english: element.innerHTML } : null;
}).filter(Boolean);
const languageToggle = document.querySelector('#language-switch');
let language = 'en';
try { if (localStorage.getItem('portfolio-language') === 'th') language = 'th'; } catch (_) {}
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  localizedElements.forEach(({ element, thai, english }) => { element.innerHTML = next === 'th' ? thai : english; });
  languageToggle.checked = next === 'th';
  languageToggle.setAttribute('aria-label', next === 'th' ? 'ภาษาไทย (เลือกเพื่อเปลี่ยนเป็น English)' : 'English (select to switch to Thai)');
  try { localStorage.setItem('portfolio-language', next); } catch (_) {}
}
let languageTimer;
let languageRevealTimer;
languageToggle.addEventListener('change', () => {
  const next = languageToggle.checked ? 'th' : 'en';
  clearTimeout(languageTimer);
  clearTimeout(languageRevealTimer);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.remove('language-changing');
    setLanguage(next);
    return;
  }
  document.body.classList.add('language-changing');
  languageTimer = setTimeout(() => {
    setLanguage(next);
    languageRevealTimer = setTimeout(() => document.body.classList.remove('language-changing'), 400);
  }, 450);
});
setLanguage(language);

if (year) year.textContent = new Date().getFullYear();

const typewriter = document.querySelector('.typewriter');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let typewriterTimer;
function startTypewriter(fromIntro = false) {
  clearTimeout(typewriterTimer);
  if (!typewriter) return;
  if (reducedMotion.matches) {
    typewriter.textContent = 'LLM Applications / Multi-Agent | RAG';
    typewriter.classList.remove('is-animated');
    return;
  }
  const words = ['LLM Applications', 'Multi-Agent | RAG'];
  let wordIndex = 0;
  let character = fromIntro ? words[0].length : 0;
  let deleting = fromIntro;
  typewriter.textContent = fromIntro ? words[0] : '';
  typewriter.classList.add('is-animated');
  function tick() {
    const word = words[wordIndex];
    character += deleting ? -1 : 1;
    typewriter.textContent = word.slice(0, character);
    let delay = deleting ? 45 : 95;
    if (!deleting && character === word.length) {
      deleting = true;
      delay = 1800;
    } else if (deleting && character === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 300;
    }
    typewriterTimer = setTimeout(tick, delay);
  }
  typewriterTimer = setTimeout(tick, fromIntro ? 1800 : 200);
}
function runIntro() {
  if (reducedMotion.matches || location.hash) { startTypewriter(); return; }
  document.body.classList.add('intro-active');
  const overlay = document.createElement('div');
  overlay.className = 'intro-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  const text = document.createElement('span');
  text.className = 'intro-text';
  overlay.append(text);
  document.body.prepend(overlay);
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  async function type(value, delay) {
    for (let i = 1; i <= value.length; i++) {
      if (!overlay.isConnected) return;
      text.textContent = value.slice(0, i);
      await wait(delay);
    }
  }
  async function play() {
    text.classList.add('intro-text-multiline');
    await type('LLM Applications\nMulti-Agent | RAG', 45);
    if (!overlay.isConnected) return;
    await wait(700);
    while (text.textContent.length) {
      text.textContent = text.textContent.slice(0, -1);
      await wait(18);
    }
    text.classList.remove('intro-text-multiline');
    await wait(200);
    await type('LLM Applications', 65);
    if (!overlay.isConnected) return;
    await wait(500);
    typewriter.textContent = 'LLM Applications';
    typewriter.classList.add('is-animated');
    document.querySelector('.hero-copy')?.classList.add('is-visible');
    document.body.classList.add('intro-arriving');
    document.body.classList.remove('intro-active');
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    if (!overlay.isConnected) return;
    const from = text.getBoundingClientRect();
    const to = typewriter.getBoundingClientRect();
    const targetFont = parseFloat(getComputedStyle(typewriter).fontSize);
    const sourceFont = parseFloat(getComputedStyle(text).fontSize);
    const targetStyle = getComputedStyle(typewriter);
    const sourceStyle = getComputedStyle(text);
    const scale = targetFont / sourceFont;
    // Align the text baseline, not just the inline element's bounding box.
    const targetBaselineOffset = (parseFloat(targetStyle.lineHeight) || targetFont) - targetFont;
    const sourceBaselineOffset = (parseFloat(sourceStyle.lineHeight) || sourceFont) - sourceFont;
    const baselineAdjustment = (targetBaselineOffset - sourceBaselineOffset * scale) / 2;
    const animation = text.animate([
      { transform: 'translate(0, 0) scale(1)', transformOrigin: 'top left' },
      { transform: `translate(${to.left - from.left}px, ${to.top - from.top + baselineAdjustment+ 5}px) scale(${scale})`, transformOrigin: 'top left' }
    ], { duration: 850, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'forwards' });
    overlay.classList.add('is-fading');
    await animation.finished.catch(() => {});
    overlay.remove();
    document.body.classList.remove('intro-arriving');
    startTypewriter(true);
  }
  play().catch(() => { overlay.remove(); document.body.classList.remove('intro-active', 'intro-arriving'); startTypewriter(); });
}
runIntro();
reducedMotion.addEventListener('change', () => {
  const overlay = document.querySelector('.intro-overlay');
  if (overlay && reducedMotion.matches) {
    overlay.remove();
    document.body.classList.remove('intro-active', 'intro-arriving');
  }
  startTypewriter();
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

window.addEventListener('scroll', () => {
  header?.classList.toggle('has-scrolled', window.scrollY > 30);
}, { passive: true });
