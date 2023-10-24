import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Flow } from "../utils/types";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
type PieProps = {
  queue: Flow[];
  element: string;
  title: string;
};

const PieChart = ({ queue, element, title }: PieProps) => {
  if (queue.length == 0) {
    return <p>Loading ...</p>;
  } else {
    const uniqueValues = new Set(queue.map((elem: Flow) => elem[element]));
    const unfilterdData: number[] = [];
    uniqueValues.forEach((value) => {
      let count = 0;
      queue.forEach((elem) => {
        if (elem[element] === value) count++;
      });
      unfilterdData.push(count);
    });
    return (
      <div className=" p-5 flex items-center justify-center flex-col rounded-2xl shadow bg-base-100">
        <Pie
          options={{}}
          data={{
            labels: Array.from(uniqueValues),
            datasets: [
              {
                data: unfilterdData,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
        <p>{title}</p>
      </div>
    );
  }
};

export default PieChart;
