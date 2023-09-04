import EventList from "@/components/events/event-list"
import { getAllEvents } from "@/helper/api-util"
import EventsSearch from "./events-search"
import { Fragment } from "react"
import { useRouter } from "next/router"

export default function AllEvents(props) {
    const router = useRouter()
    const { events } = props
    function findEventHandler(yaer, month) {
        const fullPath = `/events/${yaer}/${month}`;
        router.push(fullPath)
    }
    return (
        <Fragment>
            <EventsSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </Fragment>
    )
}
export async function getStaticProps() {
    const events = await getAllEvents()
    return {
        props: {
            events: events,
        },
        revalidate: 60
    }
}