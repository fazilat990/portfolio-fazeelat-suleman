import React, {useState, useEffect} from 'react';
import '../assets/css/home.css';
import { gsap } from "gsap";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        //if (isVisible) {
            document.body.addEventListener("mousemove", evt => {
                const mouseX = evt.clientX;
                const mouseY = evt.clientY;
                
                gsap.set(".cursor", {
                  x: mouseX,
                  y: mouseY
                })
                
                gsap.to(".shape", {
                  x: mouseX,
                  y: mouseY,
                  stagger: -0.1
                })
              })
        //}
      }, [isVisible]);
    return (
        <div className="relative h-full w-full overflow-hidden">
            <div className="cursor"></div>
            <div className="shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
            <div className="content">
                <h1>Hi! I'm Fazeelat</h1>
            </div>
        </div>
    );
};

export default Home;