let currentSlide = 0;
const hiddenClass = 'is-hidden';
const fadeInClass = 'is-fadeIn';

const smoothScroll = (): void => {
    const triggerTitleList = document.querySelectorAll('[data-smooth-scroll-trigger]');
    if (triggerTitleList.length === 0) return;
    for (let i = 0; i < triggerTitleList.length; i++) {
        triggerTitleList[i].addEventListener('click', (e) => {
            e.preventDefault();
            const triggerDataName = triggerTitleList[i].getAttribute('data-smooth-scroll-trigger');
            const targetAreaTitle = document.querySelector(`[data-smooth-scroll-target="${triggerDataName}"]`);
            const targetAreaPosition = targetAreaTitle!.getBoundingClientRect().top;
            const currentScrollNum = window.scrollY;
            const target = targetAreaPosition + currentScrollNum;
            window.scrollTo({
                top: target,
                behavior: 'smooth',
            });
        });
    }
};
const setCarouselWidth = (): void => {
    const carouselSlide = document.querySelector<HTMLElement>('.pokeIntroduce__carouselList');
    const carouselSlides = document.querySelectorAll('.pokeIntroduce__carouselList');
    const carouselSlideArea = document.querySelector<HTMLElement>('.pokeIntroduce__carouselArea');
    if (carouselSlide === null || carouselSlides.length === 0 || carouselSlideArea === null) return;
    const slideLength = carouselSlides.length;
    const slideWidth = carouselSlide.offsetWidth;
    const slideAreaWidth = slideWidth * slideLength;
    carouselSlideArea.style.width = `${slideAreaWidth}px`;
};

const changeSlide = (index: number) => {
    const carouselSlideArea = document.querySelector<HTMLElement>('.pokeIntroduce__carouselArea');
    const carouselSlide = document.querySelector<HTMLElement>('.pokeIntroduce__carouselList');
    if (carouselSlide === null || carouselSlideArea === null) return;
    const slideWidth = carouselSlide.offsetWidth;
    carouselSlideArea.style.transform = `translateX(-${slideWidth * index}px)`;
    currentSlide = index;
};
const controlButton = (): void => {
    const carouselSlides = document.querySelectorAll('.pokeIntroduce__carouselList');
    const carouselButtonPrev = document.querySelector('[data-slide-carousel="prev"]');
    const carouselButtonNext = document.querySelector('[data-slide-carousel="next"]');
    if (carouselSlides.length === 0 || carouselButtonPrev === null || carouselButtonNext === null) return;
    const slideLength = carouselSlides.length;
    if (slideLength - 1 === currentSlide) {
        carouselButtonNext.classList.add(hiddenClass);
    } else if (currentSlide < slideLength) {
        carouselButtonNext.classList.remove(hiddenClass);
    }
    if (currentSlide === 0) {
        carouselButtonPrev.classList.add(hiddenClass);
    } else {
        carouselButtonPrev.classList.remove(hiddenClass);
    }
};
const setClickButtonPrev = (): void => {
    const carouselButtonPrev = document.querySelector('[data-slide-carousel="prev"]');
    carouselButtonPrev?.addEventListener('click', (e) => {
        e.preventDefault();
        changeSlide(currentSlide - 1);
        controlButton();
    })
};
const setClickButtonNext = (): void => {
    const carouselButtonNext = document.querySelector('[data-slide-carousel="next"]');
    carouselButtonNext?.addEventListener('click', (e) => {
        e.preventDefault();
        changeSlide(currentSlide + 1);
        controlButton();
    })
};
const fadeInSectionArea = (): void => {
    const sectionTitles = document.querySelectorAll('[data-fade-trigger]');
    const sectionOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };
    const sectionCallback = (entries: Array<IntersectionObserverEntry>) => {
        for (let i = 0; i < entries.length; i++) {
            const entry:IntersectionObserverEntry = entries[i];
            if (entry.isIntersecting) {
                const triggerData = entry.target.getAttribute('data-fade-trigger');
                const targetSection = document.querySelector(`[data-fade-target="${triggerData}"]`);
                targetSection?.classList.add(fadeInClass);
            }
        }
    };
    const sectionObserver = new IntersectionObserver(sectionCallback, sectionOptions);
    for (let i = 0; i < sectionTitles.length; i++) {
        sectionObserver.observe(sectionTitles[i]);
    }
};

window.addEventListener("DOMContentLoaded", () => {
    smoothScroll();
    setCarouselWidth();
    setClickButtonPrev();
    setClickButtonNext();
    controlButton();
    fadeInSectionArea();
});
