import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

export const metadata = {
  title: "Nkundimana Augustin",
  description: "AI Researcher | Agricultural Engineer | Founder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}