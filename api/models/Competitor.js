/**
* Competitor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {


  types: {
    schoolExistsByID: function(schoolID){
      sails.log.info("provided schoolID:" + schoolID);

      School.findOne({id:schoolID}).exec(function findOneCB(err, found){
        sails.log.info("found:");
        sails.log.info(found);
        sails.log.info("typeof found:" + typeof found);
        if (typeof found !== "undefined"){
          sails.log.info("typeof found seems to NOT be undefined");
          return true;
        }
        else {
          sails.log.info("typeof found seems to be undefined");
          return false;
        }
        //return (typeof found !== "undefined");
      });

    },
  },


  attributes: {
    fullName: {
      type:'string',
      required:true
    },
    birthDate: {
      type:'date',
      required:true
    },
    email: {
      type: 'string',
      email: true
    },
    school:{
      model: "school",
      required:true,
      schoolExistsByID:true
    }

  }
};
sails.config.models.migrate='drop';
