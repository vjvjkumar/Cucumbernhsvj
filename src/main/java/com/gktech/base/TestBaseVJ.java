package com.gktech.base;

import java.io.FileInputStream;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;



public class TestBaseVJ {
	
	public Properties OR=null;
	public FileInputStream ip=null;
	WebDriver driver;
	static TestBaseVJ tb;

//Now create the Constructor for to use the Objects and Load the files
	public TestBaseVJ (){
		if (OR==null){
	try{
	OR=new Properties();
	ip=new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com/gktech/config/OR.properties");
	OR.load(ip);
	}catch (Throwable t){
		
		System.out.println("Properties and Files not loaded correctly");
		}
	}else{
		System.out.println("Properties and Files loaded correctly");
		}
}
	public static TestBaseVJ getInstance (){
		if(tb==null){
			tb=new TestBaseVJ();
		}else{
		     return tb;	
		}
		return tb;
		}
	
	
	public void OpenBrowser() {
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
	}
	
	public void CloseBrowser(){
		driver.close();
	}
	
	public void navigate (String appurl){
		driver.get(OR.getProperty(appurl));
	}
	
	public void click (String prop){
		driver.findElement(By.xpath(OR.getProperty(prop))).click();
	}
	
	public void type(String prop, String text){
		driver.findElement(By.xpath(OR.getProperty(prop))).sendKeys(text);
	}
	
	public void select(String prop, String text){
		driver.findElement(By.xpath(OR.getProperty(prop))).sendKeys(text);
	}
}	

