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
    // const lastDay = new Date(year, month - 1, 0).getDate()
    // const newData = new Date(year, month, 0).getDate()
    // const newDay = new Date(year, month, 0).getDay()
    // const arraydate = new Array(42).fill(null)
    // arraydate.fill(0, 0, newDay);
    // arraydate.fill(1, newDay, newData);

    // console .log(lastDay);
    // console .log(newDay);
    // console .log(arraydate);

    // return (
    //     <div>
    //         1
    //     </div>
    // )











    const lastDay = new Date(year, month - 1, 1).getDay()
    const newDay = new Date(year, month, 1).getDay()
    const amountOfDays = new Date(year, month + 1, 0).getDate()
    // const [day, setDay] = useState(newDate);
    const arraydate = new Array(42).fill(0)
    arraydate.fill(null, newDay - 1, amountOfDays + newDay - 1)
    console.log(arraydate)
    console.log(lastDay)
    return (
        <div className={styles.root}>
            {arraydate.map((value, index) => (
                value === 0 ? <div key={index} className={styles.date}>{` `}</div> : <div key={index} className={styles.date}>{index + 2 - newDay}</div>
            ))}
        </div>
    )
}