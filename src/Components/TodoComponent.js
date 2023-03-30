import {useState} from "react";
/*
Todo application
push task into Array
Getup at 4am, Brush my teeth, Study React
Create a State called todos
*/
export default function TodoComponent(){
    const[todos,setTodos]=useState([]);
    const[todo,setTodo]=useState("");
    function handleTodo(){
        //console.log("Todo Added");
        //to get val from input use DOM--> 
       // const input =document.getElementById("todo");
        //console.log(input.value);
        //todos.push(todo);
        //convert array into string
       // setTodos(todo);
        //copy old array values
        let todosCopy=[...todos];
        // push new task
        todosCopy.push(todo);
       // console.log(todosCopy);
        setTodos(todosCopy);
    }
    function handleTodo1(){
       
        let todosCopy=[...todos];
        // push new task
        todosCopy.push(prompt("Add activity"));
       // console.log(todosCopy);
        setTodos(todosCopy);
    }
   /**  function handleInputChange(e){
       setTodo(e.target.value);
    }*/
    return (
    <div className="container primary" style={{margin:"50px",padding:"50px",background:"green",color:"white"}}>
       <div class="row align-items-start">
        <div class="col">
            <br/>
            <h3>To-Do-Application</h3>
            <br/>
           {/*} <input placeholder="Enter Your Task" onChange={handleInputChange} className="form-control" style={{width:"100px"}}/>*/}
           <textarea id="todo" placeholder="Enter Your Task" onChange={(e)=>setTodo(e.target.value)} className="form-control" style={{width:"300px"}}/>
           <br/>
           <button onClick={handleTodo} className="btn btn-danger">Add Task--Using Input</button>
           <br/> <br/>
           <button onClick={handleTodo1} className="btn btn-primary">Add Activity--Using Prompt</button>
           <br/>
        </div>
       
        <div class="col" style={{background:"white",color:"black"}}>
        <br/>
            <h4 style={{color:"green"}}>Task List</h4>
           
            <ul>
                {todos.map((t,index)=>(
                 <li key={`todo-list-item-${index}`}>{t}</li>
                 ))}
            </ul>
        </div>
    </div>
    </div>
    );
}