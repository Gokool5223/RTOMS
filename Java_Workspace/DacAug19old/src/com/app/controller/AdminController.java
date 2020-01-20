package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.app.dao.IQuestionDao;
import com.app.dao.QuestionDaoImpl;
import com.app.pojos.Question;
import com.app.pojos.User;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/admin")
public class AdminController 
{
	@Autowired
	IQuestionDao dao;
	
	public AdminController() 
	{
		System.out.println("in ctor of " + getClass().getName());
	}
	
	@PostMapping("/addQuestion")
	public String addQuestion(@RequestBody Question question) {
		System.out.println(question);
		return dao.addQuestion(question);
	}
	
	@GetMapping("/deleteQuestion/{qid}")
	public String removeQuestion(@PathVariable int qid)
	{
		System.out.println("");
		return dao.deleteQuestion(qid);
	}
	
	@PostMapping("/updateQuestion")
	public String updateQuestion(@RequestBody Question question) {
		System.out.println(question);
		question.setAnswerKey(question.getAnswerKey());
		return dao.updateAnswer(question);
	}
	
	@GetMapping("/questionList")
	public List<Question> getQuestionPaper() {
		System.out.println("in Question paper");
		return dao.getQuestion();
	}
	
	
	
	

}
