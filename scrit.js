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

let body = document.querySelector('.body');
let range = document.querySelector('.range');
let titles = document.querySelectorAll('.title');
let massive = document.querySelector('.massive');
let logo = document.querySelector('.logo');
let form = document.querySelector('.form');
const placeholder = document.querySelector('.placeholder');

console.log(window.innerWidth);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showTitle(titleNumber) {
    titles.forEach((title) => {
        if (titles[titleNumber] != title) {
            title.classList.replace('appear', 'disappear');
        }
    })

    if (!titles[titleNumber].classList.contains('appear')) {
        titles[titleNumber].innerHTML = songs[titleNumber].title;
        if(window.innerWidth >= 1080) {
            titles[titleNumber].style.setProperty('--song-size' ,sizes[Math.floor(Math.random() * sizes.length)].size);
        }
        else {
            titles[titleNumber].style.setProperty('--song-size' ,mobileSizes[Math.floor(Math.random() * mobileSizes.length)].mobileSize);
        }
        titles[titleNumber].style.setProperty('--coord-top' ,`${(Math.floor(Math.random() * (18 - 1)) + 1) * 5}%`);
        titles[titleNumber].style.setProperty('--coord-right' ,`${(Math.floor(Math.random() * (16 - 1)) + 1) * 5}%`);
            titles[titleNumber].classList.replace('disappear', 'appear');
    }
}

range.addEventListener('input', async function() {
    console.log((Math.ceil(range.value / 9)) - 1);
    console.log(`Значение: ${range.value}`);

    let value = range.value;

    if (value != 0 && value != 100) {
        showTitle((Math.ceil(value / 9)) - 1);
    }

    if (range.value == 100) {
        let ms = 200;
        range.classList.add('disappear');
        range.addEventListener('transitionend', ()=> {
            range.remove();
        })

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
        await sleep(3000);
        form.classList.add('hidden');
        logo.classList.remove('hidden');
        await sleep(1000);
        logo.classList.remove('disappear');
        await sleep(2000);
        logo.classList.add('disappear');
        logo.addEventListener('transitionend', async function () {
            logo.classList.add('hidden');
            await sleep(1000);
            placeholder.classList.remove('hidden');
            await sleep(1000);
            placeholder.classList.remove('disappear');
        })
    }
})