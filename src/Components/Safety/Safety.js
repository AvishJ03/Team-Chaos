import * as helmet from 'helmet-detection';
 
const img = document.getElementById('img');
 
// Load the model.
const model = await helmet.load(PATH_TO_JSON_MODEL);
 
// Classify the image.
const predictions = await model.detect(img);
 
console.log('Predictions: ');
console.log(predictions);