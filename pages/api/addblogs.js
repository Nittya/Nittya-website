import Blog from "@/models/Blog"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        for (let i = 0; i < req.body.length; i++) {
            let p = new Blog({
                tagline: req.body[i].tagline,
                title: req.body[i].title,
                subtitle: req.body[i].subtitle,
                slug: req.body[i].slug,
                img: req.body[i].img,
                desc: req.body[i].desc,
            })
            await p.save()
        }
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handler);