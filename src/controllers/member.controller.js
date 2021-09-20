import Member from "../Models/Member.js";

export const getMembers = async (req, res) => {
    try {
        const members = await Member.find({},  "name japonaiseName pictureName village clan color");
        res.send(members);
    } catch (error) {
        res.send(error);
    }
};

export const getMember = async (req, res) => {
    try {
        console.log(req.params.name)
        const members = await Member.findOne({ name: req.params.name});
        res.send(members);
    } catch (error) {
        res.send(error);
    }
};

