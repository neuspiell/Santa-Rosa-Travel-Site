const navHam = document.getElementById('navham');
const navButtons = document.getElementById('navbuttons');

navHam.addEventListener('click', () => {
    navButtons.classList.toggle('active');
});
