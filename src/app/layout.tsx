import "./globals.css";
import "./output.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipedia",
  description: "Your recipe discovery platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="w-full min-h-screen overflow-x-hidden">
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
