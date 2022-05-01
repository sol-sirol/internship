import SvgSelector from "../assets/images";

const SheetSection = (props) => {
  return (
    <div className="sheet__section">
      <div className="sheet__section-top">
        {props.iconTopName && <SvgSelector name={props.iconTopName} />}
        {props.top}
      </div>
      <div className="sheet__section-bottom">
        {props.iconBottomName && <SvgSelector name={props.iconBottomName} />}
        {props.bottom}
      </div>
    </div>
  );
};

export default SheetSection;
