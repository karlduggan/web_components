// Enter the below in the html file to access the component
// <script src="{{ url_for('static', filename='folderName/rating.js') }}"></script>

window.customElements.define(
    'halfstar-rating',
    class HalfStarRating extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
    
        shadowRoot.innerHTML = `
        <style>
            /* Icons */
            svg.icon {
            display: inline-block;
            height: 32px;
            position: relative;
            width: 32px;
            
            }

            .rating.small svg.icon {
            height: 16px;
            width: 16px;
            stroke-width: 0px;
            fill: blue;
            
            }
            .wrapper {
              
              
            }

        </style>
        <div class="wrapper">
          <svg  id="two" xmlns="http://www.w3.org/2000/svg"  width="23px" height="23px" viewBox="0 0 32 32" >
          <g id="icon-star">
          <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118 l11.547-1.2L16.026,0.6L20.388,10.918z"/>
          </g>
          <g id="star"> 
          <polygon id="one" fill="" points="11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66"/>
          <polygon id="two" fill="" points="32,12.118 20.389,10.918 16.026,0.6 16,0.66 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"/>
          </g>
          </svg>

          <svg  id="four" xmlns="http://www.w3.org/2000/svg"  width="23px" height="23px" viewBox="0 0 32 32" >
          <g id="icon-star">
          <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118 l11.547-1.2L16.026,0.6L20.388,10.918z"/>
          </g>
          <g id="star"> 
          <polygon id="three" fill="" points="11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66"/>
          <polygon id="four" fill="" points="32,12.118 20.389,10.918 16.026,0.6 16,0.66 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"/>
          </g>
          </svg>

          <svg  id="six" xmlns="http://www.w3.org/2000/svg"  width="23px" height="23px" viewBox="0 0 32 32" >
          <g id="icon-star">
          <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118 l11.547-1.2L16.026,0.6L20.388,10.918z"/>
          </g>
          <g id="star"> 
          <polygon id="five" fill="" points="11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66"/>
          <polygon id="six" fill="" points="32,12.118 20.389,10.918 16.026,0.6 16,0.66 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"/>
          </g>
          </svg>

          <svg  id="eight" xmlns="http://www.w3.org/2000/svg"  width="23px" height="23px" viewBox="0 0 32 32" >
          <g id="icon-star">
          <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118 l11.547-1.2L16.026,0.6L20.388,10.918z"/>
          </g>
          <g id="star"> 
          <polygon id="seven" fill="" points="11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66"/>
          <polygon id="eight" fill="" points="32,12.118 20.389,10.918 16.026,0.6 16,0.66 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"/>
          </g>
          </svg>

          <svg  id="ten" xmlns="http://www.w3.org/2000/svg"  width="23px" height="23px" viewBox="0 0 32 32" >
          <g id="icon-star">
          <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118 l11.547-1.2L16.026,0.6L20.388,10.918z"/>
          </g>
          <g id="star"> 
          <polygon id="nine" fill="" points="11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66"/>
          <polygon id="ten" fill="" points="32,12.118 20.389,10.918 16.026,0.6 16,0.66 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"/>
          </g>
          </svg>
        </div>

        `;
      }
      // SVG Star rating function gets a value between 0 10 and converts it
      // to a five star equivalent 
      setRating(rating) {
        let stars = ['one', 'two','three','four','five','six','seven','eight','nine','ten']
        let star_rating = Math.round(rating)
        // Iterate through the stars with the star rating value
        for(var i = 0; i < star_rating; i++){
          console.log(stars[i])
          this.shadowRoot.getElementById(stars[i]).setAttribute("fill", "yellow")
            }
        }
      connectedCallback() {
        this.setRating(this.getAttribute('rating'))
        
        
      }

    }
  );