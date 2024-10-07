export function animatedText2() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#part2",
            scoller: "body",
            start: "top 50%",
            end: "top 0%",
            scrub: 3
        }
    })

    tl
        .from("#OurDevelopmentJourney .title", {
            y: -80,
            opacity: 0,
            duration: 1
        })
        .from("#OurDevelopmentJourney #contents .lists", {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.3
        })
}