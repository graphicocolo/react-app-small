import { Link } from 'react-router-dom';

const Basicjsx = () => {
  const logInStatus = 'login status...';
  const loggedInGreeting = 'You are logged in.';
  const notLoggedInGreeting = 'You are not logged in.';
  const doneStatus = 'done status...';
  const doneGreeting = 'done.';
  const notDoneGreeting = 'not yet.';
  const isLoggedIn = false;
  const isDone = true;
  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-3xl font-bold">React 学習のための小さなアプリ</h1>
      <Link to='/'>Home</Link>
      <Link to='/studymnt'>MENTA 課題</Link>
      <Link to='/about'>About</Link>
      <div className="flex flex-col mt-20">
        <h2>{logInStatus}</h2>
        {isLoggedIn ? (
          <p className="text-green-500">{loggedInGreeting}</p>
        ) : (
          <p className="text-red-500">{notLoggedInGreeting}</p>
        )}
        <h2>{doneStatus}</h2>
        {isDone ? (
          <p className="text-green-500">{doneGreeting}</p>
        ) : (
          <p className="text-red-500">{notDoneGreeting}</p>
        )}
      </div>
    </div>

  )
}

export default Basicjsx;