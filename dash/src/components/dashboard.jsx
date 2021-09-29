const Dashboard = () => {
  return (
    <div>
      <table className="w-full text-left">
        <thead className="border-b">
          <tr>
            <th className="w-[30%] py-2">Podroom</th>
            <th className="py-2">Users</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Pod A</td>
            <td className="py-2">John, Ama</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
