const profileLink = document.getElementById('profileLink');
const profilePicture = document.getElementById('profilePicture');
const username = document.getElementById('username');

const tg = window.Telegram?.WebApp;

const user = tg?.initDataUnsafe?.user || {
    first_name: "Guest"
};

if (tg) {
    tg.ready();
    tg.expand();
}

profileLink.textContent = user.first_name;
profilePicture.setAttribute('src', user.photo_url);
username.textContent = user.first_name;