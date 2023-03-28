import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", function(){
    console.log("I am on the login page")
});
When("I enter my valid email and password", function(){
    console.log("I enter my valid email and password")
});
When("I enter my invalid email and password",function(){
    console.log("I enter my invalid email and password")
});
And("click on the login button",function(){
    console.log("click on the login button")
});
Then("I should be redirected to the home page",function(){
    console.log("I should be redirected to the home page")
});
Then("I will see an error message",function(){
    console.log("I will see an error message")
});