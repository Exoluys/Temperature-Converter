export function page4Animation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "top 50%",
            end: "top 5%",
            scrub: 2
        }
    })

    tl
    .from(".main-header p, .input-group label", {
        y: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    })
    .from(".input-group select,  .input-group input", {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    })

    tl.from(".submit-button button", {
        opacity: 0
    })
}