import React from 'react';
import './App.css';
import { useUsersQuery, useUserQuery, useAddUserMutation, useEditUserMutation, useDeleteUserMutation } from './services/usersApi';

function App() {
  const { data, error, isLoading, isFetching,isSuccess } = useUsersQuery();
  console.log(data);
  return (
    <div className="App">
      <h1>React Redux Toolkit RTK Query Tutorial</h1>
      {isLoading && <h2>...Loading</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map(user => {
            return <div className="data" key={user.id}>
              <span>{user.name}</span>
              <span><UserDetail id={ user.id} /></span>
            </div>
          })}
        </div>
      )}
      <div>
        <AddUser/>
      </div>
      <div>
        <EditUser id={data.id}/>
      </div>
    </div>
  );
}

export const UserDetail = ({id}) => {
  const { data } = useUserQuery(id);
  return (
    <pre>{ JSON.stringify(data, undefined, 2)}</pre>
  )
}

export const AddUser = () => {
  const [addUser] = useAddUserMutation()
  const formData = {
    "id": 11,
    "name": "andros",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }

  const handleAdd = async ()=>{
    await addUser(formData)
  }
  return(
    <>
      <button onClick={handleAdd}>Add</button>
    </>
  )
}

export const EditUser = () =>{
  const [editUser] = useEditUserMutation()
  const formData ={
      name:'abc'
  }
  const handleEdit = async (id) => {
    await editUser(formData, id)
  }
  return(
    <>
      <button onClick={handleEdit}>Edit</button>
    </>
  )
}

export const DeleteUser = () =>{
  const [deleteUser] = useDeleteUserMutation()
  const handleDelete = async (id) => {
    await deleteUser(id)
  }
  return(
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default App;
