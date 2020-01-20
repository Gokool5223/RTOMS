package com.app.pojos;

import javax.persistence.*;

@Entity
public class User 
{
	
	 private Integer userId;
	 private String email;
	 private String userName;
	 private String password;
	 private Role role;
	 
	 public User() {
		System.out.println("in user class");
	}

 
 
	 public User(Integer userId, String email, String userName, String password) {
		super();
		this.userId = userId;
		this.email = email;
		this.userName = userName;
		this.password = password;
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



	@Override
	public String toString() {
		return "User [userId=" + userId + ", email=" + email + ", userName=" + userName + ", password=" + password
				+ ", role=" + role + "]";
	}



	 
		
}
