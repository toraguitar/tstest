const toggleAccordion = (): void => {
    const triggerButtons: NodeListOf<Element> = document.querySelectorAll('[data-accordion-toggle="trigger"]');
    const targetAreas: NodeListOf<Element> = document.querySelectorAll('[data-accordion-toggle="target"]');
    if (triggerButtons.length === 0 || targetAreas.length === 0) return;
    for(let i = 0; i < triggerButtons.length; i++){
        triggerButtons[i].addEventListener("click", () => {
            const targetHeight = targetAreas[i].scrollHeight;
            targetAreas[i].classList.toggle(`is-opened${targetHeight}`);
        });
    }

};
window.addEventListener("DOMContentLoaded", () => {
    toggleAccordion();
});
