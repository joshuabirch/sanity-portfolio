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
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 5])

  return (
    <motion.div 
      className="container mx-auto flex justify-center"

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

        <section className="min-h-screen">
          <div className="container mx-auto px-12">
            <img src={logo} className='w-1/2 h-full mx-auto mb-12' />
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <div className="wrapper ml-36">
                    <motion.div className="box-container" style={{ scale }}>
                      <motion.div className="item"></motion.div>
                    </motion.div>
                  </div>
                </div>
                <p className='paralucent text-2xl text-white pr-24'>
                Hey! I'm a UX/UI Designer based in Birmingham, United Kingdom. I specialise in Human-Computer Interaction, Accessibility and UX development. I currently work within the Web & App space with a view to move into the games industry in the future.
                <Link to='/project' className="block border-white border-2 rounded-full py-4 px-6 mt-8 w-1/2 text-center">View My Projects</Link>
                </p>
                
                </div>
          </div>
          
          
        </section>


        <section className="min-h-screen">
          <div className="rounded-full jbd-bg-blue blenny uppercase w-full py-8 px-12 text-7xl my-3">ux research</div>
          <div className="rounded-full jbd-bg-yellow blenny uppercase w-full py-8 px-12 text-7xl my-3">ux design</div>
          <div className="rounded-full jbd-bg-green blenny uppercase w-full py-8 px-12 text-7xl my-3">ui design</div>
          <div className="rounded-full jbd-bg-white blenny uppercase w-full py-8 px-12 text-7xl my-3">web development</div>
        </section>

      </div>
    </motion.div>
  );
};

export default Home;

// const drawCanvas = (ctx, source) => {
//   if (!source) return;

//   ctx.drawImage(source, 0, 0);
// };
