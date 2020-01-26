package com.app.dao;

import java.util.List;

import com.app.pojos.Application;
import com.app.pojos.Document_List;
import com.app.pojos.Otp;
import com.app.pojos.Question;
import com.app.pojos.Response;
import com.app.pojos.ScheduleTest;
import com.app.pojos.User;

public interface IUserDao 
{
	public Integer registerUser(User user);
	public User login(User user);
	public User findByEmail(User user);
	public int generateOtp();
	public void saveOtp(Otp otp);
	public Otp getOtp();
	public void deleteOtp();
	public void resetPassword(User user);
	public List<User> getAllUsers();
	List<Question> getAllQuestion();
	List<Response> getAllAnswer();
	public Integer registerRTO(User user);
	
	//get all applicants
	List<User> getAllApplicant();
	public User getUserDetails(int userId);
	
	//Update User
	
	String updateUserApplication(Application application);
	
	//Application Details
	
	public Integer insertApplicationDetails(Application application,int user_id);
	//public Application getApplicantDetails(int user_id);
	public User getApplicationDetails(int user_id);
	
	
	
	
//	Question getQuestions(int qid);
	
	// to upload document
	
	
	public Integer uploadDocument(Document_List doc,Integer userId);
	
	//Schedule Test
	Integer scheduleTest(ScheduleTest sTest,Integer id);
	

}
