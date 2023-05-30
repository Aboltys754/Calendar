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
    const newDate = new Date();
    const amountOfDays = new Date(year, month + 1, 0).getDate()
    const [day, setDay] = useState(newDate.getDay());
    const arraydate = new Array(7).fill(0)
    console.log(arraydate)
    return (
        <div className={styles.root}>
            {new Array(amountOfDays).fill(null).map((_, index) => (
                <div key={index} className={styles.date}>{index + 1}</div>
            ))}
        </div>
    )
}