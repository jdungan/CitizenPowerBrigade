var express, router;

express = require("express");

router = express.Router();

router.get("/", function(req, res) {
  return res.render("index", {
    title: "Citizens Power Brigade"
  });
});

router.get("/location", function(req, res) {
  return res.render("location", {
    title: "Citizens Power Brigade"
  });
});

module.exports = router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBOztBQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsU0FBUixDQUFWLENBQUE7O0FBQUEsTUFDQSxHQUFTLE9BQU8sQ0FBQyxNQUFSLENBQUEsQ0FEVCxDQUFBOztBQUFBLE1BTU0sQ0FBQyxHQUFQLENBQVcsR0FBWCxFQUFnQixTQUFDLEdBQUQsRUFBTSxHQUFOLEdBQUE7U0FDZCxHQUFHLENBQUMsTUFBSixDQUFXLE9BQVgsRUFDRTtBQUFBLElBQUEsS0FBQSxFQUFPLHdCQUFQO0dBREYsRUFEYztBQUFBLENBQWhCLENBTkEsQ0FBQTs7QUFBQSxNQVdNLENBQUMsR0FBUCxDQUFXLFdBQVgsRUFBd0IsU0FBQyxHQUFELEVBQU0sR0FBTixHQUFBO1NBQ3RCLEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUNFO0FBQUEsSUFBQSxLQUFBLEVBQU8sd0JBQVA7R0FERixFQURzQjtBQUFBLENBQXhCLENBWEEsQ0FBQTs7QUFBQSxNQWVNLENBQUMsT0FBUCxHQUFpQixNQWZqQixDQUFBIiwiZmlsZSI6IndlYi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKVxucm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cblxuIyBHRVQgaG9tZSBwYWdlLiBcbnJvdXRlci5nZXQgXCIvXCIsIChyZXEsIHJlcykgLT5cbiAgcmVzLnJlbmRlciBcImluZGV4XCIsXG4gICAgdGl0bGU6IFwiQ2l0aXplbnMgUG93ZXIgQnJpZ2FkZVwiXG5cbiMgR0VUIGxvY2F0aW9uIHBhZ2VcbnJvdXRlci5nZXQgXCIvbG9jYXRpb25cIiwgKHJlcSwgcmVzKSAtPlxuICByZXMucmVuZGVyIFwibG9jYXRpb25cIixcbiAgICB0aXRsZTogXCJDaXRpemVucyBQb3dlciBCcmlnYWRlXCJcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcbiJdfQ==