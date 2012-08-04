var express = require("express")
  , app = module.exports = express()

app.engine("jade", require("jade").__express)

app.configure(function(){
  app.set("views", __dirname + "/components/")
  app.use(express.static(__dirname + "/components/"))
})

require("./components/wall")(app)
require("./components/daps")(app)

app.listen(3000)
console.log("Streaking at http://localhost:3000")
