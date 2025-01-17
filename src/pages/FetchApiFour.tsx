import { Link } from "react-router-dom";
import { useState } from "react";

type Todo = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

const FetchApiTwo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // ↓詳細情報が表示されているかどうかを管理する状態（detailsVisible）を作成
  // タスクの ID をキーとして、それぞれのタスクの詳細表示状態を管理するための状態
  // 各`todo.id`ごとに「詳細表示状態」を管理
  const [detailsVisible, setDetailsVisible] = useState<{ [key: string]: boolean }>({}); // 初期値の型はプロパティがオブジェクトである key は map 内部の todo.id
  // ↓各`todo.id`ごとに取得した詳細データを格納。
  const [todoDetails, setTodoDetails] = useState<{ [key: string]: Todo | null }>({});

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      const data: Todo[] = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const fetchTodoDetail = async (id: string) => {
    try {
      if (todoDetails[id]) {
        // 状態のトグル（表示/非表示の切り替え）
        // 詳細データが既に取得済みなら状態反転のみを行いデータ取得は行わない
        setDetailsVisible((prev) => ({ ...prev, [id]: !prev[id] }));
        // prev：現在の状態を参照。
        // ...prev：既存の状態を保持。
        // [id]: !prev[id]：指定されたタスク ID（id）の値を反転（true ⇄ false）する。
        // 結果として、新しい状態オブジェクトが作成され、特定のタスクの詳細表示状態が切り替わる
        return;
      }

      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const dataDetail: Todo = await response.json();
      setTodoDetails((prev) => ({ ...prev, [id]: dataDetail })); // データ格納
      setDetailsVisible((prev) => ({ ...prev, [id]: true })); // 状態管理
    } catch (error) {
      console.error('Error fetching todo detail:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-32">
        <h1 className="text-3xl font-bold">基礎応用</h1>
        <p>fetch APIを使ったデータ取得4<br />（https://jsonplaceholder.typicode.com/todos/idからデータ取得）</p>
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
                <p className="text-lg font-medium text-gray-800">ID: {todo.id}<button type="button" onClick={() => fetchTodoDetail(todo.id)} className="bg-stone-500 rounded p-2 ml-2"><span className="text-white">詳細取得</span></button></p>
                {detailsVisible[todo.id] && todoDetails[todo.id] && (
                  <>
                    <h3>Todo Detail</h3>
                    <p>userID: {todoDetails[todo.id]?.userId}</p>
                    <p>ID: {todoDetails[todo.id]?.id}</p>
                    <p>title: {todoDetails[todo.id]?.title}</p>
                    <p>Status: {todoDetails[todo.id]?.completed ? "Completed" : "Pending"}</p>
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

export default FetchApiTwo;