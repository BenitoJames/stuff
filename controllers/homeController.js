//homeController

const Establishment = require('../model/establishmentModel');

exports.getHome = async(req,res) => {
    try{
        const establishments = await Establishment.find().sort({ createdAt: -1 }).limit(6).lean();
        res.render('index', { establishments });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};