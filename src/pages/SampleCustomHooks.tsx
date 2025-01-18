import { Link } from "react-router-dom";
import CounterComponent from "@/components/CounterComponent";
import useModal from "@/hooks/useModal";
import ModalComponent from "@/components/ModalComponent";

const SampleCustomHooks = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold">基礎応用</h1>
      <p>カスタムフック例：カウンター</p>
      <Link to='/' className="underline">トップページへ</Link>
      <CounterComponent />
      <div className="max-w-md mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Modal</h1>
        <div className="space-x-4">
          <button onClick={() => openModal()} className="px-4 py-2 bg-green-700 text-white rounded-lg">OPEN</button>
        </div>
      </div>
      <ModalComponent isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default SampleCustomHooks;