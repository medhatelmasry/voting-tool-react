import React from 'react';
import onButtonClick from 'components/PDF';
import AddToCalendar from 'react-add-to-calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const dateSelector = dates => {
//   const options = dates.map(date => {
//     return <option key={date} aria-describedby='info'>{date}</option>;
//   });

//   return <select id='dateSelector'>{options}</select>;
// };

const ICS = ({data}) => {
  
let event = {
  title: 'Sample Event',
  description: 'sample description',
  location: 'sample location',
  startTime: new Date(),
  endTime: new Date()
};

const handleChange = date => {
    event.startTime = date;
    event.endTime = date;
};

  return (
    <div>
      <label
        htmlFor='dateSelector'
        aria-label='format: year month day'
        className='col-form-label'
        id='info'
      >
        Date:
      </label>
      {/* {dateSelector(['2019-04-15', '2019-05-23', '2019-06-28'])} */}
      <DatePicker
        selected={event.startTime}
        onChange={handleChange}
      />
      <AddToCalendar event={event}/>;
      <button
        aria-label='Generating and downloading pdf summary of your plan. Remember to officially vote in person on election day.'
        className='btn btn-secondary'
        onClick={() => onButtonClick(data)}
      >
        Generate Voting Plan PDF
      </button>
    </div>
  );
};

export default ICS;
