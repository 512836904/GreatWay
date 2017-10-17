$(function openUser(){
	addTab("用户管理","user/AllUser");
	tabsIncident();
})

function openUser(){
	addTab("用户管理","user/AllUser");
}

function openRole(){
	addTab("角色管理","role/AllRole");
}

function openAuthority(){
	addTab("权限管理","authority/AllAuthority");
}

function openResource(){
	addTab("资源管理","resource/AllResource");
}
function openData(){
	addTab("实时数据","data/AllData");
}

function openTd(){
	addTab("实时监测","td/AllTdp");
}

function openWeldingMachine(){
	addTab("焊机设备管理","weldingMachine/goWeldingMachine");
}

function openMachine(){
	addTab("维修记录管理","maintain/goMaintain");
}

function openWedJunction(){
	addTab("焊口列表","weldedjunction/goWeldedJunction");
}

function openWelder(){
	addTab("焊工列表","welder/goWelder");
}

function openInsframework(){
	addTab("组织机构管理","insframework/goInsframework");
}

function openGather(){
	addTab("采集模块管理","gather/goGather");
}

function openCaustHour(){
	addTab("事业部焊口焊接工时","caustChart/goCaustHour");
}

function openCaustoverproof(){
	addTab("事业部焊接工艺超标统计","caustChart/goCaustOverproof");
}
function openCaustovertime(){
	addTab("事业部超时待机统计","caustChart/goCaustOvertime");
}

function openCaustLoads(){
	addTab("事业部设备负荷率","caustChart/goCaustLoads");
}

function openCaustNoLoads(){
	addTab("事业部设备空载率","caustChart/goCaustNoLoads");
}

function openCaustIdle(){
	addTab("事业部设备闲置率","caustChart/goCaustIdle");
}

function openCaustUse(){
	addTab("事业部单台设备运行数据统计","caustChart/goCaustUse");
}

function openCompanyUse(){
	addTab("公司单台设备运行数据统计","companyChart/goCompanyUse");
}

function openCompanyHour(){
	addTab("公司焊口焊接工时","companyChart/goCompanyHour");
}

function openCompanyoverproof(){
	addTab("公司焊接工艺超标统计","companyChart/goCompanyOverproof");
}

function openCompanyovertime(){
	addTab("公司超时待机统计","companyChart/goCompanyOvertime");
}

function openCompanyLoads(){
	addTab("公司设备负荷率","companyChart/goCompanyLoads");
}

function openCompanyNoLoads(){
	addTab("公司设备空载率","companyChart/goCompanyNoLoads");
}

function openCompanyIdle(){
	addTab("公司设备闲置率","companyChart/goCompanyIdle");
}

function openCompanyTd(){
	addTab("实时监测","td/AllTd");
}

function openItemHour(){
	addTab("项目部焊口焊接工时","itemChart/goItemHour");
}

function openItemovertime(){
	addTab("项目部超时待机统计","itemChart/goItemOvertime");
}

function openItemovertime(){
	addTab("项目部超时待机统计","itemChart/goItemOvertime");
}

function openItemLoads(){
	addTab("项目部设备负荷率","itemChart/goItemLoads");
}

function openItemNoLoads(){
	addTab("项目部设备空载率","itemChart/goItemNoLoads");
}

function openDetailoverproofs(){
	addTab("焊接工艺超标明细","itemChart/goDetailoverproof");
}

function openBlocUse(){
	addTab("集团单台设备运行数据统计","blocChart/goBlocUse");
}

function openBlocHour(){
	addTab("集团焊口焊接工时","blocChart/goBlocHour");
}

function openBlocoverproof(){
	addTab("集团焊接工艺超标统计","blocChart/goBlocOverproof");
}

function openBlocovertime(){
	addTab("集团超时待机统计","blocChart/goBlocOvertime");
}

function openBlocLoads(){
	addTab("集团设备负荷率","blocChart/goBlocLoads");
}

function openBlocNoLoads(){
	addTab("集团设备空载率","blocChart/goBlocNoLoads");
}

function openBlocIdle(){
	addTab("集团设备闲置率","blocChart/goBlocIdle");
}



function addTab(title,url){
	//该面板是否已打开
	if(!$("#tabs").tabs('exists',title)){
		$("#tabs").tabs('add',{    
		    title:title,    
		    content:createFrame(url),    
		    closable:true 
		});
	}else{
		$("#tabs").tabs('select',title);
	}
	$(".tabs-inner").bind('contextmenu', function(e) {
		$('#tabMenu').menu('show', {
			left : e.pageX,
			top : e.pageY
		});

		var subtitle = $(this).children(".tabs-closable").text();

		$('#tabMenu').data("currtab", subtitle);
		$('#tabs').tabs('select', subtitle);
		return false;
	});
	
}

function createFrame(url) {
	var s = '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>';
	return s;
}

//标签页事件
function tabsIncident(){
	//刷新
//	$("#refreshtab").click(function(){
//		var tabs = $('#tabs').tabs('getSelected');
//		var url = $(tabs.panel('options').content).attr('src');
//		$('#tabs').tabs('update', {
//			tab: tabs,
//			options: {
//				href: createFrame(url)
//			}
//		});
//
//	})
	//关闭标签页
	$("#closetab").click(function(){
		var currtab_title = $('#tabMenu').data("currtab");
		$('#tabs').tabs('close', currtab_title);
	})
	// 全部关闭
	$('#closeAll').click(function() {
		$('.tabs-inner span').each(function(i, n) {
			var t = $(n).text();
			$('#tabs').tabs('close', t);
		});
	});
	// 关闭其他标签页
	$('#closeOther').click(function() {
		$("#closeRight").click();
		$('#closeLeft').click();
	});
	//关闭右侧标签页
	$('#closeRight').click(function(){
		var nextall = $('.tabs-selected').nextAll();
		if (nextall.length == 0) {
			alert('后边没有啦~~');
			return false;
		}
		nextall.each(function(i, n) {
			var t = $('a:eq(0) span', $(n)).text();
			$('#tabs').tabs('close', t);
		});
		return false;
	})
	//关闭左侧标签页
	$('#closeLeft').click(function() {
		var prevall = $('.tabs-selected').prevAll();
		if (prevall.length == 0) {
			alert('到头了，前边没有啦~~');
			return false;
		}
		prevall.each(function(i, n) {
			var t = $('a:eq(0) span', $(n)).text();
			$('#tabs').tabs('close', t);
		});
		return false;
	});
}
