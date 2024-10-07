export function page3Animation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "top 50%",
            end: "top -10%",
            scrub: 3
        }
    })
    
    tl
    .from ("#title h1, #title p", {
        y: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    })
    .from (".content", {
        x: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    }, "+=2")
    .from (".content #content-icon, .content #content-para", {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    }, "-=1")
}