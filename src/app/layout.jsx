import "./globals.css";

export const metadata = {
  title: "App Next.js Primas CRUD",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}