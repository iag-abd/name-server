const express = require('express')
const shortenController = require('../controllers/shorten.controller')
const router = express.Router()

router.route('/shorten')
  .post(shortenController.setShortname)
router.route('/delete')
  .post(shortenController.deleteShortname) 
router.route('/redirects')
  .get(shortenController.getAllShortnames)  
router.route('/:shortname')
  .get(shortenController.redirect)

export default router
