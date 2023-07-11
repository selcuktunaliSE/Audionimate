const fs = require("fs");
const controller = require("../controllers/AudioController");
const config = require("../animator/AnimationSettings.json");

const updateConfig = () => {
    controller.updateConfig();
}

const get = (req, res) => {
    const filepath = "./public/" + config["audioFileName"];
    res.set("content-type", "audio/mp3");
    res.set("accept-ranges", "bytes");
    fs.readFile(filepath, readAudio = (err, data) => {
        if(err) throw err;
        res.send(data);
    })
}

module.exports = {updateConfig, get};