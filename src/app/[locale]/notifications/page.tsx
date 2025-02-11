import { useTranslations } from "next-intl";
import { Card, CardHeader } from "@/components/ui/card";

const NotificationsPage = () => {
  const t = useTranslations("LAYOUT.NAVIGATION");

  return (
    <div className="flex min-h-screen flex-col p-6">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">{t("NOTIFICATIONS")}</h2>
        </CardHeader>
      </Card>
    </div>
  );
};

export default NotificationsPage;
