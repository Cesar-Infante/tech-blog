const router = require('express').Router();
const auth = require('../utils/auth');

router.get('/', auth, async (req, res) => {

    try { 
        res.render('dashboard');
    } catch (err) {
        res.status(500).send(err)
    }
});

module.exports = router;