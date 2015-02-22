express = require("express")
router = express.Router()
db = require '../db'

router.post "/:id", (req, res) ->
	id = req.params.id
	body = req.body
	console.log body
	console.log id
	db.storeBlob id, body
	res.send()

router.get "/all", (req, res) ->
	db.unprocessed res
module.exports = router
