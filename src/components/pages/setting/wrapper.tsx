import { useTranslations } from "next-intl";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { LanguageSwitcher } from "./language-swircher";

export const SettingWrapper = () => {
  const t = useTranslations("SETTINGS.WRAPPER");

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">{t("TITLE")}</h2>
      </CardHeader>
      <CardContent>
        <LanguageSwitcher />
      </CardContent>
    </Card>
  );
};
