package com.app.dao;

import java.util.List;

import com.app.pojos.Otp;
import com.app.pojos.Question;
import com.app.pojos.Response;
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
//	Question getQuestions(int qid);
	
	

}
