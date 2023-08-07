    let number = prompt("Введите число:");

    let lastTwo = number % 100;
    let lastDigit = lastTwoDigits % 10;
  
    if (lastTwo >= 11 && lastTwo <= 19) {
        alert(`У вас ${number} мячей`);
    } else if (lastDigit === 1) {
        alert(`У вас ${number} мяч`);
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        alert(`У вас ${number} мяча`);
    } else {
        alert(`У вас ${number} мячей`);
    }
