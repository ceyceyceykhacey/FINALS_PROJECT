export default function Dashboard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded">Customers: 1</div>
        <div className="p-4 bg-green-100 rounded">Addresses: 1</div>
        <div className="p-4 bg-yellow-100 rounded">Contacts: 1</div>
      </div>
    </div>
  );
}