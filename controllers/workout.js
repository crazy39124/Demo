const Workout = require("../models/workout")

require("dotenv").config()

//workout history route handler
exports.workout = async (req,res) => {
    try{
        //get data
        const {Exercise, Duration} = req.body

        console.log(Exercise)
        console.log(Duration)
        console.log(req.body)
        //create entry for user
        let work = await Workout.create({
            Exercise, 
            Duration,
        })

        return res.status(200).json({
            success: true,
            message: "Workout history saved",
            data: work,
        })
    }
    catch(error){
        console.error(error)
        return res.status(200).json({
            success: false,
            message: "Error while fetching workout history",
        })
    }
}