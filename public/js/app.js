L.mapbox.accessToken = 'pk.eyJ1IjoiamR1bmdhbiIsImEiOiJlOTl6MFpNIn0.-3o5vIOCjkfXd-7ibZrb8A';

$("#use_device").click(function() {
  if ($(this).attr("checked") === "checked") {
    return navigator.geolocation.getCurrentPosition(function(position) {
      $('input#lat').val(position.coords.latitude);
      return $('input#lng').val(position.coords.longitude);
    });
  } else {
    $('input#lat').val("");
    return $('input#lng').val("");
  }
});

$('#save_location').submit(function(e) {
  var $form, ajax_options;
  e.preventDefault();
  $form = $(this);
  ajax_options = {};
  ajax_options.data = $form.serialize();
  ajax_options.type = "POST";
  ajax_options.url = "https://" + window.location.host;
  return console.dir(ajax_options);
});

$(document).ready(function() {
  if ($("#map-canvas").length > 0) {
    return L.mapbox.map('map-canvas', 'jdungan.l9b0mcc7');
  }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFULEdBQXNCLG1FQUF0QixDQUFBOztBQUFBLENBRUEsQ0FBRSxhQUFGLENBQWdCLENBQUMsS0FBakIsQ0FBdUIsU0FBQSxHQUFBO0FBQ3JCLEVBQUEsSUFBRyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFNBQWIsQ0FBQSxLQUEyQixTQUE5QjtXQUNFLFNBQVMsQ0FBQyxXQUFXLENBQUMsa0JBQXRCLENBQXlDLFNBQUMsUUFBRCxHQUFBO0FBQ3ZDLE1BQUEsQ0FBQSxDQUFFLFdBQUYsQ0FBYyxDQUFDLEdBQWYsQ0FBbUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFuQyxDQUFBLENBQUE7YUFDQSxDQUFBLENBQUUsV0FBRixDQUFjLENBQUMsR0FBZixDQUFtQixRQUFRLENBQUMsTUFBTSxDQUFDLFNBQW5DLEVBRnVDO0lBQUEsQ0FBekMsRUFERjtHQUFBLE1BQUE7QUFLRSxJQUFBLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQyxHQUFmLENBQW1CLEVBQW5CLENBQUEsQ0FBQTtXQUNBLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQyxHQUFmLENBQW1CLEVBQW5CLEVBTkY7R0FEcUI7QUFBQSxDQUF2QixDQUZBLENBQUE7O0FBQUEsQ0FXQSxDQUFFLGdCQUFGLENBQW1CLENBQUMsTUFBcEIsQ0FBMkIsU0FBQyxDQUFELEdBQUE7QUFDekIsTUFBQSxtQkFBQTtBQUFBLEVBQUEsQ0FBQyxDQUFDLGNBQUYsQ0FBQSxDQUFBLENBQUE7QUFBQSxFQUNBLEtBQUEsR0FBUSxDQUFBLENBQUUsSUFBRixDQURSLENBQUE7QUFBQSxFQUVBLFlBQUEsR0FBYyxFQUZkLENBQUE7QUFBQSxFQUdBLFlBQVksQ0FBQyxJQUFiLEdBQW9CLEtBQUssQ0FBQyxTQUFOLENBQUEsQ0FIcEIsQ0FBQTtBQUFBLEVBSUEsWUFBWSxDQUFDLElBQWIsR0FBb0IsTUFKcEIsQ0FBQTtBQUFBLEVBS0EsWUFBWSxDQUFDLEdBQWIsR0FBbUIsVUFBQSxHQUFhLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFMaEQsQ0FBQTtTQU9BLE9BQU8sQ0FBQyxHQUFSLENBQVksWUFBWixFQVJ5QjtBQUFBLENBQTNCLENBWEEsQ0FBQTs7QUFBQSxDQXFCQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQSxHQUFBO0FBQ2hCLEVBQUEsSUFBRyxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLE1BQWpCLEdBQXlCLENBQTVCO1dBQ0UsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFULENBQWEsWUFBYixFQUEyQixrQkFBM0IsRUFERjtHQURnQjtBQUFBLENBQWxCLENBckJBLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiTC5tYXBib3guYWNjZXNzVG9rZW4gPSdway5leUoxSWpvaWFtUjFibWRoYmlJc0ltRWlPaUpsT1RsNk1GcE5JbjAuLTNvNXZJT0Nqa2ZYZC03aWJacmI4QSdcblxuJChcIiN1c2VfZGV2aWNlXCIpLmNsaWNrICgpLT5cbiAgaWYgJCh0aGlzKS5hdHRyKFwiY2hlY2tlZFwiKSBpcyBcImNoZWNrZWRcIlxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24gKHBvc2l0aW9uKS0+XG4gICAgICAkKCdpbnB1dCNsYXQnKS52YWwgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlXG4gICAgICAkKCdpbnB1dCNsbmcnKS52YWwgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxuICBlbHNlXG4gICAgJCgnaW5wdXQjbGF0JykudmFsIFwiXCJcbiAgICAkKCdpbnB1dCNsbmcnKS52YWwgXCJcIlxuXG4kKCcjc2F2ZV9sb2NhdGlvbicpLnN1Ym1pdCAoZSktPlxuICBlLnByZXZlbnREZWZhdWx0KClcbiAgJGZvcm0gPSAkKHRoaXMpXG4gIGFqYXhfb3B0aW9ucyA9e31cbiAgYWpheF9vcHRpb25zLmRhdGEgPSAkZm9ybS5zZXJpYWxpemUoKVxuICBhamF4X29wdGlvbnMudHlwZSA9IFwiUE9TVFwiXG4gIGFqYXhfb3B0aW9ucy51cmwgPSBcImh0dHBzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdFxuICAjICQuYWpheChhamF4X29wdGlvbnMpXG4gIGNvbnNvbGUuZGlyKGFqYXhfb3B0aW9ucylcblxuJChkb2N1bWVudCkucmVhZHkgKCktPlxuICBpZiAkKFwiI21hcC1jYW52YXNcIikubGVuZ3RoID4wXG4gICAgTC5tYXBib3gubWFwKCdtYXAtY2FudmFzJywgJ2pkdW5nYW4ubDliMG1jYzcnKVxuXG4iXX0=