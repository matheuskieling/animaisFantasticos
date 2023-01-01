import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuLista, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuLista = document.querySelector(menuLista);
    this.activeClass = 'active';

    // define touchstart e click como argumentos padrão da função
    // caso não tenham sido fornecidos
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) => {
      this.menuButton.addEventListener(userEvent, this.openMenu);
    });
  }

  openMenu(e) {
    e.preventDefault();
    this.menuButton.classList.add(this.activeClass);
    this.menuLista.classList.add(this.activeClass);
    outsideClick(this.menuLista, this.events, () => {
      this.menuLista.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  init() {
    if (this.menuButton && this.menuLista) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
