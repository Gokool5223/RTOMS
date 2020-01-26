package com.app.pojos;

import java.util.Date;


import javax.persistence.*;


import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
public class ScheduleTest {
	private Integer scheduleId;
	@DateTimeFormat( pattern = "yyyy-MM-dd")
    private Date testDate;
	private String testTime;
	private User userst;
	
	public ScheduleTest() {
	System.out.println("Inside schedule test");
	}


	public ScheduleTest(Date testDate, String testTime, User userst) {
		super();
		this.testDate = testDate;
		this.testTime = testTime;
		this.userst = userst;
	}



	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Integer getScheduleId() {
		return scheduleId;
	}

	public void setScheduleId(Integer scheduleId) {
		this.scheduleId = scheduleId;
	}


	public Date getTestDate() {
		return testDate;
	}


	public void setTestDate(Date testDate) {
		this.testDate = testDate;
	}



	public String getTestTime() {
		return testTime;
	}

	public void setTestTime(String testTime) {
		this.testTime = testTime;
	}

	@JsonIgnore
	@OneToOne
	@JoinColumn(name="userSchT_id")
	public User getUserst() {
		return userst;
	}


	public void setUserst(User userst) {
		this.userst = userst;
	}







	@Override
	public String toString() {
		return "ScheduleTest [scheduleId=" + scheduleId + ", testDate=" + testDate + ", testTime=" + testTime + "]";
	}


	
	
	

}
