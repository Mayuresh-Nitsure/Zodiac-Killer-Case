// Modal Script
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".analysis-item img");
const close = document.querySelector(".close");

images.forEach((img) => {
    img.onclick = function () {
        modal.style.display = "flex";
        modalImage.src = this.src;
        captionText.innerText = this.alt; // Set title above the image
    };
});

close.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
