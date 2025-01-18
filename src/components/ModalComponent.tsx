// 自分の書いたコード 開く・閉じるボタンも全てセットにしてコンポーネント化
// import useModal from "@/hooks/useModal";

// const ModalComponent = () => {
//   // const { isShow, open, close } = useModal(false);
//   const { isOpen, openModal, closeModal } = useModal();
//   return (
//     <div className="max-w-md mx-auto mt-10 text-center">
//       <h1 className="text-3xl font-bold mb-4">Modal</h1>
//       <div className="space-x-4">
//         <button onClick={() => openModal()} className="px-4 py-2 bg-green-700 text-white rounded-lg">OPEN</button>
//       </div>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => closeModal()}>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <p>Modal Open!</p>
//             <button onClick={() => closeModal()} className="px-4 py-2 bg-blue-700 text-white rounded-lg">CLOSE</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// 解答例：モーダル部分のみコンポーネント化
type Props = {
  isOpen: boolean;
  closeModal: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void;
}

const ModalComponent = ({ isOpen, closeModal }: Props) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={closeModal}>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>Modal Open!</p>
        <button onClick={closeModal} className="px-4 py-2 bg-blue-700 text-white rounded-lg">CLOSE</button>
      </div>
    </div>
  );
};

export default ModalComponent;