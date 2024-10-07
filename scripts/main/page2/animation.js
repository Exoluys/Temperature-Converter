export function page2Animation () {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 70%",
            end: "top 18%",
            scrub: 1
        }
    })
    
    tl
    .from ("#info, #info2", {
        y:-20,
        opacity: 0,
        stagger: 0.3,
    })
}