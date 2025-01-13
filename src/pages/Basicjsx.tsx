import { useState } from 'react';

import Navigation from '@/components/Navigation';
import Greeting from '@/components/Greeting';
import LoggedIn from '@/components/LoggedIn';
import LoggedOut from '@/components/LoggedOut';
import IsLoggedInMessage from '@/components/IsLoggedInMessage';

const Basicjsx = () => {
  const logInStatus = 'login status...';
  // const loggedInGreeting = 'You are logged in.';
  // const notLoggedInGreeting = 'You are not logged in.';
  const doneStatus = 'done status...';
  const doneGreeting = 'done.';
  const notDoneGreeting = 'not yet.';
  const isLoggedIn = false;
  const isDone = true;

  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center mt-32">
        <h1 className="text-3xl font-bold">
          Hello, World!
        </h1>
      </div>
      <Greeting />
      <div className="flex flex-col p-5">
        <h2 className="text-2xl font-bold">Componen Props Message</h2>
        <IsLoggedInMessage isLoggedIn={isLoggedIn} />
        <h2 className="text-2xl font-bold">{logInStatus}</h2>
        {isLoggedIn ? (
          <LoggedIn />
        ) : (
          <LoggedOut />
        )}
        <h2 className="text-2xl font-bold">{doneStatus}</h2>
        {isDone ? (
          <p className="text-green-500">{doneGreeting}</p>
        ) : (
          <p className="text-red-500">{notDoneGreeting}</p>
        )}
      </div>
      <div className="flex flex-col items-center mt-32">
        <form>
          <input type="text" value={inputValue} onChange={handleInputChange} className="border border-slate-300 rounded" />
        </form>
        <p>ここに入力欄のテキストが反映される<span className="pl-2 text-blue-600 font-bold">{inputValue}</span></p>
      </div>
    </>
  )
}

export default Basicjsx;

// 答え
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4">App</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         className="border border-gray-300 p-2 mb-4"
//       />
//       <p className="text-lg">{inputValue}</p>
//     </div>
//   );
// }

// export default App;
