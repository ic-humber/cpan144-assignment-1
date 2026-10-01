import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "CPAN 144 Assignment 1",
  description: "Foundations of Advanced Front-End Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
