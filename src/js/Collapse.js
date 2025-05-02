
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
        this.button.addEventListener('click', () => this.toggleCollapse());
    }

    toggleCollapse() {
        const isExpanded = this.textContainer.classList.toggle('show');

        // Изменение текста кнопки
        this.button.textContent = isExpanded ? 'Collapse' : 'Expand';
    }
}
