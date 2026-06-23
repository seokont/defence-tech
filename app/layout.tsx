import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ui/scroll-reveal";
import ScrollToTop from "@/components/ui/scroll-to-top";

export const metadata: Metadata = {
  title: "Інвестиції та гранти для defence-tech компаній | UKRLAW / УКРГОСКАПІТАЛ",
  description:
    "Допомагаємо українським defence-tech та dual-use компаніям отримати доступ до грантів, інвестицій та міжнародного фінансування. Brave1, EDIP USI, EDF, NATO DIANA, DFC URIF, UK IFU — персональна карта фінансування для вашого бізнесу.",
  keywords: [
    "defence tech фінансування Україна",
    "гранти для оборонних компаній",
    "Brave1 грант",
    "EDIP USI Україна",
    "NATO DIANA фінансування",
    "dual-use інвестиції",
    "БПЛА стартап інвестиції",
    "defence-tech investment Ukraine",
    "Ukraine defence grants",
    "EDF Horizon Europe Ukraine",
    "UK IFU Ukraine defence",
    "DFC URIF Ukraine",
    "УКРГОСКАПІТАЛ",
    "UKRLAW консалтинг",
    "інвестиційна карта фінансування",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Інвестиції та гранти для defence-tech | UKRLAW",
    description:
      "Персональна карта фінансування для українських технологічних та оборонних компаній. Brave1, EDIP, EDF, NATO DIANA та приватний капітал.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body suppressHydrationWarning>
        {children}
        <ScrollReveal />
        <ScrollToTop />
      </body>
    </html>
  );
}
