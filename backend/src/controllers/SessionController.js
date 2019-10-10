// index: return entity list, 
// show: return entity, 
// store: save entity, 
// update: update entity, 
// destroy: delete entity

const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};