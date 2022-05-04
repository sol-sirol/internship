const MyImage = ({ imageSrc, imageStyle, addedClass }) => {
  const style = {
    ...imageStyle,
    backgroundImage: "url(" + imageSrc + ")",
  };

  return <div className={"bg-svg" + " " + addedClass} style={style}></div>;
};

export default MyImage;
