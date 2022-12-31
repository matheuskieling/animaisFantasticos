import outsideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);

    // define touchstart e click como argumentos padrão da função
    // caso não tenham sido fornecidos
    if (this.events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dd menu e adiciona a função que observa o cliquefora dele
  activeDropdownMenu(e) {
    e.preventDefault();
    const { currentTarget } = e;
    currentTarget.classList.add(this.activeClass);
    outsideClick(currentTarget, this.events, () => {
      currentTarget.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dd menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }

    return this;
  }
}
