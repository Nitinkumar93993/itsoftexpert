document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".image-row img:nth-child(1)",
        { x: '50%', opacity: 0 },
        {
            x: '0%', opacity: 1, duration: 1.5, ease: "power3.out",
            scrollTrigger: {
                trigger: ".image-row",
                start: "top 50%",
                end: "bottom 80%",
                scrub: true
            }
        });
    
    gsap.fromTo(".image-row img:nth-child(2)",
        { x: '-50%', opacity: 0 },
        {
            x: '0%', opacity: 1, duration: 1.5, ease: "power3.out",
            scrollTrigger: {
                trigger: ".image-row",
                start: "top 50%",
                end: "bottom 80%",
                scrub: true
            }
        });
    // Reveal on Scroll
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

    // Smooth Scroll on Click
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

    // Heading Text Animation
    const headingTitle = document.querySelector(".heading-title");
    const text = headingTitle.innerText;
    headingTitle.innerHTML = ""; // Clear the heading content

    // Split the text into an array of words
    const words = text.split(" ");

    words.forEach((word, wordIndex) => {
        if (word === "SEO") {
            // Create a span for the word "SEO" and add the highlight class
            const span = document.createElement("span");
            span.classList.add("main-heading-text");
            span.textContent = word;

            headingTitle.appendChild(span);
        } else {
            // For other words, split into characters and create spans for each
            word.split("").forEach((char, i) => {
                const span = document.createElement("span");
                span.style.setProperty('--i', i);
                span.textContent = char;
                headingTitle.appendChild(span);
            });
        }

        // Add a space after each word except the last one
        if (wordIndex < words.length - 1) {
            headingTitle.appendChild(document.createTextNode(" "));
        }
    });

    const subheadings = document.querySelectorAll(".subheading");
  
    // Function to split subheading into individual characters
    function splitText(element) {
      const text = element.innerText;
      element.innerHTML = ""; // Clear the existing text

      text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.style.setProperty('--i', i); // Set a custom property for animation delay

        if (char === " ") {
          span.style.display = "inline-block";
          span.style.width = "0.5em"; // Adjust width as needed
          span.textContent = " ";
        } else {
          span.textContent = char;
        }

        element.appendChild(span);
      });
    }

    // Apply the splitText function to each subheading
    subheadings.forEach(subheading => {
      splitText(subheading);
    });

    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the animation class when the subheading is in view
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the subheading is in view
    });

    subheadings.forEach(subheading => {
      observer.observe(subheading); // Start observing each subheading
    });




    // Light/Dark Mode Toggle
    const toggleButton = document.getElementById('toggle-button');
    const toggleIcon = document.getElementById('toggle-icon');
    const bigContainer = document.querySelector('.big-container');
    const Content = document.querySelector('.content');
    const Headings = document.querySelector('.heading-title');
    const Subheadings = document.querySelectorAll('.subheading'); 
    const whatheading = document.querySelector('.heading-what-we-do');
    // const headerdropdown = document.querySelectorAll('.fa-angle-down');
    const mainHeadermenu = document.querySelectorAll('.main-menu > ul > li > a');
    const dropdown = document.querySelectorAll('.dropdown-padding');
    const ctaarea = document.querySelector('.cta4-section-area');
    const cta1 = document.querySelector('.cta-header-area > h2');
    const cta2 = document.querySelector('.cta-header-area > p');
    const cta3 = document.querySelector('.banner-btn');
    const logo = document.querySelector('.main-logo');


    toggleButton.addEventListener('click', () => {
        bigContainer.classList.toggle('light-mode');

        if (bigContainer.classList.contains('light-mode')) {
            toggleIcon.src = 'assets/img/all-images/moon.png';
            toggleIcon.alt = 'Night Mode';
        } else {
            toggleIcon.src = 'assets/img/all-images/sun.png';
            toggleIcon.alt = 'Day Mode';
        }
       
        Content.classList.toggle('light-mode');
        Headings.classList.toggle('light-mode');
        whatheading.classList.toggle('light-mode');
        ctaarea.classList.toggle('light-mode');
        cta1.classList.toggle('light-mode');
        cta2.classList.toggle('light-mode');
        cta3.classList.toggle('light-mode');
        logo.classList.toggle('light-mode');

        // Apply the light-mode class to each subheading
        Subheadings.forEach((subheading) => {
            subheading.classList.toggle('light-mode');
        });

        mainHeadermenu.forEach((heading) => {
            heading.classList.add('light-mode');
        });

        dropdown.forEach((element) =>{
            element.classList.add('light-mode');
        })

       
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














