// External dependencies
const express = require('express');
const moment = require('moment')

const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/v1/question-page-post', function (req, res) {
  var uk = req.session.data['uk']
  if (uk === 'no'){
    res.redirect('/v1/not-eligible')
  }else {
    res.redirect('/v1/do-you-know-nhs')
  }
})

router.post('/v1/do-you-know-nhs', function (req, res) {
  var NHSnumber = req.session.data['knowNHSNumber']
  if (NHSnumber === 'yes'){
    res.redirect('/v1/what-is-your-dob')
  }else {
    res.redirect('/v1/what-is-your-name')
  }
})


module.exports = router;
