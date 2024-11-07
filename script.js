// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    modal.classList.add('fade-in');
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    modal.classList.remove('fade-in');
}

// Get all elements with class "close"
const closeButtons = document.getElementsByClassName("close");

// Add click event to all close buttons
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
        const modal = this.closest('.modal');
        closeModal(modal.id);
    }
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}

// Function to open image modal (for section 1)
function openImageModal(imageUrl) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modal-content');
    modal.style.display = 'block';
    modalImg.src = imageUrl;
    modal.classList.add('fade-in');
}

// Present box specific code
const presentBox = document.getElementById('presentBox');
const originalSrc = 'image/New folder/gift box.png';
const hoverSrc = 'image/Giftop.png';

presentBox.addEventListener('mouseover', function () {
    this.src = hoverSrc;
});

presentBox.addEventListener('mouseout', function () {
    this.src = originalSrc;
});

presentBox.addEventListener('click', function () {
    openModal('myModalBox');
});

// Function to check password (for section 3)
function checkPassword() {
    const password =
        document.getElementById('digit1').value +
        document.getElementById('digit2').value +
        document.getElementById('digit3').value +
        document.getElementById('digit4').value +
        document.getElementById('digit5').value +
        document.getElementById('digit6').value;

    if (password === '092002') {
        openModal('myModal1'); // Open the modal with the secret image and text
    } else {
        alert('Incorrect password. Please try again.');
        clearPassword();
    }
}

function clearPassword() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById('digit' + i).value = '';
    }
    document.getElementById('digit1').focus();
}

function moveToNext(current, nextId) {
    if (current.value.length >= 1) {
        document.getElementById(nextId).focus();
    }
}

// Function to open the modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal1() {
    document.getElementById('myModal1').style.display = 'none';
}

// Add event listener for Enter key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

// Audio functionality for section 4
const audio = document.getElementById('myAudio');
const playPauseGif = document.getElementById('playPauseGif');

// Paths to your GIF images
const playGifSrc = 'https://cdn.pixabay.com/animation/2023/08/22/07/30/07-30-19-708_512.gif';
const pauseGifSrc = 'https://cdn.pixabay.com/animation/2023/08/22/07/30/07-30-19-708_512.gif';

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseGif.src = pauseGifSrc; // Change to pause GIF
    } else {
        audio.pause();
        playPauseGif.src = playGifSrc; // Change back to play GIF
    }
}

function setVolume(value) {
    audio.volume = value;
}

// Scroll animation
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const section2 = document.getElementById('section2');
    const floatingImages = document.querySelectorAll('.float-img');
    
    // Function to randomly position images horizontally
    function randomizePositions() {
        floatingImages.forEach(img => {
            const randomLeft = Math.random() * 80 + 10; // Random position between 10% and 90%
            img.style.left = `${randomLeft}%`;
        });
    }

    // Intersection Observer to trigger animations when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start animations when section is visible
                floatingImages.forEach(img => {
                    img.classList.add('floating');
                });
                randomizePositions();
            } else {
                // Optional: Stop animations when section is not visible
                floatingImages.forEach(img => {
                    img.classList.remove('floating');
                });
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section2);

    // Optional: Randomize positions periodically
    setInterval(randomizePositions, 500000); // Match this with animation duration
});