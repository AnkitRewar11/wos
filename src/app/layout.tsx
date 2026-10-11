import type { Metadata } from "next";
import "@carbon/styles/css/styles.css";
import "./globals.css";
import { ThemeController } from "@/components/theme-controller";

export const metadata: Metadata = {
  title: "Whiteout Survival · State 2566",
  description: "The community information portal for Whiteout Survival State 2566.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="black"><body><ThemeController />{children}</body></html>;
}
