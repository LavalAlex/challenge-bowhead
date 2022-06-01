import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

//Import Graphic
import GraphicBar from "../../../Components/Graphic/GraphicBar";
import GraphicPie from "../../../Components/Graphic/GraphicPie";

import { allPoll } from "../../../Redux/Actions/Poll";

import styles from "./HomeAdmin.module.css";

export default function HomeAdmin() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth);
  const data = useSelector((state) => state.poll.poll);

  useEffect(() => {
    dispatch(allPoll(admin.token));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerNewUser}>
        {data.mood ? <GraphicBar data={data.mood} /> : ""}
        {data.sleep ? <GraphicPie data={data.sleep} /> : ""}
      </div>
    </div>
  );
}
