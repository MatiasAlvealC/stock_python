let isOpen = false;

function toggleMenu() {
    isOpen = !isOpen;
    document.querySelector('.navbar').classList.toggle('open', isOpen);
}
