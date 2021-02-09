import React from "react";
import ItemTable from "./ItemTable";
import { createContext, useState, useEffect, useReducer } from "react";
import { initialState, reducer } from "./component/PeopleReducer";

export const PeopleContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [peopleEle, setPeopleEle] = useState([]);
  const [inputdata, setInputdata] = useState({ name: "", gender: "", age: "" });
  //load locationStorage

  function fetchCourses() {
    const localPeople = localStorage.getItem("peopleEle");
    if (localPeople) {
      dispatch({
        type: "SET_PEOPLE",
        payload: JSON.parse(localPeople)
      });
    }
  }
  useEffect(fetchCourses, []);

  function addPeople(e) {
    e.preventDefault();
    console.log("i am in addPeople ");
    const people = [...peopleEle, inputdata];
    setPeopleEle(people);
  }

  return (
    <form onSubmit={addPeople}>
      <div className="card" style={{ width: 400 }}>
        <div className="card-content">
          <p className="is-4 title has-text-centered">Add Person</p>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              placeholder="e.q John Smith"
              onChange={(e) =>
                setInputdata({ ...inputdata, name: e.currentTarget.value })
              }
            ></input>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <select
              className="input"
              type="text"
              placeholder="Please select .."
              onChange={(e) =>
                setInputdata({ ...inputdata, gender: e.currentTarget.value })
              }
            >
              <option value="" disabled selected hidden>
                -- Select Gender --
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="field">
            <label className="label">Age</label>
            <input
              className="input"
              type="number"
              placeholder="e.q 30"
              onChange={(e) =>
                setInputdata({ ...inputdata, age: e.currentTarget.value })
              }
            ></input>
          </div>

          <button type="sumbit" className="button is-primary is-fullwidth">
            Submit
          </button>

          <div className="mb-4"></div>

          {/* display tables for all persons */}
          <p className="is-4 title has-text-centered">Person List</p>
          {/* sample table */}
          <ItemTable name={"Bob"} gender={"Male"} age={"50"} />
          <p>Your name and code here</p>
        </div>
      </div>
    </form>
  );
}

export default App;
