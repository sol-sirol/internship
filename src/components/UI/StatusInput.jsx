import { useState } from "react";
import SvgSelector from "../../assets/images";
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
              checkBoxClass="status-selection__svg_checked"
              imageSrc={Checked}
              imageStyle={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "24px",
              }}
            />
            <></>
            <MyImage
              checkBoxClass="status-selection__svg_unchecked"
              imageSrc={UnChecked}
              imageStyle={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "24px",
              }}
            />
          </span>
          {props.content}
        </label>
      )}
    </>
  );
};

export default StatusInput;
