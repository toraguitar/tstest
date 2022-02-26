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
window.addEventListener("DOMContentLoaded", () => {
    smoothScroll();
});
