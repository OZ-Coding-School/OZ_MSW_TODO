import CancelBtn from "./CancelBtn";
import ConfirmBtn from "./ConfirmBtn";
import styles from "./ModalContents.module.css";

const ModalContents = ({
  mode,
  cancelText = "취소",
  confirmText = "확인",
  title,
  contents,
  confirmAction = () => {},
  cancelAction = () => {},
}) => {
  switch (mode) {
    case "Confirmation":
      return (
        <div className={styles.background}>
          <div className={styles.modalSection}>
            <h1 className="modal-title_confirmation">{title}</h1>
            <p className="modal-content_confirmation">{contents}</p>
            <div className="modal-area-btn__confirmation">
              <ConfirmBtn
                className="modal-btn__confirmation"
                onClick={confirmAction}
              >
                {confirmText}
              </ConfirmBtn>
              <CancelBtn
                className="modal-btn_cancel__confirmation"
                onClick={cancelAction}
              >
                {cancelText}
              </CancelBtn>
            </div>
          </div>
        </div>
      );
    case "alert":
      return (
        <div className={styles.background}>
          <div className={styles.modalSection}>
            <h1 className="modal-title_alert">{title}</h1>
            <p className="modal-content_alert">{contents}</p>
            <div className="modal-area-btn_alert">
              <ConfirmBtn className="modal-btn_alert" onClick={confirmAction}>
                {confirmText}
              </ConfirmBtn>
            </div>
          </div>
        </div>
      );
    default:
      throw new Error("Modal Mode Error: set modal mode necessarily.");
  }
};

export default ModalContents;
