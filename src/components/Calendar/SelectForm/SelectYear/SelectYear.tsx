import styles from "./styles.module.css"

type SelectForm = {
    year: number
    setYear: React.Dispatch<React.SetStateAction<number>>,
    showMonthForm: Boolean,
    setShowMonthForm: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function SelectYear({year, setYear, showMonthForm, setShowMonthForm}: SelectForm) {
    console.log(year - year % 10)
    const listYear = new Array() as number[];
    const startingYear = year - year % 10
    for (let i = startingYear - 1; i < startingYear + 11; i++) {
        listYear.push(i)
    }
    console.log(listYear)
    return (
        <div className={styles.root}>            
            <div>
                <p>{`${startingYear} - ${startingYear + 9}`}</p>
            </div>
            <div className={styles.years}>
                {listYear.map((value, index) => <div key={index} className={styles.year}>{value}</div>)}
            </div>            
        </div>
    )
}