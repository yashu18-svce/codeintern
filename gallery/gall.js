let currentIndex = 0; // Default to first image

const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg"
];

// Open Modal and Display Image
function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "flex";
    modalImg.src = images[currentIndex];
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Change Image in Modal
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    const modalImg = document.getElementById('modal-img');
    modalImg.src = images[currentIndex];
}

// Close Modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
