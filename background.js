// Escucha clicks en el botón de la extensión
chrome.action.onClicked.addListener(function(tab) {
  if (tab.url.startsWith("https://music.youtube.com/")) {
    chrome.tabs.sendMessage(tab.id, { action: "sortPlaylists" });
  }
});