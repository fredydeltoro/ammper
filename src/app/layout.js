import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>
            <img
              src="https://ammper.com/wp-content/uploads/2020/07/logo-ammper-energia-mexico.png"
              alt=""
            />
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
