import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Moliyaviy tahlil",
  description: "Moliyaviy tahlil rasmiy sayti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen overflow-x-hidden`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
