const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";

  butInstall.addEventListener("click", () => {
    event.prompt();
    butInstall.setAttribute("disabled", true);
  });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("App installed successfully");
  // optional: butInstall.textContent = "Installed!";
  butInstall.style.visibility = "hidden";
  console.log("👍", "appinstalled", event);
});
