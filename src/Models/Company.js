import mongoose from '../config/mongoose.js';
const { Schema } = mongoose;

const companySchema = new Schema({
    name: String,
    japonaiseName: String,
    summary: String,
    firstAppear: {
        manga: String,
        anime: String,
    },
    leaders: [String],
});

export default mongoose.model("Company", companySchema);
