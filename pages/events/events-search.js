import Button from "@/components/ui/button";
import classes from './events-search.module.css'


export default function EventsSearch(props) {

    function subitHandler() {

    }
    return (
        <form className={classes.form} onSubmit={subitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Year</label>
                    <select id="month">
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