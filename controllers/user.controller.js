

import { getUserResponse } from '../response/response.schemas/user/getUserResponse.js';
import { Compile } from '../response/validation.js';
import  {getUsers,updateUser,createUser, deleteUser, getUser} from '../services/user.services.js'


export const createUserController = async(req,res)=>{
    const body = req.body;
    const result = await createUser(body);
    console.log(body);
    res.send(result);
    res.status(200)
    
   }

export const getUsersController =async (req,res)=>{

 try {
    console.log("sa");
    const users=await getUsers();
    const response = { statusCode: 200, data: users, message: 'OK' };
    console.log(response);
    res.send(Compile(response,getUserResponse));
 } catch (error) {
    res.status(500).json({message:error.message});
 }
}

export const updateUserController = async(req,res)=>{
  try {
    const paramId=req.params;
    const body = req.body;
    console.log(paramId);
    const result = await updateUser(paramId,body.name,body.surname);
    
    const response = { statusCode: 200, data: result, message: 'OK' };
    res.send(Compile(response,getUserResponse));

  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

export const deleteUserController = async(req,res)=>{
    const {id} = req.params;
    const result = await deleteUser(id);
    
    res.send(result);
    res.status(200);
}



export const getUserController = async(req,res)=>{
const {id} = req.params;
const result = await getUser(id);

res.send(result);
res.status(200);
}


