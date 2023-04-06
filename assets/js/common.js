function redirectToGalleries() {
    var url = window.location.toString().toLowerCase();
    if (url.includes('gallery-details')) {
        location.href = 'index.html';
    }
    else {
        closeModal();
    }
}