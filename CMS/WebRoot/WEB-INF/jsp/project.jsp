<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>实时监控</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="resources/themes/icon.css" />
	<link rel="stylesheet" type="text/css" href="resources/themes/default/easyui.css" />
	<link rel="stylesheet" type="text/css" href="resources/css/base.css" />
	
	<script type="text/javascript" src="resources/js/jquery.min.js"></script>
	<script type="text/javascript" src="resources/js/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="resources/js/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="resources/js/easyui-extend-check.js"></script>
	<script type="text/javascript" src="resources/js/td/project.js"></script>

  </head>
<body class="easyui-layout">
    <div  id="body" region="center"  hide="true"  split="true" title="实时监控" style="background: white; height: 335px;">
       <div>
            <div style="margin-bottom:10px;" align="left">
               <input name="project" id="project" value="17" readonly="true" class="easyui-textbox">
            </div>
            <div style="margin-bottom:10px" align="left">
               <label for="status" style="text-align:center;display:inline-block;width:65px">焊机总数</label> <input name="status" id="status" value="" class="easyui-textbox">
            </div>
            <div style="margin-bottom:10px;">
               <div style=" width:17px; height:17px; background-color:#00FF00; border-radius:25px; float:left;"></div><label for="on" style="text-align:center;display:inline-block">工作总数</label> <input name="on" id="on" value="" class="easyui-textbox">
            </div>
            <div style="margin-bottom:10px">
               <div style=" width:17px; height:17px; background-color:#FF0000; border-radius:25px; float:left;"></div><label for="warning" style="text-align:center;display:inline-block">报警总数</label> <input name="warning" id="warning" value="" class="easyui-textbox">
            </div>
            <div style="margin-bottom:10px">
               <div style=" width:17px; height:17px; background-color:#0000CD; border-radius:25px; float:left;"></div><label for="wait" style="text-align:center;display:inline-block">待机总数</label> <input name="wait" id="wait" value="" class="easyui-textbox">
            </div>
            <div style="margin-bottom:10px">
                <div style=" width:17px; height:17px; background-color:#A9A9A9; border-radius:25px; float:left;"></div><label for="off" style="text-align:center;display:inline-block">关机总数</label> <input name="off" id="off" value="" class="easyui-textbox">
            </div>
		</div>
		<div>
<!-- 		<input type="button" id="btnConnection" value="连接" /> -->
		<input type="button" id="btnClose" value="关闭" />
		</div>
		</div>
</body>
</html>