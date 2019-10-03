module.exports = {
    store
};

async function store(req, res) {
    console.log(req.body);
    console.log(req.file);
    return res.json({message: 'Ok'});
};
