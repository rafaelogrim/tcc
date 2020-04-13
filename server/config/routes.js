const {Router} = require('express');
const router = Router();
const {login, logout, isAuthenticated} = require("./passport");

router.use(async (req, res, next) => {
    if (req.query.delay) await setTimeout(() => console.log(), req.query.delay);
    res.finish = (json) => res.status(200).json({error: false, payload: json});
    next();
});

router.all('/isAuthenticated', isAuthenticated, (req, res) => res.finish(req.user));
router.post('/login', login);

module.exports = router;
