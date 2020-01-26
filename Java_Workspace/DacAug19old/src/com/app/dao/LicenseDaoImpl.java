package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.License;


@Service
@Transactional
public class LicenseDaoImpl implements ILicenseDao 
{
	@Autowired
	private SessionFactory sf;

	@Override
	public Integer addLicenseDetails(License license) 
	{
		
		return (Integer) sf.getCurrentSession().save(license);
	}

	@Override
	public List<License> getLicenseDetails() {
		String jpql="select l from License l";
		return sf.getCurrentSession().createQuery(jpql,License.class).getResultList();
	}

	@Override
	public License getLicenseDetailsById(int appId) {
		
		return sf.getCurrentSession().get(License.class,appId);
	}
	
	

}