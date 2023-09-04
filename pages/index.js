import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helper/api-util";

export default function EventHomePage(props) {

    return (
        <div>
            <EventList items={props.events} />
        </div>
    )
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800
    }
}