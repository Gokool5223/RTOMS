package net.devmanuals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import net.devmanuals.model.Admin;
import net.devmanuals.model.User;
import net.devmanuals.service.AdminService;
import net.devmanuals.validators.AdminLoginValidator;

@Controller
@RequestMapping("/admin/adminlogin")
public class AdminLoginController {
	@Autowired
	private AdminLoginValidator adminLoginValidator;
	@Autowired
	private AdminService adminService;

	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView showAdminLogin(Map model, HttpSession session) {
		if (session.getAttribute("adminEmail") == null) {
			Admin admin = new Admin();
			model.put("admin", admin);
			return new ModelAndView("/admin/adminlogin");
		} else {
			return new ModelAndView("redirect:addquestion.html");
		}
	}

	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView processAdminLogin(@Valid Admin admin,
			BindingResult result, Map model, HttpSession session) {
		adminLoginValidator.validate(admin, result);
		if (result.hasErrors()) {
			return new ModelAndView("/admin/adminlogin");
		}
		List adminlist = adminService.getAdminByAdminEmail(admin
				.getAdminEmail());
		if (adminlist != null && adminlist.size() > 0) {
			Admin admin1 = new Admin();
			admin1 = (Admin) adminlist.get(0);
			session.setAttribute("adminName", admin1.getAdminName());
		}
		session.setAttribute("adminEmail", admin.getAdminEmail());
		return new ModelAndView("redirect:addquestion.html");
	}
}
