package com.muratkistan.springws.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.muratkistan.springws.file.FileService;
import com.muratkistan.springws.model.Stadium;
import com.muratkistan.springws.repository.StadiumRepository;

@Service
public class StadiumService {
	private StadiumRepository stadiumRepository;
	private FileService fileService ; 

	@Autowired
	public StadiumService(StadiumRepository stadiumRepository,FileService fileService) {
		super();
		this.stadiumRepository = stadiumRepository;
		this.fileService = fileService;
	}
	

	public Stadium createStadium(Stadium stadium) {
		return stadiumRepository.save(stadium);
		
	}


	public Page<Stadium> getStadiums(Pageable page) {
		return stadiumRepository.findAll(page);
	}
	
	public Stadium getStadiumById(Long id) {
		Optional<Stadium> stadium = stadiumRepository.findById(id);
		
		return stadium.get();
	}
	
	public Stadium updateStadium(long id, Stadium stadium) {
		Optional<Stadium> stadiumOld = stadiumRepository.findById(id);
		

		
		stadiumOld.get().setImage(stadium.getImage());
		stadiumOld.get().setName(stadium.getName());
		stadiumOld.get().setTeam(stadium.getTeam());
		stadiumOld.get().setCapacity(stadium.getCapacity());
		stadiumOld.get().setCountry(stadium.getCountry());
		stadiumOld.get().setCity(stadium.getCity());
		stadiumOld.get().setOpeningDate(stadium.getOpeningDate());
		stadiumOld.get().setDetail(stadium.getDetail());
		

		
		return stadiumRepository.save(stadiumOld.get());
		
	}
	
	


	public void deleteStadium( Long id){
		Optional<Stadium> stadium = stadiumRepository.findById(id);
		 stadiumRepository.delete(stadium.get());
	
		
	}
	
	


	

}
