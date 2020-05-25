import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import {Todo,fetchTodos,deleteTodo} from '../actions'
import {StoreState} from '../reducers'

interface AppProps{
    todos:Todo[];
    fetchTodos:Function;
    deleteTodo:typeof deleteTodo;
}
interface AppState{
    fetching:boolean;
}
interface currentt extends React.MutableRefObject<Todo[]>{

}
// function usePrevious(value:any) {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   }
const _App=(props:AppProps)=>{
    const [fetching,setFetching]=useState(false)
    //const prevTodos=usePrevious(props.todos);
    var onButtonClick=():void=>{
        setFetching(true);
        props.fetchTodos();
    }
    // const check=():Boolean=>{
    //     if (props.todos.length===0){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
    
    useEffect(():void=>{
        setFetching(false)
    },[props.todos])
    var renderList=():JSX.Element[]=>{
        return props.todos.map((todo:Todo)=>{
        return <div onClick={()=>onTodoClick(todo.id)} key={todo.id}>{todo.title}</div>
        })
    }
    var onTodoClick=(id:number):void=>{
        props.deleteTodo(id)
    }
    // useEffect(()=>{
    //     props.fetchTodos();
    // },[])
    //console.log(props.todos)
    return <div>
        <button onClick={onButtonClick}>Fetch</button>
        {fetching?"loading":null}
        {renderList()}
    </div>;
}


const mapStateToProps=({todos}:StoreState):{todos:Todo[]}=>{
    return {todos}
}

export const App=connect(mapStateToProps,{fetchTodos,deleteTodo})(_App);