const videoThumbnail = document.getElementById('videoThumbnail');
const videoModal = document.getElementById('videoModal');
const closeModal = document.querySelector('.close-modal');
const videoPlayer = document.getElementById('videoPlayer');

const videoUrl = 'https://www.youtube.com/embed/acwCoMV8jTE?autoplay=1&start=3';

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