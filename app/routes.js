//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'options-answer'
router.post('/options-answer', function (req, res) {

    var option = req.session.data['select-option']
  
    if (option == "register"){
      res.redirect('/register')
    } else {
      if (option == "report"){
        res.redirect('/report')
      } else {
        res.redirect('/previous')
      }
    }
  
  })