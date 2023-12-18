import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import EmployeeService from "~/services/employeeService";
import { Link, useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [dataApi, setData] = useState<any[]>([]);
  const navigate = useNavigate()
  interface DataType {
    key: React.Key;
    name: string;
  }
  const columns: ColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Code",
      dataIndex: "code",
    },
    {
        title: "Tên",
        dataIndex: "name",
      },
      {
        title: "Phòng",
        dataIndex: "group",
      },
      {
        title: "Nhóm",
        dataIndex: "category",
      },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => {
        return (
          <>
            <Button onClick={()=> navigate(`/Prizes?idTurn=${record.key}`)} type="link"> Prize</Button>
            <Button href="/Categories" type="link"> Cấu hình tỉ lệ</Button>
            <Button href="/Categories" type="link"> Cấu hình tỉ lệ</Button>
            <Button href="/Categories" type="link"> Cấu hình tỉ lệ</Button>
      
          </>
        );
      },
    },
  ];

  let data = dataApi.map((items: any, index = 0) => {
    return {
      no: index + 1,
      key: items._id,
      name: items.name,
      code: items.code,
      group: items.group,
      category:items.category
    };
  });
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  useEffect(() => {
    const getAllTurn = (() => {
      EmployeeService.getAll()
        .then((response: { data: any }) => {
          setData(response.data);
        })
        .catch((e: any) => {
          console.log(e);
        });
    })();
  }, []);

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default EmployeeList;
