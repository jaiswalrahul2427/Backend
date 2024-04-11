//By promises method
const asyncHandle = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandle }


//By try and catch method
// const asyncHandle = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 5000).json({
//             success: false,
//             message: err.message
//         })
//     }
// }