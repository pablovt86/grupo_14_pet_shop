module.exports = {
    authLogin: (req, res, next) => {
        if (req.session.user === undefined) {
            next();
        } else {
            res.redirect('/');
        }
    },

    authProfile: (req, res, next) => {
        if (req.session.user !== undefined) {
            next();
        } else {
            res.redirect('/users/login');
        }
    },

    authRol: (req, res, next) => {
        if (req.session.user !== undefined && req.session.user.rol === 'ROL_ADMIN') {
            next();
        } else {
            res.redirect('/');
        }
    }
}