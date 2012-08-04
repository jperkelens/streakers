module.exports = function(app){
  var wall = [
    { message: "Drank juice" },
    { message: "Drank some more juice" },
    { message: "Peed myself" }
  ]

  app.get("/", function(req, res){
    res.render("wall/index.jade", {
      wall: wall,
      components: {
        create_post: require("../create_post")(app)
      }
    })
  })
}
