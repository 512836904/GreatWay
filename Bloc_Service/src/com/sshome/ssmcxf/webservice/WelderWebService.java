package com.sshome.ssmcxf.webservice;

import java.math.BigInteger;

public interface WelderWebService {
	/**
	 * 获取所有焊工信息
	 * @param object
	 * @return
	 */
	Object getWelderAll(String object);
	
	/**
	 * 新增焊工信息
	 * @param object
	 */
	BigInteger addWelder(String object);
	
	/**
	 * 修改焊工信息
	 * @param object
	 */
	boolean editWelder(String object);
	
	/**
	 * 删除焊工信息
	 * @param object
	 */
	boolean removeWelder(String object);
	
	/**
	 * 判断焊工编号是否存在
	 * @param object
	 * @return
	 */
	int getWeldernoCount(String object);
	
	/**
	 * 根据id查找焊工
	 * @param object
	 * @return
	 */
	Object getWelderById(String object);
}
