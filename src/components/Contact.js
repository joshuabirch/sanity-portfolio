import React, { useRef, useEffect } from "react"
import { gsap, Power3, Power4 } from "gsap"


function Contact() {

  let screen = useRef(null)
  let body = useRef(null)

  useEffect(() => {
    var tl = new gsap.timeline()
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    })
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    })
    tl.set(screen, {left:"-100%"})
    gsap.to(body, { css: {
      opacity: 1,
      top: "-20%", 
      pointerEvents: 'auto', 
      },
      ease: Power4.easeInOut, 
      duration: .3}).delay(2)
    return () => {
      gsap.to(body, { css: {
        opacity: 0,
        top: "20%",
        pointerEvents: 'none',
        },
        duration: 1
      })
    }
  })

  return (
    <React.Fragment>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}>
        </div>
      </div>
    <div className="container mx-auto flex justify-center">
      <div ref={(el) => (body = el)} className="Headd">
        <h1 className="text-white blenny">Contact</h1>
        {/* <canvas ref={canvasRef} /> */}
      </div>
    </div>
    </React.Fragment>
  )
}

export default Contact