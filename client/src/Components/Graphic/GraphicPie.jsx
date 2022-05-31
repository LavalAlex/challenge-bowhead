import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function GraphicPie({data:{yes, no}}) {

  const setup = {
    labels: ["YES", "NO"],
    datasets: [
      {
        label: "Votes",
        title: {
          display: true,
          text: 'CHALLENGE',
        },
        data: [yes,no],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
         
        ],
        cursor: "pointer",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "30rem", height: "20rem" }}>
     
      <Pie data={setup} />
    </div>
  );
}
