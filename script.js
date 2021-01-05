
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

/////////////////////////////////////////////////////////////////////
///////////////////  + Grain background effect  /////////////////////
/////////////////////////////////////////////////////////////////////
    function grain() {
        var tl = gsap.to("#grain", {
            repeat: -1,
            rotation:0.01,
            z:0.01,
            keyframes: [
                {backgroundPosition: "-1px bottom", duration:0.1}, 
                {backgroundPosition: "left .5px", duration:0.1}, 
                {backgroundPosition: "0px top", duration:0.1}, 
                {backgroundPosition: "right -1px", duration:0.1}, 
            ]
        });
        
        return tl;
    }
    
    document.querySelector(".heart").addEventListener("click", function () {
         masterTL
//            .add(grain(),0)
//            .timeScale(0.7)
            .progress(1).progress(0)
            .play(); 
    });
    
    document.querySelector(".head").addEventListener("click", function () {
        masterTL.pause();
    });
/////////////////////////////////////////////////////////////////////
///////////////////  - Grain background effect  /////////////////////
/////////////////////////////////////////////////////////////////////
    
/////////////////////////////////////////////////////////////////////
////////////////////  + link underline effect  //////////////////////
/////////////////////////////////////////////////////////////////////    
    
    // Mouseenter function
    function enterAnimation(link, e, index) {
        link.tl.tweenFromTo(0, "midway");
    }

    // Mouseleave function
    function leaveAnimation(link, e) {
        link.tl.play();
    }

    // Get all links
    let workLinks = document.querySelectorAll("a");
    
    workLinks.forEach(activateLinks);
        
    
    function activateLinks(link, index, value) {
        
        let underline = link.querySelector(".underline");
        link.tl = gsap.timeline({paused: true});

        link.tl.fromTo(underline, {
            width: "0%",
            left: "0%",
        }, {
            width: "100%",
            duration: .5, 
        });

        link.tl.add("midway");

        link.tl.fromTo(underline, {
            width: "100%",
            left: "0%",
        }, {
            width: "0%",
            left: "100%",
            duration: 1, 
            immediateRender: false
        });

        // Mouseenter
        link.addEventListener("mouseenter", function(e) {
            enterAnimation(link, e, index);
        });

        // Mouseleave
        link.addEventListener("mouseleave", function(e) {
            leaveAnimation(link, e);
        });

    }    
/////////////////////////////////////////////////////////////////////
////////////////////  - link underline effect  //////////////////////
/////////////////////////////////////////////////////////////////////
    
    
    var masterTL = gsap.timeline({
        repeat: -1
    });

    // window load event makes sure image is 
    // loaded before running animation
    window.onload = function() {
         masterTL
            .add(grain(),0)
            .pause();
        
        gsap.from(".logo", {duration:1, drawSVG: 50});
    };
    
});













/*
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
document.querySelector(".heart").addEventListener("click", function () {
  tl.to(".logo.heart", { opacity: 0, duration: 0.5 });
  tl.to(".menu-div", { opacity: 0, display: "none", duration: 0.5 }, "-=0.5");
  tl.to(".line", { opacity: 0, duration: 0.5, stagger: 0.01 }, "-=0.5");
  tl.to(".nav-links", { x: "0%", duration: 1 }, "-=0.3");
  tl.fromTo(
    ".nav-links li",
    { opacity: 0 },
    { opacity: 1, duration: 1, stagger: 0.2 }
  );
  tl.to(".close", { opacity: 1, display: "inline-block", duration: 0 });
  tl.to(".close-text", { opacity: 1, display: "inline-block", duration: 0 });
  tl.to(".close-div", { opacity: 1, display: "block", duration: 0.5 });
});

document.querySelector(".head").addEventListener("click", function () {
  tl.fromTo(
    ".nav-links li",
    { opacity: 1 },
    { opacity: 0, stagger: 0.2, duration: 0.3 }
  );
  tl.to(".close", { opacity: 0, display: "none", duration: 0.3 });
  tl.to(".close-text", { opacity: 0, display: "none", duration: 0.3 }, "-=0.3");
  tl.to(".close-div", { opacity: 0, display: "none", duration: 0 });
  tl.to(".nav-links", { x: "100%", duration: 0.5 });
  tl.to(".logo.heart", { opacity: 1, duration: 0.3 }, "-=0.5");
  tl.to(".menu-div", { opacity: 1, display: "flex" });
  tl.to(".line", { opacity: 1, duration: 0.5, stagger: 0.2 }, "-=0.5");
});

*/


//LOADING

//const tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });
////slider animation
//tl1.to(".hide-text", { y: "0%", duration: 1, stagger: 0.25 });
//tl1.to(".slider", { x: "100%", duration: 1.5, delay: 1.5 });
//tl1.to(".intro", { x: "100%", duration: 1 }, "-=1.5");
//// animating content out
//tl.to(".logo", { opacity: 0, duration: 0 });
//tl.to(".menu-div", { opacity: 0, display: "none", duration: 0 });
//tl.to(".line", { opacity: 0, duration: 0 });
//tl1.to(".image", { opacity: 0, display: "none", duration: 0 }, "-=2");
//tl1.to(".content", { opacity: 0, duration: 0 }, "-=2");
//// animating content in
//tl1.to(".hero-section", { scale: 10, duration: 0 }, "-=5");
//tl1.to(".hero-section", { scale: 1, duration: 1 });
//tl1.to(".content", { opacity: 1, duration: 1 });
//tl1.to(".image", { opacity: 1, display: "block", duration: 2, stagger: 0.2 });
//tl1.to(".logo", { opacity: 1, duration: 1 }, "-=2");
//tl1.to(".menu-div", { opacity: 1, display: "flex", duration: 1 }, "-=2");
//tl1.to(".line", { opacity: 1, duration: 1, stagger: 0.2 }, "-=2");