const infoBtns = document.querySelectorAll('.info__dot');
const infoHints = document.querySelectorAll('.info__hint');

// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();

        // hide all hunt
        for (let hint of infoHints) {
            hint.classList.add('none')
        }

        // Show current hint
        this.parentNode.querySelector('.info__hint').classList.toggle('none')
    });
}

// Закрываем подсказки при клике по всему документу
document.addEventListener('click', function () {
    for (let hint of infoHints) {
        hint.classList.add('none')
    }
})

// Запрещаем ысплытие события клика при клике на подсказки
for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}

// Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    freeMode: true,
    slidesPerView: 1,
    spaceBetween: 42,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 3,
           spaceBetween: 20,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
});

// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
    btn.addEventListener('click', function () {

        // убираем автивные классы для всех кнопок
        for (let btn of tabsBtns) {
            btn.classList.remove('tab__control-btn--active');
        }

        // Добавляем активный класс к текузей кнопке 
        this.classList.add('tab__control-btn--active');

        // Отобразить нужные товары и Скрыть ненужные товары
        for (let product of tabsProducts) {
            // проверка на отображение всех товаров
            if(this.dataset.tab === 'all'){
                product.classList.remove('none');
            }else{
                if (product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
                } else {
                    product.classList.add('none');
                }
            }
        }
        swiper.update()
    })
}

// Mobile Nav
const mobileNavOpenBtn = document.querySelector('#open__mobile-nav');
const mobileNavCloseBtn = document.querySelector('#close__mobile-nav');
const mobileNav = document.querySelector('#mobile__nav');

mobileNavOpenBtn.onclick = function(){
    mobileNav.classList.add('mobile__nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
    mobileNav.classList.remove('mobile__nav-wrapper--open');
}


