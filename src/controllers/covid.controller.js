const db = require("../models");
const Coviduser = db.covid;
const Op = db.Sequelize.Op;

// Create and Save a new Coviduser
exports.create = (req, res) => {
  // Validate request
  if (!req.body.age) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a coviduser
  const covid_user = {
    gender: req.body.gender,
    age: req.body.age,
    state: req.body.state,
    city: req.body.state
  };

  // Save Tutorial in the database
  Coviduser.create(covid_user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Covid register."
      });
    });
};
//end new coviduser

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
    console.log(covidgender)
    Coviduser.findAll({where : {gender: covidgender}})
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
    console.log(covidgender >= 20 && covidgender <= 40)
    if (covidgender < 0){
        res.status(400).send({
            message: "Bad request"
        });
        return;
    }

    if (covidgender >= 0 && covidgender <= 20){
        Coviduser.findAll({where : {age :  {[Op.between]:[0,20]}}})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "age range no found"
            })
        })
    }

    if (covidgender >= 20 && covidgender <= 40){
        Coviduser.findAll({where : {age :  {[Op.between]:[20,40]}}})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "age range no found"
            })
        })
    }

    if (covidgender > 40){
        Coviduser.findAll({where : {age :  {[Op.gt]:40}}})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "age range no found"
            })
        })
    }


}
// end age filter

//show data filter by state
exports.statefilter = (req, res) => {
    if(!req.body){
        if(!req.body.state){
            res.status(400).send({
                message:"empty state input!"
            });
        }
        return;
    }

    const covidgender = req.body.state;
    console.log(covidgender)
    Coviduser.findAll({where : {state : covidgender}})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "error searching state."
        });
    });
};
//end data filter by state

//show data filter by city
exports.cityfilter = (req, res) => {
    if(!req.body){
        if(!req.body.city){
            res.status(400).send({
                message:"empty city input!"
            });
        }
        return;
    }

    const covidgender = req.body.city;

    Coviduser.findAll({where : {city : covidgender}})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "error searching city."
        });
    });
};
//end data filter by city

// Update a coviduser by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Coviduser.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};
//end update coviduser

// Delete a coviduser with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Coviduser.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      }); 
};
//end delete coviduser

