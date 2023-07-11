const fs = require('fs');
const filepath = "./animator/AnimationSettings";
const settings = require("../animator/AnimationSettings.json");

const changeBackgroundColor = async (hex) => {
    settings["backgroundColor"] = "rgb" +hexToRgb(hex);
    fs.writeFileSync(filepath, JSON.stringify(settings));

};

const changeNumCircles = async (num) => {
    settings["numCircles"] = num;
    fs.writeFileSync(filepath, JSON.stringify(settings));

};

const changeFPS = async (fps) => {
    settings["fps"] = fps;
    fs.writeFileSync(filepath, JSON.stringify(settings));

};

const changeRotationSpeed = async (rotationSpeed) => {
    settings["rotationSpeed"] = rotationSpeed;
    fs.writeFileSync(filepath, JSON.stringify(settings));
}


const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result){
      let r =  parseInt(result[1], 16);
      let g = parseInt(result[2], 16);
      let b = parseInt(result[3], 16)
      return "("+r+","+g+","+b+")";
    }
    return "rgb(255,255,255)";
  }


module.exports = {
    changeBackgroundColor,
    changeNumCircles,
    changeFPS,
    changeRotationSpeed
};