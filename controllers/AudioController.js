const model = require("../models/AudioModel");

const updateConfig = () => {
    console.log("model: " + model);
    model.updateConfig();
}

module.exports= {updateConfig};