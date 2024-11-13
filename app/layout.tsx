import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { baseOptions } from "./layout.config";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import Image from "next/image";
// import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            // sidebar={{
            //   banner: (
            //     <RootToggle
            //       options={[
            //         {
            //           title: "Shield",
            //           description: "Documentation for Shield",
            //           url: "",
            //           icon: (
            //             <Image
            //               height={20}
            //               width={20}
            //               src="https://www.shield.rs/icon.png"
            //               alt="Shield"
            //             />
            //           ),
            //         },
            //       ]}
            //     />
            //   ),
            // }}
            {...baseOptions}
          >
            <div className="relative w-full">
              <div className="sticky top-0 -z-10 w-full">
                <div className="absolute w-full h-64 max-h-screen">
                  <div className="flex flex-1 justify-center">
                    <div className="absolute blur-xl opacity-75 bg-gradient-to-b from-orange-700 w-full -top-40 h-96 to-transparent" />
                  </div>
                  <div className="flex flex-1 h-full mt-10 justify-end lg:mx-auto max-w-3xl">
                    <Image
                      src="/shield.svg"
                      alt="Shield"
                      width={220}
                      height={240}
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-0 w-full flex">{children}</div>
            </div>
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
