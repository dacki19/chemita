package com.example.chemita.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.chemita.entity.Persona;

public interface PersonaDao extends JpaRepository<Persona, Long>{
	
}

