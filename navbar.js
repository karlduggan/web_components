window.customElements.define(
    'navbar-search',
    class component extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
        * {
          margin: 0px;
          padding: 0px;
          box-sizing: border-box;
        }
    
        nav {
          display: flex;
          
          align-items: center;
          min-height: 8vh;
          background: transparent;
        }
        .logo {
            font-family: 'Open Sans', sans-serif;
            font-weight: 300;
            font-size: 30px;
            padding: 5px;
        }
        .search-wrapper {
            position: absolute;
            right: 20px;
        }
      </style>
     
        <nav>
        <div class="logo">
            <h1>MovieNight</h1>
        </div>
        
          <slot></slot>
          <div class="search-wrapper">
            <search-bar color="#3b4e62"></search-bar>
          </div>
        </nav>
     
        `
      }
      connectedCallback() {
        
      }
      
    }
  );
