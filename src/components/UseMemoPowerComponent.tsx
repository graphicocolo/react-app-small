import { useMemo, useState } from "react";

const UseMemoPowerComponent = () => {
  // 基数、指数をセット
  const [radix, setRadix] = useState<string>('');
  const [index, setIndex] = useState<string>('');

  const calcResult = useMemo(() => {
    const convertRadix = Number(radix);
    const convertIndex = Number(index);
    if (!convertRadix || !convertIndex) {
      return;
    };
    // return convertRadix ** convertIndex;
    return Math.pow(convertRadix, convertIndex);
  }, [radix, index]);

  return (
    <div className="mt-5 p-4">
      <h1 className="text-2xl font-bold mb-4">useMemo PowerCalc</h1>
      <input
        type="text"
        placeholder="Input Radix..."
        value={radix}
        onChange={(e) => setRadix(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 mr-4"
      />
      <input
        type="text"
        placeholder="Input Index..."
        value={index}
        onChange={(e) => setIndex(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <div>
        <p className="text-lg">Result <span className="font-bold">{calcResult}</span></p>
      </div>
    </div>
  );
};

export default UseMemoPowerComponent;