const express = require('express');
const { readFile } = require('fs').promises;
const sketchView = require("./views/SketchView");
const audioView = require("./views/AudioView");
const sketchRoute = require("./routes/Sketch");
const audioRoute = require("./routes/Audio");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();

app.use(fileUpload({
    createParentPath: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post('/upload-audio', async(req, res) => {
    try{
        if(!req.files){
            res.send({
                status: false,
                message: 'Audio file not uploaded.'
            })
        }
        else{
            let file = req.files.audioInput;
            file.mv('./public/userAudio.mp3');
            audioView.updateConfig();
            res.send({
                status: true,
                message: 'Audio file is received.'
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
});

app.post('/update-properties', async(req, res) => {
    if(req.body){
        const bgColor = req.body.backgroundColor;
        const rotationSpeed = req.body.rotationSpeed;
        const fps = req.body.animationSpeed;
        const numCircles = req.body.numCircles;
        sketchView.updateProperties(bgColor, numCircles, fps, rotationSpeed);
        res.send({
            status: 200,
            message: "Properties updated"
        });
    }
    else{
        res.send({
            status: 500,
            message: "Properties not set"
        });
    } 
});



app.get('/', sketchRoute);
app.get('/Animation.js', sketchView.getAnimationJS);
app.get('/audio.mp3', audioView.get);


app.listen(3005, () => {
    console.log("server running on port 3005");
});

module.exports = {sketchRoute, audioRoute};