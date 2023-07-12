import { useState } from "react";
import "./index.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function StudentManagerComponent() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [isValid, setIsValid] = useState(false);
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    checkValidForm();
  };

  const handleSelect = (studentSelected, index) => {
    setForm(JSON.parse(JSON.stringify(studentSelected)));
    setIndexSelected(index);
  };
  const checkValidForm = () => {
    const { name, phone, email } = form;
    const value = name && phone && email;
    if (value) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const handleSubmit = () => {
    console.log(1212);
    checkValidForm();
    if (isValid) {
      const newList = [...students];
      if (indexSelected > -1) {
        newList[indexSelected] = form;
        setStudents(newList);
      } else {
        newList.push(form);
        setStudents(newList);
      }
    }
  };
  const handleDelete = (index) => {
    const newList = [...students];
    newList.splice(index , 1);
    setStudents(newList);
  };
  return (
    <div>
      <div>
        <h1>Student List</h1>
        <div>
          <label>Name: </label>
          <input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div>
          <label>Phone: </label>
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" value={form.email} onChange={handleChange} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <table>
          <thead>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.phone}>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                  <button onClick={() => handleSelect(student, index)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
