package fanbase;

import static org.testng.Assert.fail;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class Logout {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @BeforeClass(alwaysRun = true)
  public void setUp() throws Exception {
	  System.setProperty("webdriver.chrome.driver", "C:\\Users\\samadinesh\\Desktop\\chromedriver_win32\\chromedriver.exe");
    driver = new ChromeDriver();
    baseUrl = "https://fanbase-47b85.firebaseapp.com";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void testLogout() throws Exception {
    driver.get(baseUrl + "/");
    driver.findElement(By.linkText("Login-Register")).click();
    driver.findElement(By.id("txtEmailFanL")).clear();
    driver.findElement(By.id("txtEmailFanL")).sendKeys("tellasamantha@gmail.com");
    driver.findElement(By.id("txtPasswordFanL")).clear();
    driver.findElement(By.id("txtPasswordFanL")).sendKeys("education2016");
    driver.findElement(By.id("btnLoginFan")).click();
    driver.findElement(By.linkText("About us & Contact")).click();
    driver.findElement(By.linkText("Fan")).click();
    driver.findElement(By.linkText("Login-Register")).click();
    driver.findElement(By.id("btnLogoutFan")).click();
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
