import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import TurnService from "~/services/turnServices";
import TurnList from "./turnList";

const Turn = (props: any) => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialTurnState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentTurn, setCurrentTurn] = useState(initialTurnState);
  const [message, setMessage] = useState("");

  const getAllTurn = () => {
    TurnService.getAll()
      .then((response: { data: React.SetStateAction<{ id: null; title: string; description: string; published: boolean; }>; }) => {
        console.log(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const getTurn = (id: string) => {
    TurnService.get(id)
      .then((response: { data: React.SetStateAction<{ id: null; title: string; description: string; published: boolean; }>; }) => {
        setCurrentTurn(response.data);
        console.log(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getTurn(id);
  }, [id]);

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setCurrentTurn({ ...currentTurn, [name]: value });
  };

  const updatePublished = (status: any) => {
    var data = {
      id: currentTurn.id,
      title: currentTurn.title,
      description: currentTurn.description,
      published: status
    };

    TurnService.update(currentTurn.id, data)
      .then((response: { data: any; }) => {
        setCurrentTurn({ ...currentTurn, published: status });
        console.log(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const updateTurn = () => {
    TurnService.update(currentTurn.id, currentTurn)
      .then((response: { data: any; }) => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const deleteTurn = () => {
    TurnService.remove(currentTurn.id)
      .then((response: { data: any; }) => {
        console.log(response.data);
        navigate("/tutorials");
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <>
       <TurnList/>
      <Outlet/>
    </>
  );
};

export default Turn;