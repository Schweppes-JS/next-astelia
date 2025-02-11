import { getRequestConfig } from "next-intl/server";

import { type AppLocaleType } from "@/types/app-types";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as AppLocaleType)) locale = routing.defaultLocale;
  const messages = await import(`../../messages/${locale}.json`).then((url: { default: LangMessage }) => url.default);
  return { locale, messages };
});
