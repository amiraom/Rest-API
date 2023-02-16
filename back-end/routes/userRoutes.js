const express =require('express');
const { createUser,getUsers ,deleteUser,updateUser} = require('../controllers/userController');
const userRouter =express.Router();
// userRouter.post('/add',createUser);

userRouter.post('/addUser',createUser);
userRouter.get('/get',getUsers);
userRouter.delete('/users/:id', deleteUser);
userRouter.patch('/users/:id', updateUser);


module.exports=userRouter;