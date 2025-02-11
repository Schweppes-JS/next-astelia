import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/components/pages/setting/language-swircher";
import { ModeToggle } from "@/components/pages/setting/mode-toggler";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const SettingsPage = () => {
  const t = useTranslations("SETTINGS.WRAPPER");

  return (
    <div className="flex min-h-screen flex-col p-6">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">{t("TITLE")}</h2>
        </CardHeader>
        <CardContent>
          <LanguageSwitcher />
        </CardContent>
        <CardFooter>
          <ModeToggle />
        </CardFooter>
      </Card>
    </div>
  );
};
export default SettingsPage;
