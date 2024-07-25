import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import AppHeader from "@/components/header/app-header";
import { getSession } from "@/actions/sessions";

import { SessionPayload } from "@/types/session.type";
import AuthProvider from "@/context/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping",
  description:
    "Shopping has lots of hight quality affordable products from all the world",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <header>
            <AppHeader />
          </header>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
