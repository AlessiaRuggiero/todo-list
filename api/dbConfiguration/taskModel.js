const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a model schematic for documents within the MongoDB collection
const TaskSchema = new Schema({
    text: { type: String, required: true },
    due: { type: String },
    completed: { type: Boolean, default: false },
});
// Create the model with (model_name, schematic_name)
const TaskEntry = mongoose.model("TaskEntry", TaskSchema);

module.exports = TaskEntry;
