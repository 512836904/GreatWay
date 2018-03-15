<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>删除焊缝</title>
    
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
	<script type="text/javascript" src="resources/js/weldf/deleteweldf.js"></script>

  </head>
  <body  class="easyui-layout" style="background:#ffffff;">
	<div class="divborder">
  		<div class="divtitle">删除焊缝</div>
  	</div>
    <div  id="body" region="north"  hide="true"  split="true" style="background: white;height:80%;margin-top:70px;">
		<div style="text-align: center ">
       	<form action="" id="fm" method="post" data-options="novalidate:true" style="margin:0;padding:20px 50px">
            
            <div style="margin-bottom:10px;display: none;">
                <input name="id" id="id" class="easyui-textbox" type="hidden" value="${product.id}">
            </div>
            <div class="fitem">
            	<lable>焊缝编号</lable>
                <input name="weldnum" id="weldnum" value="${product.pronum}" class="easyui-textbox" readonly="true">
            </div>
            <div class="fitem">
            	<lable>焊缝信息</lable>
                <input name="weldinfo" id="weldinfo" value="${product.proinfo}" class="easyui-textbox" readonly="true">
            </div>
            <div class="fitem">
            	<lable>备注1</lable>
                <input name="remark1" id="remark1" value="${product.backone}" class="easyui-textbox" readonly="true">
            </div>
            <div class="fitem">
            	<lable>备注2</lable>
                <input name="remark2" id="remark2" value="${product.backtwo}" class="easyui-textbox" readonly="true">
            </div>
			<div class="fitem">
            	<lable>备注3</lable>
                <input name="remark3" id="remark3" value="${product.backthree}" class="easyui-textbox" readonly="true">
            </div>
			<div class="fitem">
            	<lable>备注4</lable>
                <input name="remark4" id="remark4" value="${product.backfour}" class="easyui-textbox" readonly="true">
            </div>
	    	<div class="buttonoption">
				<lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			        <a href="javascript:saveWeldf();" class="easyui-linkbutton" iconCls="icon-ok">删除</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			        <a href="product/AllWeldf" class="easyui-linkbutton" iconCls="icon-cancel">取消</a>
		        </lable>
	    	</div>
        </form>
  		<jsp:include  page="../tenghanbottom.jsp"/>
    </div> 
    </div>
</body>
</html>