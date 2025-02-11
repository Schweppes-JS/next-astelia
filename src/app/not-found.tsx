import { GeistSans } from "geist/font/sans";

const NotFound = () => (
  <html lang="en" className={`${GeistSans.variable}`}>
    <body>
      <main className="min-h-svh flex items-center justify-center">
        <h1>Not Found</h1>
      </main>
    </body>
  </html>
);
export default NotFound;
