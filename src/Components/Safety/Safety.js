
import React, { useState } from 'react'
import * as helmet from 'helmetdetection';

const Safety = () => {
    const [file, setFile] = useState(null);
    function showFile(e){
        setFile(e.target.files[0]);
    }
    
// Load the model.
    const model = helmet.load("C:/safetyhelmet/annotations/hard_hat_workers0.json");
 
// Classify the image.
    const predictions = model.detect(file);
 
    console.log('Predictions: ');
    console.log(predictions);

  return (
    <div>
      <input type="file" onChange={showFile} />
    </div>
  )
}

export default Safety
