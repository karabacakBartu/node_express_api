import { Types } from 'mongoose';
import userModel from '../models/user.js'


//For Create User
export async function createUser(requestBody)
{
    return await new userModel(requestBody).save();
 
}

//For Get Users
 export async function getUsers()
{
    return await userModel.find();
}

//For Update a User
export async function updateUser(id,name,surname)
{
    const objId = new Types.ObjectId(id);
    return await userModel.findOneAndUpdate({_id:objId},{name,surname});
 
}

//For Delete a User
export async function deleteUser(id)
{
    const objId = new Types.ObjectId(id);
    return await userModel.findOneAndDelete({_id:objId}).exec();
 
}

//For Get a User
export async function getUser(id){
    const objId = new Types.ObjectId(id);
    return await userModel.findById({_id:id}).exec();
}


