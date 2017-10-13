package com.spring.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.greatway.dao.UserMapper;
import com.greatway.page.Page;
import com.spring.model.User;
import com.spring.service.UserService;



@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class UserServiceImpl implements UserService {
	
	@Resource
	private UserMapper mapper;

	public boolean delete(int id) {
		
		return mapper.delete(id);
	}
	
	public boolean deleteRole(String userName) {
		
		return mapper.deleteRole(userName);
	}
	
	public int getUsernameCount(String userName) {
		return mapper.getUsernameCount(userName);
	}

	public List<User> findAll(Page page,String str) {
		PageHelper.startPage(page.getPageIndex(), page.getPageSize());
		List<User> findAllList = mapper.findAll(str);
		return findAllList;
	}
	
	public List<User> findAllRole() {
		List<User> findAllRoleList = mapper.findAllRole();
		return findAllRoleList;
	}
	
	public List<String> getAuthoritiesByUsername(String userName) {
		 
		return mapper.getAuthoritiesByUsername(userName);
	}

	public User findById(Integer id) {

		User user = mapper.findById(id);
		
		return user;
	}
	
	public User LoadUser(String userName) {

		User user = mapper.LoadUser(userName);
		
		return user;
	}
	
	public String findByRoleId(Integer id) {
		
		return mapper.findByRoleId(id);
	}

	public List<User> findRole(Integer id) {
		return mapper.findRole(id);
	}
	
	public void save(User user) {

		mapper.save(user);
	}
	
	public void saveRole(User user) {

		mapper.saveRole(user);
	}

	public boolean update(User user) {

		return mapper.update(user);
	}

	@Override
	public String updateUserRole(Integer findByRoleId) {
		// TODO Auto-generated method stub
		return mapper.updateUserRole(findByRoleId);
	}
	
	

}
