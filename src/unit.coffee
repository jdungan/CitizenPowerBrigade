express = require("express")
pg = require("pg")
router = express.Router()
connect_string = process.env.DATABASE_URL

router.post "/:id", (req, res) ->
  id = req.params.id
  body = req.body
  pg.connect connect_string, (err, client, done)->
    client.query('INSERT into raw_reports (id, blob) VALUES("'+id+'", "'+body+'")')
	
router.get "/all", (req, res) ->
	db.unprocessed res


module.exports = router
