import {React,useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
export const DateRange = () => {
 
        const [startDate, setStartDate] = useState(new Date("2022/02/08"));
        const [endDate, setEndDate] = useState(new Date("2022/02/10"));
        return (
          <>
		  
		  <div className='datediv'><h1>Start Date</h1>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
			  id="date"
             // showDisabledMonthNavigation
            />
			<h1>End Date</h1>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
			  id="date"
            />
            </div>
          </>
        
  )
}