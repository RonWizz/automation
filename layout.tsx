import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DevLinkProvider>
          {children}
        </DevLinkProvider>
      </body>
    </html>
  );
}
