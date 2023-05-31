import { useState }from "react"
import styles from "./styles.module.css"

type TypeCalendarForm = {
    date: number,
    setDate: React.Dispatch<React.SetStateAction<number>>,
    month: number,
    setMonth: React.Dispatch<React.SetStateAction<number>>,
    year: number,
    setYear: React.Dispatch<React.SetStateAction<number>>
}

export default function FooterForm({date, setDate, month, setMonth, year, setYear}: TypeCalendarForm) {
    const newDay = new Date(year, month, 1).getDay()
    const amountOfDays = new Date(year, month + 1, 0).getDate()
    // const [day, setDay] = useState(newDate);
    const arraydate = new Array(42).fill(0)
    arraydate.fill(null, newDay - 1, amountOfDays + newDay - 1)
    console.log(arraydate)
    // console.log(day)
    return (
        <div className={styles.root}>
            {arraydate.map((value, index) => (
                value === 0 ? <div key={index} className={styles.date}>{` `}</div> : <div key={index} className={styles.date}>{index + 2 - newDay}</div>
            ))}

            {/* {new Array(amountOfDays).fill(null).map((_, index) => (
                <div key={index} className={styles.date}>{index + 1}</div>
            ))} */}
        </div>
    )
}