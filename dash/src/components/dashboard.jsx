import testData from "@/assets/data.js";

const Dashboard = () => {
  return (
    <div className="absolute h-full overflow-y-scroll">
      <table className="w-full text-left">
        <thead className="border-b">
          <tr>
            <th className="w-[30%] py-2">Podroom</th>
            <th className="py-2">Users</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((entry) => {
            return (
              <tr className="border-b">
                <td className="py-2">{entry.pod}</td>
                <td className="py-2">
                  {entry.users.map((entry) => `${entry}, `)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
