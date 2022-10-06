const index = (req, res, next) => {
    //res.send("Respon users data")  // respon html
    res.json({data:[], status: true}); //respon json
};

const show = (req, res, next)=> {
    var result = {
            data: {
                nama: req.params.id,
                id: req.params.id,
            }
        };
    res.json(result);
}

module.exports = {
    index,
    show,
}