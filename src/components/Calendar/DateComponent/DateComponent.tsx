import { useState }from "react"

import styles from "./styles.module.css"

export default function DateComponent({date, setDate}: {date: number, setDate: React.Dispatch<React.SetStateAction<number>>}) {

    if (0 < date && date < 10) {
        return <div className={styles.root}>{`0${date}`}</div>
    } else {
        return <div className={styles.root}>{`${date}`}</div>
    }
}