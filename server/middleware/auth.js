const { User } = require("./../models/user");

let auth = (req, res, next) => {
  // the req res are from the route
  let token = req.cookies.w_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;

    next(); // go to next parameter (maybe the parameter is callback function)
  });
};

module.exports = { auth };
