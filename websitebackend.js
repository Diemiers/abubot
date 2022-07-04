

const express = require("express")
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

module.exports = function hack(){

app.listen(4000)
console.log('Message')

app.get("/",(req,res) =>{
    console.log("Opened")
    res.render("website")

} )

}
