const songs = [
    {id: 1, title: 'Ненависть'},
    {id: 2, title: 'Тишина'},
    {id: 3, title: 'Километры и дожди'},
    {id: 4, title: 'Точка Паника'},
    {id: 5, title: 'Измена'},
    {id: 6, title: 'Богема'},
    {id: 7, title: 'Окнами'},
    {id: 8, title: 'Кину тебя'},
    {id: 9, title: 'Градусы'},
    {id: 10, title: 'Сто таблеток'},
    {id: 11, title: 'Молодым'}
];

const descriptions = [
    {id: 1, description: 'трэк 1 - БлаБлаБла'},
    {id: 2, description: 'трэк 2 - БлаБлаБла'},
    {id: 3, description: 'трэк 3 - БлаБлаБла'},
    {id: 4, description: 'трэк 4 - БлаБлаБла'},
    {id: 5, description: 'трэк 5 - БлаБлаБла'},
    {id: 6, description: 'трэк 6 - БлаБлаБла'},
    {id: 7, description: 'трэк 7 - БлаБлаБла'},
    {id: 8, description: 'трэк 8 - БлаБлаБла'},
    {id: 9, description: 'трэк 9 - БлаБлаБла'},
    {id: 10, description: 'трэк 10 - БлаБлаБла'},
    {id: 11, description: 'трэк 11 - БлаБлаБла'},
    {id: 12, description: 'трэк 12 - БлаБлаБла'}
]

const sizes = [
    {id: 1, size: '24px'},
    {id: 2, size: '36px'},
    {id: 3, size: '48px'}
];

const extraSizes = [
    {id: 1, extraSize: '24px'},
    {id: 2, extraSize: '36px'},
    {id: 3, extraSize: '48px'},
    {id: 4, extraSize: '64px'},
    {id: 5, extraSize: '72px'},
    {id: 6, extraSize: '96px'}
];

const mobileSizes = [
    {id: 1, mobileSize: '48px'},
    {id: 2, mobileSize: '64px'},
    {id: 3, mobileSize: '72px'}
]

let releaseDate = new Date('2022-09-23T00:00');


let body = document.querySelector('.body');
const launchBlock = document.querySelector('.launch-block');
const networkBlock = document.querySelector('.networks');
let range = document.querySelector('.range');
let titles = document.querySelectorAll('.title');
let massive = document.querySelector('.massive');
let logo = document.querySelector('.logo');
let form = document.querySelector('.form');
const timer = document.querySelector('.timer-box');
const albumTitle = document.querySelector('.album-title');
const albumDescription = document.querySelector('.album-description');
const container = document.querySelector('.container');
const lowerPart = document.querySelector('.lowerPart');
const tracklist = document.querySelector('.tracklist');
const monrausText = document.querySelector('.monraus-text');
let timerDays = document.querySelector('.days');
let timerHours = document.querySelector('.hours');
let timerMinutes = document.querySelector('.minutes');
let timerSeconds = document.querySelector('.seconds');
const songsTitles = document.querySelectorAll('.song-name');
const songDescription = document.querySelector('.song-description');
const TEST = document.querySelector('.for-test');

let backAudio = new Audio('/back.mp3')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('load', async function Launching() {
    await sleep(1000);
    await blinkElementToShow(launchBlock, 2000, 1500);
    displayElement(form);
})

function randomCoords(minProcents, maxProcents) {
    return `${Math.floor(Math.random() * (maxProcents - minProcents)) + minProcents}%`
}

function showTitle(titleNumber) {
    titles.forEach((title) => {
        if (titles[titleNumber] != title) {
            title.classList.replace('appear', 'disappear');
        }
    })

    if (!titles[titleNumber].classList.contains('appear')) {
        titles[titleNumber].innerHTML = songs[titleNumber].title;
        if(screen.width > 720) {
            titles[titleNumber].style.setProperty('--song-size' ,sizes[Math.floor(Math.random() * sizes.length)].size);
            titles[titleNumber].style.setProperty('--coord-top' ,randomCoords(5, 90));
            titles[titleNumber].style.setProperty('--coord-right' ,randomCoords(5, 75));
        }
        else {
            titles[titleNumber].style.setProperty('--song-size' ,mobileSizes[Math.floor(Math.random() * mobileSizes.length)].mobileSize);
            titles[titleNumber].style.setProperty('--coord-top' ,randomCoords(5, 95));
            titles[titleNumber].style.setProperty('--coord-right' ,randomCoords(15, 65));
        }
            titles[titleNumber].classList.replace('disappear', 'appear');
    }
}

function totalSeparateDate () {
    let dateNow = new Date();
    let allSeconds = Math.round((releaseDate - dateNow) / (1000));

    let days = Math.floor(allSeconds / 86400);
    let hours = Math.floor((allSeconds % 86400) / 3600);
    let minutes = Math.floor(((allSeconds % 86400) % 3600) / 60);
    let seconds = Math.floor(((allSeconds % 86400) % 3600) % 60);
    if (allSeconds >= 0) {
        return waitTime = [
            {
                days: `${days}`.length == 2 ? days : '0' + days,
                hours: `${hours}`.length == 2 ? hours : '0' + hours,
                minutes: `${minutes}`.length == 2 ? minutes : '0' + minutes,
                seconds: `${seconds}`.length == 2 ? seconds : '0' + seconds,
            }
        ]
    }
    else if (allSeconds <= 0) {
        clearInterval(timerUpdate);
        timerEnds();
    }
}

function changeTimer() {
    let waitTime = totalSeparateDate();
    if (waitTime) {
        if (waitTime[0].days != timerDays.innerHTML) timerDays.innerHTML = waitTime[0].days;
        if (waitTime[0].hours != timerHours.innerHTML) timerHours.innerHTML = waitTime[0].hours;
        if (waitTime[0].minutes != timerMinutes.innerHTML) timerMinutes.innerHTML = waitTime[0].minutes;
        timerSeconds.innerHTML = waitTime[0].seconds;
    }
}

let timerUpdate = setInterval(changeTimer, 1000);

function hideAllTitles() {
    titles.forEach((title) => {
        title.classList.replace('appear', 'disappear');
    })
}

async function blinkElementToShow(element, timeInDiffState, elementsTransitionTime) {
        element.classList.remove('hidden');
        await sleep(500);
        element.classList.remove('disappear');
        // Amount of time, when element is visible
        await sleep(timeInDiffState);
        element.classList.add('disappear');
        console.log('disappear');
        await sleep(1000);
        element.addEventListener('transitionend', async function () {
            console.log('hidden');
            element.classList.add('hidden');
        })
        await sleep(elementsTransitionTime);
}

async function blinkElementToHide(element, timeInDiffState, elementsTransitionTime, exist) {
    element.classList.add('disappear');
    console.log('disappear');
    await sleep(1000);
    if (exist == true) {
        element.addEventListener('transitionend', async function () {
            console.log('hidden');
            element.classList.add('hidden');
        })
    }
    await sleep(timeInDiffState);
    if (exist == true) {
        element.classList.remove('hidden');
        await sleep(500);
    }
    element.classList.remove('disappear');
}

async function displayElement(element) {
        element.classList.remove('hidden');
        await sleep(500);
        element.classList.remove('disappear');
}

async function hideElement(element, ms) {
    element.classList.add('disappear');
    await sleep(500);
    element.addEventListener('transitionend', async function () {
        element.classList.add('hidden');
    })
}

range.addEventListener('input', async function() {
    let value = range.value;
    console.log(value);

    if (value != 0 && value != 100) {
        showTitle((Math.ceil(value / 9)) - 1);
    }
    else if (range.value == 100) {
        changeToFinalScreen();
    }
    else {
        hideAllTitles();
    }

    if (value != 0) {
        backAudio.play();
        backAudio.volume = range.value/100;
    }

    TEST.addEventListener('click', ()=> {
        releaseDate = Date.now() + 5500;
        TEST.remove();
    })

    async function massEffect() {
        let ms = 231;

        for (i = 0; i < 850; i++) {
            let paragraph = document.createElement('p');
            paragraph.className = 'mass title disappear';
            paragraph.innerHTML = songs[Math.floor(Math.random() * songs.length)].title;
            paragraph.style.setProperty('--song-size', extraSizes[Math.floor(Math.random() * extraSizes.length)].extraSize);
            paragraph.style.setProperty('--coord-top', `${Math.floor(Math.random() * (110 + 10)) - 10}%`);
            paragraph.style.setProperty('--coord-right', `${(Math.random() * (110 + 10)) - 10}%`);
            massive.append(paragraph);
            await sleep(ms);
            paragraph.classList.remove('disappear');
            if (i == 800) {
                body.classList.replace('oldBack', 'newBack');
            }
            if (ms != 7) ms = ms - 7;
        }

        body.addEventListener('transitionend', async function() {
            await sleep(3000);
            let masses = document.querySelectorAll('.title');
            masses.forEach((mass) => {
                mass.remove();
            })
        });
    }

    async function changeToFinalScreen() {
        hideElement(range);

        await massEffect();

        await sleep(3000);
        form.classList.add('hidden');
        await blinkElementToShow(logo, 3000, 3000);
        body.classList.remove('justy', 'no-scroll');
        displayElement(container);
        displayElement(timer);
        displayElement(albumTitle);
        displayElement(lowerPart);
        displayElement(networkBlock);
        displayElement(tracklist);
        displayElement(monrausText);
        displayElement(TEST);
    }
})

songsTitles.forEach((title) => {
    title.addEventListener('click', () => {
        console.log(title.dataset.id);
        songDescription.innerHTML = descriptions[title.dataset.id].description;
    })
})

async function timerEnds() {
    hideElement(timer);
    await blinkElementToHide(albumTitle, 3000, 3000, false);
    albumDescription.innerHTML = 'Уже на всех площадках';
    await displayElement(albumDescription);
}