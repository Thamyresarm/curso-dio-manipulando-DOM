function changeMode(){
    changeClasses();
    changeLabels();
}

function changeClasses(){
    buttonChange.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeLabels() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){
        buttonChange.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }
    
    buttonChange.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const buttonChange = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

buttonChange.addEventListener('click', changeMode);