let fs = require("fs"); //importing file system module
let http = require("http"); //importing http module
//creating a new server instance
let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    let data = fs.readFileSync("Home.html", "utf8"); //reading from Home.html
    res.end(data); // ending the server
  } else if (req.url == "/Shop") {
    let data = fs.readFileSync("Shop.html", "utf8"); //reading from Shop.html
    res.end(data); // ending the server
  } else if (req.url == "/Cart") {
    let data = fs.readFileSync("Cart.html", "utf8"); //reading from Cart.html
    res.end(data); // ending the server
  } else if (req.url == "/Contact") {
    let data = fs.readFileSync("Contact.html", "utf8"); //reading from Contact.html
    res.end(data); // ending the server
  }
});
server.listen(5050); // listening the server port
console.log("Server Run Success");
