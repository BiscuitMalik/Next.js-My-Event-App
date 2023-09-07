import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getFeaturedEvents } from "@/dummy-data";
import Comments from "@/components/input/comments";
import { getEventById, getAllEvents } from "@/helper/api-util";
import { Fragment } from "react";
import Head from "next/head";

export default function EventsDetails(props) {

    const event = props.selectedEvent;

    if (!event) {
        return <div className="center">
            <p>Loading...</p>
        </div>
    }

    return (
        <Fragment>
            <Head>
                <title>{event.title}</title>
                <meta name='discription'
                    content={event.description} />
            </Head>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={event.id} />
        </Fragment>
    )

}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId)
    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents()
    const paths = events.map(event => ({ params: { eventId: event.id } }));
    return {
        paths: paths,
        fallback: 'blocking'
    }
}

