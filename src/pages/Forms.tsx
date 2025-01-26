import { Link } from "react-router-dom";
import BasicForm from "@/components/BasicForm";
import CustomForm from "@/components/CustomForm";

const Forms = () =>{
  return (
    <>
      <div className="flex flex-col items-center mt-32">
        <h1 className="text-3xl font-bold">基礎応用</h1>
        <p>フォーム</p>
        <Link to='/' className="underline">トップページへ</Link>
      </div>
      <BasicForm />
      <CustomForm />
    </>
  );
};

export default Forms;