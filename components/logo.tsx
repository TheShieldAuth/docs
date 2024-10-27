import Image from "next/image";

const Logo = (): React.ReactNode => (
  <div className="w-full py-1 flex gap-4 justify-center">
    <div className="relative h-16 w-40 flex items-center justify-center">
      <Image src="/logo.svg" alt="shield logo" fill />
    </div>
    <pre className="pt-2">Docs</pre>
  </div>
);

export default Logo;
