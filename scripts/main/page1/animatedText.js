export function animatedText() {
    var tl = gsap.timeline({
        delay: 2.5
    })

    tl
        .from(".part1 h1", {
            x: -200,
            opacity: 0,
            duration: 1
        })
        .from("h1 b", {
            opacity: 0,
            duration: 0.8,
            stagger: 0.3
        })
        .from(".part1 p", {
            y: -50,
            opacity: 0,
            duration: 1
        })
        .from(".part1 button", {
            opacity: 0,
            duration: 1
        })
}