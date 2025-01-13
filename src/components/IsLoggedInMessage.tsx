type Props = {
  isLoggedIn: boolean;
};

// 答え
// const StatusMessage = ({isLoggedIn}) => {
//   const message = isLoggedIn ? 'Logged in' : 'Not logged in';
//   const color = isLoggedIn ? 'text-blue-500' : 'text-yellow-500';
//   return (
//     <div>
//       <h2 className={`text-lg font-semibold ${color}`}>
//         {message}
//       </h2>
//     </div>
//   )
// }

// export default StatusMessage;

const IsLoggedInMessage = ({ isLoggedIn }: Props) => {
  return (
    <>
      <p>Props message: {isLoggedIn ? 'You are logged in.' : 'You are not logged in.'}</p>
    </>
  );
};

export default IsLoggedInMessage;