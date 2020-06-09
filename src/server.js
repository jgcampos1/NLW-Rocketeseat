const express = require("express");
const server = express();
const db = require("./database/db")

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

server.get("/", (req, res) => {
  return res.render("index.html")
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
  const query = `
  INSERT INTO places(
    image,
    name,
    address,
    address2,
    state,
    city,
    items
  )VALUES(?,?,?,?,?,?,?)
`;
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ];

  function afterInsertData(err) {
    if (err) {
      console.log(err)
      return res.send("Erro no Cadastro! ");
    }
    console.log("Cadastrado com sucess")
    console.log(this)
    return res.render("create-point.html", { saved: true })
  }

  db.run(query, values, afterInsertData);
})


server.get("/search",(req,res) =>{
  const reqState = req.query.state;
  const reqCity = req.query.city
  
  
  
  if(reqState == "" || reqCity == ""){
    return res.render("search-result.html", { totalElements:0 })
  }

  db.all(`SELECT * FROM places WHERE state = '${reqState}' AND city LIKE '%${reqCity}%'`, function (err, rows) {
    if (err) {

      console.log(reqCity);
      
      return console.log(err);
    }
    console.log("Aqui estão seus registros");
    //console.log(rows);

    const totalElements = rows.length

    return res.render("search-result.html", { places: rows, totalElements })
  })
})




server.listen(3000)