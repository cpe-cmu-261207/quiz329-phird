import { useContext } from "react";
import { PeopleContext } from "../App";

const PeopleCard = (props) => {
  const { dispatch } = useContext(PeopleContext);
  const { name, gender, age } = props;

  return (
    <div>
      <h3 className="title is-3">Person List</h3>
      <table className="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PeopleCard;
