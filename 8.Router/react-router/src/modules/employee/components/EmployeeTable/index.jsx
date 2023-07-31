import React from "react";

const employees = [
  {
    id: 1,
    name: "Hoa",
    age: 20,
  },
  {
    id: 2,
    name: "Khánh",
    age: 25,
  },
  {
    id: 3,
    name: "Tú",
    age: 22,
  },
];
export default function EmployeeTable() {
  const handleEdit = () => {
    const array = undefined;
    array.map((a) => console.log(a));
    // try {
    //   // const a = undefined;
    //   // console.log(a.b);
    //   const array = undefined;
    //   array.map((a) => console.log(a));
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <div className="form_button_container">
                  <button
                    onClick={(e) => handleEdit(employee)}
                    className="form_button_action"
                  >
                    Detail
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
