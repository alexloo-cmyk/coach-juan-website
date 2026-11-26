/**
 * COACH JUAN — QUICK CONFIGURATION
 * Replace WhatsApp number, checkout links & social handles below.
 */
const SITE_CONFIG = {
  whatsappNumber: "6281234567890", // Format: 628xxxxxxxxxx (no +, no spaces)
  instagramHandle: "@coachjuan",
  tiktokHandle: "@coachjuan",
  ebookDirectCheckoutUrl: "", // Optional: Gumroad / Stripe / Lynk.id link. Leave empty to order via WhatsApp.
};

/* Bilingual Copy Dictionary (EN / ID) */
const COPY = {
  en: {
    announcement: "Ebooks $15 • The Roman Diet $25 • Online 10 Sessions $100 • Live 1-on-1 $120 (Jakarta, Gading Serpong & BSD)",
    announcementCta: "Match Your Plan",
    heroTitle: "From 42 kg to champion.",
    heroSub: "Bullied for being skinny at 14, Juan built himself to 86 kg and 5 armwrestling titles. Now he coaches you: ebooks from $15, coaching from $100.",
    storyKicker: "JUAN'S STORY",
    storyTitle: "From 42 kg to the body he once dreamed of.",
    statThen: "at 14 • 178 cm",
    statNow: "today • 190 cm",
    story1t: "Skinny and bullied",
    story1p: "42 kg at 178 cm. He was bullied for his body and lost his confidence. One day he decided he was done feeling that way.",
    story2t: "4–5 hours a day of study",
    story2p: "Research papers, studies, real-world coaches. How muscle grows, what makes you strong, how food, sleep and recovery change your body.",
    story3t: "Tested on himself",
    story3p: "He questioned everything, tried it on his own body, kept what worked and dropped what didn't. Year after year. Then came 5 armwrestling titles and a powerlifting medal.",
    story4t: "86 kg. Now he coaches you.",
    story4p: "No trends, no random workouts, no guessing. Understand your body, follow proven principles, build habits that last.",
    storyQuote: "“I know what it feels like to look in the mirror and wish things were different. And I know what's possible when you decide to do something about it.”",
    storyCta: "See plans & prices",
    storyCtaNote: "Ebooks from $15 • Coaching from $100",
    how1: "Pick a book or coaching plan",
    how2: "Tap the button, chat with Juan on WhatsApp",
    how3: "Pay, get your PDF or book your first session",
    faqTitle: "Before you start",
    faqCta: "Ask Juan on WhatsApp",
    faq1q: "I'm a total beginner. Is this for me?",
    faq1a: "Yes. Juan started at 42 kg himself. The ebooks start from the basics, and coaching is built around where you are now.",
    faq2q: "How do I get the ebook after paying?",
    faq2a: "Tap Get, chat with Juan on WhatsApp, pay, and the PDF is sent to you. Read it on your phone at the gym.",
    faq3q: "Which one should I pick?",
    faq3a: "Want to train on your own? Start with an ebook ($15) plus The Roman Diet ($25). Want Juan checking your form and plan? Online coaching ($100 for 10 sessions). Near Jakarta, Gading Serpong or BSD? Live 1-on-1 ($120).",
    faq4q: "I have an old injury. Can I still train?",
    faq4a: "Rehab and injury prevention are part of what Juan coaches. Tell him about it on WhatsApp first so your plan works around it.",
    faq5q: "Where do live sessions happen?",
    faq5a: "Jakarta, Gading Serpong and BSD. Live slots are limited each month, so message early. Outside these areas, pick online coaching.",
    sampleCta: "Get the free sample on WhatsApp",
    barTitle: "From 42 kg to 86 kg",
    barSub: "Ebooks $15 • Coaching $100",
    barCta: "See plans",
    credsKicker: "PROVEN ON THE TABLE",
    credsTitle: "5 titles. 7 podiums.",
    credsSub: "Juan competes in armwrestling and powerlifting, so he coaches strength that is real, not just a look.",
    credsChips: "HE COACHES",
    goalsKicker: "START HERE",
    goalsTitle: "What do you want to change?",
    goalsSub: "Tap one. Juan matches you to the right book or coaching plan in 30 seconds.",
    g1: "Build muscle", g1s: "Bigger, wider, stronger",
    g2: "Lose fat", g2s: "Lean and defined",
    g3: "Fix my diet", g3s: "Eat right without starving",
    g4: "Get strong, pain-free", g4s: "Rehab, powerlifting, armwrestling",
    baBefore: "Before",
    baAfter: "Now · 86 kg",
    st1: "1st place armwrestling",
    st2: "podiums",
    st3: "since age 14",
    heroKicker: "5X 1ST PLACE ARMWRESTLING • POWERLIFTING MEDALIST • FROM $15",
    heroB1: "Skinny-to-5x Armwrestling Champion & Powerlifting Medalist proven system",
    heroB2: "Fat Loss, Muscle Gain, Rehabilitation, Injury Prevention & Mobility",
    heroB3: "Online Coaching (10 Sessions $100) & Live 1-on-1 ($120) in Jakarta, Gading Serpong & BSD",
    heroCtaPrimary: "See plans & prices",
    heroCtaSecondary: "Help me choose",
    collectionTitle: "All books & coaching",
    collectionSub:
      "Split-specific ebooks, The Roman Diet nutrition guide, 10-session online coaching, and live 1-on-1 sessions in Jakarta, Gading Serpong & BSD.",
    counterNote: "Limited monthly live 1-on-1 slots in Jakarta, Gading Serpong & BSD.",
    eliteTitle: "Pick your starting point.",
    eliteSub:
      "Start with a $15 physique ebook, master your nutrition with The Roman Diet, or train directly with Juan online or in-person.",
    proofTitle: "Client results",
    proofBody:
      "Real fat loss. Real lean muscle. From dramatic client body recompositions to Juan's own journey from super-skinny teenager to 5x 1st Place Armwrestling Champion — the system works for every starting point.",
    proofCta: "See plans & prices",
    bannerTitle: "Live 1-on-1 Coaching in Jakarta, Gading Serpong & BSD.",
    bannerSub:
      "Lock in your $120 Live 1-on-1 package for hands-on form correction, injury prevention & strength coaching — or join 10-Session Online Coaching ($100) from anywhere.",
    bannerCta1: "Ask Juan on WhatsApp",
    bannerCta2: "Help me choose",
  },
  id: {
    announcement: "Ebook $15 • The Roman Diet $25 • Online 10 Sesi $100 • Live 1-on-1 $120 (Jakarta, Gading Serpong & BSD)",
    announcementCta: "Cek Program Cocok",
    heroTitle: "Dari 42 kg jadi juara.",
    heroSub: "Di-bully karena kurus di usia 14, Juan membangun tubuhnya sampai 86 kg dan 5 gelar armwrestling. Sekarang dia melatih kamu: ebook mulai $15, coaching mulai $100.",
    storyKicker: "CERITA JUAN",
    storyTitle: "Dari 42 kg ke tubuh yang dulu cuma bisa dia impikan.",
    statThen: "usia 14 • 178 cm",
    statNow: "sekarang • 190 cm",
    story1t: "Kurus dan di-bully",
    story1p: "42 kg dengan tinggi 178 cm. Dia di-bully karena fisiknya dan kehilangan rasa percaya diri. Sampai suatu hari dia memutuskan untuk berubah.",
    story2t: "Belajar 4–5 jam sehari",
    story2p: "Jurnal ilmiah, riset, pengalaman nyata para coach. Cara otot tumbuh, apa yang bikin kuat, dan bagaimana makan, tidur dan recovery mengubah tubuh.",
    story3t: "Diuji di tubuh sendiri",
    story3p: "Dia mempertanyakan semuanya, mencobanya sendiri, menyimpan yang berhasil dan membuang yang tidak. Tahun demi tahun. Lalu datang 5 gelar armwrestling dan medali powerlifting.",
    story4t: "86 kg. Sekarang dia melatih kamu.",
    story4p: "Bukan ikut tren, bukan latihan asal, bukan tebak-tebakan. Pahami tubuhmu, ikuti prinsip yang terbukti, bangun kebiasaan yang bertahan.",
    storyQuote: "“Saya tahu rasanya bercermin dan berharap semuanya berbeda. Dan saya tahu apa yang mungkin terjadi saat kamu memutuskan untuk bertindak.”",
    storyCta: "Lihat paket & harga",
    storyCtaNote: "Ebook mulai $15 • Coaching mulai $100",
    how1: "Pilih buku atau paket coaching",
    how2: "Tekan tombol, chat Juan di WhatsApp",
    how3: "Bayar, terima PDF atau jadwalkan sesi pertama",
    faqTitle: "Sebelum mulai",
    faqCta: "Tanya Juan di WhatsApp",
    faq1q: "Saya pemula total. Apakah cocok?",
    faq1a: "Ya. Juan sendiri mulai dari 42 kg. Ebook dimulai dari dasar, dan coaching disesuaikan dengan kondisimu sekarang.",
    faq2q: "Bagaimana saya menerima ebook setelah bayar?",
    faq2a: "Tekan Get, chat Juan di WhatsApp, bayar, lalu PDF dikirim ke kamu. Baca langsung di HP saat di gym.",
    faq3q: "Saya harus pilih yang mana?",
    faq3a: "Mau latihan sendiri? Mulai dengan ebook ($15) plus The Roman Diet ($25). Mau Juan cek form dan program kamu? Online coaching ($100 untuk 10 sesi). Dekat Jakarta, Gading Serpong atau BSD? Live 1-on-1 ($120).",
    faq4q: "Saya punya cedera lama. Masih bisa latihan?",
    faq4a: "Rehabilitasi dan pencegahan cedera adalah bagian dari coaching Juan. Ceritakan dulu di WhatsApp supaya programmu menyesuaikan.",
    faq5q: "Di mana sesi live diadakan?",
    faq5a: "Jakarta, Gading Serpong dan BSD. Slot live terbatas tiap bulan, jadi chat lebih awal. Di luar area ini, pilih online coaching.",
    sampleCta: "Ambil sample gratis di WhatsApp",
    barTitle: "Dari 42 kg ke 86 kg",
    barSub: "Ebook $15 • Coaching $100",
    barCta: "Lihat paket",
    credsKicker: "TERBUKTI DI MEJA",
    credsTitle: "5 gelar. 7 podium.",
    credsSub: "Juan bertanding armwrestling dan powerlifting, jadi dia melatih kekuatan yang nyata, bukan cuma penampilan.",
    credsChips: "DIA MELATIH",
    goalsKicker: "MULAI DI SINI",
    goalsTitle: "Apa yang ingin kamu ubah?",
    goalsSub: "Pilih satu. Juan cocokkan kamu ke buku atau paket coaching yang tepat dalam 30 detik.",
    g1: "Tambah otot", g1s: "Lebih besar, lebar, kuat",
    g2: "Turunkan lemak", g2s: "Ramping dan berotot",
    g3: "Perbaiki pola makan", g3s: "Makan benar tanpa kelaparan",
    g4: "Kuat tanpa cedera", g4s: "Rehab, powerlifting, armwrestling",
    baBefore: "Dulu",
    baAfter: "Sekarang · 86 kg",
    st1: "juara 1 armwrestling",
    st2: "podium",
    st3: "sejak usia 14",
    heroKicker: "5X JUARA 1 ARMWRESTLING • MEDALI POWERLIFTING • MULAI $15",
    heroB1: "Sistem terbukti dari super kurus menjadi 5x Juara 1 Armwrestling & Medali Powerlifting",
    heroB2: "Fat Loss, Muscle Gain, Rehabilitasi, Pencegahan Cedera & Mobilitas",
    heroB3: "Online Coaching (10 Sesi $100) & Live 1-on-1 ($120) di Jakarta, Gading Serpong & BSD",
    heroCtaPrimary: "Lihat paket & harga",
    heroCtaSecondary: "Bantu saya pilih",
    collectionTitle: "Semua buku & coaching",
    collectionSub:
      "Ebook split latihan, buku nutrisi The Roman Diet, Online Coaching 10 sesi, hingga Live 1-on-1 di Jakarta, Gading Serpong & BSD.",
    counterNote: "Kuota bulanan Live 1-on-1 Jakarta, Gading Serpong & BSD terbatas.",
    eliteTitle: "Pilih titik awalmu.",
    eliteSub:
      "Mulai dari ebook fisik $15, kuasai nutrisi lewat The Roman Diet ($25), atau latihan langsung bersama Coach Juan online maupun offline.",
    proofTitle: "Hasil klien",
    proofBody:
      "Fat loss nyata. Otot padat nyata. Dari transformasi klien yang luar biasa hingga perjalanan Juan sendiri dari sangat kurus menjadi 5x Juara 1 Armwrestling — sistem ini terbukti untuk berbagai titik awal.",
    proofCta: "Lihat paket & harga",
    bannerTitle: "Live 1-on-1 Coaching di Jakarta, Gading Serpong & BSD.",
    bannerSub:
      "Ambil paket Live 1-on-1 ($120) untuk koreksi teknik langsung & pencegahan cedera — atau ikut Online Coaching 10 Sesi ($100) dari mana saja.",
    bannerCta1: "Tanya Juan di WhatsApp",
    bannerCta2: "Bantu saya pilih",
  },
};

let currentLang = "en";

function buildWhatsAppUrl(message) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* Hero before/after drag compare */
function initBeforeAfter() {
  const ba = document.getElementById("heroBA");
  if (!ba) return;
  let dragging = false;
  const set = (pct) => {
    pct = Math.max(2, Math.min(98, pct));
    ba.style.setProperty("--pos", pct + "%");
    ba.setAttribute("aria-valuenow", Math.round(pct));
  };
  const fromEvent = (e) => {
    const r = ba.getBoundingClientRect();
    set(((e.clientX - r.left) / r.width) * 100);
  };
  ba.addEventListener("pointerdown", (e) => { dragging = true; ba.classList.remove("hint"); fromEvent(e); });
  window.addEventListener("pointermove", (e) => { if (dragging) fromEvent(e); });
  window.addEventListener("pointerup", () => { dragging = false; });
  window.addEventListener("pointercancel", () => { dragging = false; });
  ba.addEventListener("keydown", (e) => {
    const cur = parseFloat(getComputedStyle(ba).getPropertyValue("--pos")) || 50;
    if (e.key === "ArrowLeft") { set(cur - 5); e.preventDefault(); }
    if (e.key === "ArrowRight") { set(cur + 5); e.preventDefault(); }
  });
  ba.classList.add("hint");
}

/* Sticky phone buy bar: shows after the hero, hides near the footer */
function initBuyBar() {
  const bar = document.getElementById("buyBar");
  const hero = document.getElementById("top");
  const footer = document.querySelector(".site-footer");
  const quiet = [...document.querySelectorAll("#goals, #programs")];
  if (!bar || !hero) return;
  const update = () => {
    const vh = window.innerHeight;
    const pastHero = hero.getBoundingClientRect().bottom < 0;
    const atFooter = footer && footer.getBoundingClientRect().top < vh - 40;
    const inShop = quiet.some((el) => { const r = el.getBoundingClientRect(); return r.top < vh * 0.6 && r.bottom > vh * 0.4; });
    bar.classList.toggle("show", pastHero && !atFooter && !inShop);
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* Sticky Navbar Scroll Transition */
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  if (window.scrollY > 36) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* Countdown Timer (Kinobody style intake timer) */
function startIntakeCountdown() {
  const daysEl = document.getElementById("cd-days");
  const hrsEl = document.getElementById("cd-hrs");
  const minEl = document.getElementById("cd-min");
  const secEl = document.getElementById("cd-sec");
  if (!daysEl) return;

  const target = Date.now() + (4 * 86400 + 18 * 3600 + 42 * 60) * 1000;

  function tick() {
    const diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    daysEl.textContent = String(d).padStart(2, "0");
    hrsEl.textContent = String(h).padStart(2, "0");
    minEl.textContent = String(m).padStart(2, "0");
    secEl.textContent = String(s).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

/* Benefit Filter Pills */
function initFilters() {
  const pills = document.querySelectorAll(".filter-pill");
  const cards = document.querySelectorAll(".offer-card");
  const countLabel = document.getElementById("filterCount");
  const progressFill = document.getElementById("collectionProgress");

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.dataset.filter;
      let visible = 0;

      cards.forEach((card) => {
        const tags = (card.dataset.tags || "").split(",");
        const match = filter === "all" || tags.includes(filter);
        card.classList.toggle("hidden-card", !match);
        if (match) visible++;
      });

      if (countLabel) {
        countLabel.textContent = `0${visible} / 0${cards.length}`;
      }
      if (progressFill) {
        progressFill.style.width = `${Math.max(20, (visible / cards.length) * 100)}%`;
      }
    });
  });
}

/* Inline Tier Selectors inside Offer Cards (Kinobody Subscribe & Save style) */
function initTierSelectors() {
  document.querySelectorAll(".offer-card").forEach((card) => {
    const options = card.querySelectorAll(".tier-option");
    const priceEl = card.querySelector(".offer-price");
    const compareEl = card.querySelector(".offer-compare");
    const saveEl = card.querySelector(".offer-save");
    const ctaBtn = card.querySelector(".offer-cta");

    function selectOption(opt) {
      options.forEach((o) => o.classList.remove("selected"));
      opt.classList.add("selected");
      priceEl.textContent = opt.dataset.price;
      if (compareEl) compareEl.textContent = opt.dataset.compare || "";
      saveEl.textContent = opt.dataset.save || "";
      ctaBtn.dataset.selectedPlan = `${card.dataset.offerName} — ${opt.dataset.tierLabel} (${opt.dataset.price})`;
    }

    // Initialize default selected plan
    const initial = card.querySelector(".tier-option.selected");
    if (initial) selectOption(initial);

    options.forEach((opt) => {
      opt.addEventListener("click", () => selectOption(opt));
    });

    ctaBtn.addEventListener("click", () => {
      const plan = ctaBtn.dataset.selectedPlan || card.dataset.offerName;
      if (card.dataset.isEbook === "true" && SITE_CONFIG.ebookDirectCheckoutUrl) {
        window.open(SITE_CONFIG.ebookDirectCheckoutUrl, "_blank", "noopener");
        return;
      }
      const msg =
        currentLang === "id"
          ? `Halo Coach Juan! Saya mau pesan / daftar: ${plan}. Boleh info cara pembayaran & mulainya?`
          : `Hi Coach Juan! I want to get started with: ${plan}. Can you send payment & onboarding details?`;
      window.open(buildWhatsAppUrl(msg), "_blank", "noopener");
    });
  });
}

/* Proof: swipeable track, arrows scroll it, caption follows */
function initProofSlider() {
  const track = document.getElementById("proofTrack");
  const slides = document.querySelectorAll(".proof-slide");
  const counter = document.getElementById("proofCounter");
  const caption = document.getElementById("proofCaption");
  const prevBtn = document.getElementById("proofPrev");
  const nextBtn = document.getElementById("proofNext");
  if (!track || !slides.length) return;
  let idx = 0;
  const pad = (n) => String(n).padStart(2, "0");
  const render = () => {
    counter.textContent = `${pad(idx + 1)} / ${pad(slides.length)}`;
    caption.textContent = slides[idx].dataset.caption;
  };
  const go = (i) => {
    idx = (i + slides.length) % slides.length;
    track.scrollTo({ left: slides[idx].offsetLeft - track.offsetLeft, behavior: "smooth" });
    render();
  };
  prevBtn.addEventListener("click", () => go(idx - 1));
  nextBtn.addEventListener("click", () => go(idx + 1));
  let t;
  track.addEventListener("scroll", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const x = track.scrollLeft;
      let best = 0, bestD = Infinity;
      slides.forEach((s, i) => { const d = Math.abs(s.offsetLeft - track.offsetLeft - x); if (d < bestD) { bestD = d; best = i; } });
      if (best !== idx) { idx = best; render(); }
    }, 80);
  }, { passive: true });
  render();
}

/* Authority Tabs (Method / 9 Specialties / 7 Awards) */
function initAuthorityTabs() {
  const triggers = document.querySelectorAll(".tab-trigger");
  const panels = document.querySelectorAll(".tab-panel");
  const img = document.getElementById("tabVisualImg");
  const capTitle = document.getElementById("tabCapTitle");
  const capSub = document.getElementById("tabCapSub");

  triggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.tab;
      triggers.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`panel-${id}`).classList.add("active");
      img.src = btn.dataset.img;
      capTitle.textContent = btn.dataset.capTitle;
      capSub.textContent = btn.dataset.capSub;
    });
  });
}

/* 30-Second TikTok/FB Plan Matcher Modal */
const quizState = { goal: "", location: "", format: "" };

function openQuizModal() {
  document.getElementById("quizModal").classList.add("open");
  setQuizStep(1);
}

function closeQuizModal() {
  document.getElementById("quizModal").classList.remove("open");
}

function setQuizStep(stepNum) {
  document.querySelectorAll(".quiz-step").forEach((el) => {
    el.classList.toggle("active", Number(el.dataset.step) === stepNum);
  });
  document.querySelectorAll(".quiz-progress span").forEach((bar, i) => {
    bar.classList.toggle("done", i < stepNum);
  });

  if (stepNum === 4) {
    renderQuizRecommendation();
  }
}

function renderQuizRecommendation() {
  const recTitle = document.getElementById("quizRecTitle");
  const recDesc = document.getElementById("quizRecDesc");
  const isLocal = ["Jakarta", "Gading Serpong", "BSD City"].includes(quizState.location);

  if (quizState.format === "Ebook ($15) / The Roman Diet ($25)") {
    if (quizState.goal === "Fat Loss & Wonder Woman Sculpt") {
      recTitle.textContent = "Recommended: Wonder Woman Physique ($15) + The Roman Diet ($25)";
      recDesc.textContent =
        "Sculpt a lean, athletic physique with our fat-loss training split paired with The Roman Diet nutrition guide (Bundle available for $35 — Save $5).";
    } else if (quizState.goal === "Diet & Nutrition Mastery") {
      recTitle.textContent = "Recommended: The Roman Diet ($25 USD)";
      recDesc.textContent =
        "Master fat loss and lean muscle nutrition without starving. Instant PDF delivery with easy high-protein meal formulas.";
    } else {
      recTitle.textContent = "Recommended: Greek God Physique ($15) + The Roman Diet ($25)";
      recDesc.textContent =
        "Build aesthetic muscle, broad shoulders, and champion strength with our flagship hypertrophy split + nutrition system (Bundle $35 — Save $5).";
    }
  } else if (isLocal && quizState.format === "Live 1-on-1 Coaching ($120)") {
    recTitle.textContent = `Recommended: Live 1-on-1 Coaching — $120 USD (${quizState.location})`;
    recDesc.textContent = `Train directly beside Coach Juan in ${quizState.location} for ${quizState.goal}, hands-on form correction, mobility, and injury prevention.`;
  } else {
    recTitle.textContent = "Recommended: 1-on-1 Online Coaching — 10 Sessions ($100 USD)";
    recDesc.textContent = `10 structured online coaching sessions tailored to ${quizState.goal} from ${quizState.location} — with form reviews, custom splits & direct WhatsApp support.`;
  }
}

function initQuizModal() {
  document.querySelectorAll("[data-open-quiz]").forEach((btn) => {
    btn.addEventListener("click", openQuizModal);
  });

  document.getElementById("closeQuizBtn").addEventListener("click", closeQuizModal);
  document.getElementById("quizModal").addEventListener("click", (e) => {
    if (e.target.id === "quizModal") closeQuizModal();
  });

  document.querySelectorAll(".quiz-option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const field = btn.dataset.field;
      quizState[field] = btn.dataset.value;
      const next = Number(btn.dataset.next);
      setQuizStep(next);
    });
  });

  document.querySelectorAll("[data-goal]").forEach((tile) => {
    tile.addEventListener("click", () => {
      quizState.goal = tile.dataset.goal;
      document.getElementById("quizModal").classList.add("open");
      setQuizStep(2);
    });
  });

  document.getElementById("quizSubmitWa").addEventListener("click", () => {
    const name = document.getElementById("quizName").value.trim() || "Friend";
    const rec = document.getElementById("quizRecTitle").textContent;
    const msg = `Hi Coach Juan! My name is ${name}. I finished the 30s Plan Matcher:\n• Goal: ${quizState.goal}\n• Area: ${quizState.location}\n• Format: ${quizState.format}\n• Match: ${rec}\n\nHow do I get started?`;
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener");
  });
}

/* Direct WhatsApp Triggers & Newsletter Form */
function initDirectActions() {
  document.querySelectorAll("[data-wa-direct]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const topic = btn.dataset.waDirect;
      const msg =
        currentLang === "id"
          ? `Halo Coach Juan! Saya tertarik dengan: ${topic}. Boleh info detail & cara daftar?`
          : `Hi Coach Juan! I'm interested in: ${topic}. Can you share details on how to start?`;
      window.open(buildWhatsAppUrl(msg), "_blank", "noopener");
    });
  });

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("newsletterEmail");
    const feedback = document.getElementById("newsletterFeedback");
    if (!input.value.trim()) return;
    feedback.textContent =
      currentLang === "id"
        ? "Berhasil! Sample gratis The Roman Diet & update coaching akan segera dikirim."
        : "You're in! Your free Roman Diet starter checklist & coaching updates are on the way.";
    input.value = "";
  });
}

/* Bilingual Toggle */
function initLanguageToggle() {
  const toggleBtn = document.getElementById("langToggle");
  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "id" : "en";
    toggleBtn.textContent = currentLang === "en" ? "EN / ID" : "ID / EN";
    const dict = COPY[currentLang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
  });
}

/* Mobile Menu Drawer */
function initMobileDrawer() {
  const openBtn = document.getElementById("mobileMenuOpen");
  const closeBtn = document.getElementById("mobileMenuClose");
  const drawer = document.getElementById("mobileDrawer");

  openBtn.addEventListener("click", () => drawer.classList.add("open"));
  closeBtn.addEventListener("click", () => drawer.classList.remove("open"));
  drawer.querySelectorAll("a, button[data-open-quiz]").forEach((el) => {
    el.addEventListener("click", () => drawer.classList.remove("open"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  startIntakeCountdown();
  initFilters();
  initTierSelectors();
  initProofSlider();
  initAuthorityTabs();
  initQuizModal();
  initDirectActions();
  initLanguageToggle();
  initMobileDrawer();
  initBuyBar();
  initBeforeAfter();
});
