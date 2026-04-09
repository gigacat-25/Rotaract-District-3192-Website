import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface flex text-on-surface">
      <AdminSidebar />
      <main className="flex-1 ml-64 p-8 md:p-12 min-h-screen">
        {children}
      </main>
    </div>
  );
}
