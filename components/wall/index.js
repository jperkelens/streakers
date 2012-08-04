module.exports = function(app){
  var wall = [
    { message: "Drank juice" },
    { message: "Drank some more juice" },
    { message: "Peed myself" }
  ]

  app.get("/", app.component("wall"), function(req, res){
    res.render("index.jade", { wall: wall })
  })
}
