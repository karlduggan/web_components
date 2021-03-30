window.customElements.define(
  'component-one',
  class ComponentOne extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
      HTML IN HERE
      <style></style>`;
    }
    connectedCallback() {
  }
);
