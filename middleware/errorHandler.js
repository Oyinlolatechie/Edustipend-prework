const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || "Server error occured"

    return res.status(statusCode).json({
        status: "Failed",
        message: message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    })
}

module.exports = errorHandler