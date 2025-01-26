import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "@/components/CartItem";

const SampleReactMemo = () => {
  const [items, setItems] = useState<string[]>([]);

  const products = [
    {name: 'shirts'},
    {name: 'pants'},
    {name: 'hat'},
  ];

  const handleAddItem = (product: { name: string }) => {
    setItems([...items, product.name]);
  };

  const handleDeleteItem = (product: { name: string }) => {
    const filteredItems = items.filter(item => item !== product.name);
    setItems(filteredItems);
  };

  return (
    <>
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold">基礎応用</h1>
      <p>React.memo</p>
      <Link to='/' className="underline">トップページへ</Link>
    </div>
    <div className="mt-10 p-5">
      <div>
      <h2 className="text-xl font-bold">商品一覧</h2>
        <ul className="w-96 mt-3">
          {products.map((product, index) => (
            <li key={index} className="mb-5 flex items-center">
              <div className="w-1/3">{product.name}</div>
              <div className="w-1/3"><button onClick={() => handleAddItem(product)} className="px-3 py-2 mr-1 bg-green-700 text-white rounded-md" type="button">商品を追加</button></div>
              <div className="w-1/3"><button onClick={() => handleDeleteItem(product)} className="px-3 py-2 bg-red-700 text-white rounded-md" type="button">商品を削除</button></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold">カートに入っている商品</h2>
        <ul>
          {items.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default SampleReactMemo;