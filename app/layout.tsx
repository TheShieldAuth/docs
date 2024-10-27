import { HomeLayout } from "fumadocs-ui/layouts/home";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { baseOptions } from "./layout.config";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
// import { RootToggle } from "fumadocs-ui/layouts/docs.client";
// import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ enabled: false }}>
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
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
