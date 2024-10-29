import { ImageZoom } from "fumadocs-ui/components/image-zoom";

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
      <img
        src={darkSrc}
        alt={alt}
        className="hidden dark:block object-contain"
      />
      <img
        src={lightSrc}
        alt={alt}
        className="block dark:hidden object-contain"
      />
    </div>
  );
};

export const DarkImage = ({ src, alt }: { src: string; alt: string }) => (
  <ImageZoom
    src={src}
    alt={alt}
    width={1200}
    height={630}
    className="hidden dark:block object-contain"
  />
);

export const LightImage = ({ src, alt }: { src: string; alt: string }) => (
  <ImageZoom
    src={src}
    alt={alt}
    width={1200}
    height={630}
    className="block dark:hidden object-contain"
  />
);

export default ImageSwitcher;
