import { useState }from "react"
import styles from "./styles.module.css"
import classNames from "classnames"

type TypeCalendarForm = {  
    date: number  
    setDate: React.Dispatch<React.SetStateAction<number>>,
    month: number,    
    year: number,
    hiddenCalendar: boolean
    setHiddenCalendar: React.Dispatch<React.SetStateAction<boolean>>
}

type TypeObjectDate = {
    value: number,
    style: boolean
}

export default function FooterForm({date, setDate, month, year, hiddenCalendar, setHiddenCalendar}: TypeCalendarForm) {
    // дней в предыдущем месяце
    const lastData = new Date(year, month, 0).getDate()
    // дней в нынешнем месяце
    const newData = new Date(year, month + 1, 0).getDate()
    // с какого дня недели начинается нынешний месяц
    const newDay = new Date(year, month, 0).getDay()
    const arraydate = [] as TypeObjectDate[]

    const newDate = new Date();

    
    // Заполняем массив днями из предыдущего месяца если нынешней начинается не с понедельника
    for (let i = lastData - newDay + 1; i <= lastData; i++) {
        let tempObject = {
            value: i,
            style: false
        }        
        tempObject.value = i
        arraydate.push(tempObject)
    }
    // заполняем нынешний месяц
    for (let i = 1; i <= newData; i++) {
        let tempObject = {
            value: i,
            style: true
        }        
        tempObject.value = i
        arraydate.push(tempObject)
    }   
    // если остались дни до воскресенья, заполняются днями из следующего месяца
    if (arraydate.length < 35) {
        const stepDey = 36 - arraydate.length
        for (let i = 1; i < stepDey; i++) {
            let tempObject = {
                value: i,
                style: false
            }            
            tempObject.value = i
            arraydate.push(tempObject)
        }
    }
    // если числа перешагнули на следующую строчку то заполняется еще одна строчка до конца
    if (arraydate.length > 35) {
        const stepDey = 43 - arraydate.length
        for (let i = 1; i < stepDey; i++) {
            let tempObject = {
                value: i,
                style: false
            }            
            tempObject.value = i
            arraydate.push(tempObject)
        }
    }

    return (
        <div className={styles.root}>
            {arraydate.map((value, index) => (
                <div 
                    key={index} 
                    // className={value.style ? styles.dateNew : styles.date}
                    className={classNames(styles.date, value.style ? getTodayDate(value.value, date, month, year, newDate) ? styles.dateNew : styles.month : "", )}
                    onClick={(e) => _clickDate(e, setDate, hiddenCalendar, setHiddenCalendar)}>
                        {value.value}
                </div>
            ))}
        </div>
    )
}
// Выбрать число по клику и записать в основное окно
function _clickDate(e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                    setDate: React.Dispatch<React.SetStateAction<number>>,
                    hiddenCalendar: boolean,
                    setHiddenCalendar: React.Dispatch<React.SetStateAction<boolean>>) {

    if (e.currentTarget.textContent !== null) {
        setDate(Number(e.currentTarget.textContent));
        setHiddenCalendar(!hiddenCalendar);
    };
}
// Выделить сегодняшнюю дату
function getTodayDate(value: number, date: number, month: number, year: number, newDate: Date) {
    if (newDate.getDate() === value && newDate.getMonth() === month && newDate.getFullYear() === year) {
        return true
    }
    return false
}