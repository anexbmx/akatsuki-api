import mongoose from '../config/mongoose.js';
const { Schema } = mongoose;

const villageSchema = new Schema({
    title: String,
    summary: String,
    leader: String,
    country: String,
});

export default mongoose.model('Village', villageSchema);
