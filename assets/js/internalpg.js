gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.image-container').forEach((container) => {
    const favIcon = container.querySelector('.fav-icon');
    const smallImage = container.querySelector('.small-image');
    const bigImage = container.querySelector('.big-image');

    gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top center",
            end: "bottom center",
            pin: true,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const scaleValue = 1 + 3 * progress; // Adjust scale factor as needed

                if (progress < 0.33) {
                
                    gsap.set(favIcon, {
                        scale: scaleValue,
                        opacity: 1,
                        transformOrigin: "center center"
                    });
                    gsap.set(smallImage, { opacity: 0 });
                    gsap.set(bigImage, { opacity: 0 });
                } else if (progress >= 0.33 && progress < 0.66) {
                    // Favicon fades out, small image fades in and zooms
                    gsap.set(favIcon, { opacity: 0 });
                    gsap.set(smallImage, {
                        scale: scaleValue,
                        opacity: (progress - 0.33) * 3 // Fades in small image
                    });
                    gsap.set(bigImage, { opacity: 0 });
                } else {
                    // Small image fades out, big image fades in
                    gsap.set(smallImage, { opacity: 1 - (progress - 0.66) * 3 });
                    gsap.set(bigImage, {
                        opacity: (progress - 0.66) * 3,
                        scale: scaleValue
                    });
                }
            }
        }
    });
});




// gsap.registerPlugin(ScrollTrigger);

// document.querySelectorAll('.image-container').forEach((container) => {
//     const favIcon = container.querySelector('.fav-icon');
//     const smallImage = container.querySelector('.small-image');
//     const bigImage = container.querySelector('.big-image');

//     gsap.timeline({
//         scrollTrigger: {
//             trigger: container,
//             start: "top center",
//             end: "bottom center",
//             pin: true,
//             scrub: true,
//             onUpdate: (self) => {
//                 const progress = self.progress;
//                 const scaleValue = 1 + 5 * progress;

//                 gsap.set(favIcon, {
//                     scale: scaleValue,
//                     transformOrigin: "center center"
//                 });

//                 if (progress >= 2) {
//                     gsap.set(favIcon,{opacity:0});
//                     gsap.set(smallImage, { opacity: 0 });
//                     gsap.set(bigImage, { opacity: 0 });

                 
//                 } 
//                 else if(progress >=3){
//                     gsap.set(favIcon,{opacity: 1});
//                     gsap.set(smallImage, { opacity: 0 });
//                     gsap.set(bigImage, { opacity:0  });
//                   }
//                 else {
//                     gsap.set(favIcon,{opacity:0})
//                     gsap.set(smallImage, { opacity: 0 });
//                     gsap.set(bigImage, { opacity:1  });
//                 }
//             }
//         }
//     });
// });




// gsap.registerPlugin(ScrollTrigger);


// const containers = document.getElementById('container-image');
// const smallImage = containers.querySelector('.small-image');
// const bigImage = containers.querySelector('.big-image');

// gsap.timeline({
//     scrollTrigger: {
//         trigger: containers,
//         start: "top 40%",
//         end: "bottom 20%",
//         pin: true,
//         scrub: true,
//         onUpdate: (self) => {
//             const progress = self.progress;
//             const scaleValue = 1 + 3 * progress;

//             gsap.set(smallImage, { scale: scaleValue });

//             if (progress >= 3) {
//                 gsap.set(smallImage, { opacity: 1 });
//                 gsap.set(bigImage, { opacity: 0 });
//             } else {
//                 gsap.set(smallImage, { opacity: 0 });
//                 gsap.set(bigImage, { opacity: 1 });
//             }
//         }
//     }
// });
