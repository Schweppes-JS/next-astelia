import { LogOut, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { Fragment } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarSeparator,
  SidebarMenuItem,
  SidebarContent,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarLink,
  Sidebar,
} from "@/components/ui/sidebar";

import { navigationConfig } from "./navigation-config";

export const AppSidebar = (props: Omit<Parameters<typeof Sidebar>[0], "ref">) => {
  const t = useTranslations();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          {navigationConfig.header.map(({ titleKey, url, src, Icon }) => (
            <SidebarMenuItem key={titleKey}>
              <SidebarLink size="lg" href={url} isActive={false}>
                <Avatar>
                  <AvatarImage src={src} />
                  <AvatarFallback>
                    <Icon />
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-1xl md:text-3xl font-light">{t(titleKey)}</h1>
              </SidebarLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationConfig.content.map(({ titleKey, url, Icon }) => (
            <SidebarMenuItem key={titleKey}>
              <SidebarLink asChild href={url}>
                <Icon />
                {t(titleKey)}
              </SidebarLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {navigationConfig.footer.map(({ titleKey, url, Icon, src }) => (
            <Fragment key={titleKey}>
              {url === "/login" && <SidebarSeparator />}
              <SidebarMenuItem>
                <SidebarLink asChild size={url === "/login" ? "lg" : "default"} href={url}>
                  {url === "/login" ? (
                    <Fragment>
                      <Avatar>
                        <AvatarImage src={src} />
                        <AvatarFallback>
                          <User />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold text-xs">Dmytro Shvets</span>
                        <span className="text-xs">Web Developer</span>
                      </div>
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                        <LogOut size={20} style={{ color: "hsl(var(--foreground))" }} />
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Icon />
                      {t(titleKey)}
                    </Fragment>
                  )}
                </SidebarLink>
              </SidebarMenuItem>
            </Fragment>
          ))}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarTrigger />
    </Sidebar>
  );
};
