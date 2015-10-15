/**
* School.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    fullName: {
      type:'string',
      required:true
    },
    town:{
      model: "town",
      required:true
    },
    telephone:{
      model: "telephone"
    },
    competitors:{
      collection: "competitor",
      via: "school"
    },

  }
};
