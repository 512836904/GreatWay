$(function(){
	ItemUseDatagrid();
})
var chartStr = "";
$(document).ready(function(){
	showitemUseChart();
})

function setParam(){
	var dtoTime1 = $("#dtoTime1").datetimebox('getValue');
	var dtoTime2 = $("#dtoTime2").datetimebox('getValue');
	chartStr = "?dtoTime1="+dtoTime1+"&dtoTime2="+dtoTime2;
}

function showitemUseChart(){
	setParam();
	var array1 = new Array();
	var array2 = new Array();
	var array3 = new Array();
	 $.ajax({  
         type : "post",  
         async : false, //同步执行  
         url : "itemChart/getItemUse"+chartStr,
         data : {},  
         dataType : "json", //返回数据形式为json  
         success : function(result) {  
             if (result) {  
                 for(var i=0;i<result.rows.length;i++){
                 	array1.push(result.rows[i].fname);
                 	array2.push(result.rows[i].time);
                 	array3.push(result.rows[i].type);
                 }
             }  
         },  
        error : function(errorMsg) {  
             alert("图表请求数据失败啦!");  
         }  
    }); 
   	//初始化echart实例
	charts = echarts.init(document.getElementById("itemUseChart"));
	//显示加载动画效果
	charts.showLoading({
		text: '稍等片刻,精彩马上呈现...',
		effect:'whirling'
	});
	option = {
		title:{
			text: "项目部单台设备运行数据统计"
		},
		tooltip:{
			trigger: 'axis',//坐标轴触发，即是否跟随鼠标集中显示数据
		},
		legend:{
			data:['时长(h)']
		},
		grid:{
			left:'10%',//组件距离容器左边的距离
			right:'4%',
			bottom:'7%',
			containLaber:true//区域是否包含坐标轴刻度标签
		},
		toolbox:{
			feature:{
				saveAsImage:{}//保存为图片
			},
			right:'2%'
		},
		xAxis:{
			type:'category',
			data: array1
		},
		yAxis:{
			type: 'value'//value:数值轴，category:类目轴，time:时间轴，log:对数轴
		},
		series:[
			{
				name:'时长(h)',
				type:'bar',
				data:array2
			}
		]
	}
	//为echarts对象加载数据
	charts.setOption(option);
	//隐藏动画加载效果
	charts.hideLoading();
}


function ItemUseDatagrid(){
	setParam();
	$("#itemUseTable").datagrid( {
		fitColumns : true,
		height : $("#body").height() - $("#itemUseChart").height()-$("#itemUse_btn").height()-40,
		width : $("#body").width(),
		idField : 'id',
		url : "itemChart/getItemUse"+chartStr,
		singleSelect : true,
		pageSize : 10,
		pageList : [ 10, 20, 30, 40, 50],
		rownumbers : true,
		showPageList : false,
		pagination : true,
		columns : [ [ {
			field : 'fname',
			title : '厂家',
			width : 100,
			halign : "center",
			align : "left"
		}, {
			field : 'type',
			title : '型号',
			width : 100,
			halign : "center",
			align : "left"
		}, {
			field : 'time',
			title : '时长(h)',
			width : 100,
			halign : "center",
			align : "left"
		}, {
			field : 'num',
			title : '数量',
			width : 100,
			halign : "center",
			align : "left"
		}] ]
	});
}

function serachitemUse(){
	chartStr = "";
	ItemUseDatagrid();
	showitemUseChart();
}

//监听窗口大小变化
window.onresize = function() {
	setTimeout(domresize, 500);
}

//改变表格高宽
function domresize() {
	$("#itemUseTable").datagrid('resize', {
		height : $("#body").height() - $("#itemUseChart").height()-$("#itemUse_btn").height()-10,
		width : $("#body").width()
	});
}
