import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DisplayFetchData from "@/components/DisplayFetchData";

type Todo = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

const FetchApiFive = () => {
  const [datas, setDatas] = useState<Todo[]>([]);
  const [selectedData, setSelectedData] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        const data: Todo[] = await response.json();
        setDatas(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchDatas();
  }, []);

  // const fetchDataDetails = async (id: string) => {
  //   try {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  //     const data = await response.json();
  //     setSelectedData(data);
  //   } catch (error) {
  //     console.error('Error fetching todo details:', error);
  //   }
  // };

  // useEffect(() => {
  //   if (!selectedData?.id) {
  //     return;
  //   }
  //   fetchDataDetails(selectedData?.id);
  // }, [selectedData?.id]);

  const handleClick = (data: Todo | null) => {
    setSelectedData(data); // map 内のカレントデータをセット
  };
  
  return (
    <>
      <div className="flex flex-col items-center mt-32">
        <h1 className="text-3xl font-bold">基礎応用</h1>
        <p>useEffectを使って特定のデータをフェッチし、詳細を表示</p>
        <Link to='/' className="underline">トップページへ</Link>
      </div>
      <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Todos:</h2>
      {datas.length > 0 ? (
        <ul className="text-left">
        {datas.map(data => (
          <li key={data.id} className="mb-4 border-b pb-2 last:border-b-0">
            <p className="text-lg font-medium text-gray-800">ID: {data.id}<button type="button" onClick={() => handleClick(data)} className="bg-stone-500 rounded p-2 ml-2"><span className="text-white">詳細取得</span></button></p>
          </li>
        ))}
        </ul>
        ) : (
          <p className="text-gray-600">No todos fetched yet.</p>
        )}
        {selectedData && (
          // <>
          //   <p>{selectedData.id}</p>
          //   <p>{selectedData.title}</p>
          //   <p>{selectedData.completed ? 'Completed' : 'Pending'}</p>
          // </>
          // <DisplayFetchData datas={selectedData} />
          <DisplayFetchData id={selectedData.id} title={selectedData.title} completed={selectedData.completed} />
        )}
      </div>
    </>
  );
};

export default FetchApiFive;