package net.devmanuals.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import net.devmanuals.dao.AdminDao;
import net.devmanuals.model.Admin;
import net.devmanuals.service.AdminService;

@Service("adminService")
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminDao adminDao;

	@Override
	public List<Admin> validateLoginAdmin(String adminEmail, String password) {
		return adminDao.validateLoginAdmin(adminEmail, password);
	}

	@Override
	public List<Admin> getAdminByAdminEmail(String adminEmail) {
		return adminDao.getAdminByAdminEmail(adminEmail);
	}
}
