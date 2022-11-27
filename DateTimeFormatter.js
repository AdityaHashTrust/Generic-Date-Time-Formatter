// This mixin takes a date object
// It returns an object containing different formats of values of the given date object(like 'Month','Hr' etc)
export default {
    methods: {
      dateTimeFormatter(date) {
        const d = date.getDate();
        let dd = d;
        let m = date.getMonth();
        let mm = m;
        const Mons = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        const Months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        const Mon = Mons[m];
        const Month = Months[m];
        m += 1; //so that user get 4 for April not 3
        mm += 1;
        const year = date.getFullYear();
        const yy = year.toString().substr(2);
        let hr = date.getHours();
        let Hr = hr;
        const min = date.getMinutes();
        let Min = min;
        let AMPM = 'AM';
        let ampm = 'am';
  
        if (d < 10) {
          dd = `0${d}`;
        }
        if (m < 10) {
          mm = `0${m}`;
        }
        if (hr < 10) {
          Hr = `0${hr}`;
        }
        if (hr > 12) {
          hr -= 12;
          Hr -= 12;
          AMPM = 'PM';
          ampm = 'pm';
        }
        if (min < 10) {
          Min = `0${min}`;
        }
  
        return { d, dd, m, mm, Mon, Month, yy, year, hr, Hr, min, Min, AMPM, ampm };
      },
    },
  };
  