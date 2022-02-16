const toggleAccordion = () => {
    const triggerButton:HTMLElement | null = document.querySelector<HTMLElement>('[data-accordion-toggle="trigger"]');
    const targetArea:HTMLElement | null = document.querySelector<HTMLElement>('[data-accordion-toggle="target"]');
    if (triggerButton === null || targetArea == null) return;
    triggerButton.addEventListener('click', () => {
        targetArea.classList.add('is-opened');
    })
};
window.addEventListener('DOMContentLoaded', ()=> {
    toggleAccordion();
})

