import React,{useEffect,useState}from 'react'
import Dropdown from './Dropdown'
const Clothes = () => {
  const [data,setData] = useState({
    name :'',
    age  :''
  })
  const onchangeHandler =e =>
  {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e =>
  {
    e.preventDefault(data);
    //fetch method  
    // http://localhost:8080/donations/add
    // https://test-api-b094d-default-rtdb.firebaseio.com/data.json
    // "http://localhost:9000/donations/add"
 
    if(data.name==0 && data.age==0)
    {
      alert("Name And Age Fields are Not Empty");
    } 
    else if(data.name==0 )
    {
      alert("Name Is Not Empty");
    }
    else if(data.age==0)
    {
      alert("Age field is not Not Empty")
    }
        else if(data.name==0 && data.age<5)
    { 
      alert("Name Is Not Empty And Age File Must Greater then 5"); 
    }
    else if(data.name==0 && data.age >100)
    {
      alert("Name Is Not Empty And Age File Must Less then 100"); 
    }
    else if(data.age<5)
    {
      alert("Age Must Grater then 5");
    }
    else if(data.age>100)
    {
      alert("Age not greater then 100"); 
    }
    else if(data.name==0 && data.age<5)
    { 
      alert("Name Is Not Empty And Age File Must Greater then 5"); 
    }
    else if(data.name==0 && data.age >100)
    {
      alert("Name Is Not Empty And Age File Must Less then 100"); 
    }
    else if(data.name.length<=3)
    {
      alert("Name Field length Must Greater then 3");  
    }
    else
    { 
      fetch("https://test-api-b094d-default-rtdb.firebaseio.com/data.json",{ 
        method:'post',  
        body:JSON.stringify(data),  
         headers:
        {
          "Content-type":"application/json; charset=UTF-8"
        } 
        
      }).then(res => 
        alert('data is posted')).catch(err =>console.log(err)) 
    }
  
  }  
  return ( 
<div>
<Dropdown /><br /><br /><br /><br /><br /><br />
  <form onSubmit={submitHandler}> 
      <label>Name</label>
      <input type='text' name='name'  onChange={onchangeHandler}/> <br />
      <label>Age</label>
      <input type='text' name='age'   onChange={onchangeHandler}/><br />
      <input type='submit' value='post data' />
  </form> 
</div> 
  )
}

export default Clothes
 