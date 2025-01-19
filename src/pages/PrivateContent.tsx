import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth"

const PrevateContent = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
    // eslint-plugin-react-hooks のルールでは、useEffect の依存配列に使用しているすべての値（例: navigate）を含めるべきであると定義されているためnavigateも指定している
  }, [isAuthenticated, navigate]);
  return (
    <div className="flex flex-col items-center mt-32">
    <h1 className="text-3xl font-bold">基礎応用</h1>
    <p>useContext</p>
    <Link to='/' className="underline">トップページへ</Link>
  </div>
  );
};

export default PrevateContent;