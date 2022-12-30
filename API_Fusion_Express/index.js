const cors=require("cors");
const corsOptions ={
  origin:'*', 
  credentials:true,           
  optionSuccessStatus:200,
}

const app = require('express')();
const PORT = 8081;

app.use(cors(corsOptions))

app.listen(
    PORT,
    () => console.log(`Ça tourne sur http://localhost:${PORT}`)
)

let reponse_bdd;
fetch('http://localhost:3000/ville').then((res) => { 
    return res.json() 
  }).then((jsonResponse) => {
    reponse_bdd = jsonResponse;
  }).catch((err) => {
    console.error(err);
  });
  
  

app.get('/',(req,res)=>{
    var pollutionHourtin = req.query.pollutionHourtin;

    global.a;
    fetch(`http://localhost:8080/Hourtin?pollution=${pollutionHourtin}`).then((res) => {return res.json()}).then((jsonResponse) => {global.a = jsonResponse})
    .then((u) => res.status(200).send({hourtin_values:global.a,bdd_values:reponse_bdd}));

});