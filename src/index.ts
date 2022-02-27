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
            const target = targetAreaPosition + currentScrollNum
            window.scrollTo({
                top: target,
                behavior: 'smooth',
            });
        });
    }
};
const setCarouselWidth = (): void => {
    const carouselSlide: HTMLElement | null = document.querySelector('.pokeIntroduce__carouselList');
    const carouselSlides = document.querySelectorAll('.pokeIntroduce__carouselList');
    const slideWidth = carouselSlide!.offsetWidth;
    const slideLength = carouselSlides.length;
    const slideAreaWidth = slideWidth * slideLength;
    const carouselSlideArea: HTMLElement | null = document.querySelector('.pokeIntroduce__carouselArea');
    carouselSlideArea!.style.width = `${slideAreaWidth}px`;
};
const setClickButton = (): void => {
    const carouselSlideArea: HTMLElement | null = document.querySelector('.pokeIntroduce__carouselArea');
    const carouselSlides = document.querySelectorAll('.pokeIntroduce__carouselList');
    const slideLength = carouselSlides.length;
    const slideButtons = document.querySelectorAll('[data-slide-carousel]');
    for (let i = 0; i < slideButtons.length; i++) {
        slideButtons[i].addEventListener('click', () => {
            const slideAreaWidth = carouselSlideArea?.scrollWidth;
            const slideWidth = slideAreaWidth! / slideLength;
            console.log(slideWidth);
        })
    }
};

window.addEventListener("DOMContentLoaded", () => {
    smoothScroll();
    setCarouselWidth();
    setClickButton();
});
