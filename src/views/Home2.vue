<template>
  <div class="bl-container-fluid">
    <div class="bl-row">
      <div class="bl-col-8">
        <div class="bl-panel">
          <div class="bl-panel-head">基础条形图</div>
          <div class="bl-panel-body">
            <div id="c1"></div>
          </div>
        </div>
      </div>
      <div class="bl-col-12">
        <div class="bl-panel">
          <div class="bl-panel-head">柱状图</div>
          <div class="bl-panel-body">
            <div id="c2"></div>
          </div>
        </div>
      </div>
      <div class="bl-col-4">
        <div class="bl-panel">
          <div class="bl-panel-head">水波图</div>
          <div class="bl-panel-body">
            <div id="c3"></div>
          </div>
        </div>
      </div>
      <div class="bl-col-24">
        <div class="bl-panel">
          <div class="bl-panel-head">地图</div>
          <div class="bl-panel-body">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar, Liquid } from "@antv/g2plot";
import { Chart } from "@antv/g2";
export default {
  name: "home",
  data() {
    return {
      data1: [
        { 地区: "华东", 销售额: 4684506.442 },
        { 地区: "中南", 销售额: 4137415.0929999948 },
        { 地区: "东北", 销售额: 2681567.469000001 },
        { 地区: "华北", 销售额: 2447301.017000004 },
        { 地区: "西南", 销售额: 1303124.508000002 },
        { 地区: "西北", 销售额: 815039.5959999998 },
      ],
      data2: 1320,
      data3: [
        { country: "乌拉圭", type: "2016 年转基因种植面积", value: 1.3 },
        { country: "乌拉圭", type: "2016 年耕地总面积", value: 1.8 },
        { country: "巴拉圭", type: "2016 年转基因种植面积", value: 3.6 },
        { country: "巴拉圭", type: "2016 年耕地总面积", value: 5.5 },
        { country: "南非", type: "2016 年转基因种植面积", value: 3.7 },
        { country: "南非", type: "2016 年耕地总面积", value: 12.1 },
        { country: "巴基斯坦", type: "2016 年转基因种植面积", value: 2.9 },
        { country: "巴基斯坦", type: "2016 年耕地总面积", value: 22.0 },
        { country: "阿根廷", type: "2016 年转基因种植面积", value: 23.8 },
        { country: "阿根廷", type: "2016 年耕地总面积", value: 38.6 },
        { country: "加拿大", type: "2016 年转基因种植面积", value: 11.6 },
        { country: "加拿大", type: "2016 年耕地总面积", value: 46.9 },
        { country: "巴西", type: "2016 年转基因种植面积", value: 49.1 },
        { country: "巴西", type: "2016 年耕地总面积", value: 73.2 },
        { country: "中国", type: "2016 年转基因种植面积", value: 2.8 },
        { country: "中国", type: "2016 年耕地总面积", value: 108.4 },
        { country: "美国", type: "2016 年转基因种植面积", value: 72.9 },
        { country: "美国", type: "2016 年耕地总面积", value: 165.2 },
        { country: "印度", type: "2016 年转基因种植面积", value: 49.1 },
        { country: "印度", type: "2016 年耕地总面积", value: 175.4 },
      ],
    };
  },
  mounted() {
    this.chart1();
    this.chart2();
    this.chart3();
  },
  methods: {
    chart1() {
      const data = this.data1;

      const linePlot = new Bar(document.getElementById("c1"), {
        forceFit: true,
        data,
        xField: "销售额",
        yField: "地区",
        label: {
          visible: true,
          formatter: (v) => Math.round(v / 10000) + "万",
        },
      });

      linePlot.render();
    },
    chart2() {
      const liquidPlot = new Liquid(document.getElementById("c3"), {
        min: 0,
        max: 2650,
        value: this.data2,
        statistic: {
          formatter: (value) => ((100 * value) / 2650).toFixed(1) + "%",
        },
      });
      liquidPlot.render();
    },
    chart3() {
      const data = this.data3;

      const chart = new Chart({
        container: "c2",
        autoFit: true,
        height: 400,
        padding: [10, 0, 0, 60],
      });
      chart.data(data);
      chart.scale("value", {
        alias: "销售额（万）",
      });

      chart.axis("value", false);
      chart.coordinate().transpose();
      chart.facet("mirror", {
        fields: ["type"],
        transpose: true,
        showTitle: false,
        eachView: (view, facet) => {
          const facetIndex = facet.columnIndex;
          if (facetIndex === 0) {
            view.axis("country", {
              position: "top",
              label: {
                style: {
                  fill: "#aaaaaa",
                  fontSize: 12,
                },
              },
              tickLine: {
                alignTick: false,
                length: 0,
              },
              line: null,
            });
          } else {
            view.axis("country", false);
          }
          const color = facetIndex === 0 ? "#1890ff" : "#2fc25b";
          view
            .interval()
            .position("country*value")
            .color(color)
            .size(30)
            .label("value", (val) => {
              let offset = facetIndex === 1 ? -4 : 4;
              let shadowBlur = 2;
              let textAlign = facetIndex === 1 ? "end" : "start";
              let fill = "white";
              if (val < 15) {
                offset = facetIndex === 1 ? 4 : -4;
                textAlign = facetIndex === 1 ? "start" : "end";
                fill = "#666666";
                shadowBlur = 0;
              }
              return {
                offset,
                style: {
                  fill,
                  stroke: null,
                  shadowBlur,
                  shadowColor: "rgba(0, 0, 0, .45)",
                  textAlign,
                },
              };
            });
        },
      });
      chart.interaction("element-highlight");
      chart.render();
    },
  },
};
</script>
