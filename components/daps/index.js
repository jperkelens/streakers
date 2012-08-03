module.exports = function(app){
  app.get("/daps", app.component("daps"), function(req, res){
    res.render("index.jade")  
  })
}
