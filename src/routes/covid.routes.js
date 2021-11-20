module.exports = app => {
    const Covids = require("../controllers/covid.controller");
  
    var router = require("express").Router();
  
    //filter covid register by age
    router.post("/age",Covids.agefilter);

    // Create a new Covidregister
    router.post("/", Covids.create);

    //filter covid register by age
    router.post("/gender",Covids.genderfilter);

    //filter covid register by age
    router.post("/state",Covids.statefilter);

    //filter covid register by age
    router.post("/city",Covids.cityfilter);
    
    // Update a Tutorial with id
    router.put("/:id", Covids.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", Covids.delete);
  
  
    app.use('/api/covid', router);
  };