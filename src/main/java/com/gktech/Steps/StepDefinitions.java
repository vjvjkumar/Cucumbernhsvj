package com.gktech.Steps;


import com.gktech.base.TestBaseVJ;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {
		TestBaseVJ cucumber = TestBaseVJ.getInstance();
	//   classname cucumber = classname.getinstance();	
		
@Given ("^I open firefox \"([^\"]*)\"$")
	public void I_open (String browser){
	System.out.println("I open "+browser+" browser");
	cucumber.OpenBrowser();
}
@When ("^I navigate \"([^\"]*)\"$")
	public void I_navigate (String appurl){
	System.out.println("I navigate "+appurl);
	cucumber.navigate(appurl);
}
@Then ("^I click on \"([^\"]*)\"$")
	public void I_click_on (String logLink){
	System.out.println("I click on "+logLink);
	cucumber.click(logLink);
}
@Then ("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter_username (String prop, String text){
	System.out.println("I enter "+prop+" as "+text);
	cucumber.type(prop, text);
}
// now next two properties are "enter" and "click" so it can be ignored... continue with homepage
	@Then("^I got the \"([^\"]*)\" page.$")
	public void I_got_the_page(String home) {	
			System.out.println("I got the "+home+" page");
		}

}
