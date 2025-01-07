// Ambil elemen loading
const loadingWrapper = document.getElementById('loadingWrapper');

// Fungsi untuk memulakan proses loading
function handleLinkClick(event) {
    event.preventDefault(); // Halang tindakan lalai

    // Ambil URL dari elemen yang diklik
    const nextPageUrl = event.currentTarget.getAttribute('href');
	
	if (nextPageUrl == "#" || nextPageUrl == ""){
		
		return;	
	}
	
    // Tunjukkan animasi loading
    loadingWrapper.style.display = 'flex';

    // Simulasikan proses loading dengan setTimeout
    setTimeout(function() {
        window.location.href = nextPageUrl;
    }, 1000); // Masa tunggu 3 saat
}

// Ambil semua elemen <a> dan tambah pendengar acara
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', handleLinkClick);
});
