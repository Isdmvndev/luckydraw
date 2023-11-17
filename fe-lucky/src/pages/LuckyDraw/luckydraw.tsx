import React, { useState,useEffect } from "react";
import { loop } from "~/utils/utils";
import "./style.css";

export const LuckyDraw = () => {
  const [number, setNumber] = useState<number|null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lstNumber, setLstNumber] = useState<number[]>([]);

  // useEffect(() => {
  //   console.log(lstNumber);
  // }, lstNumber);

  const spin = () => {
    setIsSpinning(true);
    let currentNumber = 0;
   
    const spinningInterval = setInterval(() => {
      currentNumber = Math.floor(Math.random() * 100); // Số ngẫu nhiên từ 0 đến 99
      setNumber(currentNumber);
    }, 100); // Thay đổi số mỗi 100ms
 
    setTimeout(() => {
      console.log(lstNumber);
      setLstNumber(prev=>[...lstNumber,currentNumber]);
      clearInterval(spinningInterval);
      setIsSpinning(false);
    }, 3000); // Dừng quay sau 3 giây
  };
  return (
    <>
   <div>
      <h1 style={{ fontSize: '4em' }}>{number}</h1>
      <button onClick={spin} disabled={isSpinning}>
        Spin
      </button>
    </div>
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
          <tr>
            <th>ĐB</th>
            <td>
              <span id="mb_prizeDB_item0" className="special-prize">
                98375
              </span>
            </td>
          </tr>
          <tr>
            <th>1</th>
            <td>
              <span id="mb_prize1_item0" className="prize1">
                76516
              </span>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>
              <span id="mb_prize2_item0" className="prize2">
                96169{" "}
              </span>{" "}
              <span id="mb_prize2_item1" className="prize2">
                {" "}
                75327
              </span>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>
              <span id="mb_prize3_item0" className="prize3">
                43330{" "}
              </span>{" "}
              <span id="mb_prize3_item1" className="prize3">
                {" "}
                15764{" "}
              </span>{" "}
              <span id="mb_prize3_item2" className="prize3">
                {" "}
                27087{" "}
              </span>{" "}
              <span id="mb_prize3_item3" className="prize3">
                {" "}
                13704{" "}
              </span>{" "}
              <span id="mb_prize3_item4" className="prize3">
                {" "}
                97836{" "}
              </span>{" "}
              <span id="mb_prize3_item5" className="prize3">
                {" "}
                25835
              </span>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>
              <span id="mb_prize4_item0" className="prize4">
                9431{" "}
              </span>{" "}
              <span id="mb_prize4_item1" className="prize4">
                {" "}
                1962{" "}
              </span>{" "}
              <span id="mb_prize4_item2" className="prize4">
                {" "}
                5810{" "}
              </span>{" "}
              <span id="mb_prize4_item3" className="prize4">
                {" "}
                4897
              </span>
            </td>
          </tr>
          <tr>
            <th>5</th>
            <td>
              <span id="mb_prize5_item0" className="prize5">
                9119{" "}
              </span>{" "}
              <span id="mb_prize5_item1" className="prize5">
                {" "}
                0490{" "}
              </span>{" "}
              <span id="mb_prize5_item2" className="prize5">
                {" "}
                7211{" "}
              </span>{" "}
              <span id="mb_prize5_item3" className="prize5">
                {" "}
                2058{" "}
              </span>{" "}
              <span id="mb_prize5_item4" className="prize5">
                {" "}
                3074{" "}
              </span>{" "}
              <span id="mb_prize5_item5" className="prize5">
                {" "}
                0453
              </span>
            </td>
          </tr>
          <tr>
            <th>6</th>
            <td>
              <span id="mb_prize6_item0" className="prize6">
                290{" "}
              </span>{" "}
              <span id="mb_prize6_item1" className="prize6">
                {" "}
                942{" "}
              </span>{" "}
              <span id="mb_prize6_item2" className="prize6">
                {" "}
                079
              </span>
            </td>
          </tr>
          <tr>
            <th>7</th>
            <td>
              <span id="mb_prize7_item0" className="prize7">
                29{" "}
              </span>{" "}
              <span id="mb_prize7_item1" className="prize7">
                {" "}
                03{" "}
              </span>{" "}
              <span id="mb_prize7_item2" className="prize7">
                {" "}
                05{" "}
              </span>{" "}
              <span id="mb_prize7_item3" className="prize7">
                {" "}
                28
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};
