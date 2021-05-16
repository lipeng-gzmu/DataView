<script type="text/javascript">
   //基于准备好的dom，初始化Echarts实例
   var myChart = echarts.init(document.getElementById('windows02'));
   option = {
    title : {
        text: '战争占比变化',
        subtext: '纯属虚构',
        x:'200',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['国内战争','抗日战争','解放战争']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : (function (){
        var series = [];
        for (var i = 0; i < 30; i++) {
            series.push({
                name:'战争时长',
                type:'pie',
                itemStyle : {normal : {
                    label : {show : i > 28},
                    labelLine : {show : i > 28, length:20}
                }},
                radius : [i * 4 + 40, i * 4 + 43],
                data:[
                    {value: i * 128+ 80 ,  name:'国内战争'},
                    {value: i * 64  + 160,  name:'抗日战争'},
                    {value: i * 32  + 320,  name:'解放战争'},
                ]
            })
        }
        series[0].markPoint = {
            symbol:'emptyCircle',
            symbolSize:series[0].radius[0],
            effect:{show:true,scaleSize:12,color:'rgba(250,225,50,0.8)',shadowBlur:10,period:30},
            data:[{x:'50%',y:'50%'}]
        };
        return series;
    })()
};
setTimeout(function (){
    var _ZR = myChart.getZrender();
    var TextShape = require('zrender/shape/Text');
    // 补充千层饼
    _ZR.addShape(new TextShape({
        style : {
            x : _ZR.getWidth() / 2,
            y : _ZR.getHeight() / 2,
            color: '#666',
            text : '恶梦的过去',
            textAlign : 'center'
        }
    }));
    _ZR.addShape(new TextShape({
        style : {
            x : _ZR.getWidth() / 2 + 200,
            y : _ZR.getHeight() / 2,
            brushType:'fill',
            color: 'orange',
            text : '美好的未来',
            textAlign : 'left',
            textFont:'normal 20px 微软雅黑'
        }
    }));
    _ZR.refresh();
}, 2000);

myChart.setOption(option);
</script>