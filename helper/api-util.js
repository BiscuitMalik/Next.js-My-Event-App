export async function getAllEvents() {
    const respones = await fetch('https://react-startup-project-f26ad-default-rtdb.firebaseio.com/Events.json')
    const data = await respones.json()
    const event = []

    for (const key in data) {
        event.push({
            id: key,
            ...data[key]
        })
    };
    return event
}



export async function getFeaturedEvents() {
    const allEvents = await getAllEvents()
    return allEvents.filter((event) => event.isFeatured);
}


export async function getEventById(id) {
    const allEvents = await getAllEvents()
    return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {

    const allEvents = await getAllEvents()
    const { year, month } = dateFilter;

    let filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}