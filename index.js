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

let releaseDate = new Date('2022-09-30T21:00');

let body = document.querySelector('.body');
let range = document.querySelector('.range');
let titles = document.querySelectorAll('.title');
let massive = document.querySelector('.massive');
let logo = document.querySelector('.logo');
let form = document.querySelector('.form');
const timer = document.querySelector('.timer-box');
const albumTitle = document.querySelector('.album-title');
const albumDescription = document.querySelector('.album-description');
let timerDays = document.querySelector('.days');
let timerHours = document.querySelector('.hours');
let timerMinutes = document.querySelector('.minutes');
let timerSeconds = document.querySelector('.seconds');
const TEST = document.querySelector('.for-test');



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
            titles[titleNumber].style.setProperty('--coord-right' ,randomCoords(20, 70));
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
        thirdStepAction();
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

    TEST.addEventListener('click', ()=> {
        releaseDate = Date.now() + 5500;
        TEST.remove();
    })

    async function massEffect() {
        let ms = 200;

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
            if (ms != 10) ms = ms - 5;
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
        await displayElement(timer);
        displayElement(albumTitle);
        displayElement(TEST);
    }
})

async function thirdStepAction() {
    hideElement(timer);
    await blinkElementToHide(albumTitle, 3000, 3000, false);
    albumDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
        ' eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt' +
        ' eget. Tortor id aliquet lectus proin nibh nisl. Sagittis purus sit amet volutpat consequat' +
        ' mauris nunc. Enim neque volutpat ac tincidunt vitae semper quis lectus. Convallis convallis' +
        ' tellus id interdum velit laoreet id donec ultrices. Neque egestas congue quisque egestas diam in.' +
        ' Purus semper eget duis at tellus at urna condimentum. Eu non diam phasellus vestibulum lorem sed' +
        ' risus ultricies. Pharetra et ultrices neque ornare. Dignissim sodales ut eu sem integer vitae justo.' +
        ' Vulputate odio ut enim blandit. Urna condimentum mattis pellentesque id nibh tortor id aliquet.' +
        ' Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sit amet tellus cras adipiscing enim' +
        ' eu turpis. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Risus viverra' +
        ' adipiscing at in.';
    await displayElement(albumDescription);
}