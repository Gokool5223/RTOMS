package net.devmanuals.dao;

import java.util.List;

import net.devmanuals.model.Language;

public interface LanguageDao {
	public List<Language> listLanguages();

	public List<Language> getLanguageByLanguageId(Long languageId);
}
