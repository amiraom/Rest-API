const userSchema =require('../models/user');
exports.createUser = async(req,res) =>
{
try{
    const newUser = new userSchema (req.body);
    await newUser.save()
   
}
catch (error){
    console.log(error);   
    res.status(500).json({msg:"can not create a new user"})
}

}
exports.getUsers =async(req,res) =>
{
    try{
        const list = await userSchema.find();
        res.status(200).json({msg:"users:",list})
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"no users"})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const deleteduser = await userSchema.deleteOne({_id:req.params.id});
       
        res.status(200).json(deleteduser);
        // console.log(deleteduser);
      
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updateuser= await userSchema.findOneAndUpdate({ _id:req.params.id} , { $set : { name : "User2 Updated", email: "update@gmail.com"} },{new:true})
        res.status(200).json(updateuser);
        console.log(updateuser);
      
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}





