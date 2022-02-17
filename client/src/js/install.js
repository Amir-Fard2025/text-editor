const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // event.preventDefault();
  window.deferredPrompt = event;
  // butInstall.style.visibility = "visible";
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", () => {
  // event.prompt();
  // console.log("Intall the application");
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
  // butInstall.setAttribute("disabled", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // event.preventDefault();
  // butInstall.style.visibility = "hidden";
  window.deferredPrompt = null;
  console.log("App is installed successfully", event);
});
