import { Link } from "react-router-dom";
import { useState } from "react";

type Todo = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

const FetchApiThree = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isDetailVisible, setIsDetailVisible] = useState<boolean>(false);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      const data: Todo[] = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleShowDetail = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-32">
        <h1 className="text-3xl font-bold">基礎応用</h1>
        <p>失敗例：fetch APIを使ったデータ取得3<br />（https://jsonplaceholder.typicode.com/todos?_limit=10からデータ取得）<br />1つのボタンをクリックすると全ての詳細データが表示されてしまう</p>
        <Link to='/' className="underline">トップページへ</Link>
      </div>
      <div className="text-center mt-10">
      <button
        onClick={fetchTodos}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-300"
      >
        Fetch Todos
      </button>
      <div className="mt-6 max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Todos:</h2>
        {todos.length > 0 ? (
          <ul className="text-left">
            {todos.map(todo => (
              <li key={todo.id} className="mb-4 border-b pb-2 last:border-b-0">
                <p className="text-lg font-medium text-gray-800">ID: {todo.id}<button type="button" onClick={handleShowDetail} className="bg-stone-500 rounded p-2 ml-2"><span className="text-white">詳細取得</span></button></p>
                <p>{todo.title}</p>
                {isDetailVisible && (
                  <>
                    <h3>Todo Detail</h3>
                    <p>userID: {todo.userId}</p>
                    <p>ID: {todo.id}</p>
                    <p>title: {todo.title}</p>
                    <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No todos fetched yet.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default FetchApiThree;