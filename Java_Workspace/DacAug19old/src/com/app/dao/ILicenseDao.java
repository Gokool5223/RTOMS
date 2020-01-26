package com.app.dao;

import java.util.List;

import com.app.pojos.License;

public interface ILicenseDao 
{
	public Integer addLicenseDetails(License license);
	public List<License>  getLicenseDetails();
	License getLicenseDetailsById(int appId);
	
}