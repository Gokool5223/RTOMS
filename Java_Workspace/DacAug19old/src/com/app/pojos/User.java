package com.app.pojos;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.xml.internal.ws.client.sei.ResponseBuilder.DocLit;

@Entity
public class User 
{
	
	 private Integer userId;
	 private String email;
	 private String userName;
	 private String password;
	 private Role role;
	 //private List<Question> question;
	 //@JsonIgnore
	 private Application application;
	 
	 private ScheduleTest scheduleTest;
	 
	 private List<Document_List> doc_list;
	 
	 
	 
	 


	private TestResult testResult;
	// private List<Answer> answer;	
	 private List<Response> responses;
	 
	 
	 public User() {
		System.out.println("in user class");
	}

 
 

	 


	
	 public User(String email, String userName, String password, Role role, Application application,
			TestResult testResult, List<Response> responses) {
		super();
		this.email = email;
		this.userName = userName;
		this.password = password;
		this.role = role;
		this.application = application;
		this.testResult = testResult;
		this.responses = responses;
	}








	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 public Integer getUserId() {
		return userId;
	 }

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	@Column(unique = true,nullable = false)
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(nullable = false)
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	@Column(nullable = false)
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	@Enumerated(EnumType.STRING)
	public Role getRole() {
		return role;
	}



	public void setRole(Role role) {
		this.role = role;
	}

	
	@OneToOne(mappedBy="usert",cascade=CascadeType.ALL)
	public TestResult getTestResult() {
		return testResult;
	}
	
	
	public void setTestResult(TestResult testResult) {
		this.testResult = testResult;
	}
	
	@OneToOne(mappedBy="userst",cascade=CascadeType.ALL)
	public ScheduleTest getScheduleTest() {
		return scheduleTest;
	}


	public void setScheduleTest(ScheduleTest scheduleTest) {
		this.scheduleTest = scheduleTest;
	}

	@JsonIgnore
	@ElementCollection //mandatory
	@CollectionTable(name="answer_response",joinColumns=@JoinColumn(name="u_id"))
	public List<Response> getResponses() {
		return responses;
	}

	public void setResponses(List<Response> responses) {
		this.responses = responses;
	}

	
	

	/*@OneToMany(mappedBy="user",cascade=CascadeType.ALL)
	 public List<Question> getQuestion() {
		return question;
	}

	 public void setQuestion(List<Question> question) {
		this.question = question;
	}
	 */
	/* @OneToMany(mappedBy="user",cascade=CascadeType.ALL)
	 public List<Answer> getAnswer() {
			return answer;
		}





		public void setAnswer(List<Answer> answer) {
			this.answer = answer;
		}
		*/
	
	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval =true)
	public Application getApplication() {
		return application;
	}



	public void setApplication(Application application) {
		this.application = application;
	}


	



	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
	public List<Document_List> getDoc_list() {
		return doc_list;
	}








	public void setDoc_list(List<Document_List> doc_list) {
		this.doc_list = doc_list;
	}








	@Override
	public String toString() {
		return "User [userId=" + userId + ", email=" + email + ", userName=" + userName + ", password=" + password
				+ ", role=" + role + ", application=" + application + ", testResult=" + testResult + ", responses="
				+ responses + "]";
	}

	public void addDocument(Document_List doc)
	{
		doc_list.add(doc);
		doc.setUser(this);
	}
	

	public void removeDoc(Document_List doc)
	{
		doc_list.remove(doc);
		doc.setUser(null);
	}



	







	 
		
}
