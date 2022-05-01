import { useState } from "react";
import SvgSelector from "../../assets/images";

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
            <SvgSelector
              name="checked"
              className="status-selection__svg_checked"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            />
            <></>
            <SvgSelector
              name="unchecked"
              className="status-selection__svg_unchecked"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            />
          </span>
          {props.content}
        </label>
      )}
    </>
  );
};

export default StatusInput;
