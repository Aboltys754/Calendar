import styles from "./styles.module.css"

import DayComponent from "../DayComponent/DayComponent";
import FooterForm from "./FooterForm/FooterForm";
import HeaderForm from "./HeaderForm/HeaderForm";

type TypeCalendarForm = {
    hiddenCalendar: boolean,
    setHiddenCalendar: React.Dispatch<React.SetStateAction<boolean>>,
    date: number,
    setDate: React.Dispatch<React.SetStateAction<number>>,
    month: number,
    setMonth: React.Dispatch<React.SetStateAction<number>>,
    year: number,
    setYear: React.Dispatch<React.SetStateAction<number>>
}


export default function CalendarForm({hiddenCalendar, setHiddenCalendar, date, setDate, month, setMonth, year, setYear}: TypeCalendarForm) {
    return (
        <div className={styles.root}>
            <HeaderForm 
                month={month} 
                setMonth={setMonth}
                year={year}
                setYear={setYear}/>
            <DayComponent />
            <FooterForm 
                date={date} 
                setDate={setDate} 
                month={month} 
                setMonth={setMonth}
                year={year}
                setYear={setYear}/>
        </div>
    )
}