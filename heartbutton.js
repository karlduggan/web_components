window.customElements.define(
    'heart-btn',
    class HeartButton extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
        #heart-btn {
            height: 20px;
            stroke-width: 35px;
            stroke: #c64756; 
        }
        #heart-btn:hover {
            cursor: pointer; 
        }
        </style>
        <svg id="heart-btn"  viewBox="-50 -80 600 600" xmlns="http://www.w3.org/2000/svg">
        <path id="heart" fill="none" d="m 256,455.51562 c -7.28906,0 -14.31641,-2.64062 -19.79297,-7.4375 -20.68359,-18.08593 -40.625,-35.08203 -58.21875,-50.07421 l -0.0898,-0.0781 C 126.31641,353.96875 81.773438,316.00781 50.78125,278.61328 16.136719,236.80859 0,197.17188 0,153.87109 0,111.80078 14.425781,72.988281 40.617188,44.578125 67.121094,15.832031 103.48828,0 143.03125,0 172.58594,0 199.65234,9.34375 223.47656,27.769531 235.5,37.070312 246.39844,48.453125 256,61.730469 265.60547,48.453125 276.5,37.070312 288.52734,27.769531 312.35156,9.34375 339.41797,0 368.97266,0 408.51172,0 444.88281,15.832031 471.38672,44.578125 497.57812,72.988281 512,111.80078 512,153.87109 c 0,43.30079 -16.13281,82.9375 -50.77734,124.73828 -30.99219,37.39844 -75.53125,75.35547 -127.10547,119.3086 -17.625,15.01562 -37.59766,32.03906 -58.32813,50.16797 -5.47265,4.78906 -12.5039,7.42968 -19.78906,7.42968 z"/>
        </svg>
  `;
      }

      toggle(value) {
        if(value === false){
            this.shadowRoot.getElementById('heart').setAttribute('fill', '#c64756')
        }
        else{
            this.shadowRoot.getElementById('heart').setAttribute('fill', 'none')
        }
      }
      connectedCallback() {
        let liked = false;
        this.shadowRoot.getElementById("heart-btn").addEventListener('click', () => this.toggle(liked))
        this.shadowRoot.getElementById("heart-btn").addEventListener('click', () => liked = !liked)
      }
     
    }
    
  );