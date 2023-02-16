import React, { useState, useEffect } from 'react';
import '../assets/css/work.css';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Work = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let cursor = document.getElementById("cursor");
    let close = document.getElementById("close");
    let body = document.body;
    let iframe = document.getElementById("pen");
    let penLink = document.getElementById("penlink");
    let links = document.getElementsByTagName("a");
    
    let frames = [
      "https://codepen.io/cobra_winfrey/debug/xxVJZwo",
      "https://cdpn.io/cobra_winfrey/debug/wvGyKEY",
      "https://codepen.io/cobra_winfrey/debug/OJVJJoj",
      "https://cdpn.io/cobra_winfrey/debug/YzXOBEN",
      "https://codepen.io/cobra_winfrey/debug/qBZWVmO",
      "https://codepen.io/cobra_winfrey/debug/eYOXOdB",
      "https://codepen.io/cobra_winfrey/debug/OJXJeod",
      "https://codepen.io/cobra_winfrey/debug/PoqVQRq",
      "https://cdpn.io/cobra_winfrey/debug/qgEGMZ",
      "https://codepen.io/cobra_winfrey/debug/RwWYGxj"
    ];
    
    // Load iFrames on demand & remove after modal is closed to reduce weight & smooth out transitions
    
    
    let cards = document.getElementsByClassName("inner");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("mousemove", function (event) {
        cursor.classList.add("active");
      });
      cards[i].addEventListener("mouseover", function (event) {
        cursor.classList.add("active");
      });
    
      cards[i].addEventListener("mouseout", function (event) {
        cursor.classList.remove("active");
      });
      cards[i].addEventListener(
        "click",
        function (i) {
          body.classList.add("active");
          iframe.setAttribute("src", frames[i]);
          let penDebug = frames[i];
          let penFull = penDebug.replace("debug", "pen");
          penLink.setAttribute("href", penFull);
        }.bind(null, i)
      );
    }
    
    // hover events for social links
    
    for (let prolink of links) {
      prolink.addEventListener("mouseover", function (event) {
        cursor.classList.add("linkhover");
      });
      prolink.addEventListener("mousemove", function (event) {
        cursor.classList.add("linkhover");
      });
      prolink.addEventListener("mouseout", function (event) {
        cursor.classList.remove("linkhover");
      });
    }
    
    // Escape key option to exit active state
    
    document.onkeydown = function (evt) {
      evt = evt || window.event;
      let isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape) {
        body.classList.remove("active");
        setTimeout(() => {
          iframe.setAttribute("src", "");
        }, 2000);
      }
    };
    
    close.addEventListener("click", function (event) {
      body.classList.remove("active");
      setTimeout(() => {
        iframe.setAttribute("src", "");
      }, 2000);
    });
    
    gsap.set("#cursor", { xPercent: -50, yPercent: -50 });
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.35;
    
    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");
    
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    
    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
    
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
    
    Splitting();
    
    // Individual section scroll progress
    let panel = gsap.utils.toArray(".panel");
    panel.forEach((section, index) => {
      gsap.to(this, {
        scrollTrigger: {
          trigger: section,
          start: "top 100%",
          end: "bottom 25%",
          scrub: 0,
          onUpdate: (self) => {
            section.style.setProperty("--progress", self.progress);
          }
        }
      });
    });
    
    // Full page scroll progress
    
    gsap.to("body", {
      scrollTrigger: {
        trigger: "body",
        start: "top 100%",
        end: "50% 50%",
        scrub: 0,
        onUpdate: (self) => {
          body.style.setProperty("--progress", self.progress);
        }
      }
    });
    
    // Set a delay on Scrolltrigger recalculation to accommodate element transition times
    
    function refresh() {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2500);
    }
    
    window.addEventListener("resize", refresh);
    
    
    return () => {
      // Pull out the preloader
      //document.addEventListener("DOMContentLoaded", (event) => {
        body.classList.add("loaded");
      //});
    }

    }, [isVisible]);

  return (
    <div className="work-wrap">
      <div className="container">
      <div id='wrap'>
        <h1 data-splitting='words'>Selected Demos</h1>
        <p className='subhead'>Adam Kuhn</p>
        <div className='panel'>
          <h2 className='dark' data-splitting='words'>3D CSS Letter Transition</h2>
          <div className='thumb'>
            <p>CSS • 3D • Animation</p>
            <div className='inner'>
              <img className='invert' loading='lazy' src='https://assets.codepen.io/383755/internal/screenshots/pens/xxVJZwo.default.png?fit=cover&amp;format=auto&amp;ha=true&amp;height=540&amp;quality=75&amp;v=2&amp;version=1569360312&amp;width=960' />
            </div>
          </div>
        </div>
        <div className='panel'>
          <h2 data-splitting='words'>Generative Patterns 8</h2>
          <div className='thumb'>
            <p>Generative • CSS Vars • GSAP</p>
            <div className='inner'>
              <img className='light' loading='lazy' src='https://assets.codepen.io/383755/internal/screenshots/pens/wvGyKEY.default.png?fit=cover&amp;format=auto&amp;ha=true&amp;height=540&amp;quality=75&amp;v=2&amp;version=1599706499&amp;width=960' />
            </div>
          </div>
        </div>
        <div className='panel'>
          <h2 data-splitting='words'>NES Subscribe</h2>
          <div className='thumb'>
            <p>8-Bit • Form Input • Animation</p>
            <div className='inner'>
              <img loading='lazy' src='https://assets.codepen.io/383755/internal/screenshots/pens/OJVJJoj.default.png?fit=cover&amp;format=auto&amp;ha=true&amp;height=540&amp;quality=75&amp;v=2&amp;version=1569360312&amp;width=960' />
            </div>
          </div>
        </div>
        <div className='panel'>
          <h2 data-splitting='words'>CSS Neumorphic Toggle</h2>
          <div className='thumb'>
            <p>CSS • 3D • No JS</p>
            <div className='inner'>
              <img loading='lazy' src='https://assets.codepen.io/383755/internal/screenshots/pens/YzXOBEN.default.png?fit=cover&amp;format=auto&amp;ha=true&amp;height=540&amp;quality=75&amp;v=2&amp;version=1569360312&amp;width=960' />
            </div>
          </div>
        </div>
        <div className='panel'>
          <h2 data-splitting='words'>Take Me On</h2>
          <div className='thumb'>
            <p>Webcam • SVG • Canvas</p>
            <div className='inner'>
              <img className='light' loading='lazy' src='https://assets.codepen.io/383755/internal/screenshots/pens/qBZWVmO.custom.png' />
            </div>
          </div>
        </div>
        <div className='panel'>
          <h2 data-splitting='words'>SVG Turbulence Animation</h2>
          <h2 data-splitting='words'>SVG Turbulence Animation</h2>
          <div className='thumb'>
            <p>SVG • Generative • Animation</p>
            <div className='inner'>
              <img loading='lazy' src='https://assets.codepen.io/383755/internal/screenshots/pens/eYOXOdB.default.png?fit=cover&amp;format=auto&amp;ha=true&amp;height=540&amp;quality=75&amp;v=2&amp;version=1569360312&amp;width=960' />
            </div>
          </div>
        </div>
        <div className='panel'>
          <h2 data-splitting='words'>Pure CSS Product Card</h2>
          <h2 data-splitting='words'>Pure CSS Product Card</h2>
          <div className='thumb'>
            <p>HAML • No JS • Animation</p>
            <div className='inner'>
              <img className='shift' loading='lazy' src='https://assets.codepen.io/383755/internal/screenshots/pens/OJXJeod.default.png?fit=cover&amp;format=auto&amp;ha=true&amp;height=540&amp;quality=75&amp;v=2&amp;version=1569360312&amp;width=960' />
            </div>
          </div>
        </div>
        <div className='panel'>
          <h2 data-splitting='words'>Swissted Animated Flyers</h2>
          <h2 data-splitting='words'>Swissted Animated Flyers</h2>
          <div className='thumb'>
            <p>Responsive • HAML • CSS Animation</p>
            <div className='inner'>
              <img loading='lazy' src='https://assets.codepen.io/383755/internal/screenshots/pens/PoqVQRq.default.png?fit=cover&amp;format=auto&amp;ha=true&amp;height=540&amp;quality=75&amp;v=2&amp;version=1585620527&amp;width=960' />
            </div>
          </div>
        </div>
        <div className='panel'>
          <h2 data-splitting='words'>Pure CSS Gritty</h2>
          <h2 data-splitting='words'>Pure CSS Gritty</h2>
          <div className='thumb'>
            <p>CSS • HAML</p>
            <div className='inner'>
              <img className='lighter' loading='lazy' src='https://assets.codepen.io/383755/internal/screenshots/pens/qgEGMZ.default.png?fit=cover&amp;format=auto&amp;ha=false&amp;height=540&amp;quality=75&amp;v=2&amp;version=1548377726&amp;width=960' />
            </div>
          </div>
        </div>
        <div className='panel'>
          <h2 data-splitting='words'>Canyonlands</h2>
          <h2 data-splitting='words'>Canyonlands</h2>
          <div className='thumb'>
            <p>GENERATIVE • JS • SVG</p>
            <div className='inner'>
              <img className='light' loading='lazy' src='https://assets.codepen.io/383755/internal/screenshots/pens/RwWYGxj.default.png?fit=cover&amp;format=auto&amp;ha=false&amp;height=540&amp;quality=75&amp;v=2&amp;version=1548377726&amp;width=960' />
            </div>
          </div>
        </div>
        <p className='subhead final'>Fin</p>
      </div>
      <div id='frame'>
        <div id='close'>
          <div></div>
          <strong className='circle' data-splitting='chars'>GO•BACK•</strong>
        </div>
        <div className='frame-wrap'>
          <div className='frame-container'>
            <iframe id='pen' loading='lazy' src='' style={{border:0}}></iframe>
            <a id='penlink' target='_blank'><strong>View the Code <span>&rarr;</span></strong></a>
          </div>
        </div>
      </div>
      <div id='cursor'>
        <strong className='circle' data-splitting='chars'>SEE•MORE•</strong>
      </div>
      {/* <div id='loader'>
        <div className='wrap'>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
      </div> */}
      <div id='social'>
        <a href='https://twitter.com/cobra_winfrey' target='_blank'>
          <svg clipRule='evenodd' fillRule='evenodd' imageRendering='optimizeQuality' shapeRendering='geometricPrecision' textRendering='geometricPrecision' viewBox='0 0 3333 3333' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm900 1108c-66 30-137 49-212 58 76-46 135-118 162-204-71 42-151 73-234 90-68-72-163-116-270-116-204 0-369 165-369 369 0 29 3 57 9 84-307-16-579-162-761-386-33 56-50 120-50 186 0 128 65 241 164 307-61-2-117-19-167-46v5c0 179 127 328 296 362-31 8-64 13-97 13-24 0-47-2-70-7 47 147 183 253 345 257-127 99-285 158-459 158-30 0-59-2-88-5 164 105 358 166 566 166 679 0 1051-563 1051-1051 0-16 0-32-1-48 72-52 135-117 184-191z'></path>
          </svg>
          </a>
          <a href='https://codepen.io/cobra_winfrey' target='_blank'>
            <svg aria-hidden='true' className='svg-inline--fa fa-codepen fa-w-16 fa-3x' data-icon='codepen' data-prefix='fab' focusable='false' role='img' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
              <path d='M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z' fill='currentColor'></path>
            </svg>
          </a>
      </div>
    </div>
    </div>
  );
};

export default Work;