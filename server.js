const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db =require("./src/models");
const axios = require('axios');


const Coviduser = db.covid;
const Op = db.Sequelize.Op;


const app = express();

var corsOptions = {
  origin: "http://localhost:3032"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

var dbcoviddata = {}
var database = {}

setInterval(()=>{
    axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json')
    .then((data)=>{

            database = {
                ...database,
                ...data.data
            }
            for( i in database) {
                dbcoviddata.age = database[i].edad,
                dbcoviddata.gender = database[i].sexo,
                dbcoviddata.state = database[i].departamento_nom,
                dbcoviddata.city = database[i].ciudad_municipio_nom
            }
    })

    

},6000)




async function resolve() {
    console.log("calling");
    const result = await resolvedata();
    console.log(result);
}



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to covid application." });
});

require("./src/routes/covid.routes")(app);



// set port, listen for requests
const PORT = process.env.PORT || 3031;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
