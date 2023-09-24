import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { VIET_NAM_MAP } from "../data/vietNamMap";

highchartsMap(Highcharts);

function HighChartHoverRegion() {
  const options = {
    chart: {
      map: VIET_NAM_MAP,
      width: 500,
      height: 700,
    },

    title: {
      text: VIET_NAM_MAP.title,
    },

    plotOptions: {
      map: {
        allAreas: false,
        joinBy: ["hc-key", "code"],
        tooltip: {
          pointFormat: "{point.name}",
        },
      },
    },

    series: [
      {
        name: "Tây Bắc Bộ ",
        data: ["18", "15", "11", "17", "12", "14"].map((code) => ({ code })),
      },
      {
        name: "Đông Bắc Bộ",
        data: ["2", "4", "vn-307", "20", "8", "19", "25", "24", "22"].map(
          (code) => ({ code })
        ),
      },
      {
        name: "Đồng bằng sông Hồng",
        data: ["27", "35", "1", "30", "31", "33", "36", "37", "34", "26"].map(
          (code) => ({ code })
        ),
      },
      {
        name: "Bắc Trung Bộ",
        data: ["38", "40", "42", "44", "45", "46"].map((code) => ({ code })),
      },
      {
        name: "Nam Trung Bộ",
        data: [
          "48",
          "49",
          "51",
          "52",
          "54",
          "56",
          "58",
          "60",
          "hs01",
          "truongsa",
        ].map((code) => ({
          code,
        })),
      },
      {
        name: "Tây Nguyên",
        data: ["62", "64", "66", "67", "68"].map((code) => ({
          code,
        })),
      },
      {
        name: "Đông Nam Bộ",
        data: ["70", "74", "vn-331", "72", "77", "79"].map((code) => ({
          code,
        })),
      },
      {
        name: "Đồng bằng sông Cửu Long",
        data: [
          "80",
          "87",
          "82",
          "89",
          "83",
          "86",
          "84",
          "93",
          "91",
          "94",
          "95",
          "96",
          "92",
        ].map((code) => ({
          code,
        })),
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"mapChart"}
    />
  );
}

export default HighChartHoverRegion;
