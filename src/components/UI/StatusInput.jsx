import { useState } from "react";
import MyImage from "./MyImage";

import Checked from "../../assets/images/checkbox/checked.svg";
import UnChecked from "../../assets/images/checkbox/unchecked.svg";

const StatusInput = (props) => {
  const [checked, setChecked] = useState(props.checked);

  function controlChecked() {
    setChecked(!checked);
  }

  return (
    <>
      <input {...props} checked={checked} />
      {props.type === "checkbox" && (
        <label
          onClick={() => controlChecked()}
          className="status-selection__label"
          for={props.id}
        >
          <span>
            <MyImage
              addedClass="status-selection__svg_checked"
              height="24px"
              imageSrc={Checked}
            />
            <></>
            <MyImage
              height="24px"
              addedClass="status-selection__svg_unchecked"
              imageSrc={UnChecked}
            />
          </span>
          {props.content}
        </label>
      )}
    </>
  );
};

export default StatusInput;
