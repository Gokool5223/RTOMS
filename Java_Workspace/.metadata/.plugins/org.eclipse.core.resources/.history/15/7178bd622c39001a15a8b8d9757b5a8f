package net.devmanuals.dao.daoImpl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import net.devmanuals.dao.LanguageDao;
import net.devmanuals.model.Language;
import net.devmanuals.model.User;

@Repository("languageDao")
public class LanguageDaoImpl implements LanguageDao {
	@Autowired
	private SessionFactory sessionFactory;

	public List<Language> listLanguages() {
		return (List<Language>) sessionFactory.getCurrentSession()
				.createCriteria(Language.class).list();
	}

	@Override
	public List<Language> getLanguageByLanguageId(Long languageId) {
		return sessionFactory.getCurrentSession().createQuery(
				"from Language where languageId=:languageId").setParameter(
				"languageId", languageId).list();
	}
}
