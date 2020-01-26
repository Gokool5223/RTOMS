package com.app.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import javax.enterprise.inject.Produces;
import javax.persistence.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.app.dao.IQuestionDao;
import com.app.dao.IUserDao;
import com.app.pojos.Application;
import com.app.pojos.Document_List;
import com.app.pojos.Otp;
import com.app.pojos.Question;
import com.app.pojos.Response;
import com.app.pojos.ScheduleTest;
import com.app.pojos.User;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController
{
	@Autowired
	IUserDao iuserDao;
	@Autowired
	IQuestionDao dao;
	
	@Autowired
	private JavaMailSender mailSender;
	
	public UserController() {
		System.out.println("In UserController");
	}


	@PostMapping("/register")
	public Integer register(@RequestBody User user,HttpServletRequest request) 
	{
		System.out.println(user);
		String em = request.getParameter("email");
		if(iuserDao.registerUser(user)!=0)
		{
			String msg="You have registered successfully with= "+user.getEmail()+"and password is="+user.getPassword();
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(user.getEmail());
			mailMessage.setSubject("Regestration Mail");
			mailMessage.setText(msg);
			try
			{
				mailSender.send(mailMessage);
			}
			catch (MailException e) 
			{
				System.out.println("inside mail exception");
				e.printStackTrace();
			}
			return 1;
		}
		else
		{
			System.out.println("Something went wrong!!!");
			return 0;
		}
		
		
	}

	@PostMapping("/forgot")
	public Integer forgotPassword(@RequestBody User user,HttpServletRequest request,Model map,HttpSession hs)
	{
		try
		{
			user = iuserDao.findByEmail(user);
			hs.setAttribute("user", user);
			if(user !=null)
			{
				Otp otp= new Otp();
				
				otp.setOtp(iuserDao.generateOtp()); 
				iuserDao.saveOtp(otp);
				hs.setAttribute("OTP", otp);
				String msg="Your one time password for forgot password is = "+otp;
				SimpleMailMessage mailMessage = new SimpleMailMessage();
				mailMessage.setTo(user.getEmail());
				mailMessage.setSubject("One Time Password");
				mailMessage.setText(msg);
				try
				{
					mailSender.send(mailMessage);
				}
				catch (MailException e) 
				{
					System.out.println("inside mail exception");
					e.printStackTrace();
				}
				return 1;
			}
		} catch (NoResultException e) 
		{
			map.addAttribute("msg", "Please enter valid email address");
			e.printStackTrace();
		}
		return 0;
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user) {
		System.out.println(user);
		return iuserDao.login(user);
	}
	
	@PostMapping("/confirmOtp")
	public boolean confirmOtp(@RequestBody Otp otp)
	{
		Otp o=iuserDao.getOtp();
		System.out.println(otp.getOtp());
		System.out.println(o.getOtp());
		if(otp.getOtp()==o.getOtp())
		{
			iuserDao.deleteOtp();
			return true;
		}
		else
		{
			System.out.println("in false");
			return false;
		}
	}
	
	@PostMapping("/resetpassword")
	public boolean resetPassword(@RequestBody User user)
	{
		System.out.println(user.getPassword());
		//System.out.println(user.getEmail());
		iuserDao.resetPassword(user);
		return true;
	}
	
	@GetMapping("/exam")
	public List<Question> getQuestionPaper() {
		System.out.println("in Question paper");
		return dao.getQuestion();
	}
	
	@PostMapping("/exam/getMarks")
	public Integer setAnswer(@RequestBody List<Response> responseList)
	{
		System.out.println("i am in contr");
		System.out.println(responseList);

		return dao.getMarks(responseList);
	}
	
//	@GetMapping("/getUserList")
//	public List<User> getUserList()
//	{
//		System.out.println("In User List");
//		return iuserDao.getAllUsersList(application);
//	}
	
	
	
	@GetMapping("/getUser/{userId}")
	public User getUserById(@PathVariable int userId)	
	{
		System.out.println("In getUser details by id");
		return iuserDao.getUserDetails(userId);
		
	}
	
	//Application
	@PostMapping("/addApplication")
	public Integer addApplication(@RequestBody Application application,HttpServletRequest request)
	{
		System.out.println(application);
		iuserDao.insertApplicationDetails(application);
		
		return 1;
	}
	

	@PostMapping("/upload")
	public String uploadDocument(@RequestParam String abc, @RequestParam String userId,@RequestParam CommonsMultipartFile file) {
		String path="/home/sunbeam/Desktop/RTOMS/Java_Workspace/DacAug19old/WebContent/files";
		System.out.println(userId);
		String fileName = file.getOriginalFilename();
		byte[] bytes = file.getBytes();
		try {
			BufferedOutputStream stream = new BufferedOutputStream(
					new FileOutputStream(new File(path + File.separator + fileName)));
			stream.write(bytes);
			stream.flush();
			stream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		String FilePath = fileName;
		System.out.println("image : " + FilePath);

		Document_List doc = new Document_List(fileName, FilePath);
//		iuserDao.uploadDocument(doc);
		iuserDao.uploadDocument(doc,Integer.parseInt(userId));
		
		String downloadlink = file.getOriginalFilename();
		System.out.println(downloadlink);
		return "uploaded";
	}
	
	
	
	@PostMapping("/updateUserApplication")
	public Integer updateQuestion(@RequestBody Application a) {
		System.out.println(a);
		iuserDao.updateUserApplication(a);
		return 1;
	}
	
	@PostMapping("/scheduleTest")
	public Integer schTest(@RequestBody ScheduleTest sTest,@RequestParam int id)
	{
		System.out.println(id);
		System.out.println(sTest.getTestDate());
		System.out.println(sTest.getTestTime());
		int hrs=sTest.getTestDate().getHours();
		int min=sTest.getTestDate().getMinutes();
		System.out.println(hrs+":"+min);
		
		 if(hrs >=0 & hrs<5)
		    {
		    
		    	 System.out.println("bhai");
		    	String time= hrs+18+":"+(min+30);
		      System.out.println(time);    
		    }
		    else
		    {
		    if(hrs < 12)
		    {
		    if(min<30)
		    {
		    	System.out.println("dingdong");
		    	String time= hrs-6+":"+(min+30);
		    	 sTest.setTestTime(time);
		    }
		    else
		    {
		   
//		    	String time= hrs-6+":"+(min+30);
//		    	 app.setAppTime(time);
		    	System.out.println("hey bro");
		    	 String time= hrs-5+":"+(min-30);
		    	 sTest.setTestTime(time);
		    }
		    }
		    else
		    {
		    	System.out.println("hello");
			    if(min<30)
			    {
			    	String time= hrs-6+":"+(min+30);
			    	 sTest.setTestTime(time);
			    }
			    else
			    {
//			    	String time= hrs-6+":"+(min+30);
//			    	 app.setAppTime(time);
			    	System.out.println("hey bro");
			    	 String time= hrs-5+":"+(min-30);
			    	 sTest.setTestTime(time);
			    }
		    }
		   
			
	     }
		 return iuserDao.scheduleTest(sTest, id);
		
	}
	
	
	

	
	
	
	

	
	
}
