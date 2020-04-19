const {Router} = require('express');
const router = Router();
const {login, logout, isAuthenticated} = require("./passport");

router.use(async (req, res, next) => {
    res.finish = (json) => res.status(200).json({error: false, payload: json});
    if (req.query.delay) await setTimeout(() => next(), req.query.delay || 0);
});

router.all('/isAuthenticated', isAuthenticated, (req, res) => res.finish(req.user));
router.post('/login', login);

module.exports = router;
