const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    tagline: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },

}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Blog", BlogSchema);