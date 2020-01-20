/*package com.app.pojos;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Answer {
	Integer questionId;
	Integer ans;
	private User user;
	private Question question;
	
	
	public Answer() 
	{
		// TODO Auto-generated constructor stub
	}

	public Answer(Integer questionId, Integer ans, Integer userId) {
		super();
		this.questionId = questionId;
		this.ans = ans;
		
	}

	public Integer getQuestionId() {
		return questionId;
	}

	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}

	public Integer getAns() {
		return ans;
	}

	public void setAns(Integer ans) {
		this.ans = ans;
	}
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="answer")
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	@OneToOne
	@JoinColumn(name="answerofque")
	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}
	

	

		

}
*/
