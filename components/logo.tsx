import Image from "next/image";

const Logo = (): React.ReactNode => (
  <div className="w-full flex gap-2 justify-center">
    <div className="relative h-12 w-40 flex items-center justify-center">
      <Image
        src="/logo.svg"
        alt="shield logo"
        fill
        className="hidden dark:block"
      />
      <Image
        src="/logo-light.svg"
        alt="shield logo"
        fill
        className="block dark:hidden"
      />
    </div>
    <pre className="pt-2">Docs</pre>
  </div>
);

export default Logo;
