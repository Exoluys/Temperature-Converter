export function animatedText() {
    var tl = gsap.timeline()

    tl
    .from("h1, p", {
        y: -80,
        opacity: 0,
        delay: 2,
        duration: 1,
        stagger: 0.3
    })
}