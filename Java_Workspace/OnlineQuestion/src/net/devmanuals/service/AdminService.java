package net.devmanuals.service;

import java.util.List;

import net.devmanuals.model.Admin;

public interface AdminService {
	public List<Admin> validateLoginAdmin(String adminEmail, String password);

	public List<Admin> getAdminByAdminEmail(String adminEmail);
}
