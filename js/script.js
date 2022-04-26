// Бургер меню

const button = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__body');

button.addEventListener("click", function (e) {
    button.classList.toggle('_active');
    menu.classList.toggle('_active');
});

const buttonFooter = document.querySelector('.footer__menu-icon');
const menuFooter = document.querySelector('.footer__menu-body');

buttonFooter.addEventListener("click", function (e) {
    buttonFooter.classList.toggle('_active');
    menuFooter.classList.toggle('_active');
});

// Плавное появление объектов
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            //Высота объекта
            const animItemHeight = animItem.offsetHeight;
            // Позиция объекта относительно верха, на сколько ниже верха страницы
            const animItemOffset = offset(animItem).top;

            //Коеффицент
            const animStart = 4;

            //Момент старта анимации = Высота окна браузера - Высота объекта
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            // Анимируемый объект выше чем окно браузера
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            // Условия добавления класса.Количество проскроленных пикслей(pageYOffset)
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                //Условие чтобы анимация сработала только один раз
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    // Функция для определения расстояния объекта от верха страницы
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    //Задержка для появления сразу при загрузке.
    setTimeout(() => {
        animOnScroll();
    }, 300);
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (button.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                button.classList.remove('_active');
                menu.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// Инициализируем Swiper
let myImageSlider = new Swiper('.steps-slider', {
    // Навигация 
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: false,

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },
    // Автовысота
    autoHeight: false,

    // Количество слайдов для показа
    slidesPerView: 1,

    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 30,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    centeredSlides: true,

    // Стартовый слайд.
    initialSlide: 0,

    // Мультирядность
    slidesPerColumn: 1,

    // Бесконечный слайдер
    loop: true,

    // Кол-во дублирующих слайдов
    loopedSlides: 0,

    // Свободный режим
    freeMode: true,


    // Скорость
    speed: 800,

    // Вертикальный слайдер
    direction: 'horizontal',


    // Эффекты переключения слайдов.
    // Листание
    effect: 'slide',

    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        397: {
            slidesPerView: 2,
        },
    },

});

// Инициализируем Swiper
let myCompanySlider = new Swiper('.company-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: false,




    // Автовысота
    autoHeight: true,

    // Количество слайдов для показа
    slidesPerView: 1,

    // Отступ между слайдами
    spaceBetween: 30,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    centeredSlides: false,

    // Стартовый слайд.
    initialSlide: 0,

    // Мультирядность
    slidesPerColumn: 1,

    // Бесконечный слайдер
    loop: false,

    // Кол-во дублирующих слайдов
    loopedSlides: 0,

    // Свободный режим
    freeMode: true,

    // Скорость
    speed: 800,

    // Вертикальный слайдер
    direction: 'horizontal',


    // Эффекты переключения слайдов.
    // Листание
    effect: 'slide',


    // Слежка за видимыми слайдами
    watchSlidesProgress: true,
    // Добавление класса видимым слайдам
    watchSlidesVisibility: true,


});
