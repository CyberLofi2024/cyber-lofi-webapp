
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

console.log(1)
  return (
    <html lang="en">
      <body>
        <header>Header</header>
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
