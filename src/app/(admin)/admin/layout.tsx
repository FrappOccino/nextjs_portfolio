import AdminLayout from "@/shared/layouts/Admin";

export default function Layout({
        children,
    }: {
        children: React.ReactNode;
    }) {
    
        return (
                <AdminLayout>
                    
                    
                    {children}
                </AdminLayout>
            );
}