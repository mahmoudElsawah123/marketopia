import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { Fahkwang, Manrope } from "next/font/google";
import Navbar from "../components/Navbar";
import CoverHeader from "../components/CoverHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";

const fahkwang = Fahkwang({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <header>
            <Header/>
          </header>
          <main className={fahkwang.className}>{children}</main>
          <footer className={manrope.className}>
            <Footer/>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
