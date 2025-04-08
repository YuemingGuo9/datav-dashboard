// chart1: 发电趋势图（柱状图）
var chart1 = echarts.init(document.getElementById('chart1'));
chart1.setOption({
  title: { text: '发电量趋势分析', textStyle: { color: '#fff' } },
  tooltip: {},
  xAxis: {
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    axisLine: { lineStyle: { color: '#ccc' } }
  },
  yAxis: {
    axisLine: { lineStyle: { color: '#ccc' } }
  },
  series: [{
    name: '发电量',
    type: 'bar',
    data: [50, 80, 120, 60, 90, 70, 100],
    itemStyle: { color: '#00f5ff' }
  }]
});

// chart2: 运行状态分析（饼图）
var chart2 = echarts.init(document.getElementById('chart2'));
chart2.setOption({
  title: { text: '电站运行状态', left: 'center', textStyle: { color: '#fff' } },
  tooltip: { trigger: 'item' },
  legend: {
    bottom: 0,
    textStyle: { color: '#ccc' }
  },
  series: [{
    name: '状态',
    type: 'pie',
    radius: '60%',
    data: [
      { value: 25, name: '正常' },
      { value: 25, name: '待维修' },
      { value: 25, name: '离线' },
      { value: 25, name: '警告' }
    ],
    itemStyle: {
      borderColor: '#08143c',
      borderWidth: 4
    }
  }]
});
