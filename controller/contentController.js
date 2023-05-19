const axios = require('axios')


//@desc get posts
//@route GET /api/posts
//@access loggedin users
exports.getPosts = async (req, res, next) => {

    //paginate posts per page
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;

    try {
        // fecth paginated posts based on queries 
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        const posts = await response.data;

        if (response.status === 200) {

            res.status(200).json({
                status: "success",
                data: posts
            });

        } else {

            return next(new Error('Failed to retrieve comments'))
        }
    } catch (err) {

        return next(err)
    }
};

//@desc get comments
//@route GET /api/comments
//@access loggedin users
exports.getComments = async (req, res, next) => {

    //paginate comments per page
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;

    try {
        // fecthes paginated comments based on queries 
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`);
        const posts = await response.data;

        if (response.status === 200) {

            res.status(200).json({
                status: "success",
                data: posts
            });

        } else {

            return next(new Error('Failed to retrieve comments'))
        }
    } catch (err) {

        return next(err)
    }
};
