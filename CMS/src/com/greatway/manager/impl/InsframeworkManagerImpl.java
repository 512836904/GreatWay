package com.greatway.manager.impl;

import java.math.BigInteger;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.greatway.dao.InsframeworkMapper;
import com.greatway.dao.WeldingMachineMapper;
import com.greatway.dao.WeldingMaintenanceMapper;
import com.greatway.manager.InsframeworkManager;
import com.greatway.model.Insframework;
import com.greatway.model.WeldingMachine;
import com.greatway.model.WeldingMaintenance;
import com.greatway.page.Page;
import com.greatway.util.IsnullUtil;

@Service
@Transactional
public class InsframeworkManagerImpl implements InsframeworkManager {
	@Autowired
	private InsframeworkMapper im;
	
	@Autowired
	private WeldingMachineMapper wmm;
	
	@Autowired
	private WeldingMaintenanceMapper wm;

	@Override
	public List<Insframework> getInsframeworkAll(Page page, String str) {
		PageHelper.startPage(page.getPageIndex(),page.getPageSize());
		return im.getInsframeworkAll(str);
	}

	@Override
	public void addInsframework(Insframework ins) {
		im.addInsframework(ins);
	}

	@Override
	public void editInsframework(Insframework ins) {
		im.editInsframework(ins);
	}

	@Override
	public void deleteInsframework(BigInteger id) {
		//删除维修记录
		List<WeldingMachine> weldingmachine = wmm.getWeldingMachineByInsf(id);
		for(WeldingMachine welding:weldingmachine){
			List<WeldingMaintenance> list = wm.getMaintainByWeldingMachinId(welding.getId());
			for(WeldingMaintenance w:list){
				WeldingMaintenance m = wm.getWeldingMaintenanceById(w.getId());
				wm.deleteMaintenanceRecord(m.getMaintenance().getId());
				wm.deleteWeldingMaintenance(m.getId());
			}
		}
		//删除焊机
		wmm.deleteByInsf(id);
		//删除项目
		im.deleteInsframework(id);
	}

	@Override
	public List<Insframework> getInsframework(String str) {
		return im.getInsframeworkAll(str);
	}

	@Override
	public int getInsframeworkNameCount(String name) {
		return im.getInsframeworkNameCount(name);
	}

	@Override
	public String getInsframeworkById(BigInteger id) {
		return im.getInsframeworkById(id);
	}

	@Override
	public Insframework getInsfAllById(BigInteger id) {
		return im.getInsfAllById(id);
	}

	@Override
	public List<Insframework> getConmpany() {
		return im.getConmpany();
	}

	@Override
	public List<Insframework> getCause(BigInteger id) {
		return im.getCause(id);
	}

	@Override
	public List<Insframework> getWeldingMachineInsf() {
		return im.getInsframework();
	}

	@Override
	public Insframework getParent(BigInteger id) {
		return im.getParent(id);
	}

	@Override
	public void showParent(HttpServletRequest request,String parentid) {
		IsnullUtil iutil = new IsnullUtil();
		if(iutil.isNull(parentid)){
			StringBuffer sb = new StringBuffer();  
			boolean flag = true;
			Insframework ins = getParent(new BigInteger(parentid));
			while(flag){
				if(ins!=null){
					sb.insert(0, ins.getName()+"-");
					ins = getParent(ins.getId());
				}else if(ins==null){
					flag = false;
				}
			}
			String name = getInsframeworkById(new BigInteger(parentid));
			sb.append(name);
			request.setAttribute("str", sb);
		}
	}

	@Override
	public List<Insframework> getInsByType(int type) {
		return im.getInsByType(type);
	}

	@Override
	public int getUserInsfType(BigInteger uid) {
		return im.getUserInsfType(uid);
	}

	@Override
	public BigInteger getUserInsfId(BigInteger uid) {
		return im.getUserInsfId(uid);
	}

}
