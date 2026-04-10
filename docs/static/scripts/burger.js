const burgerBtn = document.getElementById('burgerMenuButton');
const navBar = document.getElementById('headerNavBar');
const closeBtn = document.getElementById('closeNavBar');

function navBarOpen() {
    navBar.classList.remove('translate-x-full');
}

function navBarClose(){
    navBar.classList.add('translate-x-full');
}


function clickOutOfElement(event){
    if(!navBar.contains(event.target) && !burgerBtn.contains(event.target)){
        navBar.classList.add('translate-x-full');
    }
}



burgerBtn.addEventListener('click', navBarOpen);
closeBtn.addEventListener('click', navBarClose);
document.addEventListener('click', clickOutOfElement);