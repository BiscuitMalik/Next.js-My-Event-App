import EventList from "@/components/events/event-list"
import { getAllEvents } from "@/helper/api-util"
import EventsSearch from "./events-search"
import { Fragment } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

export default function AllEvents(props) {
    const router = useRouter()
    const { events } = props
    function findEventHandler(yaer, month) {
        const fullPath = `/events/${yaer}/${month}`;
        router.push(fullPath)
    }
    return (
        <Fragment>
            <Head>
                <title>All Events Page</title>
                <meta name='discription'
                    content="This is the event page application on Next.js." />
            </Head>
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