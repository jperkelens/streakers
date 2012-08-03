var express = require("express")
  , app = module.exports = express()

app.engine("jade", require("jade").__express)

app.component = function(component){
  return function(req, res, next){
    app.set("views", __dirname + "/components/" + component)
    app.use(express.static(__dirname + "/components/" + component))
    next()
  }
}

require("./components/wall")(app)
require("./components/daps")(app)

app.listen(3000)
console.log("Streaking at http://localhost:3000")
