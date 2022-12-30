const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT, 
    () => console.log(`Tourne sur http://localhost:${PORT}`)
)



app.get('/Hourtin',(req,res)=>{
    const pollution = req.query.pollution;

    if(pollution<50){
        res.status(200).send({
            pollutionHourtin:'☢️'
        })
    }
    else if(pollution>=50&&pollution<90){
        res.status(200).send({
            pollutionHourtin:'⭐'
        })
    }
    else if(pollution>=90){
        res.status(200).send({
            pollutionHourtin:'✨'
        })
    }
});