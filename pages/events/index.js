import EventList from "@/components/events/event-list"
import { getAllEvents } from "@/dummy-data"
import EventsSearch from "./events-search"
import { Fragment } from "react"

export default function AllEvents() {

    const events = getAllEvents()

    return (
        <Fragment>
            <EventsSearch />
            <EventList items={events} />
        </Fragment>

    )

}