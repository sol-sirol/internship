const MyImage = ({ imageSrc, imageStyle, checkBoxClass }) => {
  const style = {
    ...imageStyle,
    backgroundImage: "url(" + imageSrc + ")",
  };

  return <div className={"bg-svg" + " " + checkBoxClass} style={style}></div>;
};

export default MyImage;
