<template>
  <div class="content">
    <v-chart :options="options" :auto-resize="true"/>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
// 饼状图
import 'echarts/lib/chart/pie'
// 折线
import 'echarts/lib/chart/line'
// 柱状图
import 'echarts/lib/chart/bar'

// 提示
import 'echarts/lib/component/tooltip'
// 图例
import 'echarts/lib/component/legend'
// 标题
import 'echarts/lib/component/title'

export default {
  components: { 'v-chart': ECharts }, //局部注册
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    this.options = {
      // 标题
      title: {
        text: '测试demo',
        x: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 18,
          fontWeight: 'normal'
        }
      },
      // 工具提示
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      // 图例说明
      legend: {
        show: true,
        x: 'center',
        bottom: 30,
        data: ['男生', '女生', '未知', '年龄', '身高'],
        textStyle: { //底部一排按钮
          color: '#333',
          fontSize: 14
        }
      },
      // 各个部分的颜色
      color: ['#18DBDF', '#F6EF7B', '#3DE16F', '#EF69FB', '#FE5679'],
      // 拖拽的时候重新渲染  默认关闭
      calculable: true,
      // 工具箱
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ['pie', 'funnel'],
            option: {
              funnel: {
                x: '25%',
                width: '50%',
                funnelAlign: 'left',
                max: 1548
              }
            }
          },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      label: {
        show: true,
        fontSize: 14
      },
      series: [
        {
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: '{b} : {c} ({d}%)'
              },
              labelLine: {
                show: true
              }
            }
          },
          name: '访问来源',
          // 类型：这里是饼图
          type: 'pie',
          radius: '50%', //修改饼图大小
          center: ['50%', '40%'],
          // 数据
          data: [
            { value: 335, name: '男生' },
            { value: 310, name: '女生' },
            { value: 234, name: '未知' },
            { value: 135, name: '年龄' },
            { value: 1548, name: '身高' }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>

.content >>> .echarts {
  width: 600px;
  height: 250px;
}
</style>
