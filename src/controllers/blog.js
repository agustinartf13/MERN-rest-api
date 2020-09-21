exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    // const image = req.body.image;
    const body = req.body.body;

    const result = {
        message: "Create Blog Post Success",
        data: {
            post_id: 1,
            title: "blog Title",
            // image: "imagefile.png",
            body: "lorem Ipsum lorem ipsum lorem ipsum",
            created_at: "21/09/2020",
            author: {
                uid: 1,
                name: "testing"
            }
        }
    }
    res.status(201).json(result);
}