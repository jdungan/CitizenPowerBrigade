L.mapbox.accessToken ='pk.eyJ1IjoiamR1bmdhbiIsImEiOiJlOTl6MFpNIn0.-3o5vIOCjkfXd-7ibZrb8A'

$("#use_device").click ()->
  if $(this).attr("checked") is "checked"
    navigator.geolocation.getCurrentPosition (position)->
      $('input#lat').val position.coords.latitude
      $('input#lng').val position.coords.longitude
  else
    $('input#lat').val ""
    $('input#lng').val ""

$('#save_location').submit (e)->
  e.preventDefault()
  $form = $(this)
  ajax_options ={}
  ajax_options.data = $form.serialize()
  ajax_options.type = "POST"
  ajax_options.url = "https://" + window.location.host
  # $.ajax(ajax_options)
  console.dir(ajax_options)

$(document).ready ()->
  if $("#map-canvas").length >0
    L.mapbox.map('map-canvas', 'jdungan.l9b0mcc7')

