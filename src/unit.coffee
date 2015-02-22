express = require("express")
pg = require("pg")
router = express.Router()
connect_string = "postgres://hfazwccgnyzwtv:HW-RUQUl0g2wb8Gl9Nk6OenOs6@ec2-50-19-236-178.compute-1.amazonaws.com:5432/d3vs9ut8e9j6bh"

router.post "/:id", (req, res) ->
  id = req.params.id
  body = req.body
  pg.connect connect_string, (err, client, done)->
    client.query('INSERT into raw_reports (id, blob) VALUES("'+id+'", "'+body+'")')
	
router.get "/all", (req, res) ->
	db.unprocessed res


router.get '/db',  (request, response) ->
  pg.connect connect_string, (err, client, done) ->
    client.query 'SELECT * FROM raw_reports', (err, result) ->
      done()
      if (err)
        console.error(err)
        response.send("Error " + err)
      else
        response.send(result.rows)

module.exports = router
