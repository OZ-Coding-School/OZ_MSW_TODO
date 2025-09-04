import CustomButton from "../_common/CustomButton";

const CancelBtn = ({
  className = "modal-cancel-btn",
  children,
  ...cancelBtnAttributes
}) => {
  return (
    <CustomButton className={className} {...cancelBtnAttributes}>
      {children}
    </CustomButton>
  );
};

export default CancelBtn;
