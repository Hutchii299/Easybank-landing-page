"use strict"
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import navBarView from '../views/navBarView.js';
import modalView from '../views/modalView.js';

const controllerModal = function () {
    modalView.toggleModal();
}

const controllerGradientClick = function () {
    navBarView.renderModalBtnImage();
}

const controllerClearNavbarRenderModal = function (navBarElements) {
    modalView.renderModalComponents(navBarElements);
}

const controllerClearModalComponents = function (modalElements) {
    navBarView.renderNavComponents(modalElements);
}

const init = function () {
    navBarView.addHandlerModalClick(controllerModal);
    navBarView.addHandlerClearComponents(controllerClearNavbarRenderModal);
    modalView.addHandlerClearComponents(controllerClearModalComponents);
    modalView.addHandlergradientClickedCloseModal(controllerGradientClick);
}
init();

