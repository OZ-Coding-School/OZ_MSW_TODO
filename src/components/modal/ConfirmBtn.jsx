import CustomButton from "../_common/CustomButton";

const ConfirmBtn = ({
  className = "modal-confirm-btn",
  children,
  ...confirmBtnAttributes
}) => {
  return (
    <CustomButton className={className} {...confirmBtnAttributes}>
      {children}
    </CustomButton>
  );
};

export default ConfirmBtn;
