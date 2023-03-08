package com.example.chemita.entity;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



//@AllArgsConstructor
//@NoArgsConstructor
//@Builder
//@Data
@Entity
@Table(name="PERSONA")
public class Persona {
	

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	private boolean activo =true;
	private String nombre;
	private String apellido;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public boolean isActivo() {
		return activo;
	}
	public void setActivo(boolean activo) {
		this.activo = activo;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public Persona(Long id, boolean activo, String nombre, String apellido) {
		super();
		this.id = id;
		this.activo = activo;
		this.nombre = nombre;
		this.apellido = apellido;
	}
	public Persona() {
		super();
	}
	@Override
	public String toString() {
		return "Persona [id=" + id + ", activo=" + activo + ", nombre=" + nombre + ", apellido=" + apellido + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(activo, apellido, id, nombre);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Persona other = (Persona) obj;
		return activo == other.activo && Objects.equals(apellido, other.apellido) && Objects.equals(id, other.id)
				&& Objects.equals(nombre, other.nombre);
	}



	
	
}
