const profileLink = document.getElementById('profileLink');

const tg = window.Telegram?.WebApp;

const user = tg?.initDataUnsafe?.user || {
    first_name: "Guest"
};

if (tg) {
    tg.ready();
    tg.expand();
}

profileLink.textContent = user.first_name;