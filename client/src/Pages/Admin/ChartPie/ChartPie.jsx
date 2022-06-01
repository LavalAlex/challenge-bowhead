import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GraphicPie from "../../../Components/Graphic/GraphicPie";
import { allPoll } from "../../../Redux/Actions/Poll";

import styles from "./ChartPie.module.css";

export default function ChartPie() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth);
  const data = useSelector((state) => state.poll.poll);

  useEffect(() => {
    dispatch(allPoll(admin.token));
  }, []);

  return (
    <div className={styles.container}>
      <h1>CHALLENGE</h1>
      <div className={styles.chartpie}>
        {data.sleep ? <GraphicPie data={data.sleep} /> : <h3>Must load data!</h3>}
      </div>
    </div>
  );
}
