import SvgSelector from "../assets/images";

const SheetSection = (props) => {
  return (
    <div className="sheet__section">
      <div className="sheet__section-top">
        {props.iconTo}
        {props.top}
      </div>
      <div className="sheet__section-bottom">
        {props.iconBottom}
        {props.bottom}
      </div>
    </div>
  );
};

export default SheetSection;
