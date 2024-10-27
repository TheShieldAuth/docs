import Image from "next/image";

const Logo = (): React.ReactNode => (
  <div className="w-full flex gap-4">
    <div className="relative h-16 w-40 flex items-center justify-center">
      <Image src="/logo.svg" alt="shield logo" fill />
    </div>
    <pre>Docs</pre>
  </div>
);

export default Logo;
