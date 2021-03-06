package com.app.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.IUserDao;
import com.app.pojos.Application;
import com.app.pojos.User;
import com.app.pojos.License;
import com.app.dao.ILicenseDao;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/rto")
public class RtoController 
{
	@Autowired
	IUserDao iuserDao;
	@Autowired
	ILicenseDao iLicenseDao;
	
	public RtoController() {
	System.out.println("in ctor of " + getClass().getName());
	}
	
	@GetMapping("/userList")
	public List<User> getApplicantList() {
		System.out.println("in Applicant list");
		return iuserDao.getAllApplicant();	}
	
//	@GetMapping("/getApplication/{user_id}")
//	public Application getApplicationById(@PathVariable int user_id)	
//	{
//		System.out.println("In getUser details by id");
//		return iuserDao.getApplicantDetails(user_id);
//		
//	}
	
	@GetMapping("/getApplicationDetails/{user_id}")
	public User getApplicationDetailsById(@PathVariable int user_id)	
	{
		System.out.println("In getUser details by id");
		return iuserDao.getApplicationDetails(user_id);
		
	}
	
	@PostMapping("/addLicenseDetails")
	public Integer addLicenseDetails(@RequestBody License license,HttpServletRequest request)
	{
		System.out.println(license);
		iLicenseDao.addLicenseDetails(license);
		return 1;
	}
	
	

	@GetMapping("/LicenseList")
	public List<License> getLicenseList() 
	{
		//System.out.println(License);
		System.out.println("in License list");
		return iLicenseDao.getLicenseDetails();
	}
	 
	  @GetMapping("/getLicenseDetails/{appId}")
	  public License getLicenseDetailsById(@PathVariable int appId)
	  {
	  System.out.println("In get License details by id");
	  return iLicenseDao.getLicenseDetailsById(appId);
	  
	  }
	
	

}
