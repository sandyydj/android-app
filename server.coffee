http = require("http")
fs = require("fs")

server = http.createServer (req, res) =>

  if req.url is "/"
    console.log "request from:", req.connection.remoteAddress
    res.setHeader("Content-Type", "text/html")
    data = fs.readFileSync("#{__dirname}/index.html", "utf8")

  if req.url is "/jquerymobile.min.css"
    res.setHeader("Content-Type", "text/stylesheet")
    data = fs.readFileSync("#{__dirname}/jquerymobile.min.css", "utf8")

  if req.url is "/jquerymobile.min.js"
    res.setHeader("Content-Type", "text/javascript")
    data = fs.readFileSync("#{__dirname}/jquerymobile.min.js", "utf8")

  if req.url is "/jquery.min.js"
    res.setHeader("Content-Type", "text/javascript")
    data = fs.readFileSync("#{__dirname}/jquery.min.js", "utf8")

  if req.url is "/app.js"
    res.setHeader("Content-Type", "text/javascript")
    data = fs.readFileSync("#{__dirname}/app.js", "utf8")

  res.writeHead(200)
  res.end(data)

server.listen(8000)
