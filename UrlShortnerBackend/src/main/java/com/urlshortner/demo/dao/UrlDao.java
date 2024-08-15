package com.urlshortner.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.urlshortner.demo.entities.URL;
import java.lang.String;
import java.util.List;

public interface UrlDao extends JpaRepository<URL, Integer>{
	Optional<URL> findByShortenedUrl(String shortenedUrl);
}
