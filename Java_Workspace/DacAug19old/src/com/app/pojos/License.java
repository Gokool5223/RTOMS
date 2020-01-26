package com.app.pojos;

import java.util.Date;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class License 
{
	private Integer llrId;
	@JsonFormat(pattern="yyyy-MM-dd") 
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date issueDate;
	@JsonFormat(pattern="yyyy-MM-dd") 
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date expiryDate;
	
	//one to one 
	private Application application;
	
	public License() {
		System.out.println("In License POJO");
		
	}

	public License(Date issueDate, Date expiryDate, Application application) {
		super();
		this.issueDate = issueDate;
		this.expiryDate = expiryDate;
		this.application = application;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getLlrId() {
		return llrId;
	}

	public void setLlrId(Integer llrId) {
		this.llrId = llrId;
	}

	@Temporal(TemporalType.DATE)
	public Date getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(Date issueDate) {
		this.issueDate = issueDate;
	}

	@Temporal(TemporalType.DATE)
	public Date getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}

	
	@OneToOne
	@JoinColumn(name="app_id")
	public Application getApplication() {
		return application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}

	@Override
	public String toString() {
		return "License [llrId=" + llrId + ", issueDate=" + issueDate + ", expiryDate=" + expiryDate + "]";
	}
	
	
	

}