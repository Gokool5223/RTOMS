package net.devmanuals.dao;

import java.util.List;

import net.devmanuals.model.Admin;

public interface AdminDao {
	public List<Admin> validateLoginAdmin(String adminEmail, String password);

	public List<Admin> getAdminByAdminEmail(String adminEmail);
}
