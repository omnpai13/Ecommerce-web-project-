import AdminSidebar from "../components/AdminSidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-12">
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <p className="mt-2 text-gray-500">
          Welcome to the admin panel
        </p>
      </main>
    </div>
  );
}
