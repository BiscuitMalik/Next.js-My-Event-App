import Button from "@/components/ui/button";
import classes from './events-search.module.css';
import { useRef } from "react";

export default function EventsSearch(props) {

    const inputYear = useRef();
    const inputMonth = useRef();

    function subitHandler(event) {
        event.preventDefault();
        const selectedYear = inputYear.current.value
        const selectedMonth = inputMonth.current.value
        props.onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className={classes.form} onSubmit={subitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={inputYear}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Year</label>
                    <select id="month" ref={inputMonth}>
                        <option value="1">jan</option>
                        <option value="2">feb</option>
                        <option value="3">mar</option>
                        <option value="4">apl</option>
                        <option value="5">may</option>
                        <option value="6">jun</option>
                        <option value="7">jul</option>
                        <option value="8">agu</option>
                        <option value="9">sep</option>
                        <option value="10">oct</option>
                        <option value="11">nov</option>
                        <option value="12">dec</option>
                    </select>
                </div>
                <Button>Find Events </Button>
            </div>
        </form>
    )

}