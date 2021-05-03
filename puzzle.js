let puzzle = document.getElementById('puzzle');


let a = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg",
    "img/6.jpg", "img/7.jpg", "img/8.jpg",
    "img/9.jpg"]
    .map((x, i) => [x, i, Math.random()])
    .sort((a, b) => a[2] - b[2])

console.log(a);

for (let i = 0; i < a.length; i++) {
    let pic = document.createElement('img');
    pic.src = a[i][0];
    pic.place = a[i][1];
    pic.clicked = false;
    puzzle.appendChild(pic);
}
let step = 1;
let p1, p2;

document.addEventListener('click', function (e) {
    switch (step) {
        case 1:
            if (e.target.tagName == 'IMG' && !e.target.clicked) {
                e.target.className = 'select';
                e.clicked = true;
                p1 = e.target;
                step = 2;
            }
            break;
        case 2:
            if (e.target.tagName == 'IMG' && !e.target.clicked) {
                e.target.className = 'select';
                e.clicked = true;
                p2 = e.target;
                step = 3;
            }
            break;
        case 3:
            let place = p2.place;
            let src = p2.src;
            p2.place = p1.place;
            p2.src = p1.src;
            p1.place = place;
            p1.src = src;
            p1.className = p2.className = "";
            step = 1;
            break;
    }
})
// Dark mode=================================>
const button = document.querySelector(".btn-dark");
const buttonManual = document.querySelector(".manual-on");

let darkModeTheme = JSON.parse(localStorage.getItem("darkModeTheme"));
let manualTheme = JSON.parse(localStorage.getItem("manualTheme"));

let darkMode = false;


const changeManualText = function (event) {
    if (darkMode) {
        darkMode = false;
        buttonManual.textContent = "Manual on";
    }
    else {
        darkMode = true;
        buttonManual.textContent = "Manual off";
    }
};



const toggleManual = function () {
    manualTheme = !manualTheme;
    localStorage.setItem("manualTheme", manualTheme);
    console.log(manualTheme);


}

const themes = ["dark-mode"];
let currentThemeIndex = 0;

const getElements = function () {
    return document.querySelectorAll('section, .theSidebar, .card, .list-group-item');
};

const toggleTheme = function () {
    if (darkModeTheme) {
        removeTheme("dark-mode");
        darkModeTheme = false;
    } else {
        setTheme("dark-mode", getElements());
        darkModeTheme = true;
    }
    localStorage.setItem("darkModeTheme", darkModeTheme);
};

const setTheme = function (theme, elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.add(theme);
    }
};

const removeTheme = function (theme) {
    const elements = document.querySelectorAll(`.${theme}`);
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.remove(theme);
    }
};

const updateTheme = function (theme) {
    const newIndex = themes.indexOf(theme);
    if (newIndex != -1) {
        removeTheme(themes[currentThemeIndex]);
        currentThemeIndex = newIndex;
        setTheme(themes[currentThemeIndex], getElements());
    }
};

const checkTheme = function () {
    if (manualTheme) return;
    const date = new Date();
    console.log(date.getSeconds());
    if (date.getSeconds() > 7 && date.getSeconds() < 17) {
        if (darkModeTheme === false) {
            setTheme("dark-mode", getElements());
        }
    } else {
        if (darkModeTheme) {
            removeTheme("dark-mode");
        }
    }
};

const main = function () {

    button.addEventListener('click', toggleTheme);
    buttonManual.addEventListener("click", toggleManual);
    buttonManual.addEventListener("click", changeManualText);


    if (darkModeTheme) {
        setTheme("dark-mode", getElements());
    }

    setInterval(checkTheme, 1000);
};

main();


//------------------------------------------------------------------------------------------------------------///
