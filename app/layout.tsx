import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} ${montserrat.className} antialiased bg-white text-[#002e42] font-montserrat`}
      >
        <nav className="w-full flex justify-center items-center py-4 bg-[#002e42] text-white shadow-md font-oswald">
          <div className="flex gap-8 text-lg font-semibold">
            <Link href="/" className="hover:text-[#5aceff] transition-colors">
              Home
            </Link>
            <Link
              href="/members"
              className="hover:text-[#5aceff] transition-colors"
            >
              Zavetoria Boys
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
