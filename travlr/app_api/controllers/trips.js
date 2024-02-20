const mongoose = require('mongoose');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req,res) => {
    Model
        .find({})
        .exec((err, trips) =>{
            if (!trips) {
                return res  
                    .status(404)
                    .json({"message": "Trips not found."});
            }else if(err){
                return res
                .status(404)
                .json(err);
            }else{
                return res
                .status(200)
                .json(trips);
            }
        });
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindByCode = async (req,res) => {
    Model
        .find({'code': req.params.tripCode})
        .exec((err, trip) =>{
            if (!trip) {
                return res  
                    .status(404)
                    .json({"message": "Trip not found."});
            }else if(err){
                return res
                .status(404)
                .json(err);
            }else{
                return res
                .status(200)
                .json(trip);
            }
        });
};

const tripsAddTrip = async (req, res) => {
    Model.create(
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      (err, trip) => {
        if (err) {
          return res
            .status(400) //bad request
            .json(err);
        } else {
          return res
            .status(201) //creates
            .json(trip);
        }
      }
    );
  };

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip
};