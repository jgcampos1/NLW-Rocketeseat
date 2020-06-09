//imporatando dependencia sqlite
const sqlite3 = require("sqlite3").verbose()
//criar obj que ira fazer operações no database
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//ultilizar o obj de database para oprações


/*
db.serialize(() => {
  
  //usando comandos SLG
  //criar uma tabela 
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,Resíduos Eletrônicos, Lâmpadas
      city TEXT,
      items TEXT            
    );
  `)
  //inserir dados na tabela
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
    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "Papersider",
    "Guilherme Gemballa,Jardim America",
    "Numero:260",
    "Santa Catarina",
    "Rio do Sul",
    "Papéis e Papelão"
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Cadastrado com sucess")
    console.log(this)
  }

  db.run(query, values, afterInsertData);

  //pesquisar dados
  
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    console.log("Aqui estão seus registros");
    console.log(rows);


  })

  
  //delet dados
  db.run(`DELETE FROM places WHERE id=?`, [22],function(err){
    if (err) {
      return console.log(err);
    }
    console.log("Registro deletado com sucess");
    
  })
  
  
})
 */