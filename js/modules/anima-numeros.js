export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do DOM com um número em seu texto
  // incrementa a partir de 0 até 0 número final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar número para cada número selecionado do DOM
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // função que ocorre quando a mutação ocorre
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // adiciona o mutation observer para verificar
  // quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
