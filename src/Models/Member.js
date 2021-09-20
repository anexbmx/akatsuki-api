import mongoose from '../config/mongoose.js';
const { Schema } = mongoose;

const memberSchema = new Schema({
        pictureName: String,
        japonaiseName: String,
        name: String,
        color: String,
        member_type: String,
        summary: String,
        status: String,
        birthdate: String,
        sex: { type: String, enum: ["Male", "Female"]},
        Age: Number,
        height: Number,
        weight: Number,
        bloodType: { type: String, enum: ["A", "B", "O", "AB", "Unknown"]},
        genkai: [String],
        rank: {type: String, default: "Unkown"},
        classification: [String],
        occupation: [String],
        affiliation: [String],
        partner: [String],
        nature: [String],
        tools: [String],
        jutsu: [String],
        firstAppear: {
            manga: String,
            anime: String
        },
        clan: {type: String, default: "Unkown"},
        village: {type: String, default: "Unkown"}  
})

export default mongoose.model("Member", memberSchema);