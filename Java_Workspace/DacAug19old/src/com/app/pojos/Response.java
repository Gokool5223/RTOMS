package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Response 
{
	
	

	private Integer responseId;
	private Integer submittedAns;
	private Integer questionId;
	private Integer userId;
	
	
	
	public Response() {
		System.out.println("in Response");
	}



	public Response(Integer responseId, Integer submittedAns, Integer questionId, Integer userId) {
		super();
		this.responseId = responseId;
		this.submittedAns = submittedAns;
		this.questionId = questionId;
		this.userId = userId;
	}


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getResponseId() {
		return responseId;
	}



	public void setResponseId(Integer responseId) {
		this.responseId = responseId;
	}



	public Integer getSubmittedAns() {
		return submittedAns;
	}



	public void setSubmittedAns(Integer submittedAns) {
		this.submittedAns = submittedAns;
	}



	public Integer getQuestionId() {
		return questionId;
	}



	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}



	public Integer getUserId() {
		return userId;
	}



	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	

	@Override
	public String toString() {
		return "Response [responseId=" + responseId + ", submittedAns=" + submittedAns + ", questionId=" + questionId
				+ ", userId=" + userId + "]";
	}


	
	
	
	

	

}
	
