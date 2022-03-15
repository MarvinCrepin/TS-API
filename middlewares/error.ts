module.exports = {
     error : (err, req, res, next) => {
        res.send(err)
    } 
}