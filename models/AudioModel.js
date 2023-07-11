const configPath = "./animator/AnimationSettings";
const config = require("../animator/AnimationSettings.json");
const fs = require("fs");

// this function is not ansynchronous since we need the config to be updated until further action
const updateConfig = () => {
    config["audioFileLocation"] = "userAudio.mp3";
    config["audioFileName"] = "userAudio.mp3";
    fs.writeFileSync(configPath, JSON.stringify(config));
}



module.exports = {updateConfig};