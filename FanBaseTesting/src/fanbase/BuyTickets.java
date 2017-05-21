package fanbase;

import java.util.concurrent.TimeUnit;
import org.testng.annotations.*;
import static org.testng.Assert.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

public class BuyTickets {
	  private WebDriver driver;
	  private String baseUrl;
	  private boolean acceptNextAlert = true;
	  private StringBuffer verificationErrors = new StringBuffer();


	@BeforeClass(alwaysRun = true)
	public void setUp() throws Exception {
			  System.setProperty("webdriver.chrome.driver", "C:\\Users\\samadinesh\\Desktop\\chromedriver_win32\\chromedriver.exe");  // Your chromedriver path.
			  driver = new ChromeDriver();
		    //driver = new FirefoxDriver();
		    baseUrl = "https://fanbase-47b85.firebaseapp.com/";
		    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		  }
	  
	 

	  @Test
	  public void testBuyingTickets() throws Exception {
	    driver.get(baseUrl + "/");
	    driver.findElement(By.linkText("Login-Register")).click();
	    driver.findElement(By.id("txtEmailFanL")).clear();
	    driver.findElement(By.id("txtEmailFanL")).sendKeys("tellasamantha@gmail.com");
	    driver.findElement(By.id("txtPasswordFanL")).clear();
	    driver.findElement(By.id("txtPasswordFanL")).sendKeys("education2016");
	    driver.findElement(By.id("btnLoginFan")).click();
	    driver.findElement(By.linkText("Home")).click();
	    driver.findElement(By.linkText("Buy tickets")).click();
	    driver.findElement(By.xpath("//button[@onclick=\"selectionInfo('0')\"]")).click();
	    //new Select(driver.findElement(By.id("ticketQty"))).selectByVisibleText("2");
	    // ERROR: Caught exception [ERROR: Unsupported command [selectFrame | __privateStripeFrame3 | ]]
	    driver.findElement(By.name("cardnumber")).clear();
	    driver.findElement(By.name("cardnumber")).sendKeys("4242 4242 4242 4242");
	    driver.findElement(By.name("exp-date")).clear();
	    driver.findElement(By.name("exp-date")).sendKeys("09 / 20");
	    driver.findElement(By.name("cvc")).clear();
	    driver.findElement(By.name("cvc")).sendKeys("123");
	    // ERROR: Caught exception [ERROR: Unsupported command [selectWindow | null | ]]
	    driver.findElement(By.id("usrname")).clear();
	    driver.findElement(By.id("usrname")).sendKeys("tellasamantha@gmail.com");
	    driver.findElement(By.id("clickButton")).click();
	  }

	  @AfterClass(alwaysRun = true)
	  public void tearDown() throws Exception {
	    driver.quit();
	    String verificationErrorString = verificationErrors.toString();
	    if (!"".equals(verificationErrorString)) {
	      fail(verificationErrorString);
	    }
	  }

	  public boolean isElementPresent(By by) {
	    try {
	      driver.findElement(by);
	      return true;
	    } catch (NoSuchElementException e) {
	      return false;
	    }
	  }

	  public boolean isAlertPresent() {
	    try {
	    	
	      driver.switchTo().alert();
	      return true;
	    } catch (NoAlertPresentException e) {
	      return false;
	    }
	  }

	  public String closeAlertAndGetItsText() {
	    try {
	      Alert alert = driver.switchTo().alert();
	      String alertText = alert.getText();
	      if (acceptNextAlert) {
	        alert.accept();
	      } else {
	        alert.dismiss();
	      }
	      return alertText;
	    } finally {
	      acceptNextAlert = true;
	    }
	  }
	  
	 
	  
	 public void alertHandler(){
	       // driver = driver.get("https://fanbase-47b85.firebaseapp.com/gigs.html");

	        try {
	            driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li/a")).click();
	        } catch (UnhandledAlertException f) {
	            try {
	                Alert alert = driver.switchTo().alert();
	                String alertText = alert.getText();
	                System.out.println("Alert data: " + alertText);
	                alert.accept();
	            } catch (NoAlertPresentException e) {
	                e.printStackTrace();
	            }
	        }

	        }
	        
	  
}