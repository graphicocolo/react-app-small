import useCounter from '@/hooks/useCounter';

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded-lg">Increment</button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded-lg">Decrement</button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Reset</button>
      </div>
    </div>
  );
};

export default CounterComponent;