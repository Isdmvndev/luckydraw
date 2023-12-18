import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Table, Drawer, Select, Space } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { toast } from "react-toastify";
import PrizeService from "~/services/prizeServices";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import CreatePrize from "./createPrize";

const PrizeList = () => {

  const initialState = {
    open: false,
    record:{},
  };
 
  const [open, setOpen] = useState(initialState);
  const showDrawer = (record: any) => {
    setOpen({ open: true, record: record });
  };

  const onClose = () => {
    setOpen({ open: false, record:{} });
  };

  const [dataUpdate, setDataUpDate] = useState(false);
  const isDataUpdate = (check: any) => {
    setDataUpDate(check);
    if (check) {
      toast.success("Thao tác thành công");
      onClose();
    } else {
      toast.error("Có lỗi trong khi thao tác");
    }
  };

  //process table
  const [dataApi, setData] = useState<any[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  interface DataType {
    key: React.Key;
    name: string;
    numberOfPrize: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Number",
      dataIndex: "numberOfPrize",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_: any, record: any) => {
        return (
          <>
            <Button
              onClick={() => showDrawer(record)}
              type="link"
            >
              Sửa
            </Button>

            <Button onClick={() => navigate("/Delete")} type="link">
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  let data = dataApi
    ? dataApi.map((item: any, index = 0) => {
        return {
          no: index + 1,
          key: item._id,
          name: item.name,
          numberOfPrize: item.numberOfPrize,
        };
      })
    : "";
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const idTurn = searchParams.get("idTurn");

  useEffect(() => {
    const getAllPrize = () => {
      PrizeService.getAll(idTurn)
        .then((response: { data: any }) => {
          setData(response.data);
        })
        .catch((e: any) => {
          console.log(e);
        });
    };
    getAllPrize();
    if (dataUpdate) {
      setDataUpDate(false);
    }
  }, [dataUpdate]);

  return (
    <>
      {/* <Button
        onClick={() =>
          navigate({  
            pathname: "create",
            search: createSearchParams({
              idTurn: idTurn as string,
            }).toString(),
          })
        }
        type="link"
      >
        Thêm mới{" "}
      </Button> */}
      <Button
        type="primary"
        onClick={() => showDrawer("Create")}
        icon={<PlusOutlined />}
      >
        Thêm mới<i></i>
      </Button>
      <Drawer
        title="Create&Update"
        width={720}
        onClose={() => onClose()}
        open={open.open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={() => onClose()}>Cancel</Button>
          </Space>
        }
      >
        <CreatePrize  isDataUpdate={isDataUpdate}  record={open.record}></CreatePrize>
      </Drawer>
      {/* <Drawer title="Update"
        width={720}
        onClose={()=>onClose("Update")}
        open={open.Update}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={()=>onClose("Update")}>Cancel</Button>
          </Space>
        }><UpdatePrize isDataUpdate={isDataUpdate}></UpdatePrize></Drawer> */}
      <Table columns={columns} dataSource={data} onChange={onChange} />
      <Outlet />
    </>
  );
};

export default PrizeList;
