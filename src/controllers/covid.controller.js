const db = require("../models");
const Coviduser = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Coviduser
exports.create = (req, res) => {
 
};

// Show data filter by gender
exports.genderfilter = (req, res) => {
    if(!req.body){
        if(!req.body.gender){
            res.status(400).send({
                message:"empty gender input!"
            });
        }
        return;
    }

    const covidgender = req.body.gender;

    Coviduser.findAll({where : covidgender})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "error searching gender."
        });
    });
};
//end gender filter 

// Show data filter by age range
exports.agefilter = (req, res) => {
    if(!req.body){
        if(!req.body.age){
            res.status(400).send({
                message:"empty age input!"
            });
        }
        return;
    }

    const covidgender = req.body.age;



    Coviduser.findAll({where : covidgender})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "error searching gender."
        });
    });
}
// en age filter


// Show all Coviduser from the database.
exports.findAll = (req, res) => {
  
};

// Find a single coviduser with an id
exports.findOne = (req, res) => {
  
};

// Update a coviduser by the id in the request
exports.update = (req, res) => {
  
};

// Delete a coviduser with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all coviduser from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published coviduser
exports.findAllPublished = (req, res) => {
  
};