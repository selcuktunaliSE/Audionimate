const fs = require("fs");
const setupAnimationFile = require("../controllers/SketchController.js").get;
const controller = require("../controllers/SketchController");

const get = (req, res) => {
    setupAnimationFile();
    const filepath = "./public/Animation.html";
    fs.readFile(filepath, 'utf8', (err, html) =>{
        if(err){
            res.status(404).send("Path not available");
        }
        else{
            res.set({
                'X-Content-Type-Options': 'nosniff',
            });
            res.type("html").send(html);
        }
    }); 
};

const getAnimationJS = (req, res) => {
    const filepath = "./public/Animation.js";
    fs.readFile(filepath, 'utf8', (err, js) =>{
        if(err){
            res.status(404).send("Path not available");
        }
        else{
            res.set({
                'X-Content-Type-Options': 'nosniff',
            });
            res.type("js").send(js);
        }
    }); 
};

const updateProperties = (bgColor, numCircles, fps, rotationSpeed) => {
    controller.setBackgroundColor(bgColor);
    controller.setNumCircles(numCircles);
    controller.setFPS(fps);
    controller.setRotationSpeed(rotationSpeed);
}

module.exports = {get, getAnimationJS, updateProperties};

