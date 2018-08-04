var formTanggal = document.getElementById('form-tanggal');
var answer = document.getElementById('horoscope');

formTanggal.addEventListener('submit', checkTanggal);

function checkTanggal(event) {
  event.preventDefault();
  switch(formTanggal.month.value) {
    case 'January':
      return cetakHoroscope('January');
    case 'February':
      return cetakHoroscope('February');
    case 'March':
      return cetakHoroscope('March');
    case 'April':
      return cetakHoroscope('April');
    case 'May':
      return cetakHoroscope('May');
    case 'June':
      return cetakHoroscope('June');
    case 'July':
      return cetakHoroscope('July');
    case 'August':
      return cetakHoroscope('August');
    case 'September':
      return cetakHoroscope('September');
    case 'October':
      return cetakHoroscope('October');
    case 'November':
      return cetakHoroscope('November');
    case 'December':
      return cetakHoroscope('December');
    default:
      if (formTanggal.date.value === '') {
        alert('Please Enter Date & Month!');
      } else {
        alert('Please Enter Month!')
      }
  }
}

function cetakHoroscope(bulan) {
  if (formTanggal.date.value === '') {
    alert('Please Enter Date!');
  } else {
    switch(bulan) {
      case 'January':
        if (formTanggal.date.value <= 19) {
          answer.innerHTML = 'Capricorn';
        } else {
          answer.innerHTML = 'Aquarius';
        }
        break;
      case 'February':
        if (formTanggal.date.value <= 18) {
          answer.innerHTML = 'Aquarius';
        } else if (formTanggal.date.value <= 29) {
          answer.innerHTML = 'Pisces';
        } else {
          return invalidDate();
        }
        break;
      case 'March':
        if (formTanggal.date.value <= 20) {
          answer.innerHTML = 'Pisces';
        } else {
          answer.innerHTML = 'Aries';
        }
        break;
      case 'April':
        if (formTanggal.date.value <= 19) {
          answer.innerHTML = 'Aries';
        } else if (formTanggal.date.value <= 30) {
          answer.innerHTML = 'Taurus';
        } else {
          return invalidDate();
        }
        break;
      case 'May':
        if (formTanggal.date.value <= 20) {
          answer.innerHTML = 'Taurus';
        } else {
          answer.innerHTML = 'Gemini';
        }
        break;
      case 'June':
        if (formTanggal.date.value <= 20) {
          answer.innerHTML = 'Gemini';
        } else if (formTanggal.date.value <= 30) {
          answer.innerHTML = 'Cancer';
        } else {
          return invalidDate();
        }
        break;
      case 'July':
        if (formTanggal.date.value <= 22) {
          answer.innerHTML = 'Cancer';
        } else {
          answer.innerHTML = 'Leo';
        }
        break;
      case 'August':
        if (formTanggal.date.value <= 22) {
          answer.innerHTML = 'Leo';
        } else {
          answer.innerHTML = 'Virgo';
        }
        break;
      case 'September':
        if (formTanggal.date.value <= 22) {
          answer.innerHTML = 'Virgo';
        } else if (formTanggal.date.value <= 30) {
          answer.innerHTML = 'Libra';
        } else {
          return invalidDate();
        }
        break;
      case 'October':
        if (formTanggal.date.value <= 22) {
          answer.innerHTML = 'Libra';
        } else {
          answer.innerHTML = 'Scorpio';
        }
        break;
      case 'November':
        if (formTanggal.date.value <= 21) {
          answer.innerHTML = 'Scorpio';
        } else if (formTanggal.date.value <= 30) {
          answer.innerHTML = 'Sagittarius';
        } else {
          return invalidDate();
        }
        break;
      case 'December':
        if (formTanggal.date.value <= 19) {
          answer.innerHTML = 'Sagittarius';
        } else {
          answer.innerHTML = 'Capricorn';
        }
        break;
    }
  }
}

function invalidDate() {
  answer.innerHTML = 'None';
  alert('Invalid Date!');
}