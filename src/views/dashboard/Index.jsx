import ReactApexChart from "react-apexcharts";

const Index = () => {
  const reportsCountChart = {
    series: [44, 55, 13, 43],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: [
        "Obszar zaśmiecony",
        "Podtopienie",
        "Brzydki zapach",
        "Kopciuch",
      ],
      title: {
        text: "Rodzaje zgłoszeń",
        align: "left",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  const reportsChart = {
    series: [
      {
        name: "Ilość zgłoszeń",
        data: [
          { x: "21/11/2021", y: 11 },
          { x: "22/11/2021", y: 14 },
          { x: "23/11/2021", y: 11 },
          { x: "24/11/2021", y: 8 },
          { x: "25/11/2021", y: 15 },
          { x: "26/11/2021", y: 13 },
          { x: "27/11/2021", y: 10 },
          { x: "28/11/2021", y: 15 },
          { x: "29/11/2021", y: 13 },
          { x: "27/11/2021", y: 10 },
          { x: "28/11/2021", y: 15 },
          { x: "29/11/2021", y: 13 },
          { x: "30/11/2021", y: 8 },
          { x: "01/12/2021", y: 2 },
          { x: "02/12/2021", y: 10 },
          { x: "03/12/2021", y: 1 },
          { x: "03/12/2021", y: 5 },
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 300,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Ilość zgłoszeń na dzień",
        align: "left",
      },
      fill: {
        colors: ["#FBBF24"],
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
      },
    },
  };

  return (
    <div className="p-4 w-full flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="shadow-lg px-4 py-6 flex-grow bg-white dark:bg-gray-800 relative rounded-xl">
          <h1 className="text-4xl mt-5">
            Twoje miasto: <strong>Rzeszów</strong>
          </h1>
        </div>
        <div className="shadow-lg px-4 py-6 bg-white dark:bg-gray-800 relative rounded-xl">
          <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
            Ilość zgłoszeń
          </p>
          <div className="flex items-end space-x-2 my-6">
            <p className="text-5xl text-black dark:text-white font-bold">114</p>
          </div>
          <div className="dark:text-white">
            <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
              <p>Ilość zgłoszeń dzisiaj</p>
              <div className="flex items-end text-xs">
                3
                <span className="flex items-center">
                  <svg
                    width="20"
                    fill="currentColor"
                    height="20"
                    className="h-3 text-green-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  50%
                </span>
              </div>
            </div>
            <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
              <p>Ilość zgłoszeń w tym tygodniu</p>
              <div className="flex items-end text-xs">
                20
                <span className="flex items-center">
                  <svg
                    width="20"
                    fill="currentColor"
                    height="20"
                    className="h-3 text-green-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  8%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 w-full">
        <div className="shadow-lg px-4 py-6 bg-white dark:bg-gray-800 relative rounded-xl w-1/2">
          <ReactApexChart
            options={reportsChart.options}
            series={reportsChart.series}
          />
        </div>
        <div className="shadow-lg px-4 py-6 bg-white dark:bg-gray-800 relative rounded-xl w-1/2">
          <ReactApexChart
            options={reportsCountChart.options}
            series={reportsCountChart.series}
            type="pie"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
