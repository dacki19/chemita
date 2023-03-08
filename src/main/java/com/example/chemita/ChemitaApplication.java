package com.example.chemita;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import lombok.extern.slf4j.Slf4j;

//@ComponentScan({ "com.example.chemita.*" })
//@SpringBootApplication(exclude={DataSourceAutoConfiguration.class}, scanBasePackages={ "com.example.chemita.**" })
//@SpringBootApplication
//@SpringBootApplication(exclude={SqlInitializationAutoConfiguration.class}, scanBasePackages={ "com.example.chemita.**" })
//@EnableJpaRepositories

//@Slf4j
@SpringBootApplication
//@ComponentScan(basePackages = {"com.example.chemita.*"})
public class ChemitaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChemitaApplication.class, args);
	}

}
