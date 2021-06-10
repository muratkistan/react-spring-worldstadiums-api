package com.muratkistan.springws.model.vm;

import java.time.LocalDate;

import com.muratkistan.springws.model.Stadium;

import lombok.Data;

@Data
public class StadiumVM {

	
	private String image;
	private String name;
	private String team;
	private int capacity;
	private String country;
	private String city;
	private LocalDate openingDate;
	
	public StadiumVM(Stadium stadium) {
		this.setImage(stadium.getImage());
		this.setName(stadium.getName());
		this.setTeam(stadium.getTeam());
		this.setCapacity(stadium.getCapacity());
		this.setCountry(stadium.getCountry());
		this.setCity(stadium.getCity());
		this.setOpeningDate(stadium.getOpeningDate());
	}
}
