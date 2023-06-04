import styles from "./styles.module.css"

type SelectForm = {
    month: number
    setMonth: React.Dispatch<React.SetStateAction<number>>,
    year: number
    setYear: React.Dispatch<React.SetStateAction<number>>,
    showSelectForm: boolean,
    setShowSelectForm: React.Dispatch<React.SetStateAction<boolean>>,
}

const months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]

export default function SelectMonths({month, setMonth, year, setYear, showSelectForm, setShowSelectForm}: SelectForm) {
    return (
        <div className={styles.root}>
            <div className={styles.year}>{year}</div>
            <div className={styles.months}>
                {months.map((value, index) => <div key={index} className={styles.month}>{value}</div>)}
            </div>            
        </div>
    )
}