document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".image-row img:nth-child(1)",
        { x: '30%', opacity: 0 },
        {
            x: '0%', opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: ".image-row",
                start: "top 50%",
                end: "bottom 80%",
                scrub: true
            }
        });

    gsap.fromTo(".image-row img:nth-child(2)",
        { x: '-30%', opacity: 0 },
        {
            x: '0%', opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: ".image-row",
                start: "top 50%",
                end: "bottom 80%",
                scrub: true
            }
        });
});


document.addEventListener('DOMContentLoaded', function () {
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



document.addEventListener('DOMContentLoaded', function () {
    const imageFrames = document.querySelectorAll('.image-frame');

    imageFrames.forEach(frame => {
        frame.addEventListener('click', function () {
            const targetId = frame.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


// document.getElementById("modeToggle").addEventListener("click", function() {
    
//     document.body.classList.toggle("day-mode");
    
//     if(document.body.classList.contains("day-mode")) {
//         this.textContent = "Switch to Night Mode";
//     } else {
//         this.textContent = "Switch to Day Mode";
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     alert('asd');
//     const heading = document.querySelector(".heading-title");
//     const text = heading.innerText;
//     heading.innerHTML = ""; // Clear the heading content
    
//     text.split("").forEach((char, i) => {
//         const span = document.createElement("span");
//         span.style.setProperty('--i', i); // Set the index as a CSS variable
//         span.textContent = char;
//         heading.appendChild(span);
//     });
// });














