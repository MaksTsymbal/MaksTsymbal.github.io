function getChatID() {
    if (window.Telegram && window.Telegram.WebApp) {
      // return window.Telegram.WebApp.initDataUnsafe.user.id;
      return window.Telegram.WebApp.initDataUnsafe.user.id;
    } else {
      console.error("Telegram WebApp API is not available.");
      return null;
    }
  }
  