import { Link } from "react-router-dom";
import UseMemoExampleComponent from "@/components/UseMemoExampleComponent";
import UseMemoPowerComponent from "@/components/UseMemoPowerComponent";

const SampleUseMemo = () => {
  return (
    <>
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold">基礎応用</h1>
      <p>useMemo</p>
      <Link to='/' className="underline">トップページへ</Link>
      <UseMemoExampleComponent />
      <UseMemoPowerComponent />
    </div>
    </>
  );
};

export default SampleUseMemo;