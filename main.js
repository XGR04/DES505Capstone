document.addEventListener("DOMContentLoaded", function () {

  /* =========================
   CONTACT MESSAGE POPUP
========================= */

const contactForm = document.getElementById("contactForm");
const messagePopup = document.getElementById("messagePopup");
const closeMessagePopup = document.getElementById("closeMessagePopup");

function openMessagePopup() {
  if (!messagePopup) return;
  messagePopup.classList.add("show");
  messagePopup.setAttribute("aria-hidden", "false");
}

function closeMessagePopupModal() {
  if (!messagePopup) return;
  messagePopup.classList.remove("show");
  messagePopup.setAttribute("aria-hidden", "true");
}

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    openMessagePopup();
    contactForm.reset();
  });
}

if (closeMessagePopup) {
  closeMessagePopup.addEventListener("click", closeMessagePopupModal);
}

if (messagePopup) {
  messagePopup.addEventListener("click", function (event) {
    if (event.target === messagePopup) {
      closeMessagePopupModal();
    }
  });
}

  const fixedIntro = document.querySelector(".fixed-intro");

function moveIntro() {
  if (!fixedIntro) return;

  const maxMove = window.innerHeight;
  const scrollAmount = Math.min(window.scrollY, maxMove);

  fixedIntro.style.transform = `translateY(-${scrollAmount}px)`;
}

window.addEventListener("scroll", moveIntro);
moveIntro();

  /* =========================
     LANGUAGE MENU
  ========================= */
  const toggle = document.getElementById("languageToggle");
  const panel = document.querySelector(".language-panel");

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

  window.googleTranslateElementInit = function () {
  new google.translate.TranslateElement({
    pageLanguage: "en",
    includedLanguages: "en,ar,my,hi,id,ja,ko,zh-CN,tl,th,vi",
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, "google_translate_element");
};

const translateScript = document.createElement("script");
translateScript.src =
  "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

document.body.appendChild(translateScript);

document.querySelectorAll(".language-panel button").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");

    document.cookie = `googtrans=/en/${lang}; path=/`;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${location.hostname}`;

    location.reload();
  });
});

  /* =========================
     AUTH MODAL (LOGIN)
  ========================= */
  const authModal = document.getElementById("authModal");
  const authForm = document.querySelector(".auth-form");
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

  if (authForm) {
  authForm.addEventListener("submit", function (event) {
    event.preventDefault();

    localStorage.setItem("gentleLoggedIn", "true");

    if (
  window.location.pathname.includes("/about/") ||
  window.location.pathname.includes("/contact/")
) {
  window.location.href = "../user/user.html";
} else {
  window.location.href = "user/user.html";
}
  });
}

/* =========================
   LOGGED IN NAV
========================= */

const isLoggedIn = localStorage.getItem("gentleLoggedIn");

const subscribeButton = document.querySelector(".subscribe-button");
const loginButton = document.getElementById("openLogin");
const profileIcon = document.getElementById("profileIcon");

if (isLoggedIn === "true") {

  if (subscribeButton) {
    subscribeButton.style.display = "none";
  }

  if (loginButton) {
    loginButton.style.display = "none";
  }

  if (profileIcon) {
    profileIcon.style.display = "flex";
  }
}

const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("gentleLoggedIn");
    window.location.href = "../index.html";
  });
}

/* =========================
   PERSONAL INFORMATION
========================= */

const saveInfoBtn = document.getElementById("saveInfoBtn");

const savedName = document.getElementById("savedName");
const savedEmail = document.getElementById("savedEmail");
const savedAddress = document.getElementById("savedAddress");
const savedCard = document.getElementById("savedCard");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const addressInput = document.getElementById("addressInput");
const cityInput = document.getElementById("cityInput");
const stateInput = document.getElementById("stateInput");
const postalInput = document.getElementById("postalInput");
const cardNumberInput = document.getElementById("cardNumberInput");

if (saveInfoBtn) {
  saveInfoBtn.addEventListener("click", function () {
    if (nameInput.value) savedName.textContent = nameInput.value;
    if (emailInput.value) savedEmail.textContent = emailInput.value;

    if (addressInput.value || cityInput.value || stateInput.value || postalInput.value) {
      savedAddress.textContent =
        `${addressInput.value}, ${cityInput.value}, ${stateInput.value} ${postalInput.value}`;
    }

    if (cardNumberInput.value.length >= 4) {
      savedCard.textContent = `•••• ${cardNumberInput.value.slice(-4)}`;
    }
  });
}

/* =========================
   PAYMENT + ADDRESS TOGGLE
========================= */

const paymentToggle = document.getElementById("paymentToggle");
const paymentFields = document.getElementById("paymentFields");

if (paymentToggle && paymentFields) {
  paymentToggle.addEventListener("click", function () {
    paymentFields.classList.toggle("show");
  });
}

const addressToggle = document.getElementById("addressToggle");
const addressFields = document.getElementById("addressFields");

if (addressToggle && addressFields) {
  addressToggle.addEventListener("click", function () {
    addressFields.classList.toggle("show");
  });
}
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

/* =========================
   STORIES CAROUSEL
========================= */

const storyCards = document.querySelectorAll(".stories-slider .story-card");
const storyDots = document.getElementById("storyDots");
const storiesCarousel = document.getElementById("storiesCarousel");

let currentStory = 0;
let storyInterval;

function showStory(index) {
  storyCards.forEach((card, cardIndex) => {
    card.classList.remove("active", "prev", "next");

    if (cardIndex === index) {
      card.classList.add("active");
    } else if (cardIndex === (index - 1 + storyCards.length) % storyCards.length) {
      card.classList.add("prev");
    } else if (cardIndex === (index + 1) % storyCards.length) {
      card.classList.add("next");
    }
  });

  document.querySelectorAll(".story-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
}

function startStoryCarousel() {
  storyInterval = setInterval(() => {
    currentStory = (currentStory + 1) % storyCards.length;
    showStory(currentStory);
  }, 5000);
}

function stopStoryCarousel() {
  clearInterval(storyInterval);
}

if (storyDots && storyCards.length > 0) {
  storyCards.forEach((card, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.classList.add("story-dot");

    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentStory = index;
      showStory(currentStory);
    });

    storyDots.appendChild(dot);
  });

  showStory(currentStory);
  startStoryCarousel();

  if (storiesCarousel) {
    storiesCarousel.addEventListener("mouseenter", stopStoryCarousel);
    storiesCarousel.addEventListener("mouseleave", startStoryCarousel);
  }
}

/* =========================
   STORY READ MORE POPUP
========================= */

const storyPopup = document.getElementById("storyPopup");
const closeStoryPopup = document.getElementById("closeStoryPopup");
const storyPopupTag = document.getElementById("storyPopupTag");
const storyPopupTitle = document.getElementById("storyPopupTitle");
const storyPopupBody = document.getElementById("storyPopupBody");

const storyDetails = {
  silent: {
    tag: "Personal Reflection • April 2026",
    title: "I Thought Being Strong Meant Staying Silent",
    body: `
      <p><em>Written by Anonymous</em></p>
      <p>Growing up, I always believed that staying quiet was the responsible thing to do. If something upset me, I kept it to myself. If I felt overwhelmed, I convinced myself that everyone else was probably dealing with worse. I thought being dependable meant handling everything alone without asking for help.</p>
      <p>Over time, that silence became exhausting. I started feeling emotionally distant from the people around me, even the ones I cared about most. I would tell everyone I was “fine” because it felt easier than trying to explain what was actually happening in my head.</p>
      <p>Eventually, I reached a point where I was completely burnt out. Small tasks felt heavy, conversations became draining, and I realized I had spent years ignoring my own emotions just to appear strong. What surprised me most was learning that opening up didn’t make me weak. It helped me feel understood.</p>
      <p>I’m still learning how to communicate honestly, but now I understand that strength is not about staying silent all the time. Sometimes strength is allowing yourself to be vulnerable enough to let other people in.</p>
    `
  },

  rest: {
    tag: "Reflection",
    title: "Learning to Rest Without Guilt",
    body: `
      <p><em>Written by Anonymous</em></p>
      <p>For a long time, I treated rest like a reward instead of something necessary. Whenever I slowed down, I felt guilty, like I was wasting time or falling behind everyone else around me. Even during breaks, my mind was still focused on unfinished tasks and responsibilities.</p>
      <p>I convinced myself that being productive all the time meant I was doing well. But eventually, constantly pushing myself started to affect me emotionally and physically. I became drained, irritable, and disconnected from the things I used to enjoy.</p>
      <p>What I’ve slowly learned is that rest is not the opposite of progress. Rest is part of it. Taking care of yourself does not make you lazy, and slowing down does not erase your accomplishments.</p>
      <p>Now, I try to remind myself that it’s okay to pause. Some days, resting is the most important thing I can do for myself, and that alone is enough.</p>
    `
  },

  healing: {
    tag: "Healing",
    title: "Healing Doesn't Always Look Like Progress",
    body: `
      <p><em>Written by Anonymous</em></p>
      <p>I used to think healing would feel obvious. I imagined it as constantly improving, becoming happier, and finally feeling “better.” But healing has not looked that simple for me.</p>
      <p>Some days feel hopeful, while others feel like I’m starting over again. There are moments where old feelings return unexpectedly, and it can make me question whether I’ve actually made progress at all.</p>
      <p>What I’ve realized is that healing is rarely linear. Sometimes progress looks like getting out of bed. Sometimes it looks like allowing yourself to feel emotions instead of avoiding them. And sometimes, it simply means making it through the day without giving up on yourself.</p>
      <p>I’m learning that setbacks do not erase growth. Healing is not about becoming perfect. It is about learning how to move through difficult moments with more patience and compassion for yourself than before.</p>
    `
  },

  family: {
    tag: "Family",
    title: "My Parents Never Talked About Feelings",
    body: `
      <p><em>Written by Anonymous</em></p>
      <p>Growing up, emotions were never really discussed in my household. If someone was upset, it was usually ignored or brushed aside. Conversations focused more on responsibilities, school, or daily life rather than how we were actually feeling.</p>
      <p>Because of that, I never really learned how to express emotions openly. Vulnerability felt uncomfortable, and I often struggled to explain what was happening in my head even when I wanted support.</p>
      <p>As I got older, I started realizing how much that affected the way I communicate with others. I would avoid difficult conversations, bottle things up, or convince myself that my feelings were not important enough to talk about.</p>
      <p>Now, I’m slowly trying to change that. I’m learning that emotions are not something to hide or feel ashamed of. Even though it still feels unfamiliar at times, I want to create healthier ways of communicating, both for myself and for the people around me.</p>
    `
  }
};

document.querySelectorAll(".story-read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const storyKey = button.getAttribute("data-story");
    const story = storyDetails[storyKey];

    if (!story || !storyPopup) return;

    storyPopupTag.textContent = story.tag;
    storyPopupTitle.textContent = story.title;
    storyPopupBody.innerHTML = story.body;

    storyPopup.classList.add("show");
    storyPopup.setAttribute("aria-hidden", "false");
  });
});

function closeStoryPopupModal() {
  if (!storyPopup) return;

  storyPopup.classList.remove("show");
  storyPopup.setAttribute("aria-hidden", "true");
}

if (closeStoryPopup) {
  closeStoryPopup.addEventListener("click", closeStoryPopupModal);
}

if (storyPopup) {
  storyPopup.addEventListener("click", (event) => {
    if (event.target === storyPopup) {
      closeStoryPopupModal();
    }
  });
}

/* =========================
   SUBSCRIPTION SCROLL REVEAL
========================= */

const subscriptionCards = document.querySelectorAll(".step-card");

const subscriptionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

subscriptionCards.forEach((card) => {
  subscriptionObserver.observe(card);
});

/* =========================
   EVENT SCROLL REVEAL
========================= */

const eventCards = document.querySelectorAll(".event-item");

const eventObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

eventCards.forEach((card) => {
  eventObserver.observe(card);
});

/* =========================
   COMMUNITY REFLECTIONS
========================= */

const testimonialButton = document.getElementById("addTestimonial");
const testimonialInput = document.getElementById("testimonialInput");
const testimonialCloud = document.getElementById("testimonialCloud");

let savedTestimonials = JSON.parse(localStorage.getItem("gentleTestimonials")) || [];

function createTestimonialNote(message) {
  const note = document.createElement("div");
  note.classList.add("testimonial-note", "new-note");

  const randomRotate = (Math.random() * 6 - 3).toFixed(1);
  note.style.transform = `rotate(${randomRotate}deg)`;

  note.innerHTML = `
    <p>“${message}”</p>
  `;

  testimonialCloud.prepend(note);
}

if (testimonialButton && testimonialInput && testimonialCloud) {
  savedTestimonials.forEach((message) => {
    createTestimonialNote(message);
  });

  testimonialButton.addEventListener("click", () => {
    const message = testimonialInput.value.trim();

    if (message === "") return;

    savedTestimonials.push(message);
    localStorage.setItem("gentleTestimonials", JSON.stringify(savedTestimonials));

    createTestimonialNote(message);

    testimonialInput.value = "";
  });
}

/* =========================
   ABOUT PAGE SCROLL REVEAL
========================= */

const aboutRevealItems = document.querySelectorAll(
  ".vismis-card, .services-text, .bear-img, .testimonial-note"
);

const aboutRevealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.18
  }
);

aboutRevealItems.forEach((item) => {
  item.classList.add("reveal-on-scroll");
  aboutRevealObserver.observe(item);
});

/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navRight = document.querySelector(".nav-right");

if (menuToggle && navRight) {
  menuToggle.addEventListener("click", function () {
    navRight.classList.toggle("show");
  });
}

});