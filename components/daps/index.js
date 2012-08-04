module.exports = function(app){
  app.get("/daps", function(req, res){
    res.render("daps/index.jade")
  })
}
