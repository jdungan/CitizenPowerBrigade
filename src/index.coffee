express = require("express")
router = express.Router()

# GET home page. 
router.get "/", (req, res) ->
  res.render "index",
    title: "Citizens Power Brigade"

# router.get "/keet_care.html", (req, res) ->
#   res.render "keet_care",
#     title: "Keet Care"


module.exports = router