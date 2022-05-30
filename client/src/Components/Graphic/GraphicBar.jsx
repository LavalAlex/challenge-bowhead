import React from "react";
import {Bar} from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

export default function GraphicBar({data:{perfect, meh, bad}}){

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: 'Poll',
          },
        },
      };

    const setup ={
        labels: ["Perfect", "Meh", "Bad"],
        datasets:[{
            label: "Votes", 
            backgroundColor:"rgba(0,255,0.1)",
            borderColor:"black",
            borderWidth:1,
            hoverBackgroundColor:"rgba(0,255,0,0.2)",
            hoverBorderColor:"#FF000",
            data:[perfect?perfect:"",meh?meh:"",bad?bad:""]
        }]
    }

    // const options={
    //     maintainAspectRatio: false,
    //     responsive: true
    // }

    return(
        <div style={{width:"50rem", height:"20rem"}}>
            <h2>Poll</h2>
            <Bar data={setup} options={options}/>
        </div>
    )
}