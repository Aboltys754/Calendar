import { useState }from "react"

import styles from "./styles.module.css"
import {ReactComponent as IconCalendar} from "./img/calendar.svg"
import YearComponent from "./YearComponent/YearComponent";
import MonthComponent from "./MonthComponent/MonthComponent";
import DateComponent from "./DateComponent/DateComponent";
import DayComponent from "./DayComponent/DayComponent";
import CalendarForm from "./CalendarForm/CalendarForm";

export default function Calendar() {
    const newDate = new Date();
    const [date, setDate] = useState(newDate.getDate());
    const [month, setMonth] = useState(newDate.getMonth());
    const [year, setYear] = useState(newDate.getFullYear());

    // Отображать иконку календаря или форму календаря
    const [hiddenCalendar, setHiddenCalendar] = useState(true)
    
    return (
        <div className={styles.root} >
            {hiddenCalendar
            ? <div className={styles.icon} onClick={() => setHiddenCalendar(!hiddenCalendar)}>
                <IconCalendar height="30px" width="30px"/>
                <div className={styles.date}>
                    <DateComponent date={date} setDate={setDate}/>:
                    <MonthComponent month={month} setMonth={setMonth} year={year} setYear={setYear} typeEvent={"icon"}/>:
                    <YearComponent year={year} />
                </div>
              </div>
            : <CalendarForm 
                hiddenCalendar={hiddenCalendar} 
                setHiddenCalendar={setHiddenCalendar} 
                date={date} 
                setDate={setDate} 
                month={month} 
                setMonth={setMonth}
                year={year}
                setYear={setYear}
                />
            }
        </div>
    )
}