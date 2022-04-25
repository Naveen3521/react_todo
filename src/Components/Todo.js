import React, { useState } from 'react'
import ShowTodo from './ShowTodo'
import './Todo.css'
function Todo() {

    const [task, setTask] = useState("add some task")
    const [data, setData] = useState([])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = task;
        setData([...data, newData])

        setTask('')
    }

    const deleteItem =(a)=>{
        const finalData = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalData)
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col  ">
                    <div className="row  text-dark ">
                        <div className="col  p-2 bg-warning mb-3">
                            <h4 className='text-center'>Get Things Done &#128526;</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" value={task} onChange={onChangeHandler} />
                            </div>
                            <button type="submit" className="btn btn-warning  mb-2 ml-2 col-3">Add Task</button>
                        </div>
                    </form>

                    {data.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            task={value}
                            onSelect={deleteItem}
                        />
                    })}


                </div>
            </div>
        </div>
    )
}

export default Todo