import { useState } from "react";

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
            <svg
              className="status-selection__svg_checked"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12.1923L6.4 10.8462L10 14.3077L17.6 7L19 8.34615L10 17Z"
                fill="#4AA416"
              />
            </svg>
            <svg
              className="status-selection__svg_unchecked"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.54"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                fill="black"
              />
            </svg>
          </span>
          {props.content}
        </label>
      )}
    </>
  );
};

export default StatusInput;
