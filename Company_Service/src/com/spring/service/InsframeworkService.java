package com.spring.service;

import java.math.BigInteger;
import java.util.List;

import com.spring.model.Insframework;

public interface InsframeworkService {
	/**
	 * 获取组织机构
	 * @param str
	 * @return
	 */
	List<Insframework> getInsframeworkAll(BigInteger parent, String str);
	
	/**
	 * 新增组织机构
	 * @param ins
	 */
	boolean addInsframework(Insframework ins);
	/**
	 * 修改组织机构
	 * @param ins
	 */
	boolean editInsframework(Insframework ins);
	
	/**
	 * 删除组织机构
	 * @param id
	 */
	boolean deleteInsframework(BigInteger id);
	
	/**
	 * 判断name是否存在
	 * @param name 项目名称
	 * @return
	 */
	int getInsframeworkNameCount(String name);
	
	/**
	 * 根据id查找name
	 * @param id 项目id
	 * @return
	 */
	String getInsframeworkById(BigInteger id);
	
	/**
	 * 根据id查找所有
	 * @param id 组织机构id
	 * @return
	 */
	Insframework getInsfAllById(BigInteger id);
	
	/**
	 * 查看集团
	 * @return
	 */
	Insframework getBloc();
	/**
	 * 查看公司级
	 * @return
	 */
	List<Insframework> getConmpany(BigInteger value1);
	
	/**
	 * 查看公司级子级
	 * @return
	 */
	List<Insframework> getCause(BigInteger id,BigInteger value2);
	
	/**
	 * 焊机获取项目
	 * @return
	 */
	List<Insframework> getWeldingMachineInsf(BigInteger parent);
	
	/**
	 * 获取父级
	 * @param id 子级编号
	 * @return
	 */
	Insframework getParent(BigInteger id);
	
	/**
	 * 获取某层级的单位名称
	 * @param type单位类型
	 * @return
	 */
	List<Insframework> getInsByType(int type,BigInteger parent);
	
	/**
	 * 获取用户所属层级
	 * @param uid 用户id
	 * @return
	 */
	int getUserInsfType(BigInteger uid);
	
	/**
	 * 获取用户所属部门id
	 * @param uid 用户id
	 * @return
	 */
	BigInteger getUserInsfId(BigInteger uid);
	
	/**
	 * 根据id获取类型
	 * @param id
	 * @return
	 */
	int getTypeById(BigInteger id);
	
	/**
	 * 根据id获取父类
	 * @param id 自己的id
	 * @return
	 */
	BigInteger getParentById(BigInteger id);
	
	/**
	 * 根据用户id查找组织机构id及类型
	 * @param uid
	 * @return
	 */
	List<Insframework> getInsByUserid(BigInteger uid);
}
