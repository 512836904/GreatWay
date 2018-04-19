package com.spring.service.impl;

import java.math.BigInteger;
import java.util.List;

import javax.jws.WebService;
import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.github.pagehelper.PageHelper;
import com.spring.dao.GatherMapper;
import com.spring.dao.WeldingMachineMapper;
import com.spring.model.Gather;
import com.spring.page.Page;
import com.spring.service.GatherService;

@Service
@Transactional
public class GatherServiceImpl implements GatherService {
	@Autowired
	private GatherMapper gm;
	
	@Autowired
	private WeldingMachineMapper wmm;
	
	@Override
	public List<Gather> getGatherPageAll(Page page, String str,BigInteger parent) {
		PageHelper.startPage(page.getPageIndex(), page.getPageSize());
		return gm.getGatherAll(str,parent);
	}

	@Override
	public BigInteger getGatherByNo(String gatherno) {
		return gm.getGatherByNo(gatherno);
	}

	@Override
	public int getGatherNoCount(String gatherno,BigInteger item) {
		return gm.getGatherNoCount(gatherno,item);
	}

	@Override
	public Gather getGatherById(BigInteger id) {
		return gm.getGatherById(id);
	}

	@Transactional
	@Override
	public void addGather(Gather ins){// throws RuntimeException
//		try{
			gm.addGather(ins);
			gm.addGather(null);
//		}catch(Exception e){
//			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
//		}
//		throw new RuntimeException("产生错误啦，傻孩子@");
	}

	@Override
	public void editGather(Gather ins) {
		gm.editGather(ins);
	}

	@Override
	public void deleteGather(BigInteger id) {
		//修改焊机采集序号为空
		BigInteger wid = wmm.getIdByGatherid(id);
		wmm.editGatherid(wid);
		gm.deleteGather(id);
	}

	@Override
	public List<Gather> getGatherAll(String str,BigInteger parent) {
		return gm.getGatherAll(str,parent);
	}

	@Override
	public List<Gather> getGatherByInsfid(BigInteger insfid) {
		return gm.getGatherByInsfid(insfid);
	}

	@Override
	public int getGatherNoByItemCount(String gatherno, String itemid) {
		return gm.getGatherNoByItemCount(gatherno, itemid);
	}

}
