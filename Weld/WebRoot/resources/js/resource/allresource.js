/**
 * 
 */

       $(function(){
	    $("#dg").datagrid( {
		fitColumns : true,
		height : ($("#body").height()),
		width : $("#body").width(),
		idField : 'id',
		toolbar : "#toolbar",
		pageSize : 10,
		pageList : [ 10, 20, 30, 40, 50 ],  
		url : "resource/getAllResource",
		singleSelect : false,
		rownumbers : true,
		pagination : true,
		showPageList : false,
		columns : [ [ {
			field : 'id',
			title : 'id',
			width : 100,
			halign : "center",
			align : "left",
			hidden: true
		}, {
			field : 'resources_name',
			title : '资源名',
			width : 100,
			halign : "center",
			align : "left"
		}, {
			field : 'resources_type',
			title : '类型',
			width : 100,
			halign : "center",
			align : "left"
		}, {
			field : 'resources_address',
			title : '地址',
			width : 100,
			halign : "center",
			align : "left"
		}, {
			field : 'resources_desc',
			title : '描述',
			width : 100,
			halign : "center",
			align : "left"
		}, {
			field : 'status',
			title : '状态',
			width : 100,
			halign : "center",
			align : "left"
		}, {
			field : 'edit',
			title : '编辑',
			width : 130,
			halign : "center",
			align : "left",
			formatter:function(value,row,index){
			var str = "";
			str += '<a id="edit" class="easyui-linkbutton" href="resource/getResource?id='+row.id+'"/>';
			str += '<a id="remove" class="easyui-linkbutton" href="resource/desResource?id='+row.id+'"/>';
			return str;
			}
		}]],
		toolbar : '#toolbar',
		onLoadSuccess:function(data){
	        $("a[id='edit']").linkbutton({text:'修改',plain:true,iconCls:'icon-edit'});
	        $("a[id='remove']").linkbutton({text:'删除',plain:true,iconCls:'icon-remove'});
	        }
	});
})
     
       function removeUser(id){
		$.messager.confirm('提示', '此操作不可撤销，是否确认删除?', function(flag) {
			if (flag) {
				$.ajax({  
			        type : "post",  
			        async : false,
			        url : "resource/delResource?id="+id,  
			        data : {},  
			        dataType : "json", //返回数据形式为json  
			        success : function(result) {
			            if (result) {
			            	if (!result.success) {
								$.messager.show( {
									title : 'Error',
									msg : result.msg
								});
							} else {
								$.messager.alert("提示", "删除成功！");
								var url = "resource/AllResource";
								var img = new Image();
							    img.src = url;  // 设置相对路径给Image, 此时会发送出请求
							    url = img.src;  // 此时相对路径已经变成绝对路径
							    img.src = null; // 取消请求
								window.location.href = encodeURI(url);
							}
			            }  
			        },  
			        error : function(errorMsg) {  
			            alert("数据请求失败，请联系系统管理员!");  
			        }  
			   }); 
			}
		});
	}

       function newResource(){
            
        }
       
        function doSearch(value){
 			$("#tt").datagrid( {
				fitColumns : true,
				height : ($("#body").height()),
				width : $("#body").width(),
				idField : 'roles_name',
				url : "user/getAllRole",
				rownumbers : false,
				showPageList : false,
				checkOnSelect:true,
				selectOnCheck:true,
				columns : [ [ {
				    field:'ck',
					checkbox:true
				},{
					field : 'roles_name',
					title : '角色名',
					width : 100,
					halign : "center",
					align : "left"
				}]],      
			onLoadSuccess:function(data){  
			if(data){
			$.each(data.rows, function(index, item){
        	var rows = $("#dg").datagrid("getRows");
        	for(var i=0;i<rows.length;i++){
                var rowID = rows[i].users_name;
                var id = rows[i].id; 
                if(rowID==value){
						    $.ajax( {
							url : 'user/getRole?id='+id,
							data : {
							},
							type : 'post',
							async : false,
							dataType : 'json',
							success : function(result) {
							b = result.rows;
							},
							error : function() {
								alert("获取数据失败，请联系系统管理员！");
							}
						});
				    var c = eval(b);
					for(var j=0;j<c.length;j++)
					{
			        if(item.roles_name==c[j].roles_name){
			        $('#tt').datagrid('checkRow', index);
			        }
			        }
                $('#dlg').dialog('open').dialog('center').dialog('setTitle','用户信息');
                $('#fm').form('load',rows[i]);
            }
        }
        })
        }
        }
        })
        }
        
      //监听窗口大小变化
        window.onresize = function() {
        	setTimeout(domresize, 500);
        }

        //改变表格高宽
        function domresize() {
        	$("#dg").datagrid('resize', {
        		height : $("#body").height(),
        		width : $("#body").width()
        	});
        }