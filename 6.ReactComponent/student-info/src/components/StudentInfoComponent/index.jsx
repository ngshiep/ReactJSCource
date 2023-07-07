import "./index.css";

export default function StudentInfoComponent() {
  const initStudents = [
    {
      ID: 1,
      Name: "Nguyen Van A1",
      Age: 25,
      Address: "HN",
    },
    {
      ID: 2,
      Name: "Nguyen Van A3",
      Age: 25,
      Address: "HN",
    },
    {
      ID: 3,
      Name: "Nguyen Van A2",
      Age: 25,
      Address: "HN",
    },
    {
      ID: 4,
      Name: "Nguyen Van A5",
      Age: 25,
      Address: "HN",
    },
    {
      ID: 5,
      Name: "Nguyen Van A6",
      Age: 25,
      Address: "HN",
    },
  ];
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        {initStudents.map((student) => (
          <tr key={student.ID}>
            <td>{student.ID}</td>
            <td>{student.Name}</td>
            <td>{student.Age}</td>
            <td>{student.Address}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
