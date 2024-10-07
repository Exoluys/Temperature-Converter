export function cursor() {
    var cursor = document.querySelector("#cursor")
    const hoverElements = [...document.querySelectorAll("#sidePanel, #fill, .part1 a, .submit-button button, #converterForm input, #converterForm select")]

    window.addEventListener("mousemove", (pos) => {
        cursor.style.display = "flex"
        gsap.to(cursor, {
            x: pos.x - 10,
            y: pos.y - 8,
            duration: 0.4,
            ease: "power3.out",
        })
    })

    window.addEventListener("mouseout", () => {
        cursor.style.display = "none"
    })

    hoverElements.forEach(el => {
        el.addEventListener("mouseenter",() => {
            gsap.to(cursor, {
                opacity:0,
                duration: 0.5
            })
        })

        el.addEventListener("mouseleave",() => {
            gsap.to(cursor, {
                opacity: 1,
                duration: 0.5
            })
        })
    })
}