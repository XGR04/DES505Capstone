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
  const openAuth = document.getElementById("openAuth");
  const closeAuth = document.getElementById("closeAuth");
  const authBackdrop = document.getElementById("authBackdrop");
  const authShell = document.getElementById("authShell");
  const showSignup = document.getElementById("showSignup");
  const showSignin = document.getElementById("showSignin");

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

  if (showSignup && authShell) {
    showSignup.addEventListener("click", function () {
      authShell.classList.add("show-signup");
    });
  }

  if (showSignin && authShell) {
    showSignin.addEventListener("click", function () {
      authShell.classList.remove("show-signup");
    });
  }

  /* =========================
     SUBSCRIBE MODAL
  ========================= */
  const subscribeModal = document.getElementById("subscribeModal");
  const openSubscribe = document.getElementById("openSubscribe");
  const closeSubscribe = document.getElementById("closeSubscribe");
  const subscribeBackdrop = document.getElementById("subscribeBackdrop");

  function openSubscribeModal() {
    if (!subscribeModal) return;
    subscribeModal.classList.add("show");
    subscribeModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("subscribe-lock");
  }

  function closeSubscribeModal() {
    if (!subscribeModal) return;
    subscribeModal.classList.remove("show");
    subscribeModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("subscribe-lock");
  }

  if (openSubscribe) openSubscribe.addEventListener("click", openSubscribeModal);
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

});