const MyImage = ({ imageSrc, imageStyle, addedClass, width, height }) => {
  const style = {
    width,
    height,
    backgroundImage: "url(" + imageSrc + ")",
    ...imageStyle,
  };

  return <div className={"bg-image" + " " + addedClass} style={style}></div>;
};

export default MyImage;
