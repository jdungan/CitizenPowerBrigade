express = require("express")
router = express.Router()



# GET home page. 
router.get "/", (req, res) ->
  res.render "index",
    title: "Citizens Power Brigade"

# GET location page
router.get "/location", (req, res) ->
  res.render "location",
    title: "Citizens Power Brigade"

module.exports = router
