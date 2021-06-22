import React , {useState} from 'react';
import { unmountComponentAtNode } from 'react-dom';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App(){
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUsersList((prevUsersList)=>{
      return [
               ...prevUsersList, 
               {name:uName, age:uAge, id:Math.random().toString()}]
    });
  };
  console.log(usersList);
  return (
    <div>
               
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
      
    </div>
    
  );
};

export default App;