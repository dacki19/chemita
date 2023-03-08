package com.example.chemita.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.chemita.dao.PersonaDao;
import com.example.chemita.entity.Persona;
@Service
public class PersonaService{

	@Autowired()
	private PersonaDao personaDao;

	public void creaPersona(Persona persona) {

		personaDao.save(persona);
		
		
	}

	public PersonaDao getPersonaDao() {
		return personaDao;
	}

	public void setPersonaDao(PersonaDao personaDao) {
		this.personaDao = personaDao;
	}

}
