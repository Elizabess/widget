export default class Collapse {
    constructor() {
        this.widget = document.querySelector('.widget');
        this.button = this.widget.querySelector('.btn');
        this.textContainer = this.widget.querySelector('.text__conteiner');

        // Проверка на наличие элементов
        if (!this.widget || !this.button || !this.textContainer) {
            console.error('Не удалось найти необходимые элементы.');
            return;
        }
    }

    init() {
        this.button.addEventListener('click', () => this.openCollapse());
    }

    openCollapse() {
        if (this.textContainer.classList.contains('show')) {
            this.textContainer.classList.remove('show');
        } else {
            this.textContainer.classList.add('show');
        }
    }
}
