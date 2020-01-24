package com.app.pojos;
import javax.persistence.*;


@Entity
public class Document_List {
	
	private Integer docId;
	private String Doc_Name;
	private String filepath;
	private User user;
	
	
	public Document_List() {
		// TODO Auto-generated constructor stub
	}

	public Document_List( String doc_Name, String filepath) {
		super();
		
		Doc_Name = doc_Name;
		this.filepath = filepath;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getDocId() {
		return docId;
	}

	public void setDocId(Integer docId) {
		this.docId = docId;
	}

	public String getDoc_Name() {
		return Doc_Name;
	}

	public void setDoc_Name(String doc_Name) {
		Doc_Name = doc_Name;
	}

	public String getFilepath() {
		return filepath;
	}

	public void setFilepath(String filepath) {
		this.filepath = filepath;
	}

	
	@ManyToOne
	@JoinColumn(name = "userId")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	

	@Override
	public String toString() {
		return "Document_List [docId=" + docId + ", Doc_Name=" + Doc_Name + ", filepath=" + filepath + "]";
	}
	
	

}
