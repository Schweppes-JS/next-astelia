"use client";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/routing";
import { type AppLocaleType } from "@/types/app-types";
import { Label } from "@/components/ui/label";

export const LanguageSwitcher = () => {
  const t = useTranslations("SETTINGS.LANGUAGE_SWITCHER");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const changeLanguage = (lang: AppLocaleType) => {
    router.replace({ pathname, query: Object.fromEntries(searchParams.entries()) }, { locale: lang });
  };

  return (
    <section className="flex flex-col gap-1">
      <Label className="mb-1">{t("PLACEHOLDER")}</Label>
      <Select onValueChange={changeLanguage} defaultValue={locale}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("PLACEHOLDER")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("LANGUAGE")}</SelectLabel>
            <SelectItem value="en">{t("ENGLISH")}</SelectItem>
            <SelectItem value="he">{t("HEBREW")}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
};
