const express = require('express');

const greekNameRoutes = require('./greekNames');

const router = express.Router();

router.get('/greekNames', greekNameRoutes.greekNamesGet);
router.get('/greekNames/firstnames', greekNameRoutes.greekFirstNamesGet);
router.get('/greekNames/lastnames', greekNameRoutes.greekLastNamesGet);
router.post('/greekNames', greekNameRoutes.greekNamesPost);
router.delete('/greekNames', greekNameRoutes.greekNamesRemove);

module.exports = router;