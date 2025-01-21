import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [value, setValue] = useState<string>('');

  // 10000個の文字列を含む配列を作成
  const items = useMemo(() => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Pineapple'];
    return Array.from({ length: 10000 }, (_, i) => fruits[i % fruits.length]);
  }, []);

  // useMemoを使用したフィルタリング
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
  }, [value]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">useMemo Example</h1>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <ul className="list-disc pl-5 h-40 overflow-auto">
        {filteredItems.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoExample;