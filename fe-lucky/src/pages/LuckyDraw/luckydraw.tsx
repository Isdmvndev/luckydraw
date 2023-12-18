import React, { useState, useEffect, useReducer, useContext } from "react";
import { Button, Layout, Space } from "antd";
import { Col, Row } from "antd";
import { toast } from "react-toastify";
import { Modal } from "antd";
import "./style.css";
import "~/components/Confetti";
import Confetti from "~/components/Confetti";
import TurnService from "~/services/turnServices";
import SlotCounter from "react-slot-counter";
import form from "antd/es/form";
import PrizeService from "~/services/prizeServices";
import CategoryService from "~/services/categoryService";
import { useCounter } from "~/context/ConfettiContext";
import AnimHeader from "~/components/animHeader/animHeader";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: "15vh",
  paddingInline: 50,
  lineHeight: "64px",
  background: "none",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  background: "none",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  background: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  background: "none",
};

export const LuckyDraw = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [employee, setEmployee] = useState<any>({});
  const [isSpinning, setIsSpinning] = useState(false);
  const [isAcceptData, setIsAcceptData] = useState(false);
  const [dataApi, setData] = useState<any[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [prize, setPrize] = useState<any>({});
  const { count, dispatch } = useCounter();
  useEffect(() => {
    const getAllTurn = (() => {
      TurnService.getAll()
        .then((response: { data: any }) => {
          setData(response.data);
        })
        .catch((e: any) => {
          console.log(e);
        });
    })();
  }, [isAcceptData]);
  let data = dataApi.map((items: any, index = 0) => {
    return {
      key: items._id,
      prizes: items.prizes,
    };
  });

  //open popup
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setNumber(null);
    setEmployee({});
    setIsAcceptData(false);
    setIsSpinning(false);
    setIsVisible(false);
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setNumber(null);
    setEmployee({});
    setIsAcceptData(false);
    setIsSpinning(false);
    setIsVisible(false);
    setIsModalOpen(false);
  };
  const getEmployeeRandom = async (employee: any) => {
    try {
      const record = await CategoryService.findByPrize(prize._id);
      if (record.data.result === "OK") {
        setNumber(record.data.data.code);
        const newEmployee = record.data.data;
        if (employee && employee.type === "update") {
          newEmployee.type = employee.type;
          newEmployee.oldId = employee._id;
        }
        setEmployee(newEmployee);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const setEmployeeToPrize = async () => {
    try {
      var object = {
        oldEmployeeId: employee.oldId,
        employeeId: employee._id,
        prizeId: prize._id,
      };
      var record = await PrizeService.setEmployeeToPrize(object);
      if (record) {
        if (record.data.result == "OK") {
          setPrize(record.data.data);
        } else {
        }
      }
    } catch (error) {}
  };

  const acceptPrize = () => {
    setEmployeeToPrize();

    setIsAcceptData(true);
    setEmployee({});
    setNumber(null);
    setIsSpinning(false);
    setIsVisible(false);
  };

  const rejectPrize = () => {
    setNumber(null);
    setEmployee({});
    setIsAcceptData(false);
    setIsSpinning(false);
    setIsVisible(false);
  };
  const spin = () => {
    if (prize.numberOfPrize == prize.employees.length) {
      if (employee && employee.type) {
        SpinAction();
      } else {
        toast.error("Giải đã quay đủ");
      }
    } else {
      SpinAction(); // Dừng quay sau 3 giây
    }

    function SpinAction() {
      setIsAcceptData(false);
      setIsSpinning(true);
      setIsVisible(false);
      let currentNumber = 0;

      const spinningInterval = setInterval(() => {
        currentNumber = Math.floor(Math.random() * 100001); // Số ngẫu nhiên từ 0 đến 99
        setNumber(currentNumber);
      }, 100); // Thay đổi số mỗi 100ms

      setTimeout(() => {
        clearInterval(spinningInterval);
        // setIsSpinning(false);
        getEmployeeRandom(employee);
        setIsVisible(true);
        dispatch({ type: "INCREMENT" });
      }, 1000);
    }
  };

  return (
    <>
      <header className="section-header">
        <h2>
          <a title="Kết quả Xổ số DENSO (KQXS DENSO)">
            Kết quả Xổ số DENSO (KQXS DENSO)
          </a>
        </h2>
        <div id="kqLiveTitle"></div>
        <div className="site-link" id="kqLiveLink">
          <a title="XSMB">XSMB</a> <a title="XSMB Thứ 5">XSMB Thứ 5</a>{" "}
          <a title="XSMB 07/12/2023">XSMB 07/12/2023</a> (Hà Nội)
        </div>
      </header>
      <div className="grid grid-cols-2 gap-2">
        <table className="table-result table-xsmb">
          <tbody>
            <tr>
              <th className="name-prize"></th>
              <td className="number-prize" id="mb_prizeCode">
                <span className="code-DB8" id="mb_prizeCode_item0">
                  {" "}
                  1BN{" "}
                </span>{" "}
                <span className="code-DB8" id="mb_prizeCode_item1">
                  {" "}
                  2BN{" "}
                </span>{" "}
                <span className="code-DB8" id="mb_prizeCode_item2">
                  {" "}
                  6BN{" "}
                </span>{" "}
                <span className="code-DB8" id="mb_prizeCode_item3">
                  {" "}
                  8BN
                </span>{" "}
                <span className="code-DB8" id="mb_prizeCode_item4">
                  15BN{" "}
                </span>{" "}
                <span className="code-DB8" id="mb_prizeCode_item5">
                  {" "}
                  17BN{" "}
                </span>{" "}
                <span className="code-DB8" id="mb_prizeCode_item6">
                  {" "}
                  18BN{" "}
                </span>{" "}
                <span className="code-DB8" id="mb_prizeCode_item7">
                  {" "}
                  20BN{" "}
                </span>
              </td>
            </tr>
            {data.length > 0
              ? data[0].prizes.map((item: any, indexRoot: any) => {
                  let className = indexRoot != 0 ? "prize" : "special-prize";
                  return (
                    <tr key={item._id}>
                      <th
                        onClick={() => {
                          setPrize(item);
                          showModal();
                        }}
                      >
                        {item.name}
                      </th>
                      <td>
                        {[...Array(item.numberOfPrize)].map((x, index) => {
                          let width = 100 / item.numberOfPrize;
                          width = width > 25 ? width : 25;
                          return (
                            <span
                              key={item._id + index}
                              className={className}
                              id="mb_prizeDB_item0"
                              style={{ width: width + "%" }}
                            >
                              {item.employees
                                ? item.employees[index]
                                  ? item.employees[index].code
                                  : "-----"
                                : "-----"}
                            </span>
                          );
                        })}
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
      >
        <Layout className="wrapper-layout">
          <Header style={headerStyle}>
            <h1>
              <span>{prize.name}</span>
              <span> !!!</span>
            </h1>
          </Header>
          <Content style={contentStyle}>
            {" "}
            <h1>{count}</h1>
            <h1
              style={{
                fontFamily: "cursive",
                fontStyle: "italic",
              }}
            >
              {isVisible && "CONGRATULATION"}
            </h1>
            <h1 className="rainbow">{number}</h1>
            <h1>
              {Object.keys(employee).length != 0
                ? `${employee.name} - ${employee.group}`
                : ""}
            </h1>
            {isVisible && <Confetti />}
            {[...Array(prize.numberOfPrize)].map((x, index) => {
              let width = 100 / prize.numberOfPrize;
              width = width > 25 ? width : 25;
              return (
                <span
                  key={prize._id + index}
                  onClick={() => {
                    if (prize.employees[index]) {
                      setNumber(prize.employees[index].code);
                      setEmployee({
                        ...prize.employees[index],
                        type: "update",
                      });
                    } else {
                      setNumber(null);
                      setEmployee({});
                    }
                  }}
                  className="prize"
                  id="mb_prizeDB_item0"
                  style={{ width: width + "%" }}
                >
                  {prize.employees
                    ? prize.employees[index]
                      ? prize.employees[index].code
                      : "-----"
                    : "-----"}
                </span>
              );
            })}
          </Content>
          <Footer style={footerStyle}>
            <Row>
              <Col span={24}>
                {" "}
                <Button
                  onClick={spin}
                  disabled={isSpinning}
                  className="btn-class-name"
                >
                  <span className="back"></span>
                  <span
                    className={isSpinning ? "front activeButton" : "front"}
                  ></span>
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col span={8}></Col>
              <Col span={8}>
                {" "}
                <Button
                  onClick={acceptPrize}
                  disabled={!isVisible}
                  type="primary"
                  style={!isVisible ? { display: "none" } : { display: "" }}
                >
                  Accept
                </Button>{" "}
                &nbsp;
                <Button
                  onClick={rejectPrize}
                  disabled={!isVisible}
                  type="primary"
                  danger
                  style={
                    !isVisible
                      ? { display: "none" }
                      : { display: "inline-block" }
                  }
                >
                  Reject
                </Button>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Modal>
    </>
  );
};
