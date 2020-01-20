package net.devmanuals.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import net.devmanuals.dao.UserDao;
import net.devmanuals.model.User;
import net.devmanuals.service.UserService;

@Service("userService")
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class UserServiceImpl implements UserService {
   
	@Autowired
	private UserDao userDao;
	
	@Override
	public List<User> listUsers() {
		return userDao.listUsers();		
	}
	
	@Override
	public void saveUser(User user){
	 	 userDao.saveUser(user);
	  }
	
	@Override
	public List<User> getUserByUserEmail(String userEmail){
		   return userDao.getUserByUserEmail(userEmail);
	  }
	
	@Override
	public List<User> validateLoginUser(String userEmail,String password){
		   return userDao.validateLoginUser(userEmail, password);
		
		
	}
}
