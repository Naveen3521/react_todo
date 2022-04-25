import React from 'react'
import './Todo.css'

function ShowTodo(props) {
    return (
        <div className='container border border-2 rounded mb-2 '>
            <div className="row my-2 ">

                <div className="col-10 text-white list-desc">
                    <h6>{props.task}</h6>
                </div>
                <div className="col-2 ">
                <button className='border-0 remove-btn' onClick={()=>{
                    props.onSelect(props.id)
                }}><i class="fa-solid fa-circle-minus text-danger"></i></button>
                </div>
            </div>
            
        </div>
    )
}

export default ShowTodo