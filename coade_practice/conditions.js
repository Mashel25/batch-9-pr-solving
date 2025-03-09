function condition(value) {
    if (value >= 0 && value <= 60) {
      console.log("You have failed");
    } else if (value > 60 && value <= 100) {
      console.log("You have passed");
    } else {
      console.log("You have enter invalid value");
    }
  }
  
  condition(-1000);