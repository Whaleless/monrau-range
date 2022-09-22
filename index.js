const songs = [
    {id: 1, title: 'Ненависть'},
    {id: 2, title: 'Тишина'},
    {id: 3, title: 'Километры и дожди'},
    {id: 4, title: 'Точка паника'},
    {id: 5, title: 'Измена'},
    {id: 6, title: 'Богема'},
    {id: 7, title: 'Окнами'},
    {id: 8, title: 'Девочка Петербурга'},
    {id: 9, title: 'Моя муза'},
    {id: 10, title: 'Градусы'},
    {id: 11, title: 'Сто таблеток'},
    {id: 12, title: 'Молодым'}
];

const descriptions = [
    {id: 1, description: 'Легче полюбить ту, которая ненавидит, нежели ту, которая любит сильнее, чем желательно. ' +
            'Из крайности мне проще наблюдать, проще говорить. Мне нужен катализатор. Мне необходимо ощущать резко' +
            ' и контрастно. Я предпочел фундамент ненависти. Яркой и недолговечной.'},
    {id: 2, description: 'Безмолвно разливающийся океан, чьи штормы не доходят до нашего «верхнего» мира, которому' +
            ' мало до чего есть дело. Мы заперты на ключ во внешнем, понятном и комфортном. Там, где собственная' +
            ' тишина не властна над восприятием. Я поднимаю фейдер. Далее контраст. То, что было безмолвным, становится' +
            ' единственно слышимым. Игнорировать эту палитру больше не представляется возможным. Могу ли я утонуть' +
            ' в том, что прежде топил в себе? От чёрного к белому - путь единения противоположностей, пока А не' +
            ' устранит Б. Занавес.'},
    {id: 3, description: 'Я – не более, чем призма, преломляющая свет. Квартиры, плацкарты, будни, гостиницы, поцелуи.' +
            ' Преломляю. Подворотни, парадные, площади и их обитатели. Преломляю снова. Делю на километры этап за' +
            ' этапом. Разбиваю пропасть времени на линии. Оставляю за границей дождя.'},
    {id: 4, description: 'Все, что я оставляю - лишь запятые и прочерки. После возвращаюсь к исходной точке. В' +
            ' каждой из запятых рождается музыка. Многоточие. Я никогда не умел говорить прямо, поэтому за меня' +
            ' говорили песни. Спустя время, ломано, резко и завуалировано. Моя слабость, как ни странно, стала' +
            ' моим двигателем. Обычный день, кофе и взаимный предел. Я пишу последнюю песню, адресованную ей.'},
    {id: 5, description: 'Мы оба повзрослеем прежде, чем узнаем о цене этой трансгрессии. Начав со взаимной' +
            ' болезни, нам предстоит вылечиться временем, опытом и горечью. И ты, и я утратим свет, иллюзорностью' +
            ' которого дорожили. Наступает следующий день, где всё останется по-прежнему. Мы - незнакомцы,' +
            ' когда-то скрепленные обстоятельствами и переплетением событий.'},
    {id: 6, description: 'Всякий портрет, написанный с любовью, – это, в сущности, портрет самого художника, а не' +
            ' того, кто ему позировал. Не его, а самого себя раскрывает на полотне художник. Это не заметка или' +
            ' вырванная страница личного дневника. Это отражение, что будет искажаться с каждым канувшим месяцем,' +
            ' с каждым моим шагом. Мы сыграем на времени: я покажу путь, что прокладываю сейчас, ты – тот, по' +
            ' которому решил пойти. Забавная игра, ведь в любом из исходов мы оба – и проигравшие, и победившие.'},
    {id: 7, description: 'Утренняя пробежка от самого себя. Перемещаюсь в пространстве, не меняя местоположения.' +
            ' Остановка. Геометрия города сегодня играет исключительно прикладную роль. В угоду нездоровому' +
            ' воображению, либо по долгу возраста, я вижу в фасаде каждого здания не более, чем инструмент.' +
            ' Чтобы взлететь, нужен трамплин. Щурюсь, ищу самый подходящий. Говорят, что шансов много, но мне' +
            ' почему-то кажется, что выпадает всего один.'},
    {id: 8, description: 'Послемрак. Она всегда учила меня всматриваться в мелочи, но не скажу, что я хотя бы раз' +
            ' прислушался. Попытка. Я закрываю глаза, чтобы увидеть укрывшиеся под наэлектризованным одеялом' +
            ' звезды. Единственное, что объединяет нас с мегаполисом – непроходящая бессонница. Всё остальное я' +
            ' отдал образу незнакомки, научившей меня смотреть сердцем.'},
    {id: 9, description: 'Отрезок света. Мы близки к финалу, отчего история заиграла новыми красками. Да, люблю.' +
            ' Но отпущу, как и всё, что сейчас не хотел бы отпускать. Брошу пить. Брошу писать. С этого момента она - не' +
            ' более, чем струны. Причина письма, но уже не его адресат.'},
    {id: 10, description: 'Воспоминания. Чересчур идеальные, чтобы им верить. Свойство памяти сглаживать' +
            ' углы и проходить рубеж времени обрывками. Ностальгия, если и живёт, то благодаря забывчивости.' +
            ' И если однажды я отдался чувству, значит виною тому слабости.'},
    {id: 11, description: 'Легкость и подростковый максимализм. Грани, что я всегда ценил в персонаже,' +
            ' которого вырисовывал. Так или иначе они будут купированы. До тех пор они - золотой ключ,' +
            ' что останется запечатленным здесь.'},
    {id: 12, description: 'Описание отсутствует. Это просто любимая песня моей мамы.'}
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

let releaseDate = new Date(Date.UTC(2022, 8, 22, 21, 0, 0));

let body = document.querySelector('.body');
const launchScreen = document.querySelector('.launch-screen');
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
const backyBack = document.querySelector('.backyBack');
const clearLogo = document.querySelector('.clear-logo');

let backAudio = document.querySelector('.audio');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

launchScreen.addEventListener('click', async function () {
    backAudio.loop = true;
    backAudio.muted = true;
    backAudio.play();
    window.setTimeout(function() {
        backAudio.pause();
    }, 1);
    launchScreen.remove();
    await hideElement(launchBlock, 3000);
    await displayElement(form);
})

window.addEventListener('load', async function Launching() {
    await sleep(1000);
    await displayElement(launchBlock);
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
    let waitTime;
    if (allSeconds >= 0) {
        return waitTime = [
            {
                days: `${days}`.length == 2 ? days : '0' + days,
                hours: `${hours}`.length == 2 ? hours : '0' + hours,
                minutes: `${minutes}`.length == 2 ? minutes : '0' + minutes,
                seconds: `${seconds}`.length == 2 ? seconds : '0' + seconds,
            }
        ]
    } else if (allSeconds <= 0) {
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
        await sleep(1000);
        element.addEventListener('transitionend', async function () {
            element.classList.add('hidden');
        })
        await sleep(elementsTransitionTime);
}

async function blinkElementToHide(element, timeInDiffState, elementsTransitionTime, exist) {
    element.classList.add('disappear');
    await sleep(1000);
    if (exist == true) {
        element.addEventListener('transitionend', async function () {
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

    if (value != 0 && value != 100) {
        showTitle((Math.ceil(value / 8.5)) - 1);
    }
    else if (range.value == 100) {
        changeToFinalScreen();
    }
    else {
        hideAllTitles();
    }



    if (value != 0) {
        backAudio.volume = range.value/100;
        range.removeEventListener('click', addSrc());
    }

    function addSrc() {
        backAudio.muted = false;
        backAudio.play();
    }

    range.addEventListener('click', addSrc());

})


    async function massEffect() {
        let ms = 180;

        for (let i = 0; i < 650; i++) {
            let paragraph = document.createElement('p');
            paragraph.className = 'mass title disappear';
            paragraph.innerHTML = songs[Math.floor(Math.random() * songs.length)].title;
            paragraph.style.setProperty('--song-size', extraSizes[Math.floor(Math.random() * extraSizes.length)].extraSize);
            paragraph.style.setProperty('--coord-top', `${Math.floor(Math.random() * (110 + 10)) - 10}%`);
            paragraph.style.setProperty('--coord-right', `${(Math.random() * (110 + 10)) - 10}%`);
            massive.append(paragraph);
            await sleep(ms);
            paragraph.classList.remove('disappear');
            if (i == 600) {
                backyBack.classList.replace('oldBack', 'newBack');
            }
            if (ms != 5) ms = ms - 5;
        }

        body.addEventListener('transitionend', async function() {
            await sleep(2000);
            let masses = document.querySelectorAll('.title');
            masses.forEach((mass) => {
                mass.remove();
            })
        });
    }

    async function changeToFinalScreen() {
        hideElement(range);

        await massEffect();

        await sleep(1800);
        form.classList.add('hidden');
        await blinkElementToShow(logo, 1500, 1000);

        body.classList.add('flexColumn');
        body.classList.remove('justy', 'no-scroll');


        backyBack.classList.replace('newBack', 'invisBack');

        displayElement(container);
        displayElement(timer);
        displayElement(albumTitle);
        displayElement(lowerPart);
        displayElement(networkBlock);
        displayElement(tracklist);
        displayElement(monrausText);
        displayElement(clearLogo);
    }


songsTitles.forEach((title) => {
    title.addEventListener('click', () => {
        songDescription.innerHTML = descriptions[title.dataset.id].description;
        if(screen.width < 720) {
            const scrollTarget = document.getElementById('desc');
            const topOffset = 0; // если не нужен отступ сверху
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    })
})

async function timerEnds() {
    hideElement(timer);
    await blinkElementToHide(albumTitle, 3000, 3000, false);
    albumDescription.innerHTML = 'Уже на всех площадках';
    await displayElement(albumDescription);
}