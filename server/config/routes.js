const {Router} = require('express');
const router = Router();
const {login, logout, isAuthenticated} = require("./passport");
const multiparty = require('connect-multiparty');

const pet = require('../controller/pet');

router.use(async (req, res, next) => {
    res.finish = (json) => res.status(200).json({error: false, payload: json});
    setTimeout(next, req.query.delay || 0);
});

router.all('/isAuthenticated', isAuthenticated, (req, res) => res.finish(req.user));
router.post('/login', login);

router.route('/pet/:id?')
    .get(pet.get)
    .post(/*isAuthenticated,*/ multiparty({}), pet.create)
// .patch(isAuthenticated, user.edit)
// .delete(isAuthenticated, user.remove);

module.exports = router;
