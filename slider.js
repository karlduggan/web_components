window.customElements.define(
    'slider-elm',
    class Dlider extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
        .slider-container {
            //width: 60%;
            margin:  auto;
            //overflow: hidden;
            background: white;
        }
        .slide {
            display: flex;
            width: 100%;
            height: 500px;
        }
        .data {
            height: 500px;
            margin: 10px;
            width: 300px;
           
        }
    
    </style>
    
    <div class="slider-container">
        <div class="slide">
        
   
   
    
            <div class="data">
                <movie-card poster="https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"></movie-card>
            </div>
            <div class="data">
                <movie-card title='Movie Title' year="1988" overview="This is one interesting movie about nothing at all" runtime="108" poster="https://m.media-amazon.com/images/M/MV5BODI4ZTI1ZjMtYmE5MC00NTM5LTgwMDgtNWI1ZTI1MDYyOGYyXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg"></movie-card>
            </div>
            <div class="data">
                <movie-card poster="https://m.media-amazon.com/images/M/MV5BNWE1OGExYzQtYzRjOS00MmJhLWE3OTYtZjkzOTNlMjJlZTQ4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg"></movie-card>
            </div>
            <div class="data">
                <movie-card id='2' poster="https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"></movie-card>
            </div>
            <div class="data">
                <movie-card title='Movie Title' year="1988" overview="This is one interesting movie about nothing at all" runtime="108" poster="https://m.media-amazon.com/images/M/MV5BODI4ZTI1ZjMtYmE5MC00NTM5LTgwMDgtNWI1ZTI1MDYyOGYyXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg"></movie-card>
            </div>
         
    
        </div>
    </div>
    <button id="prevBtn">Prev</button>
    <button id="nextBtn">Next</button>
  `;
      }
      const 
      connectedCallback() {
        const slider = this.shadowRoot.querySelector('.slider-container');
        const slide = this.shadowRoot.querySelectorAll('slide .data')
        // Buttons
        const prevBtn = this.shadowRoot.getElementById('prevBtn');
        const nextBtn = this.shadowRoot.getElementById('nextBtn');
        // Counter
        let counter = 1;
        const size = 300
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        // Button Listeners
        nextBtn.addEventListener('click', () => {
            slider.style.transition = "transform 0.4s ease-in-out";
            counter ++;
            slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
        });
        prevBtn.addEventListener('click', () => {
            slider.style.transition = "transform 0.4s ease-in-out";
            counter --;
            slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
        });
      }
     
    }
    
  );