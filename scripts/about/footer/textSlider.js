export function textSlider() {
    window.addEventListener("wheel", (pos) => {
        if(pos.deltaY > 0) {
            gsap.to("#slider", {
                xPercent: -100,
                repeat: -1,
                duration: 5,
                ease: "linear"
            }).totalProgress(0.5)

            gsap.to("#arrow", {
                rotate: 180,
                ease: "linear"
            })
        
            gsap.set("#move-inner", {
                xPercent: -50
            })
        }
        else {
            gsap.to("#slider", {
                xPercent: 100,
                repeat: -1,
                duration: 5,
                ease: "linear"
            }).totalProgress(0.5)

            gsap.to("#arrow", {
                rotate: 0,
                ease: "linear"
            })
        
            gsap.set("#move-inner", {
                xPercent: -50
            })
        }
    })
}