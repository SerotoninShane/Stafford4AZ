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

function openCleanElectionsModal() {
            const modal = document.getElementById('cleanElectionsModal');
            const widget = document.getElementById('cleanElectionsWidget');
            modal.classList.add('active');
            widget.style.display = 'none';
        }

        // Close the modal and show widget
        function closeCleanElectionsModal() {
            const modal = document.getElementById('cleanElectionsModal');
            const widget = document.getElementById('cleanElectionsWidget');
            modal.classList.remove('active');
            widget.style.display = 'block';
        }

        // Show modal on page load (you can remove this for production)
        window.addEventListener('load', function() {
            setTimeout(function() {
                openCleanElectionsModal();
            }, 1500);
        });

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('cleanElectionsModal');
            if (event.target === modal) {
                closeCleanElectionsModal();
            }
        }

        // Update progress (example function - you can call this when updating numbers)
        function updateProgress(current, total) {
            const percentage = (current / total) * 100;
            document.getElementById('progressCount').textContent = `${current} / ${total}`;
            document.getElementById('progressBarFill').style.width = percentage + '%';
            document.querySelector('.widget-progress-fill').style.width = percentage + '%';
        }