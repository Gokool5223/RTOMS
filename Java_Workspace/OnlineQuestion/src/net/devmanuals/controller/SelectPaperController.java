package net.devmanuals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import net.devmanuals.model.Language;
import net.devmanuals.model.User;
import net.devmanuals.service.LanguageService;

@Controller
@RequestMapping("/user/selectpaper")
public class SelectPaperController {
	@Autowired
	private LanguageService languageService;

	@RequestMapping(method = RequestMethod.GET)
	public String showSelectPaper(Map model, HttpSession session) {
		if ((session.getAttribute("userEmail")) == null) {
			User user = new User();
			model.put("user", user);
			return "/user/userlogin";
		}
		Language language = new Language();
		model.put("language", language);
		model.put("languagelist", languageService.listLanguages());
		return "/user/selectpaper";
	}

	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView processSelectPaper(@Valid Language language, Map model,
			HttpSession session) {
		if ((session.getAttribute("userEmail")) == null) {
			return new ModelAndView("redirect:userlogin.html");
		}
		Long languageId = language.getLanguageId();
		if (languageId == -1) {
			model.put("languagelist", languageService.listLanguages());
			model.put("errormessage", "Select Language");
			return new ModelAndView("/user/selectpaper");
		}
		return new ModelAndView("redirect:questionpaper.html?languageId="
				+ language.getLanguageId());
	}
}
