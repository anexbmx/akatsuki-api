import Village from "../Models/Village.js";

export const getVillages = async (req, res) => {
    try {
        const villages = await Village.find();
        res.send(villages);
    } catch (error) {
        res.send(error);
    }
};