import React, { useState } from "react";
import TurnService from "~/services/turnServices";

const CreateTurn = () => {
  const initialTurnState = {
    id: null,
    name: "",
  };
  const [turn, setTurn] = useState(initialTurnState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setTurn({ ...turn, [name]: value });
  };

  const saveTurn = () => {
    var data = {
      name: turn.name,
    }

    TurnService.create(data)
      .then(response => {
        setTurn({
          id: response.data.id,
          name: response.data.name,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTurn = () => {
    setTurn(initialTurnState);
    setSubmitted(false);
  };
  return(
    <div className="submit-form">
    {submitted ? (
      <div>
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newTurn}>
          Add
        </button>
      </div>
    ) : (
      <div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={turn.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>
        <button onClick={saveTurn} className="btn btn-success">
          Submit
        </button>
      </div>
    )}
  </div>
  );
};
export default CreateTurn;