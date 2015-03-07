express = require("express")
pg = require("pg")
router = express.Router()
connect_string = process.env.DATABASE_URL
  
router.post "/:id", (req, res) ->
  id = req.params.id
  body = req.body
  pg.connect connect_string, (err, client, done)->
    client.query('INSERT into raw_reports (id, blob) VALUES("'+id+'", "'+body+'")')

router.post "/:id/gps", (req, res) ->
  id = req.params.id
  body = req.body
  pg.connect connect_string, (err, client, done)->
    client.query('INSERT into unit_location (id, blob) VALUES("'+id+'", "'+body+'")')
	
router.get "/all", (req, res) ->
	db.unprocessed res


router.get "/:id",  (req, res) ->
  pg.connect connect_string, (err, client, done) ->
    id = +req.params.id
    if id
      client.query 'SELECT * FROM raw_reports WHERE unit_id='+req.params.id, (err, result) ->
        done()
        if (err)
          console.error(err)
          res.send("Error " + err)
        else
          res.send(result.rows)
    else
      res.send("Invalid Id")

module.exports = router
