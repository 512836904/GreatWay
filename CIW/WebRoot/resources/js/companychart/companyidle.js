$(function(){
	otypecombobox();
	CaustIdleDatagrid();
})
var chartStr = "";
$(document).ready(function(){
	showCompanyIdleChart();
})

function setParam(){
	var otype = $('#otype').combobox('getValue');
	var parent = $("#parent").val();
	var dtoTime1 = $("#dtoTime1").datetimebox('getValue');
	var dtoTime2 = $("#dtoTime2").datetimebox('getValue');
	chartStr = "?otype="+otype+"&parent="+parent+"&dtoTime1="+dtoTime1+"&dtoTime2="+dtoTime2;
}

function showCompanyIdleChart(){
	setParam();
	var array1 = new Array();
	var array2 = new Array();
	var Series = [];
	 $.ajax({  
         type : "post",  
         async : false, //同步执行  
         url : "companyChart/getCompanyIdle"+chartStr,
         data : {},  
         dataType : "json", //返回数据形式为json  
         success : function(result) {  
        	 if (result) {
            	 for(var i=0;i<result.arys.length;i++){
                  	array1.push(result.arys[i].weldTime);
            	 }
                 for(var i=0;i<result.arys1.length;i++){
                 	array2.push(result.arys1[i].name);
                 	Series.push({
                 		name : result.arys1[i].name,
                 		type :'line',//折线图
                 		data : result.arys1[i].idle,
                 		itemStyle : {
                 			normal: {
                 				label : {
                 					show: true//显示每个折点的值
                 				}
                 			}
                 		}
                 	});
                 }
             }
         },  
        error : function(errorMsg) {  
             alert("图表请求数据失败啦!");  
         }  
    }); 
   	//初始化echart实例
	charts = echarts.init(document.getElementById("companyIdleChart"));
	//显示加载动画效果
	charts.showLoading({
		text: '稍等片刻,精彩马上呈现...',
		effect:'whirling'
	});
	option = {
		title:{
			text: ""
		},
		tooltip:{
			trigger: 'axis'//坐标轴触发，即是否跟随鼠标集中显示数据
		},
		legend:{
			data:array2
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
		]
	}
	option.series = Series;
	//为echarts对象加载数据
	charts.setOption(option);
	//隐藏动画加载效果
	charts.hideLoading();
}

function CaustIdleDatagrid(){
	setParam();
	var column = new Array();
	 $.ajax({  
         type : "post",  
         async : false,
		 url : "companyChart/getCompanyIdle"+chartStr,
         data : {},  
         dataType : "json", //返回数据形式为json  
         success : function(result) {  
             if (result) {
            	 var width=$("#body").width()/result.rows.length;
                 column.push({field:"w",title:"时间跨度(年/月/日/周)",width:width,halign : "center",align : "left"});
                 
                 for(var m=0;m<result.arys1.length;m++){
                	 column.push({field:"a"+m,title:"<a href='caustChart/goCaustIdle?parent="+result.arys1[m].id+"'>"+result.arys1[m].name+"</a>",width:width,halign : "center",align : "left"});
                 }
             }  
         },  
        error : function(errorMsg) {  
             alert("请求数据失败啦,请联系系统管理员!");  
         }  
    }); 
	 $("#companyIdleTable").datagrid( {
			fitColumns : true,
			height : $("#body").height() - $("#companyIdleChart").height()-$("#companyIdle_btn").height()-40,
			width : $("#body").width(),
			idField : 'id',
			pageSize : 10,
			pageList : [ 10, 20, 30, 40, 50],
			url : "companyChart/getCompanyIdle"+chartStr,
			singleSelect : true,
			rownumbers : true,
			showPageList : false,
			pagination : true,
			columns :[column],
			rowStyler: function(index,row){
	            if ((index % 2)!=0){
	            	//处理行代背景色后无法选中
	            	var color=new Object();
	                color.class="rowColor";
	                return color;
	            }
			}
	 })
}

function otypecombobox(){
	var optionFields = "<option value='1'>一年</option>" +
	"<option value='2'>一月</option>" +
	"<option value='4'>一周</option>";
	$("#otype").html(optionFields);
	$("#otype").combobox();
	$('#otype').combobox('select',"2");
}

function serachcompanyIdle(){
	chartStr = "";
	CaustIdleDatagrid();
	showCompanyIdleChart();
}

//监听窗口大小变化
window.onresize = function() {
	setTimeout(domresize, 500);
}

//改变表格高宽
function domresize() {
	$("#companyIdleTable").datagrid('resize', {
		height : $("#body").height() - $("#companyIdleChart").height()-$("#companyIdle_btn").height()-10,
		width : $("#body").width()
	});
}
