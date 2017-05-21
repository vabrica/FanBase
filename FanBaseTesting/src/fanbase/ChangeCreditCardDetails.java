package fanbase;



import java.util.concurrent.TimeUnit;
import org.testng.annotations.*;
import static org.testng.Assert.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

public class ChangeCreditCardDetails {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @BeforeClass(alwaysRun = true)
  public void setUp() throws Exception {
	  System.setProperty("webdriver.chrome.driver", "C:\\Users\\samadinesh\\Desktop\\chromedriver_win32\\chromedriver.exe");
    driver = new ChromeDriver();
    baseUrl = "https://fanbase-47b85.firebaseapp.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void testChangeCreditCardDetails() throws Exception {
    //driver.get(baseUrl + "fan_personaldetails.html");
	  	driver.get(baseUrl + "login_registration.html");
	    driver.findElement(By.id("txtEmailFanL")).clear();
	    driver.findElement(By.id("txtEmailFanL")).sendKeys("tellasamantha@gmail.com");
	    driver.findElement(By.id("txtPasswordFanL")).clear();
	    driver.findElement(By.id("txtPasswordFanL")).sendKeys("education2016");
	    driver.findElement(By.id("btnLoginFan")).click();
	   // 
	    driver.findElement(By.xpath("/html/body/div/div[1]/h2[1]/a")).click();
    driver.findElement(By.cssSelector("input.form-control.input-md")).clear();
    driver.findElement(By.cssSelector("input.form-control.input-md")).sendKeys("tellasamantha@gmail.com");
    driver.findElement(By.xpath("(//input[@type='text'])[2]")).clear();
    driver.findElement(By.xpath("(//input[@type='text'])[2]")).sendKeys("education2016");
    driver.findElement(By.id("credit-card")).clear();
    driver.findElement(By.id("credit-card")).sendKeys("4224 5678 2345 3303");
    driver.findElement(By.id("expiryDate")).clear();
    driver.findElement(By.id("expiryDate")).sendKeys("11/20");
    driver.findElement(By.id("cvn")).clear();
    driver.findElement(By.id("cvn")).sendKeys("124");
    driver.findElement(By.id("photo-id")).clear();
    driver.findElement(By.id("photo-id")).sendKeys("C:\\Users\\samadinesh\\Desktop\\CS265B\\fakes.txt");
    driver.findElement(By.id("proof-address")).clear();
    driver.findElement(By.id("proof-address")).sendKeys("C:\\Users\\samadinesh\\Desktop\\CS265B\\fakes.txt");
    driver.findElement(By.xpath("//button[@type='submit']")).click();
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
}
