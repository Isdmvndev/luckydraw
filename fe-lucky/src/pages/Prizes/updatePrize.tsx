import React, { useState } from "react";
import PrizeService from "~/services/prizeServices";
import { Button, Form, Input, InputNumber } from 'antd';
import { useSearchParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
const UpdatePrize = ({isDataUpdate} : any) => {
  const [formUpdate] = Form.useForm();

  const [searchParams, setSearchParams] = useSearchParams();
  const idTurn = searchParams.get("idTurn");

  
  // const initialPrizeState = {
  //   name: "",
  //   numberOfPrize:0
  // };
  // const [prize, setPrize] = useState(initialPrizeState);
  // const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
  //   const { name, value } = event.target;
  //   setPrize({ ...prize, [name]: value });
    
  // };

  const savePrize = (values:any) => {
  
    PrizeService.create(values,idTurn)
      .then(response => {
        if(response.data.result=="OK"){
          formUpdate.resetFields();
          isDataUpdate(true);
        }
        else{
          isDataUpdate(false);
        }
      })
      .catch(e => {
        console.log(e);
        isDataUpdate(false);
      });
  };

 
const onFinish = (values: any) => {
  savePrize(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  name?: string;
  numberOfPrize?: number;
};
  return(
  <></>
  );
};
export default UpdatePrize;