$(function(){
	ItemtimeCombobox();
	ItemnoloadsDatagrid();
})
var chartStr = "";
$(document).ready(function(){
	showitemNoLoadsChart();
})

function setParam(){
	var parent = $("#parent").val();
	var otype = $("input[name='otype']:checked").val();
	var item = $("#item").combobox("getValue");
	var dtoTime1 = $("#dtoTime1").datetimebox('getValue');
	var dtoTime2 = $("#dtoTime2").datetimebox('getValue');
	var otype = $("input[name='otype']:checked").val();
	chartStr = "?otype="+otype+"&parent="+parent+"&item="+item+"&dtoTime1="+dtoTime1+"&dtoTime2="+dtoTime2;
}

var array1 = new Array();
var array2 = new Array();
var Series = [];
function showitemNoLoadsChart(){
   	//初始化echart实例
	charts = echarts.init(document.getElementById("itemNoLoadsChart"));
	//显示加载动画效果
	charts.showLoading({
		text: '稍等片刻,精彩马上呈现...',
		effect:'whirling'
	});
	option = {
		title:{
			text: ""//焊接工艺超标统计
		},
		tooltip:{
			trigger: 'axis'//坐标轴触发，即是否跟随鼠标集中显示数据
		},
		legend:{
			data:array2
		},
		grid:{
			left:'50',//组件距离容器左边的距离
			right:'4%',
			bottom:'20',
			containLaber:true//区域是否包含坐标轴刻度标签
		},
		toolbox:{
			feature:{
				dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}//保存为图片
			},
			right:'2%'
		},
		xAxis:{
			type:'category',
			data: array1
		},
		yAxis:{
			type: 'value',//value:数值轴，category:类目轴，time:时间轴，log:对数轴
			axisLabel: {  
                  show: true,  
                  interval: 'auto',  
                  formatter: '{value}%'  
            },  
            show: true  
		},
		series:[
		]
	}
	option.series = Series;
	//为echarts对象加载数据
	charts.setOption(option);
	//隐藏动画加载效果
	charts.hideLoading();
	$("#chartLoading").hide();
}


function ItemnoloadsDatagrid(){
	setParam();
	var dtoTime1 = $("#dtoTime1").datetimebox('getValue');
	var dtoTime2 = $("#dtoTime2").datetimebox('getValue');
	var column = new Array();
	 $.ajax({  
         type : "post",  
         async : false,
         url : "itemChart/getItemNoLoads"+chartStr,
         data : {},  
         dataType : "json", //返回数据形式为json  
         success : function(result) {  
             if (result) {
            	 var width=$("#body").width()/result.rows.length;
                 column.push({field:"weldTime",title:"时间跨度(年/月/日/周)",width:width,halign : "center",align : "left"});

            	 for(var i=0;i<result.rows.length;i++){
                  	array1.push(result.rows[i].weldTime);
            	 }
                 for(var m=0;m<result.arys.length;m++){
                	 column.push({field:"loads",title:result.arys[m].name+"(空载率)",width:width,halign : "center",align : "left",
                		 formatter : function(value,row,index){
                			 return "<a href='junctionChart/goDetailNoLoads?itemid="+row.itemid+"&weldtime="+row.weldTime+"&dtoTime1="+dtoTime1+"&dtoTime2="+dtoTime2+"'>"+value+"%"+"</a>";
                		 }
                	 },{field:"itemid",title:"项目id",width:width,halign : "center",align : "left",hidden : true});
                  	 array2.push(result.arys[m].name);
                  	 Series.push({
                  		 name : result.arys[m].name,
                  		 type :'line',//折线图
          	            barMaxWidth:20,//柱状图最大宽度
                  		 data : result.arys[m].num,
                  		 itemStyle : {
                  			 normal: {
                  				 label : {
                  					 show: true,//显示每个折点的值
                  					 formatter: '{c}%'  
                  				 }
                  			 }
                  		 }
                  	 });
                 }
             }  
         },  
        error : function(errorMsg) {  
             alert("请求数据失败啦,请联系系统管理员!");  
         }  
    }); 
	 $("#itemNoLoadsTable").datagrid( {
			fitColumns : true,
			height : $("#body").height() - $("#itemNoLoadsChart").height()-$("#itemNoLoads_btn").height()-45,
			width : $("#body").width(),
			idField : 'id',
			pageSize : 10,
			pageList : [ 10, 20, 30, 40, 50],
			url : "itemChart/getItemNoLoads"+chartStr,
			singleSelect : true,
			rownumbers : true,
			showPageList : false,
			pagination : true,
			columns :[column]
	 })
}

function ItemtimeCombobox(){
	var parent = $("#parent").val();
	$.ajax({  
      type : "post",  
      async : false,
      url : "itemChart/getAllItem?parent="+parent,  
      data : {},  
      dataType : "json", //返回数据形式为json  
      success : function(result) {  
          if (result) {
              var optionStr = '';
              for (var i = 0; i < result.ary.length; i++) {  
                  optionStr += "<option value=\"" + result.ary[i].id + "\" >"  
                          + result.ary[i].name + "</option>";
              }
              $("#item").html(optionStr);
          }  
      },  
      error : function(errorMsg) {  
          alert("数据请求失败，请联系系统管理员!");  
      }  
	}); 
	$("#item").combobox();
	if($("#parent").val()){
		$("#item").combobox('setValue',$("#parent").val());
	}else{
		var data = $("#item").combobox('getData');
		$("#item").combobox('select',data[0].value);
	}
}


function serachitemnoloads(){
	$("#parent").val("");
	$("#chartLoading").show();
	array1 = new Array();
	array2 = new Array();
	Series = [];
	chartStr = "";
	setTimeout(function() {
		ItemnoloadsDatagrid();
		showitemNoLoadsChart();
	}, 500);
}

//监听窗口大小变化
window.onresize = function() {
	setTimeout(domresize, 500);
}

//改变表格高宽
function domresize() {
	$("#itemNoLoadsTable").datagrid('resize', {
		height : $("#body").height() - $("#itemNoLoadsChart").height()-$("#itemNoLoads_btn").height()-45,
		width : $("#body").width()
	});
	echarts.init(document.getElementById('itemNoLoadsChart')).resize();
}
