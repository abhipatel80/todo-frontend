import React, { useState } from 'react'
import useFetch from '../hooks/fetch'

const CreateTodo = ({ setnewtodo }) => {

    const [input, setinput] = useState({
        title: "",
        description: ""
    });

    const change = (e) => {
        const { name, value } = e.target;
        setinput((data) => {
            return {
                ...data,
                [name]: value
            }
        });
    }

    const { addTodo } = useFetch("/add", input);

    const addtodo = () => {
        setnewtodo(false);
        addTodo();
        setnewtodo(true);
        setinput({
            title: "",
            description: ""
        });
    };

    return (
        <>
            <div className='main-todo'>
                <h2 className='text-2xl lg:text-3xl font-bold my-10'>Add Todo</h2>
                <div className='title-input flex flex-col justify-center items-center w-full'>
                    <label htmlFor='title' className='text-xl mr-[17rem] mb-2'>Title</label>
                    <input placeholder='Enter Title' value={input.title} name="title" onChange={change} id="title" className='border-2 rounded-md  px-4 w-[20rem] py-2' />
                </div>
                <div className='title-input flex flex-col justify-center items-center w-full mt-8'>
                    <label htmlFor='description' className='text-xl mr-52 mb-2'>Description</label>
                    <input placeholder='Enter Description' value={input.description} name="description" onChange={change} id="description" className='rounded-md border-2 px-4 w-[20rem] py-2' />
                </div>
                <div className='title-input flex flex-col justify-center items-center w-full mt-8'>
                    <button id="btn" onClick={addtodo} className='bg-sky-600 text-white font-semibold px-12 rounded-md hover:bg-sky-700 py-2 mb-8'>Add Todo</button>
                </div>
            </div>
        </>
    )
}

export default CreateTodo
