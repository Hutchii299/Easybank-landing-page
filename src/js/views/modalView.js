class ModalComponent {
    _parentElement = document.querySelector('.black-gradient');
    _elements;

    renderModalComponents(elements) {
        this.elements = elements;
        this.elements.forEach(element => {
            this._parentElement.querySelector('.mobile-modal').insertAdjacentElement('beforeend', element);
        });
    }


    addHandlerClearComponents(handler) {
        const events = ['load', 'resize'];
        events.forEach(event => {
            window.addEventListener(event, (e) => {
                if (document.documentElement.clientWidth > 700) {
                    if (this._parentElement.querySelector('.navbar')) {
                        handler();
                    }
                }
            });
        })

    }


    toggleModal() {
        this._parentElement.classList.toggle('opacity-nil');
    }

    addHandlergradientClickedCloseModal(handler) {
        this._parentElement.addEventListener('click', e => {
            if (e.currentTarget === e.target) {
                this.toggleModal();
                handler();
            }
        });
    }
}

export default new ModalComponent();