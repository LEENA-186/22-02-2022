import React , {useEffect,useState} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
const App = () => {
  const[loading,setLoading]=useState(false);
  const[user,setUser]=useState([]);
  const[searchname,setSearchName]=useState("");
  useEffect(()=>{
    const loaduser = async () => {
   setLoading(true);
   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
   setUser(response.data)
   setLoading(false);
    }
   loaduser();
      },[]);
return (
    <div className="App">
    <h2>Search</h2>
    <input
    type="text"
    placeholder="search"
    onChange={(e)=>setSearchName(e.target.value)}
   />
{loading ? (<h4>Loading...</h4>):(
 
  user.filter((value) =>{
    if(searchname === ""){
      return value;
    }
    else if(value.name.toLowerCase().includes(searchname.toLowerCase())){
      return value;
    }
    // return value
  })
  .map((item) =>
  

 <div key={item.id}> 
     {/* <div class="modal-body"> */}
    <Table  striped bordered hover size="sm">
          <thead>
            <tr>
              <th >Firstname</th>
              <th >Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
              <tr >
              <td >{item.name}</td>
              <td >{item.username}</td>
              <td >{item.email}</td>
               </tr>
               
          </tbody>
        </Table>
        </div>
      ))}
    
    </div>
  
    );
}          


export default App
