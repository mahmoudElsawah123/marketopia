import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { Fahkwang, Manrope } from "next/font/google";
import Header from "../components/Header";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../components/Footer"));

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

export const metadata = {
  title: "Marketopia",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt qui itaque quaerat possimus voluptas, illum ipsa, earum recusandae nobis dolore,",
    openGraph: {
    images:  ``,
    title: "Marketopia",
    url : '',
    site_name : 'IMDb',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt qui itaque quaerat possimus voluptas, illum ipsa, earum recusandae nobis dolore,",
    email : '',
    phone_number : '201067439828',
    latitude : '30.9763086',
    longitude : '31.1595836',
    locality : '',
    countryName : 'Egypt',
    streetAddress : ''
  },
};


export default async function LocaleLayout({ children, params }) {
  
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <header>
            <Header />
          </header>
          <div className={fahkwang.className}>{children}</div>
          <footer className={manrope.className}>
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
