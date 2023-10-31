import { useState } from "react";
import axios from 'axios';

const useFetch = (path, body) => {

    const [todo, setTodo] = useState();

    const addTodo = async () => {
        try {
            const { data } = await axios.post(`http://localhost:4000/todo${path}`, body);
            return data;
        } catch (e) {
            console.log(e.message);
        }
    };

    const getTodo = async () => {
        try {
            const { data } = await axios.get(`http://localhost:4000/todo${path}`);
            setTodo(data);
        } catch (e) {
            console.log(e.message);
        }
    };

    const getTodoById = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:4000/todo${path}/${id}`);
            setTodo(data);
        } catch (e) {
            console.log(e.message);
        }
    };

    const editTodo = async (id) => {
        try {
            const { data } = await axios.put(`http://localhost:4000/todo${path}/${id}`, body);
            setTodo(data);
        } catch (e) {
            console.log(e.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/todo${path}/${id}`);
        } catch (e) {
            console.log(e.message);
        }
    };

    return { todo, addTodo, getTodo, deleteTodo, editTodo, getTodoById }
}

export default useFetch;
