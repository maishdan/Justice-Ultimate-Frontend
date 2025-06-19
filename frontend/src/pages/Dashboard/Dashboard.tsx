export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-green-600 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Dashboard Overview</h2>
        <p className="text-lg mb-6">
          Welcome to your dashboard! This area gives you access to tools and insights based on your role.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-900/70 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">🚘 Your Cars</h3>
            <p>View and manage your uploaded cars, edit listings, or update availability.</p>
          </div>
          <div className="bg-green-900/70 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">📅 Appointments</h3>
            <p>Track service appointments or schedule new bookings with our agents.</p>
          </div>
          <div className="bg-green-900/70 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">📈 Analytics</h3>
            <p>Monitor car views, bookings, and sales performance in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
