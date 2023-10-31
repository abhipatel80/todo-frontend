import CreateTodo from './components/CreateTodo';
import GetTodo from './components/GetTodo';
import './App.css';
import { useState } from 'react';
import EditTodo from './components/EditTodo';
import useFetch from './hooks/fetch';

const App = () => {

  const [edit, setedit] = useState(false);
  const [newtodo, setnewtodo] = useState(false);
  
  const [id, setid] = useState();

  const { getTodoById, todo } = useFetch("/get");

  const getTodoId = (id) => {
    setid(id);
    getTodoById(id);
  }

  return (
    <div className="flex flex-col lg:flex-row w-full justify-evenly items-center h-full">
      <div className='add-todo'>
        {edit ?
          <EditTodo id={id} todo={todo} setnewtodo={setnewtodo} /> :
          <CreateTodo setnewtodo={setnewtodo} />
        }
      </div>
      <div className='get-todo'>
        <GetTodo setedit={setedit} getTodoId={getTodoId} setnewtodo={setnewtodo} newtodo={newtodo} />
      </div>
    </div>
  );
}

export default App;
