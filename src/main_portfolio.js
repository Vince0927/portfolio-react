// function that hides/show element inside div
function appear_menufunction(){
    var x = document.getElementById("second-nav-menu");

    x.style.display == 'none';

    if (x.style.display !== 'none'){
        x.style.display = 'none';
    }else {
        x.style.display = 'block';
    }
};




function showhide_menufunction(){
    var x = document.getElementById("second-nav-menu");

    if(x.style.display==="none"){
        x.style.display="block";
    }else{
        x.style.display="none";
    }

};






// // GSAP animation
gsap.from('.logo', {opacity: 0, duration: 1, delay:1, x:10})

gsap.from('.home-text', {opacity: 0, duration: 1, delay:1, y:100})
gsap.from('.home-text p', {opacity: 0, duration: 1, delay:1, y:20})
gsap.from('.home-text h2', {opacity: 0, duration: 1, delay:2, x:30})
gsap.from('.home-text h1', {opacity: 0, duration: 1, delay:2.5, y:10, stagger: 0.2})
    

// gsap.from('.home-img', {opacity: 0, duration: 1, delay:2, y:50})

// //name
gsap.from('.name', {opacity: 0, duration: 1, delay:2, x:50})


// //contact header
gsap.from('.get-in-touch', {opacity: 0, duration: 1, delay:2, x:50})


// //hamburger button
gsap.from('.header .hamburger-btn', {opacity: 0, duration: 1, delay:2, x:25})      

// //red ball spinning
gsap.from('.effect-6 div', {opacity: 0, duration: 1, delay:2, x:-70})      


// //.effect-1
gsap.from('.effect-1', {opacity: 0, duration: 1, delay:2, x:25})      

// //navigation items
gsap.from('.nav-sample', {opacity: 0, duration: 1, delay:2, y:10})

// //scroll trigger
gsap.registerPlugin(ScrollTrigger);

 gsap.from(".about-img", {scrollTrigger: {trigger: ".about-img", 
 toggleActions: "restart none none none"}, opacity: 0, duration: 3, delay:1, y:50});

gsap.from('#pmain-text-delay', {scrollTrigger: "#pmain-text-delay", opacity: 0, duration: 1, delay:0.5, x:50, stagger: 0.2})
gsap.from('#p1-text-delay', {scrollTrigger: "#p1-text-delay", opacity: 0, duration: 1, delay:1.0, x:50, stagger: 0.2})
gsap.from('#p2-text-delay', {scrollTrigger: "#p2-text-delay", opacity: 0, duration: 1, delay:1.0, x:50, stagger: 0.2})
gsap.from('#p3-text-delay', {scrollTrigger: "#p3-text-delay", opacity: 0, duration: 1, delay:1.5, x:50, stagger: 0.2})
gsap.from('#p4-text-delay', {scrollTrigger: "#p4-text-delay", opacity: 0, duration: 1, delay:1.5, x:50, stagger: 0.2})
gsap.from('#p5-text-delay', {scrollTrigger: "#p5-text-delay", opacity: 0, duration: 1, delay:2.0, x:50, stagger: 0.2})
gsap.from('#p6-text-delay', {scrollTrigger: "#p6-text-delay", opacity: 0, duration: 3, delay:2.0, x:50, stagger: 0.2})
    
gsap.from('.section-title', {scrollTrigger: ".section-title", opacity: 0, duration: 1, delay:0.5, y:30})


// // // scroll trigger projects section
gsap.from('#say-about-project1', {scrollTrigger: "#say-about-project1", opacity: 0, duration: 1, delay:0.5, x:50, stagger: 0.2})
gsap.from('#say-about-project2', {scrollTrigger: "#say-about-project1", opacity: 0, duration: 1, delay:0.5, x:60, stagger: 0.2})
gsap.from('#say-about-project3', {scrollTrigger: "#say-about-project1", opacity: 0, duration: 1, delay:0.5, x:70, stagger: 0.2})

// grid-projects-item1
gsap.from('#grid-projects-item1', {scrollTrigger: "#grid-projects-item1", opacity: 0, duration: 1, delay:0.7, x:70, stagger: 0.2})
gsap.from('#grid-projects-item2', {scrollTrigger: "#grid-projects-item2", opacity: 0, duration: 1, delay:0.9, x:90, stagger: 0.2})
gsap.from('#grid-projects-item3', {scrollTrigger: "#grid-projects-item3", opacity: 0, duration: 1, delay:1.0, x:100, stagger: 0.2})



// scroll trigger contact section
// get-in-touch-text
// section-get-in-touch

gsap.from('#contact-section', {scrollTrigger: "#contact-section", opacity: 0, duration: 1, delay:0.7, x:70, stagger: 0.2})

gsap.from('#get-in-touch-text', {scrollTrigger: "#get-in-touch-text", opacity: 0, duration: 1, delay:0.7, x:70, stagger: 0.2})

gsap.from('#contact-phone', {scrollTrigger: "#contact-phone", opacity: 0, duration: 1, delay:0.7, y:70, stagger: 0.2})

gsap.from('#contact-email', {scrollTrigger: "#contact-email", opacity: 0, duration: 1, delay:0.7, y:90, stagger: 0.2})

gsap.from('#email', {scrollTrigger: "#email", opacity: 0, duration: 1, delay:0.7, y:90, stagger: 0.2})
gsap.from('#contact-name', {scrollTrigger: "#contact-name", opacity: 0, duration: 1, delay:0.7, y:90, stagger: 0.2})
gsap.from('#subject', {scrollTrigger: "#subject", opacity: 0, duration: 1, delay:0.7, y:90, stagger: 0.2})
gsap.from('.form-group', {scrollTrigger: ".form-group", opacity: 0, duration: 1, delay:0.7, y:90, stagger: 0.2})
gsap.from('.label-message', {scrollTrigger: ".label-message", opacity: 0, duration: 1, delay:0.7, y:90, stagger: 0.2})
gsap.from('#submit-contact', {scrollTrigger: "#submit-contact", opacity: 0, duration: 1, delay:0.7, x:90, stagger: 0.2})
gsap.from('#textarea', {scrollTrigger: "#textarea", opacity: 0, duration: 1, delay:0.7, y:90, stagger: 0.2})




// parallax scrolling slow effect
const parallax= document.getElementById('about-container-id');

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.4 + "px";
})


// // zoom in and out
// const bg = document.getElementById("container-zoom-image");

// window.addEventListener('scroll', function(){
//     bg.style.backgroundSize = 120 - +window.pageYOffset/24+'%';
// })

