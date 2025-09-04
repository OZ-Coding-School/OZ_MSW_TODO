import { createContext, useContext, useMemo, useState } from "react";
import ModalContents from "../components/modal/ModalContents";

const MODAL_CONTEXT = createContext({
  modals: [],
  openModal: () => {},
  closeModal: () => {},
});

export const MODAL_TEMPLATE = {
  modalId: 0,
  title: "",
  contents: "",
  isfinish: false,
  mode: "alert",
  cancelText: "취소",
  confirmText: "확인",
};

const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const openModal = (modalData = MODAL_TEMPLATE) => {
    if (modals.some((modal) => modal.modalId === modalData.modalId)) {
      throw new Error("Modal Id Error: same Error added.");
    }
    setModals((prev) => [...prev, modalData]);
  };

  const closeModal = (closeModalId) => {
    setModals((prev) => prev.filter(({ modalId }) => modalId !== closeModalId));
  };

  const modalHandlers = useMemo(() => ({ openModal, closeModal }), []);

  return (
    <MODAL_CONTEXT.Provider value={{ modals, ...modalHandlers }}>
      {children}
      {modals.map(({ modalId, ...modalValues }) => {
        return <ModalContents key={modalId} {...modalValues} />;
      })}
    </MODAL_CONTEXT.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(MODAL_CONTEXT);
  if (!ctx) throw new Error("Modal Context Error: context not found.");
  return ctx;
};

export default ModalProvider;
