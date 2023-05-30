import styles from "./styles.module.css"
import {ReactComponent as LeftArrow} from "../../img/leftArrow.svg"
import {ReactComponent as RightArrow} from "../../img/rightArrow.svg"
import MonthComponent from "../../MonthComponent/MonthComponent"
import YearComponent from "../../YearComponent/YearComponent"

type TypeHeaderForm = {
    month: number,
    setMonth: React.Dispatch<React.SetStateAction<number>>,
    year: number,
    setYear: React.Dispatch<React.SetStateAction<number>>
}

export default function HeaderForm({month, setMonth, year, setYear}: TypeHeaderForm ) {

    return (
        <div className={styles.root}>
            <LeftArrow height="15px" width="15px" className={styles.arrow} onClick={() => previousMonth(month, setMonth)}/>
            <div className={styles.form}>
                <MonthComponent month={month} setMonth={setMonth} year={year} setYear={setYear} typeEvent={"form"}/>
                <YearComponent year={year}/>
            </div>
            <RightArrow height="15px" width="15px" className={styles.arrow} onClick={() => nextMonth(month, setMonth)}/>
        </div>
    )
}

function previousMonth(month: number, setMonth: React.Dispatch<React.SetStateAction<number>>) {
    setMonth(month - 1);
}

function nextMonth(month: number, setMonth: React.Dispatch<React.SetStateAction<number>>) {
    setMonth(month + 1);
}