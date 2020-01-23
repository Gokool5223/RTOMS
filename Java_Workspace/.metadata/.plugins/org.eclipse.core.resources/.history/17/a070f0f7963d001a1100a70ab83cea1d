package com.app.dao;
import java.util.List;

import org.hibernate.Session;
//import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//import com.app.pojos.Answer;
import com.app.pojos.Question;
//import com.app.pojos.User;
import com.app.pojos.Response;
import com.app.pojos.User;

@Service
@Transactional
public class QuestionDaoImpl implements IQuestionDao{
	
	@Autowired
	private SessionFactory sf;

	@Override
	public List<Question> getQuestion() 
	{
		String jpql = "select q from Question q ";
		return sf.getCurrentSession().createQuery(jpql, Question.class).getResultList();
	

	}
		
			
	
	@Override
	public String addQuestion(Question question) {
		sf.getCurrentSession().persist(question);
		return "Question added";
	}

	@Override
	public String deleteQuestion(int qid) {
		Question q=sf.getCurrentSession().get(Question.class, qid);
		sf.getCurrentSession().delete(q);
		return "sucessfully deleted";
		
	}



	@Override
	public String updateAnswer(Question q) {
		
		Question question=sf.getCurrentSession().get(Question.class, q.getQid());
		question.setQuestion(q.getQuestion());
		question.setOption1(q.getOption1());
		question.setOption2(q.getOption2());
		question.setOption3(q.getOption3());
		question.setOption4(q.getOption4());
		question.setAnswerKey(q.getAnswerKey());
		return "AnswerKey updated in Question";
	}



	@Override
	public Integer getMarks(List<Response> list) {
		Integer marks=0;
		Session hs = sf.getCurrentSession();
		for(Response response:list)
		{
			Question q=new Question();
			User u=new User();//id=0
			u.setUserId(response.getUserId());
			
			q=hs.get(Question.class,response.getQuestionId());
			
			
			
			
			if(u.getUserId()==response.getUserId() && q.getQid()==response.getQuestionId() && q.getAnswerKey()==response.getSubmittedAns())
			{
				marks++;
			}
			
		}
			
		
		
		return marks;
	}



	@Override
	public Question getQuestionDetails(int qid) {
		return sf.getCurrentSession().get(Question.class,qid);
	}

	

	

	/*@Override
	public Integer getScore(List<Answer> dtos) {
		// TODO Auto-generated method stub
		return null;
	}
	*/
}

