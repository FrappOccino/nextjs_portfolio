import Header from "@/shared/components/Header";
import Sidebar from  "@/shared/components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (    
    <div className="w-full">
      <Sidebar>
        <main>{children}</main>
      </Sidebar>
  
    </div>
  );
}