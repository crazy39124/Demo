const Medical = require("../models/medical")

require("dotenv").config()

//medical history route handler
exports.medical = async (req,res) => {
    try{
        //get data
        const {Complications, Medicines} = req.body
        console.log(Medicines)
        console.log(Complications)
        console.log(req.body)

        const med = await Medical({
            Complications, Medicines
        })
        //create entry for user
        // let med = await Medical.create({
        //     Medicines, 
        //     Complications,
        // })

        const med_new = await med.save()

        res.status(200).json({
            success: true,
            message: "Medical history saved",
            data: med,
        })
    }
    catch(error){
        console.error(error)
        return res.status(200).json({
            success: false,
            message: "Error while fetching medical history",
        })
    }
}