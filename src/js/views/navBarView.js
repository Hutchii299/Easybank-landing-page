// const closeImg = './src/images/icon-close.svg';
// const hamburgerImg = './src/images/icon-hamburger.svg';

class NavBarComponent {
    _parentElement = document.querySelector('header');
    _navBar = this._parentElement.querySelector('.navbar');
    _button = this._parentElement.querySelector('.btn');
    _navButton = this._parentElement.querySelector('.nav-btn');


    addHandlerModalClick(handler) {
        this._navButton.addEventListener('click', () => {
            handler();
            this.renderModalBtnImage();
        });

    }

    renderModalBtnImage() {
        if (this._navButton.querySelector('img').dataset.type === 'ham') {
            this._navButton.querySelector('img').src = './src/images/icon-close.svg';
            this._navButton.querySelector('img').dataset.type = 'close';
        } else {
            this._navButton.querySelector('img').src = './src/images/icon-hamburger.svg';
            this._navButton.querySelector('img').dataset.type = 'ham';
        }
    }

    renderNavComponents() {
        this._button.classList.remove('display-nil');
        this._navButton.classList.add('display-nil');
        if (this._parentElement.querySelector('.navbar')) return
        this._parentElement.querySelector('.logo').after(this._navBar);
    }

    addHandlerClearComponents(handler) {
        const events = ['load', 'resize'];
        events.forEach((event) => {
            window.addEventListener(event, (e) => {
                if (document.documentElement.clientWidth <= 700) {
                    if (!this._parentElement.querySelector('.navbar')) return
                    handler([this._navBar]);
                    this._navButton.classList.remove('display-nil')
                    this._button.classList.add('display-nil');
                }
            });
        })

    }
}
export default new NavBarComponent();