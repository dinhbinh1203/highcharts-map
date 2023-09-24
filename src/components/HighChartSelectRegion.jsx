import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";

import { Select } from "antd";
import {
  BAC_TRUNG_BO_MAP,
  DONG_BAC_BO_MAP,
  DONG_BANG_SONG_CUU_LONG_MAP,
  DONG_BANG_SONG_HONG_MAP,
  DONG_NAM_BO_MAP,
  NAM_TRUNG_BO_MAP,
  TAY_BAC_BO_MAP,
  TAY_NGUYEN_MAP,
  VIET_NAM_MAP,
} from "../data";

highchartsMap(Highcharts);

const initOptions = {
  chart: {
    width: 500,
    height: 700,
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, "#FFC4AA"],
      [0.4, "#FF8A66"],
      [0.6, "#FF392B"],
      [0.8, "#B71525"],
      [1, "	#7A0826"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      name: "Số liệu tăng trưởng",
      joinBy: ["hc-key", "key"],
    },
  ],
};

const OPTIONS = [
  {
    label: "Bắc Trung Bộ",
    value: "bac_trung_bo",
    provinceList: BAC_TRUNG_BO_MAP,
  },
  {
    label: "Đông Bắc bộ",
    value: "dong_bac_bo",
    provinceList: DONG_BAC_BO_MAP,
  },
  {
    label: "Đồng Bằng Sông Cửu Long",
    value: "dong_bang_song_cuu_long",
    provinceList: DONG_BANG_SONG_CUU_LONG_MAP,
  },
  {
    label: "Đồng Bằng Sông Hồng",
    value: "dong_bang_song_hong",
    provinceList: DONG_BANG_SONG_HONG_MAP,
  },
  {
    label: "Đông Nam Bộ",
    value: "dong_nam_bo",
    provinceList: DONG_NAM_BO_MAP,
  },
  {
    label: "Nam Nam Bộ",
    value: "nam_trung_bo",
    provinceList: NAM_TRUNG_BO_MAP,
  },
  {
    label: "Tây Nam Bộ",
    value: "tay_nam_bo",
    provinceList: TAY_BAC_BO_MAP,
  },
  {
    label: "Tây Nguyên",
    value: "tay_nguyen",
    provinceList: TAY_NGUYEN_MAP,
  },
];

function HighChartSelectRegion() {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions(handleFormatData(VIET_NAM_MAP));
  }, []);

  const onChange = (value, option) => {
    if (!value) {
      setOptions(handleFormatData(VIET_NAM_MAP, value));
    } else {
      const provinceList = option.provinceList;
      setOptions(handleFormatData(provinceList, value));
    }
  };

  return (
    <div>
      <div className="mt-5 mb-5">
        <p> Chọn vùng:</p>
        <Select
          className="w-[300px]"
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          options={OPTIONS}
          allowClear
        />
      </div>

      <HighchartsReact
        highcharts={Highcharts}
        options={cloneDeep(options)}
        constructorType={"mapChart"}
      />
    </div>
  );
}

export default HighChartSelectRegion;

const handleFormatData = (provinceList, value) => {
  if (provinceList) {
    const fakeData = provinceList?.features?.map((feature, index) => ({
      key: feature.properties["hc-key"],
      value: index,
    }));

    const result = {
      ...initOptions,
      title: {
        text: provinceList.title,
      },
      series: [
        {
          ...initOptions.series[0],
          mapData: provinceList,
          data: fakeData,
          mapNavigation: {
            enabled: false,
          },
          dataLabels: {
            enabled: value ? true : false,
            format: "{point.name}",
          },
          states: {
            hover: {
              color: "#BADA55",
            },
          },
        },
      ],

      accessibility: {
        point: {
          valueDescriptionFormat: "{point.name}.",
        },
      },

      legend: {
        enabled: true,
      },
    };

    return result;
  }
};
