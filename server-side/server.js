const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const c = require("./calculations");

const app = express();
const PORT = process.env.PORT || 3000;

//middleware to approve all the requests.
app.use(cors());

// Middleware to parse JSON body
app.use(bodyParser.json());

// Endpoint to handle POST requests
app.post('/calculate', (req, res) => {
    //the list of all user inputs: let variables = [length,width,height,incline,output,thickness,beamHight,wallBeam];
    const variables = req.body.variables;
    //calculates num of space between beam and puts it in space variable.
    let space = c.numOfSpaceBetweenBeam(variables[1], variables[5]);
    let beams = c.numOfBeam(variables[1],variables[5]);
    let lengthOfWood = c.lengthOfWood(variables[0],variables[7],variables[4]);
    let poleHeight= c.heightOfPole(variables[2],variables[3],variables[6],variables[7]);
    let spaceBetweenPoles = c.numOfSpaceBetweenPole(variables[1],variables[6]);
    let poles = c.numOfPoles(variables[1],variables[5]);
    const result = [space,beams,lengthOfWood,poleHeight,spaceBetweenPoles,poles];
    res.json({ result });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
