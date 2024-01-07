import Blog from "../../models/Blog"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    let blogs = await Blog.find()
    res.status(200).json({ blogs })
}
export default connectDb(handler);