const {UserModel} = require('../models')
const { matchedData } = require('express-validator');
const {handlehttpError} = require('../utils/handlehttpError')

  const getAllUsers = async (req, res) => {
      try{
          const data = await UserModel.find();

          res.send( data );
      }catch(e)
      {
          handlehttpError(res,"ERROR_GET_ALL_USERS")
      }
      
  };

const getUserByUsernameAndPassword = async (req, res) => {
    const { userName, password } = req.query;
  
    try {
      const user = await UserModel.findOne({ userName, password });
  
      if (!user) {
        return handlehttpError(res, "USER_NOT_FOUND", 404);
      }
  
      res.send( user );
    } catch (e) {
      handlehttpError(res, "ERROR_FIND_USER");
    }
  };

const createUser = async (req, res) => {
    try{
        const body = matchedData(req);
        const data = await UserModel.create(body);
        res.send(data);
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_USER")
    }
    
};

module.exports = {getAllUsers, createUser, getUserByUsernameAndPassword};