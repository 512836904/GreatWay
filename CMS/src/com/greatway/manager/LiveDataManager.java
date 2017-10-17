package com.greatway.manager;

import java.math.BigInteger;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.greatway.dto.ModelDto;
import com.greatway.dto.WeldDto;
import com.greatway.model.LiveData;
import com.greatway.page.Page;

public interface LiveDataManager {
	/**
	 * 查询事业部焊接工时
	 * @param dto扩展参数类
	 * @param parent 父id
	 * @return
	 */
	List<LiveData> getCausehour(Page page,WeldDto dto,BigInteger parent);
	
	/**
	 * 查询公司焊接工时
	 * @param dto扩展参数类
	 * @param parent父id
	 * @return
	 */
	List<LiveData> getCompanyhour(Page page,WeldDto dto,BigInteger parent);
	
	/**
	 * 项目部焊接工时
	 * @param dto扩展参数类
	 * @return
	 */
	List<LiveData> getItemhour(Page page,WeldDto dto);
	
	/**
	 * 焊口焊接工时
	 * @param dto扩展参数类
	 * @return
	 */
	List<LiveData> getJunctionHous(Page page,WeldDto dto);
	
	/**
	 * 事业部工艺超标统计
	 * @param dto 扩展参数类
	 * @param type 时间跨度
	 * @param parent 父id
	 * @return
	 */
	List<ModelDto> getCauseOverproof(WeldDto dto,BigInteger parent);
	
	/**
	 * 获取当前所包含的项目
	 * @param parent 上级项目id
	 * @return
	 */
	List<LiveData> getAllInsf(BigInteger parent,int type);
	
	/**
	 * 获取当前跨度所包含的时间
	 * @param dto 扩展参数类
	 * @return
	 */
	List<LiveData> getAllTime(Page page,WeldDto dto);
	
	/**
	 * 公司工艺超标统计
	 * @param dto 扩展参数类
	 * @return
	 */
	List<ModelDto> getCompanyOverproof(WeldDto dto);
	
	/**
	 * 超标明细
	 * @param dto 扩展参数类
	 * @return
	 */
	List<ModelDto> getDatailOverproof(Page page,WeldDto dto,BigInteger parent);
	
	/**
	 * 获取某焊工在某个时间/焊机/焊口的总工时
	 * @param welderno焊工编号
	 * @param machineno焊机编号
	 * @param junctionno焊口编号
	 * @param time时间
	 * @return
	 */
	int getCountTime(String welderno,String machineno,String junctionno,String time);
	
	/**
	 * 获取焊机超标
	 * @param welderno焊工编号
	 * @param machineno焊机编号
	 * @param junctionno焊口编号
	 * @param time时间
	 * @return
	 */
	List<ModelDto> getjunctionoverproof(String welderno,String machineno,String junctionno,String time);
	
	/**
	 * 获取公司超时待机统计
	 * @param dto 扩展参数类
	 * @param num 超时点
	 * @return
	 */
	List<ModelDto> getcompanyOvertime(WeldDto dto , String num);
	
	/**
	 * 获取事业部超时待机统计
	 * @param dto扩展参数类
	 * @param num超时点
	 * @param parent上级id
	 * @return
	 */
	List<ModelDto> getCaustOvertime(WeldDto dto , String num,BigInteger parent);
	
	/**
	 * 获取项目部超时待机统计
	 * @param dto扩展参数类
	 * @param num超时点
	 * @param parent上级id
	 * @return
	 */
	List<ModelDto> getItemOvertime(WeldDto dto , String num,BigInteger parent);
	
	/**
	 * 获取所有焊口
	 * @param parent 所属项目id
	 * @return
	 */
	List<LiveData> getJunction(BigInteger parent);
	
	/**
	 * 待机明细
	 * @param dto扩展参数类
	 * @param num超时点
	 * @param junction 焊口编号
	 * @return
	 */
	List<ModelDto> getDetailovertime(Page page,WeldDto dto , String num,String junctionno);
	
	/**
	 * 公司负荷率
	 * @param dto扩展参数类
	 * @return
	 */
	List<ModelDto> getCompanyLoads(WeldDto dto);
	
	/**
	 * 事业部负荷率
	 * @param dto扩展参数类
	 * @param parent上级id
	 * @return
	 */
	List<ModelDto> getCaustLoads(WeldDto dto,BigInteger parent);
	
	/**
	 * 项目部负荷率
	 * @param dto扩展参数类
	 * @param parent上级id
	 * @return
	 */
	List<ModelDto> getItemLoads(WeldDto dto,BigInteger parent);
	
	/**
	 * 获取所有焊机
	 * @param parent 项目id
	 * @param dto扩展参数类
	 * @return
	 */
	List<LiveData> getMachine(BigInteger parent,WeldDto dto);
	
	/**
	 * 获取负荷率明细
	 * @param dto扩展参数类
	 * @param machineno焊机编号
	 * @return
	 */
	List<ModelDto> getDetailLoads(Page page,WeldDto dto,String machineno);
	
	/**
	 * 获取公司空载率
	 * @param dto 扩展参数类
	 * @return
	 */
	List<ModelDto> getCompanyNoLoads(WeldDto dto);

	/**
	 * 获取事业部空载率
	 * @param dto 扩展参数类
	 * @param parent 父id
	 * @return
	 */
	List<ModelDto> getCaustNOLoads(WeldDto dto,BigInteger parent);
	
	/**
	 * 获取项目部空载率
	 * @param dto 扩展参数类
	 * @param parent 父id
	 * @return
	 */
	List<ModelDto> getItemNOLoads(WeldDto dto,BigInteger parent,String equipmentno);
	
	/**
	 * 公司闲置率
	 * @param dto 扩展参数类
	 * @return
	 */
	List<ModelDto> getCompanyIdle(Page page,WeldDto dto);
	
	/**
	 * 事业部闲置率
	 * @param dto扩展参数类
	 * @param parent上级id
	 * @return
	 */
	List<ModelDto> getCaustIdle(Page page,WeldDto dto,BigInteger parent);
	
	/**
	 * 项目部闲置率
	 * @param dto扩展参数类
	 * @param itemid项目id
	 * @return
	 */
	List<ModelDto> getItemIdle(WeldDto dto,BigInteger itemid);
	
	/**
	 * 获取项目所有焊机数量
	 * @param id 项目id
	 * @return
	 */
	int getMachineCount(BigInteger id);
	
	/**
	 * 公司单台设备运行数据统计
	 * @param dto 扩展参数类
	 * @param parent 上级id
	 * @return
	 */
	List<ModelDto> getCompanyUse(Page page,WeldDto dto,BigInteger parent);
	
	/**
	 * 事业部单台设备运行数据统计
	 * @param dto 扩展参数类
	 * @param insid 项目id
	 * @return
	 */
	List<ModelDto> getCaustUse(Page page,WeldDto dto,BigInteger insid);
	
	/**
	 * 获取用户id
	 * @return
	 */
	BigInteger getUserId();
	
	/**
	 * 获取所有时间
	 * @param dto
	 * @return
	 */
	List<LiveData> getAllTimes(WeldDto dto);
	
	/**
	 * 集团焊接工时
	 * @param dto 扩展参数类
	 * @return
	 */
	List<LiveData> getBlochour(Page page,WeldDto dto);
	
	/**
	 * 集团超标统计
	 * @param dto 扩展参数类
	 * @return
	 */
	List<ModelDto> getBlocOverproof(WeldDto dto);
	
	/**
	 * 集团超时待机统计
	 * @param dto 扩展参数类
	 * @param num 超时点
	 * @return
	 */
	List<ModelDto> getBlocOvertime(WeldDto dto,String num);
	
	/**
	 * 集团负载率
	 * @param dto 扩展参数类
	 * @return
	 */
	List<ModelDto> getBlocLoads(WeldDto dto);
	
	/**
	 * 集团空载率
	 * @param dto 扩展参数类
	 * @return
	 */
	List<ModelDto> getBlocNoLoads(WeldDto dto);
	
	/**
	 * 集团闲置率
	 * @param dto 扩展参数类
	 * @return
	 */
	List<ModelDto> getBlocIdle(Page page,WeldDto dto);
	
	/**
	 * 集团单台设备运行数据统计
	 * @param dto  扩展参数类
	 * @param parent 上级的父id
	 * @return
	 */
	List<ModelDto> getBlocUse(Page page,WeldDto dto,BigInteger parent);
	
}
