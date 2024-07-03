const IndustryModel = require("../Model/industryModel")
const industryValidation = require("../Validation/validation")
const getIndustry = async (req, res) => {
    try {
        const { error } = await industryValidation.IndustryValidation(req.body)
        if (error) return res.status(400).json({ sucess: false, message: "not create" })
        const saveUser = await IndustryModel.create(req.body)
        if (!saveUser) return res.status(400).json({ sucess: false, message: "Not Saved!" });
        return res.status(200).json({ sucess: true, message: "Create User Sucessfully!", data: saveUser });

    } catch (error) {
        console.log(error)
    }
}
const getAllUser = async (req, res) => {
    try {

        const userInfo = await IndustryModel.find({ isDeleted: false });
        if (!userInfo) return res.status(400).json({ sucess: false, message: "Not Found" });
        return res.status(200).json({ sucess: true, message: " Found", data: userInfo });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getIndustry,
    getAllUser
}