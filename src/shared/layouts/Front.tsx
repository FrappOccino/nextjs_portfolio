// shared/layouts/FrontLayout.tsx

import Header from "@/shared/components/Header";
import Footer from  "@/shared/components/Footer";

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}