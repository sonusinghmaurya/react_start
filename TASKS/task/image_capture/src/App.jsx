// import React, { useState } from 'react'
// import Webcam from 'react-webcam'
// const App = () => {
//     let[state,setState]=useState([])
//   return (
//     <div>
//          <Webcam>
//             {({getScreenshot})=>(
//                 <button onClick={()=>{
//                     let img=getScreenshot()
//                     console.log(img)
//                     setState(img)
//                 }}>capture</button>
                
//   )}
//         </Webcam>
//         <img src={state} alt="" />
//     </div>
//   )
// }

// export default App





import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const App = () => {
  const webcamRef = useRef(null);
  const [videoStream, setVideoStream] = useState(null);

  const captureVideo = () => {
    const screenshot = webcamRef.current.getScreenshot();
    if (screenshot) {
      const blob = new Blob([screenshot], { type: 'image/jpeg' });
      const videoUrl = URL.createObjectURL(blob);
      setVideoStream(videoUrl);
    }
  };

  return (
    <div>
      <Webcam ref={webcamRef}>
        {({ getScreenshot }) => (
          <button onClick={captureVideo}>Capture</button>
        )}
      </Webcam>
      {videoStream && <video controls src={videoStream} />}
    </div>
  );
};

export default App;
