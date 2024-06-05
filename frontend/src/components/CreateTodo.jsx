import { useState } from "react";
import axios from 'axios';

const CreateTodo = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");
  const [sixth, setSixth] = useState("");
  const [seventh, setSeventh] = useState("");
  const [eighth, setEighth] = useState("");
  

  //
  const handleAddTodo = () => {
    const todoData = {
      first: first,
      second: second,
      third: third,
      fourth: fourth,
      fifth: fifth,
      sixth: sixth,
      seventh: seventh,
      eighth: eighth,
    }
    axios.post("http://localhost:3000/todo", todoData, {
      headers: {
        "Content-type" : "application/json"
      }
    })
    .then((res) => {
      if (res.status == 200){
        alert("Todo added");
        setFirst("");
        setSecond("");
        setThird("");
        setFourth("");
        setFifth("");
        setSixth("");
        setSeventh("");
        setEighth("");
      }else{
        throw new Error("Failed to add new todo")
      }
    })
    .catch(err => {
      console.log("Failed to add new todo", err)
    })
  }

  //
  return (
    <div>
        <input id="title" style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1x solid black",
        }} type="text" placeholder="first" onChange={(e)=> {
          const value = e.target.value;
          setFirst(value);
        }}/><br />
        <input style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black",
            
        }} type="text" placeholder="second" 
        onChange={(e)=> {
          const value = e.target.value;
          setSecond(value);
        }}
        /><br /><input style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black",
            
        }} type="text" placeholder="third" 
        onChange={(e)=> {
          const value = e.target.value;
          setThird(value);
        }}
        /><br /><input style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black",
            
        }} type="text" placeholder="fourth" 
        onChange={(e)=> {
          const value = e.target.value;
          setFourth(value);
        }}
        /><br /><input style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black",
            
        }} type="text" placeholder="fifth" 
        onChange={(e)=> {
          const value = e.target.value;
          setFifth(value);
        }}
        /><br /><input style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black",
            
        }} type="text" placeholder="sixth" 
        onChange={(e)=> {
          const value = e.target.value;
          setSixth(value);
        }}
        /><br /><input style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black",
            
        }} type="text" placeholder="seventh" 
        onChange={(e)=> {
          const value = e.target.value;
          setSeventh(value);
        }}
        /><br /><input style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black",
            
        }} type="text" placeholder="eighth" 
        onChange={(e)=> {
          const value = e.target.value;
          setEighth(value);
        }}
        /><br />
        <button style={{
            padding: 10,
            margin: 10,
            borderRadius: 4,
            border: '1 solid black',
        }} onClick={handleAddTodo
        //   ()=>{
        //   fetch("http://localhost:3000/todos",{
        //     method: "POST",
        //     body: {
        //       title: title,
        //       description: description

        //     }
        //   }
        //   )
        //   .then(async (res)=>{
        //     const json = await res.json();
        //     alert("Todo added");
        //   })
        // }
      }
        >Add todays Time table</button>
    </div>
  )
}

export default CreateTodo