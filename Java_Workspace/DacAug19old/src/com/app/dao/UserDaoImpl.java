package com.app.dao;

import java.util.List;
import java.util.Random;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Application;
import com.app.pojos.Otp;
import com.app.pojos.Question;
import com.app.pojos.Response;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserDaoImpl implements IUserDao 
{
	@Autowired
	private SessionFactory sf;

	
	@Override
	public Integer registerUser(User user) {
		
		user.setRole(Role.RTO);
		return (Integer) sf.getCurrentSession().save(user);
	}
	
	


	@Override
	public User login(User user) {
		
	String jpql = "select u from User u where u.email = :em and u.password=:pass";
		User u= sf.getCurrentSession().createQuery(jpql, User.class).setParameter("em", user.getEmail())
				.setParameter("pass", user.getPassword()).getSingleResult();
System.out.println(u);
System.out.println(u.getRole());
		return u;
	}


	@Override
	public User findByEmail(User user) {
		String jpql="select u from User u where u.email=:em";
		return sf.getCurrentSession().createQuery(jpql,User.class).setParameter("em", user.getEmail()).getSingleResult();
	}


	@Override
	public int generateOtp() {
		
		Random random = new Random();
		int num = random.nextInt(99999) + 99999;
		if (num < 100000 || num > 999999) 
		{
			num = random.nextInt(99999) + 99999;
			if (num < 100000 || num > 999999)
			{
				System.out.println("Unable to generate  OTP PIN at this time..");
			}
		}
		return num;
	}


	@Override
	public List<User> getAllUsers() {
		String jpql="select u from User u";
		return sf.getCurrentSession().createQuery(jpql,User.class).getResultList();
	}
	
	@Override
	public void saveOtp(Otp otp) {
		
	sf.getCurrentSession().save(otp);
	}
	
	@Override
	public Otp getOtp() {
		// TODO Auto-generated method stub
		return sf.getCurrentSession().createQuery("select o from Otp o",Otp.class).getSingleResult();
	}
	
	@Override
	public void deleteOtp() 
	{
		 Otp o=sf.getCurrentSession().createQuery("select o from Otp o",Otp.class).getSingleResult();
		 sf.getCurrentSession().delete(o);
	}
	
	@Override
	public void resetPassword(User user) 
	{
		String str = "select u from User u where u.email=:em";
		User u=sf.getCurrentSession().createQuery(str,User.class).setParameter("em",user.getEmail()).getSingleResult();
		u.setPassword(user.getPassword());
		sf.getCurrentSession().save(u);
	}


	@Override
	public List<Question> getAllQuestion() {
		String jpql="select q from Question q";
		return sf.getCurrentSession().createQuery(jpql, Question.class).getResultList();
	}


	@Override
	public List<Response> getAllAnswer() 
	{
		String jpql="select r from Response r";
		return sf.getCurrentSession().createQuery(jpql, Response.class).getResultList();
		
	
	}

	@Override
	public Integer registerRTO(User user) 
	{
		
		user.setRole(Role.RTO);
		return (Integer) sf.getCurrentSession().save(user);
	}




	@Override
	public List<User> getAllUsersList() {
		String jpql = "select u from User u left outer join fetch u.application where u.role='USER'";
		return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();
	}




	@Override
	public User getUserDetails(int userId) {
		return sf.getCurrentSession().get(User.class, userId);
	}



//Application 
	@Override
	public Integer insertApplicationDetails(Application application) {
		
		return (Integer) sf.getCurrentSession().save(application);
	}


	

}
