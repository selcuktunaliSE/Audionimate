const animationManager = require('../animator/AnimationManager.js');
const { changeBackgroundColor, changeNumCircles, changeFPS, changeRotationSpeed } = require("../models/SketchModel");

const get = (req,res) => {
    animationManager();
}

const setBackgroundColor = (hex) => {
    changeBackgroundColor(hex);
}

const setNumCircles = (num) => {
    changeNumCircles(num);
}

const setFPS = (fps) => {
    changeFPS(fps);
}

const setRotationSpeed = (filename) => {
    changeRotationSpeed(filename);
}

module.exports = {
    get,
    setBackgroundColor,
    setNumCircles,
    setFPS,
    setRotationSpeed,
}