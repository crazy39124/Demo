const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    
    Exercise: {
        type: String,
        // required: true,
    },
    Duration: {
        type: String,
        // required: true,
    },
})

module.exports = mongoose.model("Workout", workoutSchema)