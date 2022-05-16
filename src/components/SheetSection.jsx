import { Space } from "antd";

const SheetSection = (props) => {
  return (
    <div className="sheet__section">
      <div className="sheet__section-top">
        <Space size="small">
          {props.iconTo}
          {props.top}
        </Space>
      </div>
      <div className="sheet__section-bottom">
        <Space size="small">
          {props.iconBottom}
          {props.bottom}
        </Space>
      </div>
    </div>
  );
};

export default SheetSection;
