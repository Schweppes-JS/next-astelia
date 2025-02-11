"use client";

import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const ModeToggle = () => {
  const t = useTranslations("SETTINGS.MODE_TOGGLER");
  const { setTheme } = useTheme();

  return (
    <section className="flex flex-col gap-1">
      <Label className="mb-1">{t("PLACEHOLDER")}</Label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{t("PLACEHOLDER")}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>{t("LIGHT")}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>{t("DARK")}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>{t("SYSTEM")}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};
