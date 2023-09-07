import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helper/api-util";
import Head from "next/head";
import NewsletterRegistration from "@/components/input/newsletter-registration";
export default function EventHomePage(props) {

    return (
        <div>
            <Head>
                <title>My Events</title>
                <meta name='discription'
                    content="This is the event page application on Next.js." />
            </Head>
            <NewsletterRegistration />
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