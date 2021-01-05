
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

/////////////////////////////////////////////////////////////////////
///////////////////  + Grain background effect  /////////////////////
/////////////////////////////////////////////////////////////////////
    let grainAnim = anime({
                        targets: '#grain',
                        keyframes: [
                            {backgroundPosition: '-1px bottom'},
                            {backgroundPosition: 'left .5px'}, 
                            {backgroundPosition: '0px top'}, 
                            {backgroundPosition: 'right -1px'}
                            ],
                        duration: 600,
                        easing: 'steps(4)',
                        loop: true,
                        autoplay: false
                    });
    
    let heart = document.querySelector(".heart");
    let head = document.querySelector(".head");
    
    /*HEART ANIMATION*/
    heart.addEventListener("mouseenter", function () {
        anime({
            targets: this,
            scale: 1.1
        });
    });
    
    heart.addEventListener("mouseleave", function () {
        anime({
            targets: this,
            scale: 1
        });
    });
    
    heart.addEventListener("click", function () {
        grainAnim.play();
    });
    
    /*HEAD ANIMATION*/
    head.addEventListener("mouseenter", function () {
        anime({
            targets: this,
            scale: 1.1
        });
    });
    
    head.addEventListener("mouseleave", function () {
        anime({
            targets: this,
            scale: 1
        });
    });
    
    head.addEventListener("click", function () {
        grainAnim.pause();
    });
    
/////////////////////////////////////////////////////////////////////
///////////////////  - Grain background effect  /////////////////////
/////////////////////////////////////////////////////////////////////
    
/////////////////////////////////////////////////////////////////////
////////////////////  + link underline effect  //////////////////////
/////////////////////////////////////////////////////////////////////    
    
    // Mouseenter function
//    function enterAnimation(link, e, index) {
//        link.tl.tweenFromTo(0, "midway");
//    }
//
//    // Mouseleave function
//    function leaveAnimation(link, e) {
//        link.tl.play();
//    }
//
//    // Get all links
//    let workLinks = document.querySelectorAll("a");
//    
//    workLinks.forEach(activateLinks);
//        
//    
//    function activateLinks(link, index, value) {
//        
//        let underline = link.querySelector(".underline");
//        link.tl = gsap.timeline({paused: true});
//
//        link.tl.fromTo(underline, {
//            width: "0%",
//            left: "0%",
//        }, {
//            width: "100%",
//            duration: .5, 
//        });
//
//        link.tl.add("midway");
//
//        link.tl.fromTo(underline, {
//            width: "100%",
//            left: "0%",
//        }, {
//            width: "0%",
//            left: "100%",
//            duration: 1, 
//            immediateRender: false
//        });
//
//        // Mouseenter
//        link.addEventListener("mouseenter", function(e) {
//            enterAnimation(link, e, index);
//        });
//
//        // Mouseleave
//        link.addEventListener("mouseleave", function(e) {
//            leaveAnimation(link, e);
//        });
//
//    }
/////////////////////////////////////////////////////////////////////
////////////////////  - link underline effect  //////////////////////
/////////////////////////////////////////////////////////////////////
    
    
    // window load event makes sure image is 
    // loaded before running animation
    window.onload = function() {
         
    };
    
});