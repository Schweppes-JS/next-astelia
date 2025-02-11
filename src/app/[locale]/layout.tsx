import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { GeistSans } from "geist/font/sans";
import { notFound } from "next/navigation";

import { type GenerateMetadataType, type LayoutPropsType } from "@/types/app-types";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/providers/theme-provider";
import { AppSidebar } from "@/components/app-layout";
import { Toaster } from "@/components/ui/toaster";
import { routing } from "@/i18n/routing";

export const generateMetadata: GenerateMetadataType = async ({ params }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LAYOUT.META" });
  return { title: t("TITLE"), description: t("DESCRIPTION"), keywords: t("KEYWORDS") };
};

export default async function LocaleLayout({ children, params }: LayoutPropsType) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();
  const messages = await getMessages();
  const isRTL = locale === "he";

  return (
    <html lang={locale} className={`${GeistSans.variable}`} dir={isRTL ? "rtl" : "ltr"}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <SidebarProvider>
              <AppSidebar side={isRTL ? "right" : "left"} />
              <SidebarInset>{children}</SidebarInset>
            </SidebarProvider>
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
