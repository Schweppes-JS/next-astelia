import { LogOut, User } from "lucide-react";
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

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          {navigationConfig.header.map(({ title, url, src, Icon }) => (
            <SidebarMenuItem key={title}>
              <SidebarLink size="lg" href={url} isActive={false}>
                <Avatar>
                  <AvatarImage src={src} />
                  <AvatarFallback>
                    <Icon />
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-1xl md:text-3xl font-light">{title}</h1>
              </SidebarLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationConfig.content.map(({ title, url, Icon }) => (
            <SidebarMenuItem key={title}>
              <SidebarLink asChild href={url}>
                <Icon />
                {title}
              </SidebarLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {navigationConfig.footer.map(({ title, url, Icon, src }) => (
            <Fragment key={title}>
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
                        <span className="text-xs">IE</span>
                      </div>
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                        <LogOut size={20} style={{ color: "hsl(var(--foreground))" }} />
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Icon />
                      {title}
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
