import React, { useEffect } from 'react'
import useFetch from '../hooks/fetch'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const GetTodo = ({ setedit, getTodoId, newtodo, setnewtodo }) => {

    const { todo, getTodo } = useFetch("/get");

    const { deleteTodo } = useFetch("/delete");

    useEffect(() => {
        getTodo();
    }, [newtodo]);

    const edit = (id) => {
        setedit(true);
        getTodoId(id);
    }

    const deletetodo = (id) => {
        setnewtodo(false);
        deleteTodo(id)
        setnewtodo(true);
    }

    return (
        <>
            <div>
                <h2 className='text-2xl lg:text-3xl font-bold mt-10 mb-2 ml-2'>Your Todos</h2>
                <div className='flex flex-col'>
                    {todo?.map((val) => {
                        return (
                            <div className='all-todos w-[20rem] lg:w-[30rem] border-2 p-4 m-4' key={val._id}>
                                <div className='flex w-full'>
                                    <h2 className='text-xl font-semibold mb-3'>{val.title}</h2>
                                    <p className='ml-auto'>{val?.createdAt.slice(0, 10)}</p>
                                </div>
                                <p>{val.description}</p>
                                <div className='icons justify-end flex'>
                                    <button onClick={() => edit(val._id)}>
                                        <EditIcon className='cursor-pointer hover:text-green-600' />
                                    </button>
                                    <button onClick={() => deletetodo(val._id)}>
                                        <DeleteIcon className='ml-5 hover:text-red-500 cursor-pointer' />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default GetTodo
