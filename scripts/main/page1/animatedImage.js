export function animatedImage() {
    var tl = gsap.timeline({
        repeat: -1,
        delay: 2.5
    })

    tl
        .from(".c", {
            rotateY: -900,
            duration: 1,
            opacity: 0,
            stagger: 0.3,
            ease: "linear"
        })
        .to(".c", {
            rotateY: 1000,
            duration: 1,
            delay: 1.5,
            opacity: 0,
            stagger: 0.3,
            ease: "linear"
        })
        .from(".f", {
            rotateY: -900,
            duration: 1,
            opacity: 0,
            stagger: 0.3,
            ease: "linear"
        })
        .to(".f", {
            rotateY: 1000,
            duration: 1,
            delay: 1.5,
            opacity: 0,
            stagger: 0.3,
            ease: "linear"
        })
        .from(".k", {
            rotateY: -900,
            duration: 1,
            opacity: 0,
            stagger: 0.3,
            ease: "linear"
        })
        .to(".k", {
            rotateY: 1000,
            duration: 1,
            delay: 1.5,
            opacity: 0,
            stagger: 0.3,
            ease: "linear"
        })
}