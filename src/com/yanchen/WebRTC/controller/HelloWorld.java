package com.yanchen.WebRTC.controller;

import org.opencv.core.Core;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloWorld {
	
	@RequestMapping("/welcome")
	public ModelAndView helloWorld(){
		String message = "Making sure this works";
		
		return new ModelAndView("welcome", "message", message);
	
	};


}
