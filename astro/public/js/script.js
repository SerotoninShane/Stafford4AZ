

const videoUrl = '';

videoThumbnail.addEventListener('click', function() {
    videoModal.style.display = 'block';
    videoPlayer.src = videoUrl;
    document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', function() {
    videoModal.style.display = 'none';
    videoPlayer.src = '';
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
});

videoModal.addEventListener('click', function(event) {
    if (event.target === videoModal) {
        videoModal.style.display = 'none';
        videoPlayer.src = '';
        document.body.style.paddingRight = '';
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && videoModal.style.display === 'block') {
        videoModal.style.display = 'none';
        videoPlayer.src = '';
        document.body.style.paddingRight = '';
        document.body.style.overflow = '';
    }
});