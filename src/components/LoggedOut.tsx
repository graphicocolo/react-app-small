const LoggedOut = () => {
  const notLoggedInGreeting = 'You are not logged in.';
  return (
    <p className="text-red-500">{notLoggedInGreeting}</p>
  );
};

export default LoggedOut;