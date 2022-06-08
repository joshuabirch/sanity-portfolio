import React, { useRef, useState, useEffect } from "react"
// import fx from 'glfx'
// import $ from 'jquery'
import homeAsset from '../assets/home-asset.png'
import logo from '../assets/logo.png'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { Link } from "react-router-dom";


const Home = () => {

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

  const { scrollYProgress } = useViewportScroll()
  const x = useTransform(scrollYProgress, [0, 0.7, 1], [-1000, 0, 0])
  const scale = useTransform(scrollYProgress, [0, 0, 1], [0, .5, 2])

  const opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.9, 1], [0, .5, 1, 1])

  return (
    <motion.div 

      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.1 } 
      }}
    >
      <div>

        {/* <canvas ref={canvasRef} /> */}
        <section className="flex justify-center min-h-screen">
          <img src={homeAsset} className='h-full w-5/6 lg:py-10 md:py-5 sm:py-0' />
        </section>

        <section className="intro">
          
          <div className="div1">
            <div style={{ height:"3500px" }}>
              <div className="div2">
                <div className="container">
                <div className="right">
                    <motion.div style={{x, scale, opacity}}>
                      <motion.div 
                        className="circle"
                        animate={{
                          scale: [.5,1,1,.5,.5],
                          rotate: [0, 0, 270, 270, 0],
                          borderRadius: ["10%", "10%", "50%", "50%", "10%"],
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          times: [0, 0.2, 0.5, 0.8, 1],
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                    </motion.div>
                  </div>
                  <div className="left">
                  <img src={logo} className='w-5/6 mb-12' />
                  <h1 className="paralucent text-xl text-white">Hey! I'm a UX/UI Designer based in Birmingham, United Kingdom. I specialise in Human-Computer Interaction, Accessibility and UX development. I currently work within the Web & App space with a view to move into the games industry in the future.</h1>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
          
          
        </section>


        {/* <section className="min-h-screen">
          <div className="rounded-full jbd-bg-blue blenny uppercase w-full py-8 px-12 text-7xl my-3">ux research</div>
          <div className="rounded-full jbd-bg-yellow blenny uppercase w-full py-8 px-12 text-7xl my-3">ux design</div>
          <div className="rounded-full jbd-bg-green blenny uppercase w-full py-8 px-12 text-7xl my-3">ui design</div>
          <div className="rounded-full jbd-bg-white blenny uppercase w-full py-8 px-12 text-7xl my-3">web development</div>
        </section> */}

      </div>
    </motion.div>
  );
};

export default Home;

// const drawCanvas = (ctx, source) => {
//   if (!source) return;

//   ctx.drawImage(source, 0, 0);
// };
