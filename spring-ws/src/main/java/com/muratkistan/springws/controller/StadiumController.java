package com.muratkistan.springws.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.muratkistan.springws.model.Stadium;
import com.muratkistan.springws.service.StadiumService;

@RestController
@RequestMapping("/api/1.0")
public class StadiumController {
	
	private StadiumService stadiumService;

	@Autowired
	public StadiumController(StadiumService stadiumService) {
		super();
		this.stadiumService = stadiumService;
	}
	// deneme
	
	
	@GetMapping("/stadiums")
	public Page<Stadium> getStadium(Pageable page ){
	return stadiumService.getStadiums(page);
		
	}
	
	@PostMapping("/create-stadium")
	public Stadium createStadium(@RequestBody Stadium stadium) {
		 return stadiumService.createStadium(stadium);
	}
	
	
	@GetMapping("/stadiums/{id}")
	public Stadium getStadiumById(@PathVariable Long id) {
		
		return stadiumService.getStadiumById(id);
		
	
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Stadium> updateStadium(@PathVariable(value = "id") Long id, @RequestBody Stadium newStadium){
	 
	 return ResponseEntity.ok(stadiumService.updateStadium(id, newStadium));
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteEmployee( @PathVariable Long id){
		stadiumService.deleteStadium(id);
		return "Deleted  : "+ id; 
		
	}
	
}
