// import { AuthProvider, useAuth } from '@/hooks/useAuth';
import { useAuth } from '@/hooks/useAuth';

const Login = () => {
  // return (
  //   <AuthProvider>
  //     <AuthButtons />
  //   </AuthProvider>
  // );
  const { isAuthenticated, logIn, logOut } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logOut} className="px-4 py-2 bg-green-700 text-white rounded-lg">ログアウト</button>
      ) : (
        <button onClick={logIn} className="px-4 py-2 bg-orange-700 text-white rounded-lg">ログイン</button>
      )}
    </div>
  );
};

// const AuthButtons = () => {
//   const { isAuthenticated, logIn, logOut } = useAuth();

//   return (
//     <div>
//       {isAuthenticated ? (
//         <button onClick={logOut}>ログアウト</button>
//       ) : (
//         <button onClick={logIn}>ログイン</button>
//       )}
//     </div>
//   );
// };

export default Login;
