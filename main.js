document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     LANGUAGE MENU
  ========================= */
  const toggle = document.getElementById("languageToggle");
  const panel = document.getElementById("languagePanel");

  if (toggle && panel) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      panel.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".language-menu")) {
        panel.classList.remove("show");
      }
    });
  }

  /* =========================
     AUTH MODAL (LOGIN)
  ========================= */
  const authModal = document.getElementById("authModal");
  const openAuth = document.getElementById("openLogin");
  const closeAuth = document.getElementById("closeAuth");
  const authBackdrop = document.getElementById("authBackdrop");

  function openAuthModal() {
    if (!authModal) return;
    authModal.classList.add("show");
    authModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("auth-lock");
  }

  function closeAuthModal() {
    if (!authModal) return;
    authModal.classList.remove("show");
    authModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("auth-lock");
  }

  if (openAuth) openAuth.addEventListener("click", openAuthModal);
  if (closeAuth) closeAuth.addEventListener("click", closeAuthModal);
  if (authBackdrop) authBackdrop.addEventListener("click", closeAuthModal);

  /* =========================
     SUBSCRIBE MODAL
  ========================= */
  const subscribeModal = document.getElementById("subscribeModal");
  const openSubscribeButtons = document.querySelectorAll(".subscribe-trigger");  const closeSubscribe = document.getElementById("closeSubscribe");
  const subscribeBackdrop = document.getElementById("subscribeBackdrop");

  function openSubscribeModal() {
  if (!subscribeModal) return;
  subscribeModal.classList.add("show");
  subscribeModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("subscribe-lock");

  showStep("step1");
}

  function closeSubscribeModal() {
  if (!subscribeModal) return;
  subscribeModal.classList.remove("show");
  subscribeModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("subscribe-lock");

  showStep("step1");

  document.querySelectorAll(".option-btn, .cause-btn").forEach(btn => {
    btn.classList.remove("selected");
  });

  document.querySelectorAll(".preference-select, .custom-cause-input, .signup-field input").forEach(field => {
    field.value = "";
  });
}

  openSubscribeButtons.forEach(btn => {
  btn.addEventListener("click", openSubscribeModal);
});

  if (closeSubscribe) closeSubscribe.addEventListener("click", closeSubscribeModal);
  if (subscribeBackdrop) subscribeBackdrop.addEventListener("click", closeSubscribeModal);

  /* =========================
   ONBOARDING STEPS
========================= */

const steps = document.querySelectorAll(".onboard-step");

function showStep(id) {
  steps.forEach(step => {
    step.classList.remove("active");
  });

  const next = document.getElementById(id);
  if (next) next.classList.add("active");
}

document.querySelectorAll(".onboard-next").forEach(btn => {
  btn.addEventListener("click", () => {
    const next = btn.getAttribute("data-next");
    showStep(next);
  });
});

document.querySelectorAll(".onboard-back").forEach(btn => {
  btn.addEventListener("click", () => {
    const prev = btn.getAttribute("data-back");
    showStep(prev);
  });
});

/* option select */
document.querySelectorAll(".option-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

const causeButtons = document.querySelectorAll(".cause-btn");
const maxCauses = 3;

causeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selected = document.querySelectorAll(".cause-btn.selected");

    if (btn.classList.contains("selected")) {
      btn.classList.remove("selected");
      return;
    }

    if (selected.length < maxCauses) {
      btn.classList.add("selected");
    }
  });
});

/* =========================
   SUCCESS STEP (STEP 7)
========================= */

const closeSubscribeSuccess = document.getElementById("closeSubscribeSuccess");

if (closeSubscribeSuccess) {
  closeSubscribeSuccess.addEventListener("click", () => {
    closeSubscribeModal();
  });
}

  /* =========================
     GLOBAL ESCAPE CLOSE
  ========================= */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (authModal && authModal.classList.contains("show")) {
        closeAuthModal();
      }
      if (subscribeModal && subscribeModal.classList.contains("show")) {
        closeSubscribeModal();
      }
    }
  });

  /* =========================
   LEARN MORE EXPANDED
  ========================= */

  document.querySelectorAll(".expand-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".feature-side-card");
    card.classList.toggle("expanded");

    btn.textContent = card.classList.contains("expanded")
      ? "Show Less"
      : "Learn More";
  });
});

/* =========================
   REFLECTION QUOTES
========================= */

const quotes = [
  {
    text: "With hardship comes ease.",
    author: "Quran 94:6"
  },
  {
    text: "Peace I leave with you; my peace I give you.",
    author: "John 14:27"
  },
  {
    text: "A calm mind brings inner strength and self confidence.",
    author: "Bhagavad Gita"
  },
  {
    text: "Nothing can harm you as much as your own thoughts unguarded.",
    author: "Buddha"
  }
];

let currentQuote = 0;

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteDots = document.getElementById("quoteDots");

function showQuote(index) {
  if (!quoteText || !quoteAuthor) return;

  quoteText.classList.add("quote-fade");
  quoteAuthor.classList.add("quote-fade");

  setTimeout(() => {
    quoteText.textContent = `“${quotes[index].text}”`;
    quoteAuthor.textContent = quotes[index].author;

    document.querySelectorAll(".quote-dot").forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });

    quoteText.classList.remove("quote-fade");
    quoteAuthor.classList.remove("quote-fade");
  }, 250);
}

if (quoteDots) {
  quotes.forEach((quote, index) => {
    const dot = document.createElement("button");
    dot.classList.add("quote-dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.type = "button";

    dot.addEventListener("click", () => {
      currentQuote = index;
      showQuote(currentQuote);
    });

    quoteDots.appendChild(dot);
  });
}

setInterval(() => {
  currentQuote = (currentQuote + 1) % quotes.length;
  showQuote(currentQuote);
}, 8000);

});