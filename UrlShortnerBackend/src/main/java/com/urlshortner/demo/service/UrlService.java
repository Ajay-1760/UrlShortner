package com.urlshortner.demo.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.urlshortner.demo.dao.UrlDao;
import com.urlshortner.demo.entities.URL;

@Service
public class UrlService {
	
	@Autowired
	private UrlDao urlDao;
	private static long idCounter = 1;
	
	public URL generateShortUrl(String originalUrl) {
		
		URL url=new URL();
		
		url.setOriginalUrl(originalUrl);
		url.setCreatedAt(LocalDateTime.now());
		
		String shortenedUrl= generateShortenedUrl(originalUrl);
		url.setShortenedUrl(shortenedUrl);
		
		return urlDao.save(url);
		
	}
	
    private String generateShortenedUrl(String originalUrl) {
    	long id = idCounter++;
        return idToShortURL(id);
    }
    
    String idToShortURL(long n)
    {
        // Map to store 62 possible characters
        char map[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toCharArray();
      
        StringBuilder shorturl = new StringBuilder();
      
        // Convert given integer id to a base 62 number
        while (n>0)
        {
            shorturl.append(map[(int)n%62]);
            n = n/62;
        }
      
        return shorturl.reverse().toString();
    }

	public Optional<URL> generateOriginalUrl(String shortenedUrl) {
		// TODO Auto-generated method stub
		return urlDao.findByShortenedUrl(shortenedUrl);
	}
}
