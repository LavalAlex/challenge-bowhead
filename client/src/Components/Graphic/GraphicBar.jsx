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

  console.log({perfect, meh, bad})

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
            text: 'CHALLENGE',
          },
        },
      };

    const setup ={
        labels: ["Perfect", "Meh", "Bad"],
        datasets:[{
            label: "Votes", 
            backgroundColor: "rgba(54, 162, 235, 1)",
            borderColor:"black",
            borderWidth:1,
            hoverBackgroundColor:"rgba(54, 162, 235, 0.2)",
            hoverBorderColor:"#FF000",
            cursor:"pointer",
            data:[perfect?perfect:"",meh?meh:"",bad?bad:""]
        }]
    }

    // const options={
    //     maintainAspectRatio: false,
    //     responsive: true
    // }

    return(
        <div style={{width:"50rem", height:"20rem"}}>
            <Bar data={setup} options={options}/>
        </div>
    )
}