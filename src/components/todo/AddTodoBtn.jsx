import { memo } from "react";
import CustomButton from "../_common/CustomButton";

const AddTodoBtn = memo(({ onClick }) => {
  return <CustomButton onClick={onClick}>추가하기</CustomButton>;
});

export default AddTodoBtn;
