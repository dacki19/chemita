package com.example.chemita.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.example.chemita.entity.Persona;
import com.example.chemita.service.PersonaService;

@Controller
public class ArquetipoController {
	
	@Autowired
	PersonaService personaSercvice;
	
	@GetMapping(value = "/")
	public ModelAndView index() {
		// cuando cree el mvcConfig no haran falta para solo direccionar
		return new ModelAndView("index");
	}
	
	@GetMapping(value = "/listaPersona")
	public ModelAndView listaPersona() {
		
//		Persona persona = new Persona();
//		persona.setNombre("chemita");
//		persona.setApellido("torrente");	
//		personaSercvice.creaPersona(persona);
		ModelAndView mav = new ModelAndView("comun/listaPersona"); 
		mav.addObject("listaPersona",personaSercvice.getPersonaDao().findAll());
		
		// cuando cree el mvcConfig no haran falta para solo direccionar
		return mav;
	}
	
	

@GetMapping(value = "/creaPersona")
public ModelAndView creaPersona() {
	
	Persona persona = new Persona();
	persona.setNombre("chemita");
	persona.setApellido("torrente");	
	personaSercvice.creaPersona(persona);
	ModelAndView mav = new ModelAndView("comun/listaPersona"); 
	mav.addObject("listaPersona",personaSercvice.getPersonaDao().findAll());
	
	// cuando cree el mvcConfig no haran falta para solo direccionar
	return mav;
}

	

}
