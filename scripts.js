// Placeholder for future dynamic content
document.addEventListener('DOMContentLoaded', function() {
    console.log('Zodiac Killer Investigation Website Loaded');
});

// Open Image in Full-Screen Mode (Lightbox effect)
function openImage(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Close the Modal
function closeImage() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
