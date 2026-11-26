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
    heroTitle: "Build a champion physique.",
    heroKicker: "GREEK GOD ($15) • WONDER WOMAN ($15) • THE ROMAN DIET ($25) • 1-ON-1 COACHING",
    heroB1: "Skinny-to-5x Armwrestling Champion & Powerlifting Medalist proven system",
    heroB2: "Fat Loss, Muscle Gain, Rehabilitation, Injury Prevention & Mobility",
    heroB3: "Online Coaching (10 Sessions $100) & Live 1-on-1 ($120) in Jakarta, Gading Serpong & BSD",
    heroCtaPrimary: "Explore Programs",
    heroCtaSecondary: "30s Plan Matcher",
    collectionTitle: "The Coaching Collection",
    collectionSub:
      "Split-specific ebooks, The Roman Diet nutrition guide, 10-session online coaching, and live 1-on-1 sessions in Jakarta, Gading Serpong & BSD.",
    counterNote: "Limited monthly live 1-on-1 slots in Jakarta, Gading Serpong & BSD.",
    eliteTitle: "Elite programs for the high-performance life.",
    eliteSub:
      "Start with a $15 physique ebook, master your nutrition with The Roman Diet, or train directly with Juan online or in-person.",
    proofTitle: "Undeniable Proof",
    proofBody:
      "Real fat loss. Real lean muscle. From dramatic client body recompositions to Juan's own journey from super-skinny teenager to 5x 1st Place Armwrestling Champion — the system works for every starting point.",
    proofCta: "Start Your Transformation",
    bannerTitle: "Live 1-on-1 Coaching in Jakarta, Gading Serpong & BSD.",
    bannerSub:
      "Lock in your $120 Live 1-on-1 package for hands-on form correction, injury prevention & strength coaching — or join 10-Session Online Coaching ($100) from anywhere.",
    bannerCta1: "Book via WhatsApp",
    bannerCta2: "Take 30s Plan Matcher",
  },
  id: {
    announcement: "Ebook $15 • The Roman Diet $25 • Online 10 Sesi $100 • Live 1-on-1 $120 (Jakarta, Gading Serpong & BSD)",
    announcementCta: "Cek Program Cocok",
    heroTitle: "Bangun fisik & kekuatan juara.",
    heroKicker: "GREEK GOD ($15) • WONDER WOMAN ($15) • THE ROMAN DIET ($25) • 1-ON-1 COACHING",
    heroB1: "Sistem terbukti dari super kurus menjadi 5x Juara 1 Armwrestling & Medali Powerlifting",
    heroB2: "Fat Loss, Muscle Gain, Rehabilitasi, Pencegahan Cedera & Mobilitas",
    heroB3: "Online Coaching (10 Sesi $100) & Live 1-on-1 ($120) di Jakarta, Gading Serpong & BSD",
    heroCtaPrimary: "Lihat Program",
    heroCtaSecondary: "Cocokkan Program (30 Detik)",
    collectionTitle: "Koleksi Ebook & Coaching",
    collectionSub:
      "Ebook split latihan, buku nutrisi The Roman Diet, Online Coaching 10 sesi, hingga Live 1-on-1 di Jakarta, Gading Serpong & BSD.",
    counterNote: "Kuota bulanan Live 1-on-1 Jakarta, Gading Serpong & BSD terbatas.",
    eliteTitle: "Program elit untuk hasil nyata & bebas cedera.",
    eliteSub:
      "Mulai dari ebook fisik $15, kuasai nutrisi lewat The Roman Diet ($25), atau latihan langsung bersama Coach Juan online maupun offline.",
    proofTitle: "Bukti Nyata",
    proofBody:
      "Fat loss nyata. Otot padat nyata. Dari transformasi klien yang luar biasa hingga perjalanan Juan sendiri dari sangat kurus menjadi 5x Juara 1 Armwrestling — sistem ini terbukti untuk berbagai titik awal.",
    proofCta: "Mulai Transformasi Sekarang",
    bannerTitle: "Live 1-on-1 Coaching di Jakarta, Gading Serpong & BSD.",
    bannerSub:
      "Ambil paket Live 1-on-1 ($120) untuk koreksi teknik langsung & pencegahan cedera — atau ikut Online Coaching 10 Sesi ($100) dari mana saja.",
    bannerCta1: "Chat WhatsApp Sekarang",
    bannerCta2: "Cek Program Cocok (30 Detik)",
  },
};

let currentLang = "en";

function buildWhatsAppUrl(message) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
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
      compareEl.textContent = opt.dataset.compare || "";
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

/* Undeniable Proof Transformation Slider */
function initProofSlider() {
  const slides = document.querySelectorAll(".proof-slide");
  const counter = document.getElementById("proofCounter");
  const caption = document.getElementById("proofCaption");
  const prevBtn = document.getElementById("proofPrev");
  const nextBtn = document.getElementById("proofNext");
  let idx = 0;

  function render() {
    slides.forEach((s, i) => s.classList.toggle("active", i === idx));
    counter.textContent = `0${idx + 1} / 0${slides.length}`;
    caption.textContent = slides[idx].dataset.caption;
  }

  prevBtn.addEventListener("click", () => {
    idx = (idx - 1 + slides.length) % slides.length;
    render();
  });

  nextBtn.addEventListener("click", () => {
    idx = (idx + 1) % slides.length;
    render();
  });

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
  newsletterForm.addEventListener("submit", (e) => {
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
});
