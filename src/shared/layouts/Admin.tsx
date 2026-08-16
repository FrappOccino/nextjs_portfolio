import Header from "@/shared/components/Header";
import Sidebar from  "@/shared/components/Sidebar";
import AppToaster from "@/shared/components/AppToaster";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (    
    <div className="w-full">
      <Sidebar>
        <main className="p-5">{children}</main>
      </Sidebar>
      <AppToaster />
    </div>
  );
}