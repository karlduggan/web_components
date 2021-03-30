window.customElements.define(
  'component-temp',
  class component extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
      <style>

      </style>
      <p>HTML HERE</p>`;
    }
    connectedCallback() {
     
    }

  }
  
);
