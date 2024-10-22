const isSignedIn = (req, res, next) => {
  if (req.session.user) {
    next();
  }

  res.redirect('/auth/sign-in');
};

module.exports = isSignedIn;
