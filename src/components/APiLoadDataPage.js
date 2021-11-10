import React from "react";
// import "../App.css";
import { MdModeEdit, MdDelete } from "react-icons/md";
// MdModeEdit
// MdDelete

export default function APiLoadDataPage() {
  const [data, setData] = React.useState([]);

  const getApi = async () => {
    try {
      const resp = await fetch("http://localhost:5000");
      setData(await resp.json());
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <div className="mx-5">
        <table className="table table-striped">
          <thead className="bg-danger">
            <tr>
              <th className="text-light">Departmentd</th>
              <th className="text-light">DepartmentName</th>
              <th className="text-light">Option</th>
            </tr>
          </thead>
          <tbody className="bg-success">
            {data.map((de) => (
              <tr key={de._id}>
                <td className="text-light">{de.name}</td>
                <td className="text-light">{de.department}</td>
                <td>
                  <button
                    type="button"
                    onClick={getApi}
                    className="btn btn-light mx-2 mt-2"
                  >
                    <MdModeEdit />
                  </button>
                  <button type="button" className="btn btn-light mx-2 mt-2">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
