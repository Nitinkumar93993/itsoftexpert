gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.image-container').forEach((container) => {
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
                const scaleValue = 1 + 3 * progress;

                gsap.set(smallImage, {
                    scale: scaleValue,
                    transformOrigin: "center center"
                });

                if (progress >= 1) {
                    gsap.set(smallImage, { opacity: 0 });
                    gsap.set(bigImage, { opacity: 1 });
                } else {
                    gsap.set(smallImage, { opacity: 1 });
                    gsap.set(bigImage, { opacity: 0 });
                }
            }
        }
    });
});

gsap.registerPlugin(ScrollTrigger);


const containers = document.getElementById('container-image');
const smallImage = containers.querySelector('.small-image');
const bigImage = containers.querySelector('.big-image');

gsap.timeline({
    scrollTrigger: {
        trigger: containers,
        start: "top 40%",
        end: "bottom 20%",
        pin: true,  
        scrub: true,
        onUpdate: (self) => {
            const progress = self.progress;
            const scaleValue = 1 + 3 * progress;
            
            gsap.set(smallImage, { scale: scaleValue });

            if (progress >= 3) {
                gsap.set(smallImage, { opacity: 1 });
                gsap.set(bigImage, { opacity: 0 });
            } else {
                gsap.set(smallImage, { opacity: 0 });
                gsap.set(bigImage, { opacity: 1 });
            }
        }
    }
});
