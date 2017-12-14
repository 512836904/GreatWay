package com.greatway.controller;

import java.math.BigInteger;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.greatway.dto.ModelDto;
import com.greatway.dto.WeldDto;
import com.greatway.manager.InsframeworkManager;
import com.greatway.manager.LiveDataManager;
import com.greatway.model.Insframework;
import com.greatway.model.LiveData;
import com.greatway.page.Page;
import com.greatway.util.IsnullUtil;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@RequestMapping(value = "/itemChart", produces = { "text/json;charset=UTF-8" })
public class ItemChartController {
	private Page page;
	private int pageIndex = 1;
	private int pageSize = 10;
	private int total = 0;
	
	@Autowired
	private LiveDataManager lm;
	
	@Autowired
	private InsframeworkManager insm;
	
	IsnullUtil iutil = new IsnullUtil();
	
	/**
	 * 跳转项目工时页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/goItemHour")
	public String goItemHour(HttpServletRequest request){
		String item = request.getParameter("item");
		lm.getUserId(request);
		insm.showParent(request, item);
		request.setAttribute("item", item);
		return "itemchart/itemhour";
	}
	
	/**
	 * 跳转超标明细页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/goDetailoverproof")
	public String goDetailoverproof(HttpServletRequest request){
		String parent = request.getParameter("parent");
		String weldtime = request.getParameter("weldtime");
		insm.showParent(request, parent);
		lm.getUserId(request);
		request.setAttribute("parent", parent);
		request.setAttribute("weldtime", weldtime);
		return "itemchart/detailoverproof";
	}
	
	/**
	 * 跳转项目部超标页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/goItemoverproof")
	public String goItemoverproof(HttpServletRequest request){
		String parent = request.getParameter("parent");
		insm.showParent(request, parent);
		lm.getUserId(request);
		request.setAttribute("parent", parent);
		return "itemchart/itemoverproof";
	}
	
	/**
	 * 跳转项目部超时页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/goItemOvertime")
	public String goItemOvertime(HttpServletRequest request){
		String parent = request.getParameter("parent");
		insm.showParent(request, parent);
		lm.getUserId(request);
		request.setAttribute("parent",parent);
		return "itemchart/itemovertime";
	}
	
	/**
	 * 跳转项目部负荷率页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/goItemLoads")
	public String goItemLoads(HttpServletRequest request){
		String parent = request.getParameter("parent");
		insm.showParent(request, parent);
		lm.getUserId(request);
		request.setAttribute("parent",parent);
		return "itemchart/itemloads";
	}
	
	/**
	 * 跳转项目部空载率页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/goItemNoLoads")
	public String goItemNoLoads(HttpServletRequest request){
		String parent = request.getParameter("parent");
		insm.showParent(request, parent);
		lm.getUserId(request);
		request.setAttribute("parent",parent);
		return "itemchart/itemnoloads";
	}
	
	/**
	 * 跳转项目部闲置页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/goItemIdle")
	public String goItemIdle(HttpServletRequest request){
		String parent = request.getParameter("parent");
		insm.showParent(request, parent);
		lm.getUserId(request);
		request.setAttribute("parent",parent);
		return "itemchart/itemidle";
	}
	
	/**
	 * 跳转项目部工效页面
	 * @param request
	 * @return
	 */
	@RequestMapping("/goItemEfficiency")
	public String goCompanyEfficiency(HttpServletRequest request){
		String nextparent = request.getParameter("nextparent");
		request.setAttribute("nextparent", nextparent);
		return "itemchart/itemefficiency";
	}
	
	/**
	 * 查询项目工时明细
	 * @param request
	 * @return
	 */
	@RequestMapping("/getitemHour")
	@ResponseBody
	public String getitemHour(HttpServletRequest request){
		if(iutil.isNull(request.getParameter("page"))){
			pageIndex = Integer.parseInt(request.getParameter("page"));
		}
		if(iutil.isNull(request.getParameter("rows"))){
			pageSize = Integer.parseInt(request.getParameter("rows"));
		}
		String time1 = request.getParameter("dtoTime1");
		String time2 = request.getParameter("dtoTime2");
		String item = request.getParameter("item");
		String search = request.getParameter("search");
		WeldDto dto = new WeldDto();
		if(!iutil.isNull(item)){
			//处理用户数据权限
			BigInteger uid = lm.getUserId(request);
			String afreshLogin = (String)request.getAttribute("afreshLogin");
			if(iutil.isNull(afreshLogin)){
				return "0";
			}
			int type = insm.getUserInsfType(uid);
			if(type==21){
				dto.setCompanyid(insm.getUserInsfId(uid));
			}else if(type==22){
				dto.setParent(insm.getUserInsfId(uid));
			}else if(type==23){
				item = insm.getUserInsfId(uid).toString();
			}
		}
		String s = (String)request.getSession().getAttribute("s");
		if(iutil.isNull(s)){
			dto.setSearch(s);
		}
		if(iutil.isNull(time1)){
			dto.setDtoTime1(time1);
		}
		if(iutil.isNull(time2)){
			dto.setDtoTime2(time2);
		}
		if(iutil.isNull(item)){
			dto.setDtoItem(new BigInteger(item));
		}
		if(iutil.isNull(search)){
			dto.setSearch(search);
		}
		page = new Page(pageIndex,pageSize,total);
		List<ModelDto> list = lm.getItemhour(page,dto);
		long total = 0;
		if(list != null){
			PageInfo<ModelDto> pageinfo = new PageInfo<ModelDto>(list);
			total = pageinfo.getTotal();
		}
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		try{
			for(ModelDto l:list){
				String[] str = l.getJidgather().split(",");
				if(l.getJidgather().equals("0")){
					json.put("jidgather", "0");
				}else{
					json.put("jidgather", str.length);
				}
				json.put("manhour", l.getHous());
				json.put("dyne", l.getDyne());
				json.put("nextexternaldiameter",l.getNextexternaldiameter());
				json.put("externalDiameter",l.getExternalDiameter());
				json.put("wallThickness",l.getWallThickness());
				json.put("material",l.getMaterial());
				json.put("itemid",l.getItemid());
				json.put("nextmaterial",l.getNextmaterial());
				json.put("nextwall_thickness",l.getNextwallThickness());
				ary.add(json);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		return obj.toString();
	}
	
	/**
	 * 项目部负荷率报表信息查询
	 * @param request
	 * @return
	 */
	@RequestMapping("/getItemLoads")
	@ResponseBody
	public String getItemLoads(HttpServletRequest request){
		String time1 = request.getParameter("dtoTime1");
		String time2 = request.getParameter("dtoTime2");
		String parentId = request.getParameter("parent");
		String item = request.getParameter("item");
		String type = request.getParameter("otype");
		WeldDto dto = new WeldDto();
		BigInteger parent = null;
		if(iutil.isNull(time1)){
			dto.setDtoTime1(time1);
		}
		if(iutil.isNull(time2)){
			dto.setDtoTime2(time2);
		}
		if(iutil.isNull(parentId)){
			parent = new BigInteger(parentId);
		}else{
			parent = new BigInteger(item);
		}
		if(iutil.isNull(type)){
			if(type.equals("1")){
				dto.setYear("year");
			}else if(type.equals("2")){
				dto.setMonth("month");
			}else if(type.equals("3")){
				dto.setDay("day");
			}else if(type.equals("4")){
				dto.setWeek("week");
			}
		}
		List<LiveData> time = null;
		if(iutil.isNull(request.getParameter("page")) && iutil.isNull(request.getParameter("rows"))){
			pageIndex = Integer.parseInt(request.getParameter("page"));
			pageSize = Integer.parseInt(request.getParameter("rows"));
			page = new Page(pageIndex,pageSize,total);
			time = lm.getAllTime(page,dto);
		}else{
			time = lm.getAllTimes(dto);
		}
		long total = 0;
		if(time != null){
			PageInfo<LiveData> pageinfo = new PageInfo<LiveData>(time);
			total = pageinfo.getTotal();
		}
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		JSONArray arys = new JSONArray();
		JSONObject object = new JSONObject();
		try{
			List<ModelDto> list = lm.getItemLoads(dto, parent);
			double[] num = new double[time.size()];
			if(list.size()>0){
				for(int i=0;i<time.size();i++){
					num[i] = 0;
					for(ModelDto m:list){
						if(time.get(i).getWeldTime().equals(m.getWeldTime())){
							num[i] = (double)Math.round(m.getLoads()*100)/100;
						}
					}
					json.put("weldTime",time.get(i).getWeldTime());
					json.put("loads",num[i]);
					json.put("itemid", list.get(0).getIid());
					ary.add(json);
				}
				object.put("name", list.get(0).getFname());
			}
			object.put("num", num);
			arys.add(object);
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		obj.put("arys", arys);
		return obj.toString();
	}

	/**
	 * 项目部超标统计
	 * @param request
	 * @return
	 */
	@RequestMapping("/getItemOverproof")
	@ResponseBody
	public String getItemOverproof(HttpServletRequest request){
		String time1 = request.getParameter("dtoTime1");
		String time2 = request.getParameter("dtoTime2");
		String parentId = request.getParameter("parent");
		String item = request.getParameter("item");
		String type = request.getParameter("otype");
		WeldDto dto = new WeldDto();
		BigInteger id = null;
		if(iutil.isNull(time1)){
			dto.setDtoTime1(time1);
		}
		if(iutil.isNull(time2)){
			dto.setDtoTime2(time2);
		}
		if(iutil.isNull(parentId)){
			id = new BigInteger(parentId);
		}else{
			id = new BigInteger(item);
		}
		if(iutil.isNull(type)){
			if(type.equals("1")){
				dto.setYear("year");
			}else if(type.equals("2")){
				dto.setMonth("month");
			}else if(type.equals("3")){
				dto.setDay("day");
			}else if(type.equals("4")){
				dto.setWeek("week");
			}
		}
		List<LiveData> time = null;
		if(iutil.isNull(request.getParameter("page")) && iutil.isNull(request.getParameter("rows"))){
			pageIndex = Integer.parseInt(request.getParameter("page"));
			pageSize = Integer.parseInt(request.getParameter("rows"));
			page = new Page(pageIndex,pageSize,total);
			time = lm.getAllTime(page,dto);
		}else{
			time = lm.getAllTimes(dto);
		}
		long total = 0;
		if(time != null){
			PageInfo<LiveData> pageinfo = new PageInfo<LiveData>(time);
			total = pageinfo.getTotal();
		}
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		JSONArray arys = new JSONArray();
		JSONObject object = new JSONObject();
		try{
			List<ModelDto> list = lm.getItemOverproof(dto, id);
			BigInteger[] num = new BigInteger[time.size()];
			if(list.size()>0){
				for(int i=0;i<time.size();i++){
					num[i] = new BigInteger("0");
					for(ModelDto m:list){
						if(time.get(i).getWeldTime().equals(m.getWeldTime())){
							num[i] = m.getOverproof();
						}
					}
					json.put("weldTime",time.get(i).getWeldTime());
					json.put("overproof",num[i]);
					json.put("itemid", list.get(0).getFid());
					ary.add(json);
				}
				object.put("name", list.get(0).getFname());
			}
			object.put("num", num);
			arys.add(object);
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		obj.put("arys", arys);
		return obj.toString();
	}

	
	/**
	 * 查询超标明细
	 * @param request
	 * @return
	 */
	@RequestMapping("/getDatailOverproof")
	@ResponseBody
	public String getDatailOverproof(HttpServletRequest request){
		if(iutil.isNull(request.getParameter("page"))){
			pageIndex = Integer.parseInt(request.getParameter("page"));
		}
		if(iutil.isNull(request.getParameter("rows"))){
			pageSize = Integer.parseInt(request.getParameter("rows"));
		}
		String parentid = request.getParameter("parent");
		String weldtime = request.getParameter("weldtime");
		WeldDto dto = new WeldDto();
		//处理用户数据权限
		String afreshLogin = (String)request.getAttribute("afreshLogin");
		if(iutil.isNull(afreshLogin)){
			return "0";
		}
		BigInteger parent = null;
		if(iutil.isNull(weldtime)){
			dto.setDtoTime1("%"+weldtime+"%");
		}
		if(iutil.isNull(parentid)){
			parent = new BigInteger(parentid);
		}
		page = new Page(pageIndex,pageSize,total);
		List<ModelDto> list = lm.getDatailOverproof(page,dto,parent);
		long total = 0;
		if(list != null){
			PageInfo<ModelDto> pageinfo = new PageInfo<ModelDto>(list);
			total = pageinfo.getTotal();
		}
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		try{
			for(ModelDto c:list){
				json.put("overproof", c.getOverproof());
				json.put("weldtime", c.getWeldTime());
				json.put("iid", c.getIid());
				json.put("jid", c.getJid());
				json.put("fwelder_id", c.getFwelder_id());
				json.put("fmachine_id", c.getFmachine_id());
				json.put("fjunction_id", c.getFjunction_id());
				json.put("iname", c.getIname());
				json.put("wname", c.getWname());
				json.put("livecount", c.getLivecount());
				json.put("fmax_electricity", c.getFmax_electricity());
				json.put("fmin_electricity", c.getFmin_electricity());
				ary.add(json);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/getCountTime")
	@ResponseBody
	public String getCountTime(HttpServletRequest request,@RequestParam String welderno,
			@RequestParam String machineno,@RequestParam String junctionno,@RequestParam String time,@RequestParam BigInteger id){
		JSONObject json = new JSONObject();
		try{
			int count = lm.getCountTime(welderno, machineno, junctionno, time, id);
			json.put("count", count);
		}catch(Exception e){
			e.printStackTrace();
		}
		return json.toString();
	}
	
	/**
	 * 项目部超时报表信息查询
	 * @param request
	 * @return
	 */
	@RequestMapping("/getItemOvertime")
	@ResponseBody
	public String getItemOvertime(HttpServletRequest request){
		String time1 = request.getParameter("dtoTime1");
		String time2 = request.getParameter("dtoTime2");
		String parentId = request.getParameter("parent");
		String item = request.getParameter("item");
		String type = request.getParameter("otype");
		String number = request.getParameter("number");
		WeldDto dto = new WeldDto();
		if(iutil.isNull(time1)){
			dto.setDtoTime1(time1);
		}
		if(iutil.isNull(time2)){
			dto.setDtoTime2(time2);
		}
		if(iutil.isNull(parentId)){
			dto.setParent(new BigInteger(parentId));
		}else{
			dto.setParent(new BigInteger(item));
		}
		if(iutil.isNull(type)){
			if(type.equals("1")){
				dto.setYear("year");
			}else if(type.equals("2")){
				dto.setMonth("month");
			}else if(type.equals("3")){
				dto.setDay("day");
			}else if(type.equals("4")){
				dto.setWeek("week");
			}
		}
		List<LiveData> time = null;
		if(iutil.isNull(request.getParameter("page")) && iutil.isNull(request.getParameter("rows"))){
			pageIndex = Integer.parseInt(request.getParameter("page"));
			pageSize = Integer.parseInt(request.getParameter("rows"));
			page = new Page(pageIndex,pageSize,total);
			time = lm.getAllTime(page,dto);
		}else{
			time = lm.getAllTimes(dto);
		}
		long total = 0;
		if(time != null){
			PageInfo<LiveData> pageinfo = new PageInfo<LiveData>(time);
			total = pageinfo.getTotal();
		}
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		JSONArray arys = new JSONArray();
		JSONObject object = new JSONObject();
		try{
			List<ModelDto> list = lm.getItemOvertime(dto, number);
			String[] num = new String[time.size()];
			if(list.size()>0){
				for(int i=0;i<time.size();i++){
					num[i] = "0";
					for(ModelDto m:list){
						if(time.get(i).getWeldTime().equals(m.getWeldTime())){
							num[i] = m.getOvertime();
						}
					}
					json.put("weldTime",time.get(i).getWeldTime());
					json.put("overtime",num[i]);
					json.put("id", list.get(0).getIid());
					ary.add(json);
				}
				object.put("name", list.get(0).getFname());
			}
			object.put("num", num);
			arys.add(object);
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		obj.put("arys", arys);
		return obj.toString();
	}

	/**
	 * 项目部空载率报表信息查询
	 * @param request
	 * @return
	 */
	@RequestMapping("/getItemNoLoads")
	@ResponseBody
	public String getItemNoLoads(HttpServletRequest request){
		String time1 = request.getParameter("dtoTime1");
		String time2 = request.getParameter("dtoTime2");
		String parentId = request.getParameter("parent");
		String item = request.getParameter("item");
		String type = request.getParameter("otype");
		WeldDto dto = new WeldDto();
		BigInteger parent = null;
		if(iutil.isNull(time1)){
			dto.setDtoTime1(time1);
		}
		if(iutil.isNull(time2)){
			dto.setDtoTime2(time2);
		}
		if(iutil.isNull(parentId)){
			parent = new BigInteger(parentId);
		}else{
			parent = new BigInteger(item);
		}
		if(iutil.isNull(type)){
			if(type.equals("1")){
				dto.setYear("year");
			}else if(type.equals("2")){
				dto.setMonth("month");
			}else if(type.equals("3")){
				dto.setDay("day");
			}else if(type.equals("4")){
				dto.setWeek("week");
			}
		}
		List<LiveData> time = null;
		if(iutil.isNull(request.getParameter("page")) && iutil.isNull(request.getParameter("rows"))){
			pageIndex = Integer.parseInt(request.getParameter("page"));
			pageSize = Integer.parseInt(request.getParameter("rows"));
			page = new Page(pageIndex,pageSize,total);
			time = lm.getAllTime(page,dto);
		}else{
			time = lm.getAllTimes(dto);
		}
		long total = 0;
		if(time != null){
			PageInfo<LiveData> pageinfo = new PageInfo<LiveData>(time);
			total = pageinfo.getTotal();
		}
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		JSONArray arys = new JSONArray();
		JSONObject object = new JSONObject();
		try{
			List<ModelDto> list = lm.getItemNOLoads(dto, parent,null);
			double[] num = new double[time.size()];
			if(list.size()>0){
				for(int i=0;i<time.size();i++){
					num[i] = 0;
					for(ModelDto m:list){
						if(time.get(i).getWeldTime().equals(m.getWeldTime())){
							num[i] = (double)Math.round(m.getLoads()*100)/100;
						}
					}
					json.put("weldTime",time.get(i).getWeldTime());
					json.put("loads",num[i]);
					json.put("itemid", list.get(0).getFid());
					ary.add(json);
				}
				object.put("name", list.get(0).getFname());
			}
			object.put("num", num);
			arys.add(object);
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		obj.put("arys", arys);
		return obj.toString();
	}

	/**
	 * 项目部闲置率
	 * @param request
	 * @return
	 */
	@RequestMapping("/getItemIdle")
	@ResponseBody
	public String getItemIdle(HttpServletRequest request){
		String time1 = request.getParameter("dtoTime1");
		String time2 = request.getParameter("dtoTime2");
		String parentId = request.getParameter("parent");
		String type = request.getParameter("otype");
		WeldDto dto = new WeldDto();
		if(!iutil.isNull(parentId)){
			//处理用户数据权限
			BigInteger uid = lm.getUserId(request);
			String afreshLogin = (String)request.getAttribute("afreshLogin");
			if(iutil.isNull(afreshLogin)){
				return "0";
			}
			int types = insm.getUserInsfType(uid);
			if(types==22){
				parentId = insm.getUserInsfId(uid).toString();
			}else if(types==23){
				dto.setParent(insm.getUserInsfId(uid));
			}
		}
		BigInteger parent = null;
		if(iutil.isNull(time1)){
			dto.setDtoTime1(time1);
		}
		if(iutil.isNull(time2)){
			dto.setDtoTime2(time2);
		}
		if(iutil.isNull(parentId)){
			parent = new BigInteger(parentId);
		}
		if(iutil.isNull(type)){
			if(type.equals("1")){
				dto.setYear("year");
			}else if(type.equals("2")){
				dto.setMonth("month");
			}else if(type.equals("4")){
				dto.setWeek("week");
			}
		}
		List<LiveData> time = null;
		if(iutil.isNull(request.getParameter("page")) && iutil.isNull(request.getParameter("rows"))){
			pageIndex = Integer.parseInt(request.getParameter("page"));
			pageSize = Integer.parseInt(request.getParameter("rows"));
			page = new Page(pageIndex,pageSize,total);
			time = lm.getAllTime(page,dto);
		}else{
			time = lm.getAllTimes(dto);
		}
		long total = 0;
		if(time != null){
			PageInfo<LiveData> pageinfo = new PageInfo<LiveData>(time);
			total = pageinfo.getTotal();
		}
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		JSONArray arys = new JSONArray();
		JSONArray arys1 = new JSONArray();
		try{
			List<ModelDto> list = lm.getItemIdle(dto, parent);
			List<LiveData> machine = lm.getMachine(parent);
			double[] num = null;
			for(LiveData live :time){
				json.put("weldTime",live.getWeldTime());
				arys.add(json);
			}
			num = new double[time.size()];
			for(int j=0;j<time.size();j++){
				int machineCount = lm.getMachineCount(parent);
				for(int i=0;i<machine.size();i++){
					if(list.size()>0){
						for(ModelDto l:list){
							if(machine.get(i).getFname().equals(l.getFmachine_id()) && time.get(j).getWeldTime().equals(l.getWeldTime())){
								machineCount = machineCount-1;
							}
						}
					}
				}
				num[j] = machineCount;
			}
			json.put("num",num);
			json.put("name", insm.getInsframeworkById(parent));
			arys1.add(json);
			JSONObject object = new JSONObject();
			for(int i=0;i<time.size();i++){
				for(int j=0;j<arys1.size();j++){
					JSONObject js = (JSONObject)arys1.get(j);
					String loads = js.getString("num").substring(1, js.getString("num").length()-1);
					String[] str = loads.split(",");
					object.put("a", str[i]);
				}
				object.put("w",time.get(i).getWeldTime());
				ary.add(object);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		obj.put("arys", arys);
		obj.put("arys1", arys1);
		return obj.toString();
	}
	
	/**
	 * 项目部工效报表信息查询
	 * @param request
	 * @return
	 */
	@RequestMapping("/getItemEfficiency")
	@ResponseBody
	public String getItemEfficiency(HttpServletRequest request){
		String time1 = request.getParameter("dtoTime1");
		String time2 = request.getParameter("dtoTime2");
		String parentId = request.getParameter("nextparent");
		WeldDto dto = new WeldDto();
		if(!iutil.isNull(parentId)){
			//处理用户数据权限
			BigInteger uid = lm.getUserId(request);
			String afreshLogin = (String)request.getAttribute("afreshLogin");
			if(iutil.isNull(afreshLogin)){
				return "0";
			}
			int types = insm.getUserInsfType(uid);
			if(types==21){
				parentId = insm.getUserInsfId(uid).toString();
			}else if(types==22){
				parentId = insm.getUserInsfId(uid).toString();
			}else if(types==23){
				parentId = insm.getUserInsfId(uid).toString();
			}
		}
		BigInteger parent = null;
		if(iutil.isNull(time1)){
			dto.setDtoTime1(time1);
		}
		if(iutil.isNull(time2)){
			dto.setDtoTime2(time2);
		}
		if(iutil.isNull(parentId)){
			parent = new BigInteger(parentId);
		}
		pageIndex = Integer.parseInt(request.getParameter("page"));
		pageSize = Integer.parseInt(request.getParameter("rows"));
		page = new Page(pageIndex,pageSize,total);
		List<ModelDto> list = lm.caustEfficiency(page, parent, dto);
		PageInfo<ModelDto> pageinfo = new PageInfo<ModelDto>(list);
		long total = pageinfo.getTotal();
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		try{
			for(ModelDto m : list){
				json.put("iname",m.getIname());
				json.put("wname",m.getWname());
				json.put("wid",m.getFwelder_id());
				json.put("dyne",m.getDyne());
				json.put("weldtime",m.getWeldTime());
				json.put("num",m.getNum());
				ary.add(json);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		return obj.toString();
	}

	/**
	 * 获取焊口分类信息
	 * @param request
	 * @return
	 */
	@RequestMapping("/getItemHousClassify")
	@ResponseBody
	public String getItemHousClassify(HttpServletRequest request){
		String parentId = request.getParameter("item");
		String searchStr = request.getParameter("searchStr");
		if(!iutil.isNull(parentId)){
			//处理用户数据权限
			BigInteger uid = lm.getUserId(request);
			String afreshLogin = (String)request.getAttribute("afreshLogin");
			if(iutil.isNull(afreshLogin)){
				return "0";
			}
			int types = insm.getUserInsfType(uid);
			if(types==21){
				parentId = insm.getUserInsfId(uid).toString();
			}else if(types==22){
				parentId = insm.getUserInsfId(uid).toString();
			}else if(types==23){
				parentId = insm.getUserInsfId(uid).toString();
			}
		}
		BigInteger parent = null;
		if(iutil.isNull(parentId)){
			parent = new BigInteger(parentId);
		}
		pageIndex = Integer.parseInt(request.getParameter("page"));
		pageSize = Integer.parseInt(request.getParameter("rows"));
		page = new Page(pageIndex,pageSize,total);
		List<ModelDto> list = lm.getHousClassify(page, parent, searchStr);
		PageInfo<ModelDto> pageinfo = new PageInfo<ModelDto>(list);
		long total = pageinfo.getTotal();
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		try{
			String s = "";
			for(ModelDto m : list){
				json.put("fid",m.getFid());
				json.put("material",m.getMaterial());
				json.put("nextmaterial",m.getNextmaterial());
				json.put("wall_thickness",m.getWallThickness());
				json.put("nextwall_thickness",m.getNextwallThickness());
				json.put("external_diameter",m.getExternalDiameter());
				json.put("nextExternal_diameter",m.getNextexternaldiameter());
				ary.add(json);
				s = " (fmaterial='"+list.get(0).getMaterial()+"' and fexternal_diameter='"+list.get(0).getExternalDiameter()+
						"' and fwall_thickness='"+list.get(0).getWallThickness()+"' and fnextExternal_diameter='"+list.get(0).getNextexternaldiameter()+
						"' and fnextwall_thickness ='"+list.get(0).getNextwallThickness()+"' and Fnext_material ='"+list.get(0).getNextmaterial()+"')";
			}
			request.getSession().setAttribute("s", s);
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("total", total);
		obj.put("rows", ary);
		return obj.toString();
	}

	@RequestMapping("/getAllItem")
	@ResponseBody
	public String getAllItem(HttpServletRequest request){
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		JSONObject obj = new JSONObject();
		String parentid = request.getParameter("parent");
		BigInteger parent = null;
		if(iutil.isNull(parentid)){
			parent = insm.getParentById(new BigInteger(parentid));
		}else{
			//数据权限处理
			BigInteger uid = lm.getUserId(request);
			String afreshLogin = (String)request.getAttribute("afreshLogin");
			if(iutil.isNull(afreshLogin)){
				json.put("id", 0);
				json.put("name", "无");
				ary.add(json);
				obj.put("ary", ary);
				return obj.toString();
			}
			int type = insm.getUserInsfType(uid);
			if(type==21){
				parent = insm.getUserInsfId(uid);
			}else if(type==22){
				parent = insm.getUserInsfId(uid);
			}
		}
		try{
			List<Insframework> list = insm.getInsByType(23,parent);
			for(Insframework i:list){
				json.put("id", i.getId());
				json.put("name", i.getName());
				ary.add(json);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		obj.put("ary", ary);
		return obj.toString();
	}
}
