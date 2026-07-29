// shared/layouts/FrontLayout.tsx

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto h-dvh">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}