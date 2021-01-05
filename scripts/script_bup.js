
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
    
    let heart = document.querySelector(".heart");
    let head = document.querySelector(".head");
    
    heart.addEventListener("click", function () {
         masterTL
//            .add(grain(),0)
//            .timeScale(0.7)
            .progress(1).progress(0)
            .play(); 
    });
    
    head.addEventListener("click", function () {
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