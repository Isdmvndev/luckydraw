import React, { useEffect, useState } from "react";
import PrizeService from "~/services/prizeServices";
import { Button, Form, Input, InputNumber } from "antd";
import { useSearchParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const CreatePrize = ({ isDataUpdate, record }: any) => {
  const [form] = Form.useForm();
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
  form.resetFields();

  if (record.key) {
    form.setFieldValue("name", record.name);
    form.setFieldValue("numberOfPrize", record.numberOfPrize);
    form.setFieldValue("_id", record.key);
  }
  const savePrize = (values: any) => {
    if (record.key) {
      PrizeService.update(record.key, values,idTurn)
      .then((response) => {
        if (response.data.result == "OK") {
          form.resetFields();
          isDataUpdate(true);
        } else {
          isDataUpdate(false);
        }
      })
      .catch((e) => {
        console.log(e);
        isDataUpdate(false);
      });
    } else {
      PrizeService.create(values, idTurn)
        .then((response) => {
          if (response.data.result == "OK") {
            form.resetFields();
            isDataUpdate(true);
          } else {
            isDataUpdate(false);
          }
        })
        .catch((e) => {
          console.log(e);
          isDataUpdate(false);
        });
    }
  };

  const onFinish = (values: any) => {
    savePrize(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    _id?: string;
    name?: string;
    numberOfPrize?: number;
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType> label="Id" name="_id" hidden={true}>
        <Input />
        {/* <input value={prize.name} name ="name" onChange={handleInputChange}></input> */}
      </Form.Item>
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your prize!" }]}
      >
        <Input />
        {/* <input value={prize.name} name ="name" onChange={handleInputChange}></input> */}
      </Form.Item>

      <Form.Item<FieldType>
        label="NumberOfPrize"
        name="numberOfPrize"
        rules={[
          { required: true, message: "Please input your number of prize!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CreatePrize;
