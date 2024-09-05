window.addEventListener('load', function () {
	function getPlaylistTitle(playlistEl) {
		const titleEl = playlistEl.querySelector('yt-formatted-string');
		return titleEl ? titleEl.textContent.trim() : '';
	}

	function sortPlaylists() {
		const playlistContainer = document.querySelector('#guide-content #sections ytmusic-guide-section-renderer:nth-child(2) #items');
		const playlistEls = Array.from(playlistContainer.querySelectorAll('ytmusic-guide-entry-renderer'));

		playlistEls.sort((a, b) => {
			const titleA = getPlaylistTitle(a);
			const titleB = getPlaylistTitle(b);
			return titleA.localeCompare(titleB);
		});

		playlistEls.forEach(playlistEl => {
			playlistContainer.appendChild(playlistEl);
		});
	}

	// Escucha mensajes de background.js
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.action === "sortPlaylists") {
			sortPlaylists(); 
		}
	});
});



