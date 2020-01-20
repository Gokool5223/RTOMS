package net.devmanuals.dao;

import java.util.List;

import net.devmanuals.model.QuestionOptions;
import net.devmanuals.model.Questions;

public interface QuestionOptionsDao {

	public List<QuestionOptions> listQuestionOptions();

	public List<QuestionOptions> getQuestionOptionsByQuestionId(Long questionId);

	public List<QuestionOptions> getQuestionOptionsByQuesOpId(Long quesOpId);

	public void saveQuestionOptions(QuestionOptions questionOptions);

	public void updateQuestionOptions(QuestionOptions questionOptions);

	public void deleteQuestionOptionsByQuestionId(Long questionId);
}
