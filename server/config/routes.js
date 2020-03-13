const {Router} = require('express');
const router = Router();
const {login, logout, isAuthenticated} = require("./passport");

router.use((req, res, next) => {
    res.finish = (json) => res.status(200).json({error: false, payload: json});
    next();
});

router.post('/login', login);

module.exports = router;
