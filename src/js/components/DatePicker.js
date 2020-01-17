import BaseWidget from './BaseWidget.js';
import {settings, select} from '../settings.js';
import {utils} from '../utils.js';

class DatePicker extends BaseWidget{
  constructor(wrapper){
    super(wrapper, utils.dateToStr(new Date()));

    const thisWidget = this;
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

    thisWidget.initPlugin;
  }

  initPlugin(){

    const thisWidget = this;

    thisWidget.minDate = new Date(thisWidget.value);
    thisWidget.maxDate = utils.addDays(thisWidget.minDate, settings.datePicker.maxDaysInFuture);

    const options = {
      deafultDate: thisWidget.minDate,
      minDate: thisWidget.minDate,
      maxDate: thisWidget.maxDate,
      'disable': [
        function(date) {
          // return true to disable
          return (date.getDay() === 0 || date.getDay() === 6);
        }
      ],
      'locale': {
        'firstDayOfWeek': 1 // start week on Monday
      },
      onChange: function (selectedDates, dateToStr) {
        thisWidget.value = dateToStr;
      },
    };

    flatpickr(thisWidget.dom.input, options);
  }

  parseValue(value){
    return value;
  }
  isValid(){
    return true;
  }
  renderValue(){
    console.log();
  }
}
export default DatePicker;
