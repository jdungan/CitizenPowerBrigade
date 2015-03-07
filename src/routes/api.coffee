express = require("express")
_ = require("underscore")
router = express.Router()
db = require("../models/index.js");


router.get "/hello",  (req, res) -> res.send('howdy dammit!')

router.post "/:unit_id", (req, res) ->
  id = req.params.id
  body = req.body
  db.Report
    .build {unit_id:id,blob:body}
    .save().success -> res.send "saved!"

router.get '/:unit_id', (req, res) ->
    db.Report.all().success (reports)->
      # response =_.map reports, (v,k,l)-> "x: "+k .join
      res.send JSON.stringify reports


module.exports = router
