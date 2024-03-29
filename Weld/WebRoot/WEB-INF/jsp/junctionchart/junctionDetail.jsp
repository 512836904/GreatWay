<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>焊口信息</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" type="text/css" href="resources/themes/icon.css" />
	<link rel="stylesheet" type="text/css" href="resources/themes/default/easyui.css" />
	<link rel="stylesheet" type="text/css" href="resources/css/base.css" />
	
	<script type="text/javascript" src="resources/js/jquery.min.js"></script>
	<script type="text/javascript" src="resources/js/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="resources/js/easyui-lang-zh_CN.js"></script>
  </head>
  
  <body class="easyui-layout">
    <div id="body" region="north" hide="true"  split="true" title="焊口信息" style="background: witch; height: 100%;">
    	<div style="text-align:center">
			<div class="fitem">
				<lable>编号</lable>
				<input class="easyui-textbox" id="equipmentno" readonly="readonly" value="${w.weldedJunctionno }"/>
				<lable>序列号</lable>
				<input class="easyui-textbox" id="tId" readonly="readonly" value="${w.serialNo}"/>
			</div>
			<div class="fitem">
				<lable>机组</lable>
				<input class="easyui-textbox" id="manuno" readonly="readonly" value="${w.unit }"/>
				<lable>区域</lable>
				<input class="easyui-textbox" id="gatherId" readonly="readonly" value="${w.area }"/>
			</div>
			<div class="fitem">
				<lable>系统</lable>
				<input class="easyui-textbox" id="position" readonly="readonly" value="${w.systems }"/>
				<lable>子项</lable>
				<input class="easyui-textbox" id="isnetworking" readonly="readonly" value="${w.children }"/>
			</div>
			<div class="fitem">
				<lable>外径</lable>
				<input class="easyui-textbox" id="statusName" readonly="readonly" value="${w.externalDiameter }"/>
				<lable>璧厚</lable>
				<input class="easyui-textbox" id="isnetworking" readonly="readonly" value="${w.wallThickness }"/>
			</div>
			<div class="fitem">
				<lable>达因</lable>
				<input class="easyui-textbox" id="statusName" readonly="readonly" value="${w.dyne }"/>
				<lable>规格</lable>
				<input class="easyui-textbox" id="isnetworking" readonly="readonly" value="${w.specification }"/>
			</div>
			<div class="fitem">
				<lable>材质</lable>
				<input class="easyui-textbox" id="isnetworking" readonly="readonly" value="${w.material }"/>
				<lable>管线号</lable>
				<input class="easyui-textbox" id="joinTime" readonly="readonly" value="${w.pipelineNo }"/>
			</div>
			<div class="fitem">
				<lable>房间号</lable>
				<input class="easyui-textbox" id="iId" readonly="readonly" value="${w.roomNo }"/>
				<lable>所属项目</lable>
				<input class="easyui-textbox" id="statusName" readonly="readonly" value="${w.itemid.name }"/>
			</div>
			<div class="fitem">
				<lable>电流上限</lable>
				<input class="easyui-textbox" id="statusName" readonly="readonly" value="${w.maxElectricity }"/>
				<lable>电流下限</lable>
				<input class="easyui-textbox" id="isnetworking" readonly="readonly" value="${w.minElectricity }"/>
			</div>
			<div class="fitem">
				<lable>电压上限</lable>
				<input class="easyui-textbox" id="statusName" readonly="readonly" value="${w.maxValtage }"/>
				<lable>电压下限</lable>
				<input class="easyui-textbox" id="isnetworking" readonly="readonly" value="${w.minValtage }"/>
			</div>
			<div class="fitem">
				<lable>下游外径</lable>
				<input class="easyui-textbox" id="statusName" readonly="readonly" value="${w.nextexternaldiameter }"/>
				<lable>开始时间</lable>
				<input class="easyui-textbox" id="isnetworking" readonly="readonly" value="${w.startTime }"/>
			</div>
			<div class="fitem">
				<lable>完成时间</lable>
				<input class="easyui-textbox" id="statusName" readonly="readonly" value="${w.endTime }"/>
				<lable>创建时间</lable>
				<input class="easyui-textbox" id="isnetworking" readonly="readonly" value="${w.creatTime }"/>
			</div>
			<div class="fitem">
				<lable>修改时间</lable>
				<input class="easyui-textbox" id="statusName" readonly="readonly" value="${w.updateTime }"/>
				<lable>修改次数</lable>
				<input class="easyui-textbox" id="isnetworking" readonly="readonly" value="${w.updatecount }"/>
			</div>
			<div style="margin-left:50px">
				<lable>
					<a href="junctionChart/goJunctionHour?itemid=${item }" class="easyui-linkbutton" iconCls="icon-cancel">返回</a>
				</lable>
			</div>
		</div>
	</div>
  </body>
</html>
