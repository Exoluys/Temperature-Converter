export function nav() {
    var tl = gsap.timeline({
        delay: 1
    });

    tl
        .from("nav img", {
            y: "-20px",
            opacity: 0,
            duration: 1
        })
        .from("#sidePanel", {
            y: "-20px",
            opacity: 0,
            duration: 1,
            stagger: 0.2
        })
}