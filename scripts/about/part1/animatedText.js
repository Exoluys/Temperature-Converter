export function animatedText() {
    var tl = gsap.timeline({
        delay: 2.5
    })

    tl
        .from("#title h1", {
            x: 100,
            opacity: 0,
            duration: 0.8,
        })
        .from("h1 b", {
            x: -200,
            opacity: 0,
            duration: 0.8,
            stagger: 0.3
        })
        .from("#title p", {
            y: -50,
            opacity: 0,
            duration: 1
        })
}