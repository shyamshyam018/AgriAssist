const Dashboard = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
    <p className="text-gray-600">
      Monitor trends, get crop insights, and explore recommendations.
    </p>
    <div className="bg-white p-4 mt-4 shadow rounded">
      <h3 className="text-lg font-semibold">Highlights</h3>
      <ul className="list-disc pl-5 mt-2">
        <li>Top crops for the current season.</li>
        <li>Weather-based crop recommendations.</li>
        <li>Dynamic analytics on fertilizer usage.</li>
      </ul>
    </div>
  </div>
);

export default Dashboard;