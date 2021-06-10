package com.muratkistan.springws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.muratkistan.springws.model.Stadium;

@Repository
public interface StadiumRepository extends JpaRepository<Stadium, Long> {

}
