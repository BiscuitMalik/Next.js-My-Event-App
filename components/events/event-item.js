import classes from './event-item.module.css';
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import AddressIcon from "../icons/address-icon";


export default function EventItem(props) {
    const { title, location, date, image, id } = props;
    const humanreadabledate = new Date(date).toLocaleDateString("en-US", {
        date: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formattedAddress = location.replace(',', '\n')
    const explorelink = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={classes.title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                </div >
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanreadabledate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
                <div className={classes.actions}>
                    <Button link={explorelink}>
                        <span>
                            Explore Events
                        </span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}