export class Accordion {
    constructor({
        accordion, accordionItem, accordionBody, activeClass,
    }) {
        this.selector = {
            accordionClass: `.${accordion}`,
            accordionItemClass: `.${accordionItem}`,
            accordionBodyClass: `.${accordionBody}`,
            activeClass,
        };

        this.accordion = document.querySelector(this.selector.accordionClass);

        this.listen();
    }

    listen() {
        const self = this;

        if (self.accordion) {
            const accordionItems = self.accordion.querySelectorAll(self.selector.accordionItemClass);

            accordionItems.forEach(item => (
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    const itemAct = self.accordion.querySelector(`${self.selector.accordionItemClass}.${self.selector.activeClass}`);
                    const contentAct = self.accordion.querySelector(`${self.selector.accordionBodyClass}.${self.selector.activeClass}`);

                    itemAct.classList.remove(self.selector.activeClass);
                    contentAct.classList.remove(self.selector.activeClass);
                    this.classList.add(self.selector.activeClass);
                    const currentContent = this.nextElementSibling;
                    currentContent.classList.add(self.selector.activeClass);
                })));
        }
    }
}
