package net.devmanuals.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import net.devmanuals.dao.LanguageDao;
import net.devmanuals.model.Language;
import net.devmanuals.service.LanguageService;

@Service("languageService")
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class LanguageServiceImpl implements LanguageService {
	@Autowired
	private LanguageDao languageDao;
	
	public List<Language> listLanguages(){		   
		   return languageDao.listLanguages();	 
	 }
	
	public List<Language> getLanguageByLanguageId(Long languageId){
		   return languageDao.getLanguageByLanguageId(languageId);
	 }

}
