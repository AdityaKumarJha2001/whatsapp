import User from '../modal/User.js'

export const addUser = async (req, res) => {
  const data = req.body;

  try {

  let userExist = await User.findOne({ googleId: data.googleId})
  
  if(userExist) {
    res.status(200).json('User already exists')
    return;
  }                                                   // another way to save the data in Mongodb
    await User.insertMany(data);                      // const newUser = new User(data)
                                                      // await newUser.save()
    res.status(200).json('User saved successfully')

  } catch (error) {
    res.status(500).json(error);
  }
}

export const getUsers = async (req, res) => {
  try {
    let users = await User.find({});
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error);
  }
}