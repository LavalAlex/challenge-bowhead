import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPoll } from "../../../Redux/Actions/Poll";

import GraphicBar from "../../../Components/Graphic/GraphicBar";

import styles from './ChartBar.module.css'

export default function ChartBar(){
    const dispatch = useDispatch();
    const admin = useSelector((state) => state.auth);
    const data = useSelector((state) => state.poll.poll)
  
    useEffect(() => {
      dispatch(allPoll(admin.token));
    },[]);
  
    return(
        <div className={styles.container}>
        <h1>CHALLENGE</h1>
      <div className={styles.chartbar}>
     {data.mood?
        <GraphicBar data={data.mood}/>:"LOADING"}
      </div>
      </div>
    )
}