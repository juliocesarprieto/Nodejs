const User = require('../models/User');
const Booking = require('../models/Booking');

module.exports = {
    store
};

async function store(req, res) {
    const { user_id } = req.headers;
    const spot_id = req.params.id;
    const { date } = req.body;

    const user = await User.findById(user_id);
    if (!user) {
        return res.status(400).json({ error: "User does not exists!" });
    }

    const booking = await Booking.create({
        user: user_id,
        spot: spot_id,
        date
    });

    await booking.populate('spot').populate('user').execPopulate();


    return res.json(booking);
}
