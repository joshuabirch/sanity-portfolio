// import React, { useRef, useState, useEffect } from 'react'
// import fx from 'glfx'
// // import ScriptTag from 'react-script-tag'


// function Home() {

//   const [sourceImg, setSourceImg] = useState(null)
//   const canvasRef = useRef(null)

//   useEffect(() => {
//       if (!sourceImg) {
//         const image = new Image()
//         image.crossOrigin = "Anonymous"
//         image.onload = () => {
//           setSourceImg(image)
//         }
//         image.src = "checkered-pattern.png"
//       } else {
        
//         var canvas = fx.canvas()
//         var texture = canvas.texture(sourceImg)

//         canvas.draw(texture).swirl(0, 0, 328, 25).update();

//         const displayCanvas = canvasRef.current;
//         displayCanvas.width = sourceImg.width;
//         displayCanvas.height = sourceImg.height;
//         const ctx = displayCanvas.getContext("2d");
//         drawCanvas(ctx, canvas);

//       }
//   }, [sourceImg])

//   return (
//     <div className='container mx-auto jb-bg py-5'>
//       <canvas ref={canvasRef} />
//     </div>
//   )
// }

// export default Home

// const drawCanvas = (ctx, source) => {
//   if (!source) return;

//   ctx.drawImage(source, 0, 0)
// }

import React, { useState, useEffect } from "react";
import fx from "glfx";
import $ from 'jquery';

const Home = () => {
  const [sourceImg, setSourceImg] = useState(null);
  const canvasRef = React.useRef(null);
  // const experimentCanvasRef = React.useRef(null);

  useEffect(() => {
    if (!sourceImg) {
      const image = new Image();
      image.crossOrigin = "Anonymous";
      image.onload = () => {
        setSourceImg(image);
      };
      image.src = "checkered-pattern.jpg";
    } else {
      var canvas = fx.canvas();
      var texture = canvas.texture(sourceImg);
      canvas.draw(texture).update(); 
      
      document.addEventListener("mousemove", (e) => {
        const displayCanvas = canvasRef.current;
      displayCanvas.width = sourceImg.width;
      displayCanvas.height = sourceImg.height;
      const ctx = displayCanvas.getContext("2d");
      drawCanvas(ctx, canvas);

        var offset = $('canvas').offset();
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;
        canvas.draw(texture).swirl(x, y, 200, 1).update();  
      })
      
      
      
      
      

    }
  }, [sourceImg]);

  return (
    <div className="container flex justify-center">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Home;

const drawCanvas = (ctx, source) => {
  if (!source) return;

  ctx.drawImage(source, 0, 0);
};
