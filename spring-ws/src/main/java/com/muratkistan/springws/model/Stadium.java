package com.muratkistan.springws.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
@Entity
@Table(name = "stadiums")
public class Stadium {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	
	@Lob
	@Column(name="image")
	private String image;
	
	@Column(name="name")
	private String name;
	
	@Column(name="team")
	private String team;
	
	@Column(name="capacity")
	private int capacity;
	
	@Column(name="country")
	private String country;
	
	@Column(name="city")
	private String city;
	
	@Column(name="opening_date")
	private LocalDate openingDate;
	
	@Column(name="detail")
	private String detail;
	
	
	
	
	
	
	
	
	

}
