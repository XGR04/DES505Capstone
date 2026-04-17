document.addEventListener("DOMContentLoaded", () => {
  const authShell = document.getElementById("authShell");
  const showSignup = document.getElementById("showSignup");
  const showSignin = document.getElementById("showSignin");

  if (!authShell || !showSignup || !showSignin) return;

  showSignup.addEventListener("click", () => {
    authShell.classList.add("show-signup");
  });

  showSignin.addEventListener("click", () => {
    authShell.classList.remove("show-signup");
  });
});