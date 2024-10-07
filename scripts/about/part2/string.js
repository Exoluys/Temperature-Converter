export function stringMovement() {
    var finalPath = `M 20 100 Q 950 100 1885 100`
    var string = document.querySelector("#string")

    string.addEventListener("mousemove", (dets) => {
        var boundingRect = string.getBoundingClientRect();
        
        var relativeX = dets.clientX - boundingRect.left;
        var relativeY = dets.clientY - boundingRect.top;

        var path = `M 20 100 Q ${relativeX} ${relativeY} 1885 100`

        gsap.to("svg path", {
            attr: { d: path },
            duration: .2,
            ease: "power:4.out"
        })
    })

    string.addEventListener("mouseleave", () => {
        gsap.to("svg path", {
            attr: { d: finalPath },
            duration: 2,
            ease: "elastic.out(1,0.15)"
        })
    })
}