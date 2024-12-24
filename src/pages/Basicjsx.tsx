import Navigation from '@/components/Navigation';

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
    <>
      <Navigation />
      <div className="flex flex-col p-5">
        <h2 className="text-2xl font-bold">{logInStatus}</h2>
        {isLoggedIn ? (
          <p className="text-green-500">{loggedInGreeting}</p>
        ) : (
          <p className="text-red-500">{notLoggedInGreeting}</p>
        )}
        <h2 className="text-2xl font-bold">{doneStatus}</h2>
        {isDone ? (
          <p className="text-green-500">{doneGreeting}</p>
        ) : (
          <p className="text-red-500">{notDoneGreeting}</p>
        )}
      </div>
    </>
  )
}

export default Basicjsx;