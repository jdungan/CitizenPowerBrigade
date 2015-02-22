L.mapbox.accessToken ='pk.eyJ1IjoiamR1bmdhbiIsImEiOiJlOTl6MFpNIn0.-3o5vIOCjkfXd-7ibZrb8A'


$("#use_device").click(function(){
    if ($(this).attr("checked") == "checked"){
      navigator.geolocation.getCurrentPosition(function(position) {
        $('input#lat').val(position.coords.latitude)
        $('input#lng').val(position.coords.longitude)
      });
    } else {
        $('input#lat').val("")
        $('input#lng').val("")
    }
});

$('#save_location').submit(function (e) {
  e.preventDefault()
  $form = $(this)
  ajax_options ={}
  ajax_options.data = $form.serialize()
  ajax_options.type = "POST"
  ajax_options.url = "https://" + window.location.host
  $.ajax(ajax_options)  

})

jQuery(document).ready(function() {

  if ($("#map-canvas").length >0) {
    L.mapbox.map('map-canvas', 'jdungan.l9b0mcc7')
  }
});

