express = require("express")
router = express.Router()
unit = require './unit'
# GET home page. 
router.get "/", (req, res) ->
  res.render "index",
    title: "Citizens Power Brigade"

router.use "/unit", unit

module.exports = router
