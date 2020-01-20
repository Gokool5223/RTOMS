package net.devmanuals.service.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import net.devmanuals.dao.QuestionsDao;
import net.devmanuals.model.Questions;
import net.devmanuals.service.QuestionsService;

@Service("questionsService")
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class QuestionsServiceImpl implements QuestionsService {
   
	@Autowired
	private QuestionsDao questionsDao;
	
	@Override
	public List<Questions> listQuestions(){
		   return questionsDao.listQuestions();		
	 }
	
	@Override
	public List<Questions> getQuestionsByLanguageId(Long languageId){
		   return questionsDao.getQuestionsByLanguageId(languageId);		
	  }
	
	@Override
	public List<Questions> getQuestionsByQuestionId(Long questionId){
		   return questionsDao.getQuestionsByQuestionId(questionId);
	    }
	
	@Override
	public void saveQuestions(Questions questions){
		   questionsDao.saveQuestions(questions);
	 }
	
	@Override
	public void updateQuestions(Questions questions){
		   questionsDao.updateQuestions(questions);
	 }
	
	@Override
	public void deleteQuestions(Questions questions){
		questionsDao.deleteQuestions(questions); 
	 }
	
	@Override
	public List<Questions> getTenRandomQuestionsByLanguageId(Long languageId){
		return questionsDao.getTenRandomQuestionsByLanguageId(languageId);  
	 }
}
