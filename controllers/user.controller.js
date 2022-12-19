

import  {getUsers,updateUser,createUser, deleteUser} from '../services/user.services.js'


export const createUserController = async(req,res)=>{
    const body = req.body;
    const result = await createUser(body);
    console.log(body);
    res.send(result);
    res.status(200)
    
   }

export const getUsersController =async (req,res)=>{

 try {
    const users=await getUsers();

    res.send(users);
    res.status(200);
    
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
    
    res.status(200);
    res.send(result);

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



// export const getUser = (req,res)=>{
//     console.log('burada get methodu var alkfmasşlfmad 2');
//     res.send('sa')

// }


