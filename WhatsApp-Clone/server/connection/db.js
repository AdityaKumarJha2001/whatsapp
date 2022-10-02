import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {

  const username = process.env.MONGO_USER;
  const password = process.env.MONGO_PASSWORD;
  const URL = `mongodb+srv://${username}:${password}@chatapp.u7rqg.mongodb.net/WHATSAPP-CLONE?retryWrites=true&w=majority`

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('error while connecting with databse',error);
  }
}


export default connection;