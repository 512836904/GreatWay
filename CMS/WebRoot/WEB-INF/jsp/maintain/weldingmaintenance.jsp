<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>焊机维修</title>
    
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
	<script type="text/javascript" src="resources/js/maintain/weldingmaintenance.js"></script>
  </head>
  
  <body class="easyui-layout">
    <div id="body" region="north" hide="true"  split="true" title="焊机设备" style="background: witch; height: 40%;">
		<div class="fitem" align="center">
				<input type="hidden" id="wId" value="${w.id }"/>
				<lable>固定资产编号</lable>
				<input class="easyui-textbox" id="equipmentno" readonly="readonly" value="${w.equipmentNo }"/>
				<lable>设备类型</lable>
				<input class="easyui-textbox" id="tId" readonly="readonly" value="${w.typename}"/>
			</div>
			<div class="fitem" align="center">
				<lable>入厂时间</lable>
				<input class="easyui-textbox" id="joinTime" readonly="readonly" value="${w.joinTime }"/>
				<lable>所属项目</lable>
				<input class="easyui-textbox" id="iId" readonly="readonly" value="${w.insframeworkId.name }"/>
			</div>
			<div class="fitem" align="center">
				<lable>生产厂商</lable>
				<input class="easyui-textbox" id="manuno" readonly="readonly" value="${w.manufacturerId.name }"/>
				<lable>采集序号</lable>
				<input class="easyui-textbox" id="gatherId" readonly="readonly" value="${w.gatherId.gatherNo }"/>
			</div>
			<div class="fitem" align="center">
				<lable>设备位置</lable>
				<input class="easyui-textbox" id="position" readonly="readonly" value="${w.position }"/>
				<lable>设备价值</lable>
				<input class="easyui-textbox" id="money" readonly="readonly" value="${w.money }"/>
			</div>
			<div class="fitem" align="center">
				<lable>是否联网</lable>
				<input class="easyui-textbox" id="isnetworking" readonly="readonly" value="${isnetworking }"/>
				<lable>状态</lable>
				<input class="easyui-textbox" id="statusName" readonly="readonly" value="${w.statusname }"/>
			</div>
	</div>
	<div id="body2" region="center"  hide="true"  split="true" title="维修记录" style="background: witch; height: 60%;">
	    <table id="maintainTable" style="table-layout: fixed; width:100%;"></table>
	</div>
  </body>
</html>
