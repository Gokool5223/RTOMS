package com.app.pojos;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class TestResult {
	private Integer resultId;
	private Integer score;
	private User usert;
	
	public TestResult() {
		System.out.println("In Test Result");
	}
	
	
	public TestResult(Integer resultId, Integer score, User usert) {
		super();
		this.resultId = resultId;
		this.score = score;
		this.usert = usert;
	}


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="resultId")
	public Integer getResultId() {
		return resultId;
	}
	public void setResultId(Integer resultId) {
		this.resultId = resultId;
	}
	
	
	public Integer getScore() {
		return score;
	}
	public void setScore(Integer score) {
		this.score = score;
	}
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name="user_id")
	public User getUsert() {
		return usert;
	}
	
	public void setUsert(User usert) {
		this.usert = usert;
	}
	@Override
	public String toString() {
		return "TestResult [resultId=" + resultId + ", score=" + score + "]";
	}
	
	
	

	
	
	
	
	
}