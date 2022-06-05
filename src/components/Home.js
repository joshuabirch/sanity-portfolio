import React, { useRef, useState, useEffect } from "react"
import { gsap, Power3, Power4 } from "gsap"
// import fx from 'glfx'
// import $ from 'jquery'
import homeAsset from '../assets/home-asset.png'


const Home = () => {

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
      pointerEvents: 'auto', 
      },
      ease: Power4.easeInOut, 
      duration: .3}).delay(2)
    return () => {
      gsap.to(body, { css: {
        opacity: 0,
        pointerEvents: 'none',
        },
        ease: Power4.easeInOut,
        duration: 1
      })
    }
  })

  // const [sourceImg, setSourceImg] = useState(null);
  // const canvasRef = React.useRef(null); 

  // useEffect(() => {
  //   if (!sourceImg) {
  //     const image = new Image();
  //     image.crossOrigin = "Anonymous";
  //     image.onload = () => {
  //       setSourceImg(image);
  //     };
  //     image.src = "checkered-pattern.jpg";
  //   } else {
  //     var canvas = fx.canvas();
  //     var texture = canvas.texture(sourceImg);
  //     canvas.draw(texture).update(); 

  //     const displayCanvas = canvasRef.current;
  //     displayCanvas.width = sourceImg.width;
  //     displayCanvas.height = sourceImg.height;
  //     const ctx = displayCanvas.getContext("2d");
  //     drawCanvas(ctx, canvas);
    
  //     // document.addEventListener("mousemove", (e) => {
  //     //   var offset = $('canvas').offset()
  //     //   var x = e.pageX - offset.left
  //     //   var y = e.pageY - offset.top
  //     //   canvas.draw(texture).swirl(x, y, 200, 1).update()
  //     // })

  //   }
  // }, [sourceImg]);

  

  return (
    <React.Fragment>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}>
        </div>
      </div>
    <div className="container mx-auto flex justify-center">
      <div ref={(el) => (body = el)} className="Headd">
        {/* <canvas ref={canvasRef} /> */}
        <section className="flex justify-center min-h-screen">
          <img src={homeAsset} className='h-full w-5/6 lg:py-10 md:py-5 sm:py-0' />
        </section>
        <section className="min-h-screen">
          <div className="rounded-full jbd-bg-blue blenny uppercase w-full py-8 px-12 text-7xl my-3">ux research</div>
          <div className="rounded-full jbd-bg-yellow blenny uppercase w-full py-8 px-12 text-7xl my-3">ux design</div>
          <div className="rounded-full jbd-bg-green blenny uppercase w-full py-8 px-12 text-7xl my-3">ui design</div>
          <div className="rounded-full jbd-bg-white blenny uppercase w-full py-8 px-12 text-7xl my-3">web development</div>
        </section>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Home;

const drawCanvas = (ctx, source) => {
  if (!source) return;

  ctx.drawImage(source, 0, 0);
};
