package com.spring.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.greatway.page.Page;
import com.spring.model.MyUser;
import com.spring.model.Td;
import com.spring.model.User;
import com.spring.service.TdService;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
@RequestMapping(value = "/td",produces = { "text/json;charset=UTF-8" })
public class TdController {
	
	@Autowired
	private TdService tdService;
	private Td td;
	
	/**
	 * 获取所有用户列表
	 * @param request
	 * @return
	 */
	@RequestMapping("/AllTdbf")
	@ResponseBody
	public String Alltdbf(HttpServletRequest request){
		String websocket = request.getSession().getServletContext().getInitParameter("websocket");
//		request.setAttribute("web_socket", websocket);
		JSONObject obj = new JSONObject();
		obj.put("web_socket", websocket);
		return obj.toString();
	}
	
	@RequestMapping("/AllTd")
	public String Alltd(HttpServletRequest request){
		MyUser myuser = (MyUser) SecurityContextHolder.getContext()  
			    .getAuthentication()  
			    .getPrincipal();
		long uid = myuser.getId();
		String insname = tdService.findInsname(tdService.findIns(uid));
		request.setAttribute("insname", insname);
		return "/company";
	}
	
	@RequestMapping("/AllTdd")
	public String AllTdd(HttpServletRequest request){
		request.setAttribute("divi", request.getParameter("value"));
		return "/division";
	}
	
	@RequestMapping("/AllTddp")
	public String AllTddp(HttpServletRequest request){
		request.setAttribute("proj", request.getParameter("value"));
		return "/project";
	}
	
	@RequestMapping("/AllTdp")
	public String AllTdp(HttpServletRequest request){
		return "/project";
	}
	
	@RequestMapping("/AllTdad")
	@ResponseBody
	public String AllTdad(HttpServletRequest request){
		JSONObject obj = new JSONObject();
		String eq = request.getParameter("e");
		String an = request.getParameter("a");
		String vo = request.getParameter("v");
		String value = request.getParameter("value");
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		try{
			String[] equ = eq.split(",");
			String[] anp = an.split(",");
			String[] vol = vo.split(",");
			System.out.println(equ);
			for(int i = 0;i < equ.length;i++)
			{
				if(value.equals(equ[i])){
				json.put("voltage",vol[i]);
				json.put("electricity",anp[i]);
				ary.add(json);
				}
			}
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("rows", ary);
		return obj.toString();
		
	}
	
	@RequestMapping("/AllTda")
	public String AllTda(HttpServletRequest request){
		request.setAttribute("av", request.getParameter("value"));
		return "/AV";
	}
	
	@RequestMapping("/getAllTd")
	@ResponseBody
	public String getAllTd(HttpServletRequest request){
		
		JSONObject obj = new JSONObject();
		String da = request.getParameter("data");
/*		System.out.println(da);*/
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		try{
			for(int i = 0;i < da.length();i+=58)
			{
				json.put("fstatus_id", da.substring(0+i, 2+i));
				json.put("finsframework_id", da.substring(2+i, 4+i));
				json.put("fequipment_no", da.substring(4+i, 8+i));
				json.put("fposition", da.substring(8+i, 13+i));
				json.put("fwelder_no", da.substring(13+i, 17+i));
				json.put("voltage", da.substring(17+i, 21+i));
				json.put("electricity", da.substring(21+i, 25+i));
				json.put("time", da.substring(25+i, 46+i));
				json.put("maxele", da.substring(46+i, 49+i));
				json.put("minele", da.substring(49+i, 52+i));
				json.put("maxvol", da.substring(52+i, 55+i));
				json.put("minvol", da.substring(55+i, 58+i));
				ary.add(json);
			}
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/getAllTddiv")
	@ResponseBody
	public String getAllTddiv(HttpServletRequest request){
		
		MyUser myuser = (MyUser) SecurityContextHolder.getContext()  
			    .getAuthentication()  
			    .getPrincipal();
		JSONObject obj = new JSONObject();
		long uid = myuser.getId();
		String insname = tdService.findInsname(uid);
		List<Td> findAlld = tdService.findAlldiv(tdService.findIns(uid));
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		try{
			for(Td td:findAlld)
			{
				json.put("fid", td.getFdi());
				json.put("fname", td.getFdn());
				json.put("fparent", td.getFdp());
				json.put("ftype", td.getFdt());
				ary.add(json);
			}
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/getAllTdp")
	@ResponseBody
	public String getAllTdp(HttpServletRequest request){
		
		JSONObject obj = new JSONObject();
		String da = request.getParameter("data");
		System.out.println(da);
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		try{
			for(int i = 0;i < da.length();i+=58)
			{
				json.put("fstatus_id", da.substring(0+i, 2+i));
				json.put("finsframework_id", da.substring(2+i, 4+i));
				json.put("fequipment_no", da.substring(4+i, 8+i));
				json.put("fposition", da.substring(8+i, 13+i));
				json.put("fwelder_no", da.substring(13+i, 17+i));
				json.put("voltage", da.substring(17+i, 21+i));
				json.put("electricity", da.substring(21+i, 25+i));
				json.put("time", da.substring(25+i, 46+i));
				json.put("maxele", da.substring(46+i, 49+i));
				json.put("minele", da.substring(49+i, 52+i));
				json.put("maxvol", da.substring(52+i, 55+i));
				json.put("minvol", da.substring(55+i, 58+i));
				ary.add(json);
			}
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/getAllTdp1")
	@ResponseBody
	public String getAllTdp1(HttpServletRequest request){
		
		JSONObject obj = new JSONObject();
		long uid = Long.parseLong(request.getParameter("ins"));
		List<Td> findAllpro = tdService.findAlldiv(uid);
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		try{
			for(Td td:findAllpro){
				json.put("fid", td.getFdi());
				json.put("fname", td.getFdn());
				json.put("fparent", td.getFdp());
				json.put("ftype", td.getFdt());
				ary.add(json);
			}
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/getAllTdp2")
	@ResponseBody
	public String getAllTdp2(HttpServletRequest request){
		
		JSONObject obj = new JSONObject();
		String insname = request.getParameter("div");
		long insid = tdService.findInsid(insname);
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		try{
			
				json.put("fid", insid);
				ary.add(json);
			
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/getAllTdd")
	@ResponseBody
	public String getAllTdd(HttpServletRequest request){
		
		JSONObject obj = new JSONObject();
		String insname = request.getParameter("div");
		long insid = tdService.findInsid(insname);
		List<Td> findAlld = tdService.findAlldiv(insid);
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		try{
			for(Td td:findAlld)
			{
				json.put("fid", td.getFdi());
				json.put("fname", td.getFdn());
				json.put("fparent", td.getFdp());
				json.put("ftype", td.getFdt());
				ary.add(json);
			}
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/getAllTdd1")
	@ResponseBody
	public String getAllTdd1(HttpServletRequest request){
		
		JSONObject obj = new JSONObject();
		List<Td> findAllcom = tdService.findAllcom();
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		try{
			for(Td td:findAllcom){
/*				json.put("fpname",td.getFinsp());
				json.put("fdname",td.getFinsd());
				json.put("fcname",td.getFinsc());*/
				ary.add(json);
			}
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/getAllTdd2")
	@ResponseBody
	public String getAllTdd2(HttpServletRequest request){
		
		JSONObject obj = new JSONObject();
		List<Td> findAllcom = tdService.findAllcom();
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		try{
			for(Td td:findAllcom){
/*				json.put("fpname",td.getFinsp());
				json.put("fdname",td.getFinsd());
				json.put("fcname",td.getFinsc());*/
				ary.add(json);
			}
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("rows", ary);
		return obj.toString();
	}
	
	@RequestMapping("/getWeld")
	@ResponseBody
	public String getWeld(HttpServletRequest request){
		
		String weldid = request.getParameter("weldid");
		JSONObject obj = new JSONObject();
		JSONObject json = new JSONObject();
		JSONArray ary = new JSONArray();
		try{
				json.put("fweldname",tdService.findweld(weldid));
				ary.add(json);
		}catch(Exception e){
			e.getMessage();
		}
		obj.put("rows", ary);
		return obj.toString();
	}
}