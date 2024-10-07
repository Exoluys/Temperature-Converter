export function sidePanel() {
    var menu = document.querySelector("#sidePanel")
    var close = document.querySelector("#fill i")
    var body = document.body

    var tl = gsap.timeline()

    menu.addEventListener("click", () => {
        tl
            .to("#fill", {
                duration: 0.8,
                right: 0
            })
            .from("#fill h2", {
                duration: 0.6,
                y: -20,
                opacity: 0,
                stagger: 0.2
            })
            .from("#fill i", {
                duration: 0.5,
                opacity: 0
            })

        menu.style.display = "none"
        body.style.overflowY = "hidden"
    })

    close.addEventListener("click", () => {
        tl
            .to("#fill", {
                duration: 0.8,
                right: "-25vw"
            })

        menu.style.display = "initial"
        body.style.overflowY = "auto"
    })
}