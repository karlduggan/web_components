window.customElements.define(
    'search-bar',
    class component extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
        #svg-search-btn {
            cursor: pointer;
            padding-top: 3px;
        }
        .search-container {
            border: 1px solid ${this.getAttribute('color')};
            border-radius: 5px;
            width: 350px;
            background: black;
        }
        .wrapper {
            display: flex;
            padding: 5px;
        }
        #search-bar {
          margin-left: 20px;
          padding: 5px;
          border: none;
          outline: none;
          width: 100%;
          background: transparent;
          font-size: 18px;
          color: ${this.getAttribute('color')}
        }
        .closed {
            color: red;
        }
        svg {
            fill: ${this.getAttribute('color')};
        }
       
      </style>
     
       
          <div class="search-container">
            <div class="wrapper">
                <div id="svg-search-btn">
                <svg width="30px" height="28px" viewBox="0 0 308 308" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <g transform="matrix(1,0,0,1,-923.959,-1060.71)">
                <path d="M957.241,1093.99C1000.95,1050.28 1071.92,1050.28 1115.63,1093.99C1159.34,1137.7 1159.34,1208.67 1115.63,1252.38C1071.92,1296.09 1000.95,1296.09 957.241,1252.38C913.531,1208.67 913.531,1137.7 957.241,1093.99ZM975.107,1111.86C1008.96,1078.01 1063.92,1078.01 1097.77,1111.86C1131.62,1145.71 1131.62,1200.67 1097.77,1234.52C1063.92,1268.37 1008.96,1268.37 975.107,1234.52C941.258,1200.67 941.258,1145.71 975.107,1111.86Z" style="stroke:rgb(235,235,235);stroke-width:1px;"/>
                <g transform="matrix(0.707107,-0.707107,0.707107,0.707107,-536.876,1141.37)">
                <path d="M1117.5,1259.59L1117.5,1371.42L1117.48,1371.42C1117.49,1371.74 1117.5,1372.05 1117.5,1372.37C1117.5,1386.79 1105.18,1398.5 1090,1398.5C1074.82,1398.5 1062.5,1386.79 1062.5,1372.37C1062.5,1372.05 1062.51,1371.74 1062.52,1371.42L1062.5,1371.42L1062.5,1259.59C1071.3,1261.82 1080.51,1263 1090,1263C1099.49,1263 1108.7,1261.82 1117.5,1259.59Z"/>
                </g>
                </g>
                </svg>
                </div>

                <input id="search-bar"></input>
            </div>
          </div>
        
        `
      }
      toggle(){
          console.log('clicked')
        this.shadowRoot.getElementById("search-container").style.width = "30px"
        this.shadowRoot.getElementById('search-bar')
        
      }
      connectedCallback() {
        
        this.shadowRoot.querySelector("#svg-search-btn").addEventListener('click', () => this.toggle())
        // Press Enter
        this.shadowRoot.querySelector('#search-bar').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
              // code for enter
              console.log("Pressed Enter")
            }
        });
      }
      
    }
  );