import { useCallback, useState } from "react";

// const useModal = (initialStatus: boolean = false) => {
const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, openModal, closeModal };
};

export default useModal;