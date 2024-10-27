const ImageSwitcher = ({
  lightSrc,
  darkSrc,
  alt,
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
}) => {
  return (
    <div className="relative flex flex-1 h-full w-full aspect-auto">
      <img src={darkSrc} alt={alt} className="hidden dark:block" />
      <img src={lightSrc} alt={alt} className="block dark:hidden" />
    </div>
  );
};

export default ImageSwitcher;
