var express, router, unit;

express = require("express");

router = express.Router();

unit = require('./unit');

router.get("/", function(req, res) {
  return res.render("index", {
    title: "Citizens Power Brigade"
  });
});

router.use("/unit", unit);

module.exports = router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLHFCQUFBOztBQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsU0FBUixDQUFWLENBQUE7O0FBQUEsTUFDQSxHQUFTLE9BQU8sQ0FBQyxNQUFSLENBQUEsQ0FEVCxDQUFBOztBQUFBLElBRUEsR0FBTyxPQUFBLENBQVEsUUFBUixDQUZQLENBQUE7O0FBQUEsTUFJTSxDQUFDLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLFNBQUMsR0FBRCxFQUFNLEdBQU4sR0FBQTtTQUNkLEdBQUcsQ0FBQyxNQUFKLENBQVcsT0FBWCxFQUNFO0FBQUEsSUFBQSxLQUFBLEVBQU8sd0JBQVA7R0FERixFQURjO0FBQUEsQ0FBaEIsQ0FKQSxDQUFBOztBQUFBLE1BUU0sQ0FBQyxHQUFQLENBQVcsT0FBWCxFQUFvQixJQUFwQixDQVJBLENBQUE7O0FBQUEsTUFVTSxDQUFDLE9BQVAsR0FBaUIsTUFWakIsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKVxucm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxudW5pdCA9IHJlcXVpcmUgJy4vdW5pdCdcbiMgR0VUIGhvbWUgcGFnZS4gXG5yb3V0ZXIuZ2V0IFwiL1wiLCAocmVxLCByZXMpIC0+XG4gIHJlcy5yZW5kZXIgXCJpbmRleFwiLFxuICAgIHRpdGxlOiBcIkNpdGl6ZW5zIFBvd2VyIEJyaWdhZGVcIlxuXG5yb3V0ZXIudXNlIFwiL3VuaXRcIiwgdW5pdFxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlclxuIl19