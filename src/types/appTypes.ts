import { type Metadata } from "next";

import { type locales } from "@/constants/appConfig";

export type AppLocaleType = (typeof locales)[number];

export type ParamsPropsType = { params: Promise<{ locale: AppLocaleType }> };

export type GenerateMetadataType = (props: ParamsPropsType) => Promise<Metadata>;

export type LayoutPropsType = Readonly<{ children: React.ReactNode; params: Promise<{ locale: AppLocaleType }> }>;

export type LocalePropsType = { params: { locale: AppLocaleType }; searchParams: Record<string, string> };
