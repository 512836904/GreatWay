/**
 * 
 */
/**
 * 
 */
var data1;
var da;
var socketfc=null;
var yshu;
var node11;
var symbol=0;
var symbol1=0;
$(function(){
//	inscombobox();
	$('#dlg').dialog( {
		onClose : function() {
			$("#fm").form("disableValidation");
		}
	})
	$("#fm").form("disableValidation");
	document.getElementById("body").style.display="none";
	insframeworkTree();
	$.ajax({  
	      type : "post",  
	      async : false,
	      url : "td/AllTdbf",  
	      data : {},  
	      dataType : "json", //返回数据形式为json  
	      success : function(result) {
	          if (result) {
	        	  data1 = eval(result.web_socket);
	          }  
	      },
	      error : function(errorMsg) {  
	          alert("数据请求失败，请联系系统管理员!");  
	      }  
	 });

 })
 
 function w() {
	if(typeof(WebSocket) == "undefined") {
		alert("您的浏览器不支持WebSocket");
		return;
	}
	ws();
};

function ws() {
	//实现化WebSocket对象，指定要连接的服务器地址与端口
	try{
		socketfc = new WebSocket(data1);
	}catch(err){
		alert("地址请求错误，请清除缓存重新连接！！！")
	}
/*		dingshiqi1 = window.setvarerval(function() {
		dingshiqi++;
	}, 1000);*/
	//打开事件
	socketfc.onopen = function() {};
};

$(document).ready(function () {
	$("#chanel").combobox({
		onSelect: function (record) {
    		$("#ftime").numberbox('clear');
    		$("#fadvance").numberbox('clear');
    		$("#fini_ele").numberbox('clear');
    		$("#fini_vol").numberbox('clear');
    		$("#fweld_vol").numberbox('clear');
    		$("#farc_vol").numberbox('clear');
    		$("#fini_vol1").numberbox('clear');
    		$("#fweld_vol1").numberbox('clear');
    		$("#farc_vol1").numberbox('clear');
    		$("#fweld_ele").numberbox('clear');
    		$("#farc_ele").numberbox('clear');
    		$("#fhysteresis").numberbox('clear');
    		$("#fcharacter").numberbox('clear');
    		$("#fweld_tuny_ele").numberbox('clear');
    		$("#fweld_tuny_vol").numberbox('clear');
    		$("#farc_tuny_ele").numberbox('clear');
    		$("#farc_tuny_vol").numberbox('clear');
    		$("#farc_tuny_vol1").numberbox('clear');
    		$("#fweld_tuny_vol1").numberbox('clear');
    		$('#fgas').combobox('unselect');
    		$('#fdiameter').combobox('unselect');
    		$('#fmaterial').combobox('unselect');
		if(node11!=null){
			document.getElementById("yiyuan1").style.display="none";
			document.getElementById("yiyuan3").style.display="none";
			document.getElementById("gebie1").style.display="block";
			document.getElementById("gebie3").style.display="block";
			$.ajax({  
			      type : "post",  
			      async : false,
			      url : "wps/getAllSpe?machine="+node11.id+"&chanel="+record.value+"&cla="+102,  
			      data : {},  
			      dataType : "json", //返回数据形式为json  
			      success : function(result) {
			          if (result) {
			        	yshu = eval(result.rows);
			        	if(yshu.length!=0){
			      		$('#chanel').combobox('select',yshu[0].FWPSNum);
			    		$("#ftime").numberbox('setValue',yshu[0].ftime);
			    		$("#fadvance").numberbox('setValue',yshu[0].fadvance);
			    		$("#fini_ele").numberbox('setValue',yshu[0].fini_ele);
			    		$("#fini_vol").numberbox('setValue',yshu[0].fini_vol);
			    		$("#fini_vol1").numberbox('setValue',yshu[0].fini_vol1);
			    		$("#fweld_vol").numberbox('setValue',yshu[0].fweld_vol);
			    		$("#fweld_vol1").numberbox('setValue',yshu[0].fweld_vol1);
			    		$("#farc_vol").numberbox('setValue',yshu[0].farc_vol);
			    		$("#farc_vol1").numberbox('setValue',yshu[0].farc_vol1);
			    		$("#fweld_ele").numberbox('setValue',yshu[0].fweld_ele);
			    		$("#farc_ele").numberbox('setValue',yshu[0].farc_ele);
			    		$("#fhysteresis").numberbox('setValue',yshu[0].fhysteresis);
			    		$("#fcharacter").numberbox('setValue',yshu[0].Fweld_V_MAX);
			    		$('#fgas').combobox('select',yshu[0].Fweld_Alter_V);
			    		$('#fdiameter').combobox('select',yshu[0].Fweld_PreChannel);
			    		$('#fmaterial').combobox('select',yshu[0].Fweld_Alter_I);
			    		$("#fweld_tuny_ele").numberbox('setValue',yshu[0].fweld_tuny_ele);
			    		$("#fweld_tuny_vol").numberbox('setValue',yshu[0].fweld_tuny_vol);
			    		$("#farc_tuny_ele").numberbox('setValue',yshu[0].farc_tuny_ele);
			    		$("#farc_tuny_vol").numberbox('setValue',yshu[0].Fdiameter);
			    		$("#farc_tuny_vol1").numberbox('setValue',yshu[0].Fdiameter);
			    		$("#fweld_tuny_vol1").numberbox('setValue',yshu[0].fweld_tuny_vol);
			        	}else{
			        		alert("未查询到相关数据，请尝试索取。");
			        	}
			          }
			      },
			      error : function(errorMsg) {  
			          alert("数据请求失败，请联系系统管理员!");  
			      }  
			 });
			}
		}
	});
});

function chushihua(){
	document.getElementById("yiyuan1").style.display="none";
	document.getElementById("yiyuan3").style.display="none";
	document.getElementById("gebie1").style.display="block";
	document.getElementById("gebie3").style.display="block";
	$("#fmode").prop("checked",false);
	$("#finitial").prop("checked",false);
	$("#fcontroller").prop("checked",false);
	$('#fselect').combobox('select',102);
	$("#ftime").numberbox('setValue',30.0);
	$("#fadvance").numberbox('setValue',1.0);
	$("#fini_ele").numberbox('setValue',100);
	$("#fweld_ele").numberbox('setValue',100);
	$("#farc_ele").numberbox('setValue',100);
	$("#fhysteresis").numberbox('setValue',1.0);
	$("#fcharacter").numberbox('setValue',0);
	$('#fgas').combobox('select',121);
	$('#fdiameter').combobox('select',132);
	$('#fmaterial').combobox('select',91);
	$("#fweld_tuny_ele").numberbox('setValue',0);
	$("#farc_tuny_ele").numberbox('setValue',0);
	$("#fini_vol").numberbox('setValue',19.0);
	$("#fweld_vol").numberbox('setValue',19.0);
	$("#farc_vol").numberbox('setValue',19.0);
	$("#fweld_tuny_vol").numberbox('setValue',0.0);
	$("#farc_tuny_vol").numberbox('setValue',0.0);
	$("#fini_vol1").numberbox('setValue',0);
	$("#fweld_vol1").numberbox('setValue',0);
	$("#farc_vol1").numberbox('setValue',0);
	$("#fweld_tuny_vol1").numberbox('setValue',0);
	$("#farc_tuny_vol1").numberbox('setValue',0);
}

$(document).ready(function () {
	$("#fselect").combobox({
		onSelect: function (record) {
		if(node11!=null){
		if(record.value==102){
			document.getElementById("yiyuan1").style.display="none";
			document.getElementById("yiyuan3").style.display="none";
			document.getElementById("gebie1").style.display="block";
			document.getElementById("gebie3").style.display="block";
		}else{
			document.getElementById("yiyuan1").style.display="block";
			document.getElementById("yiyuan3").style.display="block";
			document.getElementById("gebie1").style.display="none";
			document.getElementById("gebie3").style.display="none";
		}
			}
		}
	});
});
 
 var url = "";
var flag = 1;
function addSpe(){
	flag = 1;
	$('#dlg').window( {
		title : "新增工艺",
		modal : true
	});
	$('#dlg').window('open');
	$('#fm').form('clear');
	url = "wps/addWps";
}

function editWps(){
	flag = 2;
	var row = $('#dg').datagrid('getSelected');
	if (row) {
		$('#dlg').window( {
			title : "修改工艺",
			modal : true
		});
		$('#dlg').window('open');
		$('#fm').form('load', row);
		url = "wps/updateWps?FID="+ row.FID;
	}
}
//提交
function save(value){
	yanzheng();
	var url2 = "";
	var finitial;
	var fcontroller;
	var fmode;
    if($("#finitial").is(":checked")==true){
        finitial = 61;
    }else{
    	finitial = 62;
    }
    if($("#fcontroller").is(":checked")==true){
    	fcontroller = 61;
    }else{
    	fcontroller = 62;
    }
    if($("#finitial").is(":checked")==true){
    	fmode = 61;
    }else{
    	fmode = 62;
    }
    var fselect = $('#fselect').combobox('getValue');
    var farc = $('#farc').combobox('getValue');
//    var fmaterial = $('#fmaterial').combobox('getValue');
    var fmaterial = document.getElementById('fmaterial').value;
    var fgas = document.getElementById('fgas').value;
    var fdiameter = document.getElementById('fdiameter').value;
    var chanel = $('#chanel').combobox('getValue');
	var ftime = $('#ftime').numberbox('getValue');
	var fadvance = $('#fadvance').numberbox('getValue');
	var fini_ele = $('#fini_ele').numberbox('getValue');
	var fweld_ele = $('#fweld_ele').numberbox('getValue');
	var farc_ele = $('#farc_ele').numberbox('getValue');
	var fhysteresis = $('#fhysteresis').numberbox('getValue');
	var fcharacter = $('#fcharacter').numberbox('getValue');
	var fweld_tuny_ele = $('#fweld_tuny_ele').numberbox('getValue');
	var farc_tuny_ele = $('#farc_tuny_ele').numberbox('getValue');
	var fini_vol = $('#fini_vol').numberbox('getValue');
	var fweld_vol = $('#fweld_vol').numberbox('getValue');
	var farc_vol = $('#farc_vol').numberbox('getValue');
	var fini_vol1 = $('#fini_vol1').numberbox('getValue');
	var fweld_vol1 = $('#fweld_vol1').numberbox('getValue');
	var farc_vol1 = $('#farc_vol1').numberbox('getValue');
	if(fselect==102){
		var fweld_tuny_vol = $('#fweld_tuny_vol').numberbox('getValue');
		var farc_tuny_vol = $('#farc_tuny_vol').numberbox('getValue');
	}else{
		var fweld_tuny_vol = $('#fweld_tuny_vol1').numberbox('getValue');
		var farc_tuny_vol = $('#farc_tuny_vol1').numberbox('getValue');
	}
    var machine = node11.id;
	messager = "保存成功！";
	url2 = "wps/apSpe"+"?finitial="+finitial+"&fcontroller="+fcontroller+"&fmode="+fmode+"&fselect="+fselect+"&farc="+farc+"&fmaterial="+fmaterial+"&fgas="+fgas+"&fdiameter="+fdiameter+"&chanel="+chanel+"&ftime="+ftime+"&fadvance="+fadvance+"&fini_ele="+fini_ele+"&fweld_ele="+fweld_ele+"&farc_ele="+farc_ele+"&fhysteresis="+fhysteresis+"&fcharacter="+fcharacter+"&machine="+machine+"&fweld_tuny_ele="+fweld_tuny_ele+"&farc_tuny_ele="+farc_tuny_ele+"&fini_vol="+fini_vol+"&fini_vol1="+fini_vol1+"&fweld_vol="+fweld_vol+"&fweld_vol1="+fweld_vol1+"&farc_vol="+farc_vol+"&farc_vol1="+farc_vol1+"&fweld_tuny_vol="+fweld_tuny_vol+"&farc_tuny_vol="+farc_tuny_vol;
//	url2 = "wps/apSpe";
	$.ajax({  
	      type : "post",  
	      async : false,
	      url : url2,  
	      data : {},  
	      dataType : "json", //返回数据形式为json  
	      success : function(result) {
				if (!result.success) {
					if(value==0){
					$.messager.show( {
						title : 'Error',
						msg : result.errorMsg
					});
					}
				} else {
					if(value==0){
					$.messager.alert("提示", messager);
					$('#dlg').dialog('close');
					$('#dg').datagrid('reload');
					}
				}
	      },
	      error : function(errorMsg) {  
	          alert("数据请求失败，请联系系统管理员!");  
	      }  
	 });
}

function insframeworkTree(){
	$("#speTree").tree({  
		onClick : function(node){
			$('#chanel').combobox('select',0);
			$('#fselect').combobox('select',0);
			node11 = $(this).tree("getSelected");
			var leve = $(this).tree("getLevel", node11.target);
			if((leve==1)||(leve==2)||(leve==3)||(leve==4)){
				 alert("请选择对应的焊机！！！");
			}else{
				document.getElementById("body").style.display="block";
				document.getElementById("bodyy").style.display="none";
				$('#chanel').combobox('select',1);
				$('#fselect').combobox('select',102);
			}
		 }
	})
}

function suoqu(){
	symbol=0;
	if(typeof(WebSocket) == "undefined") {
		alert("您的浏览器不支持WebSocket");
		return;
	}
	socketfc = new WebSocket(data1);
	//打开事件
	socketfc.onopen = function() {
		
	var chanel = parseInt($('#chanel').numberbox('getValue')).toString(16);
	if(chanel.length<2){
        var length = 2 - chanel.length;
        for(var i=0;i<length;i++){
        	chanel = "0" + chanel;
        }
      }
	socketfc.send("7E"+chanel+"560101017D");
	if(symbol==0){
		window.setTimeout(function() {
			if(symbol==0){
				socketfc.close();
				alert("索取失败");
			}
		}, 5000)
	}
	socketfc.onmessage = function(msg) {
		var strdata1=msg.data;
		if((strdata1.substring(4,6)=="56")||(strdata1.substring(0,8)=="7E7C2056")){
        var strdata2=strdata1.replace(/7C20/g, '00');
        var strdata3=strdata2.replace(/7C5E/g, '7E');
        var strdata4=strdata3.replace(/7C5C/g, '7C');
        var da =strdata4.replace(/7C5D/g, '7D');
        if(da.substring(10,12)=="FF"){
    		symbol++;
    		socketfc.close();
    		if(socketfc.readyState!=1){
        		alert("此通道没有规范，请尝试新建规范，可恢复默认值进行参考");
    			}
        }else{
		$('#chanel').combobox('select',parseInt(da.substring(10,12),16));
		$("#ftime").numberbox('setValue',parseInt(da.substring(12,16),16));
		$("#fadvance").numberbox('setValue',parseInt(da.substring(16,20),16));
		$("#fini_ele").numberbox('setValue',parseInt(da.substring(20,24),16));
		$("#fini_vol").numberbox('setValue',(parseInt(da.substring(24,28),16)/10).toFixed(1));
		$("#fini_vol1").numberbox('setValue',(parseInt(da.substring(28,32),16)/10).toFixed(1));
		$("#fweld_ele").numberbox('setValue',parseInt(da.substring(32,36),16));
		$("#fweld_vol").numberbox('setValue',(parseInt(da.substring(36,40),16)/10).toFixed(1));
		$("#fweld_vol1").numberbox('setValue',(parseInt(da.substring(40,44),16)/10).toFixed(1));
		$("#farc_ele").numberbox('setValue',parseInt(da.substring(44,48),16));
		$("#farc_vol").numberbox('setValue',(parseInt(da.substring(48,52),16)/10).toFixed(1));
		$("#farc_vol1").numberbox('setValue',(parseInt(da.substring(52,56),16)/10).toFixed(1));
		$("#fhysteresis").numberbox('setValue',parseInt(da.substring(56,60),16));
		$("#fcharacter").numberbox('setValue',parseInt(da.substring(60,64),16));
		if(parseInt(da.substring(64,66),16)==0){
			$('#fgas').combobox('select',121);
		}else if(parseInt(da.substring(64,66),16)==1){
			$('#fgas').combobox('select',122);
		}else{
			$('#fgas').combobox('select',122);
		}
		if(parseInt(da.substring(66,68),16)==10){
			$('#fdiameter').combobox('select',131);
		}else if(parseInt(da.substring(66,68),16)==12){
			$('#fdiameter').combobox('select',132);
		}else if(parseInt(da.substring(66,68),16)==14){
			$('#fdiameter').combobox('select',133);
		}else{
			$('#fdiameter').combobox('select',134);
		}
		if(parseInt(da.substring(68,70),16)==0){
			$('#fmaterial').combobox('select',91);
		}else if(parseInt(da.substring(68,70),16)==1){
			$('#fmaterial').combobox('select',92);
		}else if(parseInt(da.substring(68,70),16)==4){
			$('#fmaterial').combobox('select',93);
		}else{
			$('#fmaterial').combobox('select',94);
		}
		var sconx = parseInt(da.substring(74,76),16);
		sconx = sconx.toString(2);
		if(sconx.length<8){
	        var length = 8 - sconx.length;
	        for(var i=0;i<length;i++){
	        	sconx = "0" + sconx;
	        }
	      }
		if(sconx.substring(0,1)=="1"){
			$("#finitial").prop("checked",true);
		}else{
			$("#finitial").prop("checked",false);
		}
		if(sconx.substring(1,4)=="000"){
			$('#farc').combobox('select',111);
		}else if(sconx.substring(1,4)=="100"){
			$('#farc').combobox('select',112);
		}else if(sconx.substring(1,4)=="010"){
			$('#farc').combobox('select',113);
		}else{
			$('#farc').combobox('select',114);
		}
		if(sconx.substring(5,6)=="0"){
			$('#fselect').combobox('select',102);
		}else{
			$('#fselect').combobox('select',101);
		}
		if(sconx.substring(6,7)=="1"){
			$("#fcontroller").prop("checked",true);
		}else{
			$("#fcontroller").prop("checked",false);
		}
		if(sconx.substring(7,8)=="1"){
			$("#fmode").prop("checked",true);
		}else{
			$("#fmode").prop("checked",false);
		}
//		parsevar(da.substring(68,70),16);
		$("#fweld_tuny_ele").numberbox('setValue',parseInt(da.substring(76,78),16));
		$("#farc_tuny_ele").numberbox('setValue',parseInt(da.substring(80,82),16));
		$("#fweld_tuny_vol").numberbox('setValue',(parseInt(da.substring(78,80),16)/10).toFixed(1));
		$("#farc_tuny_vol").numberbox('setValue',(parseInt(da.substring(82,84),16)/10).toFixed(1));
		$("#fweld_tuny_vol1").numberbox('setValue',(parseInt(da.substring(78,80),16)/10).toFixed(1));
		$("#farc_tuny_vol1").numberbox('setValue',(parseInt(da.substring(82,84),16)/10).toFixed(1));
		
		symbol++;
		socketfc.close();
		if(socketfc.readyState!=1){
			alert("索取成功");
			}
		}}
	}
}
}

function xiafa(){
	yanzheng();
	if($('#fselect').combobox('getValue')==102){
		if(($('#fweld_tuny_vol').numberbox('getValue')>5||$('#fweld_tuny_vol').numberbox('getValue')<0)){
			alert("个别模式下微调电压范围为0~5")
		}else{
			if(typeof(WebSocket) == "undefined") {
				alert("您的浏览器不支持WebSocket");
				return;
			}
			symbol1=0;
			socketfc = new WebSocket(data1);
			if(symbol1==0){
			window.setTimeout(function() {
				if(symbol1==0){
					alert("下发失败");
					socketfc.close();
				}
			}, 5000)
			}
			socketfc.onopen = function() {
				var chanel = parseInt($('#chanel').numberbox('getValue')).toString(16);
				if(chanel.length<2){
			        var length = 2 - chanel.length;
			        for(var i=0;i<length;i++){
			        	chanel = "0" + chanel;
			        }
			      }
				var ftime = parseInt($('#ftime').numberbox('getValue')).toString(16);
				if(ftime.length<4){
					var length = 4 - ftime.length;
			        for(var i=0;i<length;i++){
			        	ftime = "0" + ftime;
			        }
			      }
				var fadvance = parseInt($('#fadvance').numberbox('getValue')).toString(16);
				if(fadvance.length<4){
					var length = 4 - fadvance.length;
			        for(var i=0;i<length;i++){
			        	fadvance = "0" + fadvance;
			        }
			      }
				var fini_ele = parseInt($('#fini_ele').numberbox('getValue')).toString(16);
				if(fini_ele.length<4){
					var length = 4 - fini_ele.length;
			        for(var i=0;i<length;i++){
			        	fini_ele = "0" + fini_ele;
			        }
			      }
				var fini_vol = parseInt($('#fini_vol').numberbox('getValue')*10).toString(16);
				if(fini_vol.length<4){
					var length = 4 - fini_vol.length;
			        for(var i=0;i<length;i++){
			        	fini_vol = "0" + fini_vol;
			        }
			      }
				var fini_vol1 = parseInt($('#fini_vol1').numberbox('getValue')).toString(16);
				if(fini_vol1.length<4){
					var length = 4 - fini_vol1.length;
			        for(var i=0;i<length;i++){
			        	fini_vol1 = "0" + fini_vol1;
			        }
			      }
				var fweld_ele = parseInt($('#fweld_ele').numberbox('getValue')).toString(16);
				if(fweld_ele.length<4){
					var length = 4 - fweld_ele.length;
			        for(var i=0;i<length;i++){
			        	fweld_ele = "0" + fweld_ele;
			        }
			      }
				var fweld_vol = parseInt($('#fweld_vol').numberbox('getValue')*10).toString(16);
				if(fweld_vol.length<4){
					var length = 4 - fweld_vol.length;
			        for(var i=0;i<length;i++){
			        	fweld_vol = "0" + fweld_vol;
			        }
			      }
				var fweld_vol1 = parseInt($('#fweld_vol1').numberbox('getValue')).toString(16);
				if(fweld_vol1.length<4){
					var length = 4 - fweld_vol1.length;
			        for(var i=0;i<length;i++){
			        	fweld_vol1 = "0" + fweld_vol1;
			        }
			      }
				var farc_ele = parseInt($('#farc_ele').numberbox('getValue')).toString(16);
				if(farc_ele.length<4){
					var length = 4 - farc_ele.length;
			        for(var i=0;i<length;i++){
			        	farc_ele = "0" + farc_ele;
			        }
			      }
				var farc_vol = parseInt($('#farc_vol').numberbox('getValue')*10).toString(16);
				if(farc_vol.length<4){
					var length = 4 - farc_vol.length;
			        for(var i=0;i<length;i++){
			        	farc_vol = "0" + farc_vol;
			        }
			      }
				var farc_vol1 = parseInt($('#farc_vol1').numberbox('getValue')).toString(16);
				if(farc_vol1.length<4){
					var length = 4 - farc_vol1.length;
			        for(var i=0;i<length;i++){
			        	farc_vol1 = "0" + farc_vol1;
			        }
			      }
				var fhysteresis = parseInt($('#fhysteresis').numberbox('getValue')).toString(16);
				if(fhysteresis.length<4){
					var length = 4 - fhysteresis.length;
			        for(var i=0;i<length;i++){
			        	fhysteresis = "0" + fhysteresis;
			        }
			      }
				var fcharacter = parseInt($('#fcharacter').numberbox('getValue')).toString(16);
				if(fcharacter.length<4){
					var length = 4 - fcharacter.length;
			        for(var i=0;i<length;i++){
			        	fcharacter = "0" + fcharacter;
			        }
			      }
//				alert($('#fgas').combobox('getValue'));
				var fgas = parseInt($('#fgas').combobox('getValue')).toString(16);
				if(fgas==parseInt(121).toString(16)){
					fgas="0";
				}else if(fgas==parseInt(122).toString(16)){
					fgas="1";
				}else{
					fgas="3";
				}
				if(fgas.length<2){
					var length = 2 - fgas.length;
			        for(var i=0;i<length;i++){
			        	fgas = "0" + fgas;
			        }
			      }
//				alert($('#fdiameter').combobox('getValue'));
				var fdiameter = parseInt($('#fdiameter').combobox('getValue')).toString(16);
				if(fdiameter==parseInt(131).toString(16)){
					fdiameter="A";
				}else if(fdiameter==parseInt(132).toString(16)){
					fdiameter="C";
				}else if(fdiameter==parseInt(133).toString(16)){
					fdiameter="E";
				}else{
					fdiameter="10";
				}
				if(fdiameter.length<2){
					var length = 2 - fdiameter.length;
			        for(var i=0;i<length;i++){
			        	fdiameter = "0" + fdiameter;
			        }
			      }
//				alert($('#fmaterial').combobox('getValue'));
				var fmaterial = parseInt($('#fmaterial').combobox('getValue')).toString(16);
				if(fmaterial==parseInt(91).toString(16)){
					fmaterial="0";
				}else if(fmaterial==parseInt(92).toString(16)){
					fmaterial="1";
				}else if(fmaterial==parseInt(93).toString(16)){
					fmaterial="4";
				}else{
					fmaterial="5";
				}
				if(fmaterial.length<2){
			        var length = 2 - fmaterial.length;
			        for(var i=0;i<length;i++){
			        	fmaterial = "0" + fmaterial;
			        }
			      }
				var fweld_tuny_ele = parseInt($('#fweld_tuny_ele').numberbox('getValue')).toString(16);
				if(fweld_tuny_ele.length<2){
					var length = 2 - fweld_tuny_ele.length;
			        for(var i=0;i<length;i++){
			        	fweld_tuny_ele = "0" + fweld_tuny_ele;
			        }
			      }
				var fweld_tuny_vol = parseInt($('#fweld_tuny_vol').numberbox('getValue')*10).toString(16);
				if(fweld_tuny_vol.length<2){
					var length = 2 - fweld_tuny_vol.length;
			        for(var i=0;i<length;i++){
			        	fweld_tuny_vol = "0" + fweld_tuny_vol;
			        }
			      }
				var farc_tuny_ele = parseInt($('#farc_tuny_ele').numberbox('getValue')).toString(16);
				if(farc_tuny_ele.length<2){
					var length = 2 - farc_tuny_ele.length;
			        for(var i=0;i<length;i++){
			        	farc_tuny_ele = "0" + farc_tuny_ele;
			        }
			      }
				var farc_tuny_vol = parseInt($('#farc_tuny_vol').numberbox('getValue')*10).toString(16);
				if(farc_tuny_vol.length<2){
					var length = 2 - farc_tuny_vol.length;
			        for(var i=0;i<length;i++){
			        	farc_tuny_vol = "0" + farc_tuny_vol;
			        }
			      }
				var con="";
				if($('#finitial').is(':checked')){
					con=con+"1";
				}else{
					con=con+"0";
				}
				if($('#farc').combobox('getValue')==111){
					con=con+"0000";
				}else if($('#farc').combobox('getValue')==112){
					con=con+"1000";
				}else if($('#farc').combobox('getValue')==113){
					con=con+"0100";
				}else{
					con=con+"0010";
				}
				if($('#fselect').combobox('getValue')==101){
					con=con+"1";
				}else{
					con=con+"0";
				}
				if($('#fcontroller').is(':checked')){
					con=con+"1";
				}else{
					con=con+"0";
				}
				if($('#fmode').is(':checked')){
					con=con+"1";
				}else{
					con=con+"0";
				}
				con = parseInt(con,2);
				con = parseInt(con).toString(16);
				if(con.length<2){
					var length = 2 - con.length;
			        for(var i=0;i<length;i++){
			        	con = "0" + con;
			        }
			      }
			var xiafasend1 = "7E00520101"+chanel+ftime+fadvance+fini_ele+fini_vol+fini_vol1+fweld_ele+fweld_vol+fweld_vol1+farc_ele+farc_vol+farc_vol1+fhysteresis+fcharacter+fgas
			+fdiameter+fmaterial+"0000"+con+fweld_tuny_ele+fweld_tuny_vol+farc_tuny_ele+farc_tuny_vol;
			
		/*	var xiafasend2 = xiafasend1.replace(/00/g, '7C20');
			var xiafasend3 = xiafasend2.replace(/7E/g, '7C5E');
			var xiafasend4 = xiafasend3.replace(/7C/g, '7C5C');
			var xiafasend = xiafasend4.replace(/7D/g, '7C5D').toUpperCase();*/
			var xxx = xiafasend1.toUpperCase();
		    var check = 0;
			for (var i = 0; i < (xxx.length/2); i++)
			{
				var tstr1=xxx.substring(i*2, i*2+2);
				var k=parseInt(tstr1,16);
				check += k;
			}

			var checksend = parseInt(check).toString(16);
			var a2 = checksend.length;
			checksend = checksend.substring(a2-2,a2);
			checksend = checksend.toUpperCase();
			
			var xiafasend2 = (xiafasend1+checksend).substring(2);
			
			var xiafasend4 = xiafasend2.replace(/7C/g, '7C5C');
			var xiafasend3 = xiafasend4.replace(/7E/g, '7C5E');
			var fuer="";
			for(var er=0;er<(xiafasend3.length/2);er++){
				if(xiafasend3.substring(er*2,er*2+2)=="00"){
					fuer = fuer+"7C20"
				}else{
					fuer = fuer+xiafasend3.substring(er*2,er*2+2);
				}
			}
			var xiafasend5 = fuer.replace(/7D/g, '7C5D').toUpperCase();
			
			var xiafasend = "7E" + xiafasend5 + "7D";
			socketfc.send(xiafasend);
			socketfc.onmessage = function(msg) {
				var fan = msg.data;
				if(fan.substring(4,6)=="52"){
					symbol1++;
					if(parseInt(fan.substring(10,12),16)==1){
						socketfc.close();
						if(socketfc.readyState!=1){
							alert("下发失败");
							}
					}else{
						socketfc.close();
						if(socketfc.readyState!=1){
							save(1);
							alert("下发成功");
							}
					}
				}
			}
		}
		}
	}else{
		if(($('#fweld_tuny_vol1').numberbox('getValue')>20||$('#fweld_tuny_vol1').numberbox('getValue')<0)){
			alert("一元模式下微调电压范围为0~20")
		}else{
			if(typeof(WebSocket) == "undefined") {
				alert("您的浏览器不支持WebSocket");
				return;
			}
			/*$.messager.alert("提示", "正在下发，请稍等。。。");*/
			symbol1=0;
			socketfc = new WebSocket(data1);
			if(symbol1==0){
			window.setTimeout(function() {
				if(symbol1==0){
					alert("下发失败");
					socketfc.close();
				}
			}, 5000)
			}
				socketfc.onopen = function() {
					var chanel = parseInt($('#chanel').numberbox('getValue')).toString(16);
					if(chanel.length<2){
				        var length = 2 - chanel.length;
				        for(var i=0;i<length;i++){
				        	chanel = "0" + chanel;
				        }
				      }
					var ftime = parseInt($('#ftime').numberbox('getValue')).toString(16);
					if(ftime.length<4){
						var length = 4 - ftime.length;
				        for(var i=0;i<length;i++){
				        	ftime = "0" + ftime;
				        }
				      }
					var fadvance = parseInt($('#fadvance').numberbox('getValue')).toString(16);
					if(fadvance.length<4){
						var length = 4 - fadvance.length;
				        for(var i=0;i<length;i++){
				        	fadvance = "0" + fadvance;
				        }
				      }
					var fini_ele = parseInt($('#fini_ele').numberbox('getValue')).toString(16);
					if(fini_ele.length<4){
						var length = 4 - fini_ele.length;
				        for(var i=0;i<length;i++){
				        	fini_ele = "0" + fini_ele;
				        }
				      }
					var fini_vol = parseInt($('#fini_vol').numberbox('getValue')*10).toString(16);
					if(fini_vol.length<4){
						var length = 4 - fini_vol.length;
				        for(var i=0;i<length;i++){
				        	fini_vol = "0" + fini_vol;
				        }
				      }
					var fini_vol1 = parseInt($('#fini_vol1').numberbox('getValue')).toString(16);
					if(fini_vol1.length<4){
						var length = 4 - fini_vol1.length;
				        for(var i=0;i<length;i++){
				        	fini_vol1 = "0" + fini_vol1;
				        }
				      }
					var fweld_ele = parseInt($('#fweld_ele').numberbox('getValue')).toString(16);
					if(fweld_ele.length<4){
						var length = 4 - fweld_ele.length;
				        for(var i=0;i<length;i++){
				        	fweld_ele = "0" + fweld_ele;
				        }
				      }
					var fweld_vol = parseInt($('#fweld_vol').numberbox('getValue')*10).toString(16);
					if(fweld_vol.length<4){
						var length = 4 - fweld_vol.length;
				        for(var i=0;i<length;i++){
				        	fweld_vol = "0" + fweld_vol;
				        }
				      }
					var fweld_vol1 = parseInt($('#fweld_vol1').numberbox('getValue')).toString(16);
					if(fweld_vol1.length<4){
						var length = 4 - fweld_vol1.length;
				        for(var i=0;i<length;i++){
				        	fweld_vol1 = "0" + fweld_vol1;
				        }
				      }
					var farc_ele = parseInt($('#farc_ele').numberbox('getValue')).toString(16);
					if(farc_ele.length<4){
						var length = 4 - farc_ele.length;
				        for(var i=0;i<length;i++){
				        	farc_ele = "0" + farc_ele;
				        }
				      }
					var farc_vol = parseInt($('#farc_vol').numberbox('getValue')*10).toString(16);
					if(farc_vol.length<4){
						var length = 4 - farc_vol.length;
				        for(var i=0;i<length;i++){
				        	farc_vol = "0" + farc_vol;
				        }
				      }
					var farc_vol1 = parseInt($('#farc_vol1').numberbox('getValue')).toString(16);
					if(farc_vol1.length<4){
						var length = 4 - farc_vol1.length;
				        for(var i=0;i<length;i++){
				        	farc_vol1 = "0" + farc_vol1;
				        }
				      }
					var fhysteresis = parseInt($('#fhysteresis').numberbox('getValue')).toString(16);
					if(fhysteresis.length<4){
						var length = 4 - fhysteresis.length;
				        for(var i=0;i<length;i++){
				        	fhysteresis = "0" + fhysteresis;
				        }
				      }
					var fcharacter = parseInt($('#fcharacter').numberbox('getValue')).toString(16);
					if(fcharacter.length<4){
						var length = 4 - fcharacter.length;
				        for(var i=0;i<length;i++){
				        	fcharacter = "0" + fcharacter;
				        }
				      }
					var fgas = parseInt(document.getElementById('fgas').value).toString(16);
					if(fgas==parseInt(121).toString(16)){
						fgas="1";
					}else if(fgas==parseInt(122).toString(16)){
						fgas="3";
					}else{
						fgas="0";
					}
					if(fgas.length<2){
						var length = 2 - fgas.length;
				        for(var i=0;i<length;i++){
				        	fgas = "0" + fgas;
				        }
				      }
					var fdiameter = parseInt(document.getElementById('fdiameter').value).toString(16);
					if(fdiameter==parseInt(131).toString(16)){
						fdiameter="A";
					}else if(fdiameter==parseInt(132).toString(16)){
						fdiameter="C";
					}else if(fdiameter==parseInt(133).toString(16)){
						fdiameter="E";
					}else{
						fdiameter="10";
					}
					if(fdiameter.length<2){
						var length = 2 - fdiameter.length;
				        for(var i=0;i<length;i++){
				        	fdiameter = "0" + fdiameter;
				        }
				      }
					var fmaterial = parseInt(document.getElementById('fmaterial').value).toString(16);
					if(fmaterial==parseInt(91).toString(16)){
						fmaterial="0";
					}else if(fmaterial==parseInt(92).toString(16)){
						fmaterial="1";
					}else if(fmaterial==parseInt(93).toString(16)){
						fmaterial="4";
					}else{
						fmaterial="5";
					}
					if(fmaterial.length<2){
				        var length = 2 - fmaterial.length;
				        for(var i=0;i<length;i++){
				        	fmaterial = "0" + fmaterial;
				        }
				      }
					var fweld_tuny_ele = parseInt($('#fweld_tuny_ele').numberbox('getValue')).toString(16);
					if(fweld_tuny_ele.length<2){
						var length = 2 - fweld_tuny_ele.length;
				        for(var i=0;i<length;i++){
				        	fweld_tuny_ele = "0" + fweld_tuny_ele;
				        }
				      }
					var fweld_tuny_vol = parseInt($('#fweld_tuny_vol1').numberbox('getValue')).toString(16);
					if(fweld_tuny_vol.length<2){
						var length = 2 - fweld_tuny_vol.length;
				        for(var i=0;i<length;i++){
				        	fweld_tuny_vol = "0" + fweld_tuny_vol;
				        }
				      }
					var farc_tuny_ele = parseInt($('#farc_tuny_ele').numberbox('getValue')).toString(16);
					if(farc_tuny_ele.length<2){
						var length = 2 - farc_tuny_ele.length;
				        for(var i=0;i<length;i++){
				        	farc_tuny_ele = "0" + farc_tuny_ele;
				        }
				      }
					var farc_tuny_vol = parseInt($('#farc_tuny_vol1').numberbox('getValue')).toString(16);
					if(farc_tuny_vol.length<2){
						var length = 2 - farc_tuny_vol.length;
				        for(var i=0;i<length;i++){
				        	farc_tuny_vol = "0" + farc_tuny_vol;
				        }
				      }
					var con="";
					if($('#finitial').is(':checked')){
						con=con+"1";
					}else{
						con=con+"0";
					}
					if($('#farc').combobox('getValue')==111){
						con=con+"0000";
					}else if($('#farc').combobox('getValue')==112){
						con=con+"1000";
					}else if($('#farc').combobox('getValue')==113){
						con=con+"0100";
					}else{
						con=con+"0010";
					}
					if($('#fselect').combobox('getValue')==101){
						con=con+"1";
					}else{
						con=con+"0";
					}
					if($('#fcontroller').is(':checked')){
						con=con+"1";
					}else{
						con=con+"0";
					}
					if($('#fmode').is(':checked')){
						con=con+"1";
					}else{
						con=con+"0";
					}
					con = parseInt(con,2);
					con = parseInt(con).toString(16);
					if(con.length<2){
						var length = 2 - con.length;
				        for(var i=0;i<length;i++){
				        	con = "0" + con;
				        }
				      }
			var xiafasend1 = "7E00520101"+chanel+ftime+fadvance+fini_ele+fini_vol+fini_vol1+fweld_ele+fweld_vol+fweld_vol1+farc_ele+farc_vol+farc_vol1+fhysteresis+fcharacter+fgas
			+fdiameter+fmaterial+"0000"+con+fweld_tuny_ele+fweld_tuny_vol+farc_tuny_ele+farc_tuny_vol;
			
		/*	var xiafasend2 = xiafasend1.replace(/00/g, '7C20');
			var xiafasend3 = xiafasend2.replace(/7E/g, '7C5E');
			var xiafasend4 = xiafasend3.replace(/7C/g, '7C5C');
			var xiafasend = xiafasend4.replace(/7D/g, '7C5D').toUpperCase();*/
			var xxx = xiafasend1.toUpperCase();
		    var check = 0;
			for (var i = 0; i < (xxx.length/2); i++)
			{
				var tstr1=xxx.substring(i*2, i*2+2);
				var k=parseInt(tstr1,16);
				check += k;
			}
			var checksend = parseInt(check).toString(16);
			var a2 = checksend.length;
			checksend = checksend.substring(a2-2,a2);
			checksend = checksend.toUpperCase();
			
			var xiafasend2 = (xiafasend1+checksend).substring(2);
			
			var xiafasend4 = xiafasend2.replace(/7C/g, '7C5C');
			var xiafasend3 = xiafasend4.replace(/7E/g, '7C5E');
			var fuer="";
			for(var er=0;er<(xiafasend3.length/2);er++){
				if(xiafasend3.substring(er*2,er*2+2)=="00"){
					fuer = fuer+"7C20"
				}else{
					fuer = fuer+xiafasend3.substring(er*2,er*2+2);
				}
			}
			var xiafasend5 = fuer.replace(/7D/g, '7C5D').toUpperCase();
			
			var xiafasend = "7E" + xiafasend5 + "7D";
			socketfc.send(xiafasend);
			socketfc.onmessage = function(msg) {
				var fan = msg.data;
				if(fan.substring(4,6)=="52"){
					symbol1++;
					if(parseInt(fan.substring(10,12),16)==1){
						socketfc.close();
						if(socketfc.readyState==1){
							alert("下发失败");
							}
					}else{
						socketfc.close();
						if(socketfc.readyState!=1){
							save(1);
							alert("下发成功");
							}
					}
				}
			}
		}
		}
	}
}

function yanzheng(){
	if($('#ftime').numberbox('getValue')==""){
		$("#ftime").numberbox('setValue',30.0);
	};
	if($('#fadvance').numberbox('getValue')==""){
		$("#fadvance").numberbox('setValue',1.0);
	}
	if($('#fini_ele').numberbox('getValue')==""){
		$("#fini_ele").numberbox('setValue',100.0);
	}
	if($('#fweld_ele').numberbox('getValue')==""){
		$("#fweld_ele").numberbox('setValue',100.0);
	}
	if($('#farc_ele').numberbox('getValue')==""){
		$("#farc_ele").numberbox('setValue',100.0);
	}
	if($('#fhysteresis').numberbox('getValue')==""){
		$("#fhysteresis").numberbox('setValue',1.0);
	}
	if($('#fcharacter').numberbox('getValue')==""){
		$("#fcharacter").numberbox('setValue',0);
	}
	if($('#fweld_tuny_ele').numberbox('getValue')==""){
		$("#fweld_tuny_ele").numberbox('setValue',0.0);
	}
	if($('#farc_tuny_ele').numberbox('getValue')==""){
		$("#farc_tuny_ele").numberbox('setValue',0.0);
	}
	if($('#fini_vol').numberbox('getValue')==""){
		$("#fini_vol").numberbox('setValue',19.0);
	}
	if($('#fweld_vol').numberbox('getValue')==""){
		$("#fweld_vol").numberbox('setValue',19.0);
	}
	if($('#farc_vol').numberbox('getValue')==""){
		$("#farc_vol").numberbox('setValue',19.0);
	}
	if($('#fini_vol1').numberbox('getValue')==""){
		$("#fini_vol1").numberbox('setValue',0.0);
	}
	if($('#fweld_vol1').numberbox('getValue')==""){
		$("#fweld_vol1").numberbox('setValue',0.0);
	}
	if($('#farc_vol1').numberbox('getValue')==""){
		$("#farc_vol1").numberbox('setValue',0.0);
	}
	if($('#fweld_tuny_vol').numberbox('getValue')==""){
		$("#fweld_tuny_vol").numberbox('setValue',0.0);
	}
	if($('#farc_tuny_vol').numberbox('getValue')==""){
		$("#farc_tuny_vol").numberbox('setValue',0.0);
	}
	if($('#fweld_tuny_vol1').numberbox('getValue')==""){
		$("#fweld_tuny_vol1").numberbox('setValue',0);
	}
	if($('#farc_tuny_vol1').numberbox('getValue')==""){
		$("#farc_tuny_vol1").numberbox('setValue',0);
	}
}
