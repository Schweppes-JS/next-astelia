import { type LocalePrefixMode } from "node_modules/next-intl/dist/types/src/routing/types";

export const localePrefix: LocalePrefixMode = "always";

export const locales = ["en", "he"] as const;

export const defaultLocale = "en";
