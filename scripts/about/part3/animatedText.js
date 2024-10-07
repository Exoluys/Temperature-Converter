export function animatedText3() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#part3",
            scoller: "body",
            start: "top 50%",
            end: "top -10%",
            scrub: 3
        }
    })

    tl
    .from("#precisionAndInnovation .title",{
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    })
    .from ("#precisionAndInnovation .divison2 .info1", {
        x: -50,
        opacity: 0,
        duration: 1
    }, "a")
    .from ("#precisionAndInnovation .divison2 .info2", {
        x: 50,
        opacity: 0,
        duration: 1
    }, "a")
}