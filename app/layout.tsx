import type { Metadata } from "next";
import "@fontsource-variable/vazirmatn/wght.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { company } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${company.nameFa} | ${company.nameEn} | تابلو برق صنعتی، اتوماسیون و ابزار دقیق`,
    template: `%s | ${company.nameFa}`,
  },
  description: `${company.nameFa} (${company.nameEn}) | طراحی و ساخت تابلو برق صنعتی، اتوماسیون، ابزار دقیق و برنامه‌نویسی فرآیندهای صنعتی`,
  icons: {
    icon: "/favicon.svg",
  },
};

const criticalCss = `
  html,body{background:#070d18;color:#eef3ff;margin:0;min-height:100%}
  *,*::before,*::after{box-sizing:border-box}
  img{max-width:100%;height:auto;vertical-align:middle}
  [data-cover-frame]{position:relative;overflow:hidden;display:block}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      style={{ backgroundColor: "#070d18", color: "#eef3ff" }}
    >
      <body
        className="antialiased"
        style={{ backgroundColor: "#070d18", color: "#eef3ff", margin: 0 }}
      >
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
        <div className="site-shell min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
