let imageIndex = 0;
const images = [
    "./img/panyah2.jpg",
    "./img/panyah3.jpg",
    "./img/panyah.png",
];

function changeProfileImage() {
    const profileImage = document.getElementById("profileImage");
    
    imageIndex = (imageIndex + 1) % images.length;
    
    profileImage.src = images[imageIndex];
}