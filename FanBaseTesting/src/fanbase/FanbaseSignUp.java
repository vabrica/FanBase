package fanbase;

import java.util.concurrent.TimeUnit;
import org.testng.annotations.*;
import static org.testng.Assert.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

public class FanbaseSignUp {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @BeforeClass(alwaysRun = true)
  public void setUp() throws Exception {
	  System.setProperty("webdriver.chrome.driver", "C:\\Users\\samadinesh\\Desktop\\chromedriver_win32\\chromedriver.exe");  // Your chromedriver path.
	  DesiredCapabilities dc = new DesiredCapabilities();
      dc.setCapability(CapabilityType.UNEXPECTED_ALERT_BEHAVIOUR, UnexpectedAlertBehaviour.IGNORE);
      driver = new ChromeDriver(dc);
    //driver = new ChromeDriver();
    baseUrl = "https://fanbase-47b85.firebaseapp.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void testSignUp() throws Exception {
    driver.get(baseUrl + "login_registration.html");
    driver.findElement(By.id("txtEmailFan")).clear();
    driver.findElement(By.id("txtEmailFan")).sendKeys("sam123");
    driver.findElement(By.id("txtEmailFan")).clear();
    driver.findElement(By.id("txtEmailFan")).sendKeys("sam123@gmail.com");
    driver.findElement(By.id("confemailF")).clear();
    driver.findElement(By.id("confemailF")).sendKeys("sam123@gmail.com");
    driver.findElement(By.id("btnSignUpFan")).click();
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

