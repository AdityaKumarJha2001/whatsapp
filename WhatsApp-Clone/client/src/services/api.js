import axios from 'axios';

const URL = 'http://localhost:8000' 

export const addUser = async ( data ) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log('error while calling addUser API', error);
  }
}

export const getUsers = async () => {
  try {
    let response = await axios.get(`${URL}/users`);
    return response.data;
  } catch (error) {
    console.log('error while calling getUsers API', error);
  }
}

export const setConversation = async ( data ) => {
  try {
     await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log('error while calling setConversation API', error);
  }
}

export const getConversation = async ( users ) => {
  try {
     let response = await axios.post(`${URL}/conversation/get`, users);
     return response.data;
  } catch (error) {
    console.log('error while calling getConversation API', error);
  }
}

export const getMessages = async (id) => {
  try {
      let response = await axios.get(`${URL}/message/get/${id}`);
      return response.data
  } catch (error) {
      console.log('Error while calling getMessages API ', error);
  }
}

export const newMessages = async (data) => {
  try {
      return await axios.post(`${URL}/message/add`, data);
  } catch (error) {
      console.log('Error while calling newConversations API ', error);
  }
}