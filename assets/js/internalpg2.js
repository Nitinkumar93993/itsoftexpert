document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".image-row img:nth-child(1)", 
        { x: '100%', opacity: 0 }, 
        { x: '0%', opacity: 1, duration: 1, 
          scrollTrigger: {
              trigger: ".image-row",
              start: "top 80%",
              end: "bottom 60%",
              scrub: true
          }
    });

    gsap.fromTo(".image-row img:nth-child(2)", 
        { x: '-100%', opacity: 0 }, 
        { x: '0%', opacity: 1, duration: 1, 
          scrollTrigger: {
              trigger: ".image-row",
              start: "top 80%",
              end: "bottom 60%",
              scrub: true
          }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.heading-what-we-do');
    const imageFrames = document.querySelectorAll('.image-frame');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 250;

        const headingRect = heading.getBoundingClientRect();
        if (headingRect.top < windowHeight - revealPoint) {
            heading.style.opacity = 1;
        }

        imageFrames.forEach(frame => {
            const frameRect = frame.getBoundingClientRect();
            if (frameRect.top < windowHeight - revealPoint) {
                frame.style.opacity = 1;
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 
});
