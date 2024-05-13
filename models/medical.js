const mongoose = require('mongoose')

const medicalSchema = new mongoose.Schema({
    
    Medicines: {
        type: [String],
        // required: true,
    },
    Complications: {
        type: [String],
        // required: true,
    },
})

module.exports = mongoose.model("Medical", medicalSchema)