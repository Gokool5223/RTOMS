package net.devmanuals.controller;

import java.util.ArrayList;
import java.util.List;

import net.devmanuals.model.QuestionOptions;
import net.devmanuals.model.Questions;
import net.devmanuals.model.User;
import net.devmanuals.service.QuestionOptionsService;
import net.devmanuals.service.QuestionsService;
import net.devmanuals.validators.QuestionPaperCommand;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping(value = "/user/questionpaperresult")
public class QuestionPaperResultController {

	@Autowired
	private QuestionsService questionsService;
	@Autowired
	private QuestionOptionsService questionOptionsService;

	@RequestMapping(method = RequestMethod.GET)
	public String showQuestionPaperResult(Map model, HttpSession session) {
		if ((session.getAttribute("userEmail")) == null) {
			User user = new User();
			model.put("user", user);
			return "/user/userlogin";
		}
		List<QuestionPaperCommand> questionPaperList = new ArrayList<QuestionPaperCommand>();
		List questonIdList = (List) session.getAttribute("questonIdList");

		List questionlist = new ArrayList();
		for (int i = 0; i < questonIdList.size(); i++) {
			Long questionId = (Long) questonIdList.get(i);
			questionlist = questionsService
					.getQuestionsByQuestionId(questionId);
			if (questionlist != null && questionlist.size() > 0) {
				for (int j = 0; j < questionlist.size(); j++) {
					QuestionPaperCommand questionPaperCommand = new QuestionPaperCommand();
					List questionOptionsList = new ArrayList();
					Questions questions = new Questions();
					questions = (Questions) questionlist.get(j);
					questionPaperCommand.setQuestionId(questions
							.getQuestionId());
					questionPaperCommand.setQuestion(questions.getQuestion());
					// questionOptionsList
					questionOptionsList = questionOptionsService
							.getQuestionOptionsByQuesOpId(questions
									.getRightOption());
					if (questionOptionsList != null
							&& questionOptionsList.size() > 0) {
						QuestionOptions questionOptions = (QuestionOptions) questionOptionsList
								.get(0);
						questionPaperCommand.setOption1(questionOptions
								.getAnsDescription());

					}
					questionPaperList.add(questionPaperCommand);
				}
			}
		}

		model.put("questionPaperList", questionPaperList);
		model.put("totalQuestion", session.getAttribute("totalQuestion"));
		model.put("rightAnswer", session.getAttribute("rightAnswer"));
		model.put("wongAnswer", session.getAttribute("wongAnswer"));

		session.removeAttribute("totalQuestion");
		session.removeAttribute("rightAnswer");
		session.removeAttribute("wongAnswer");

		return "/user/questionpaperresult";
	}

}
