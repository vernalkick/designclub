import { request } from "./datocms"

function groupItemBy(array, property) {
  var hash = {},
      props = property.split('.');
  for (var i = 0; i < array.length; i++) {
      var key = props.reduce(function(acc, prop) {
          return acc && acc[prop];
      }, array[i]);
      if (!hash[key]) hash[key] = [];
      hash[key].push(array[i]);
  }
  return hash;
}

export async function getEverything() {  
  const data = await request({
    query: `{
      allPeople {
        id
        bio
        image {
          url
        }
        name
        city {
          name
        }
        instagram
      }
      allCities {
        country
        name
        id
        image {
          url
        }
        instagram
        facebook
        website
      }
      allEvents {
        id
        image {
          url
          height
          width
        }
        eventType
        description
        date
        title
        facebookUrl
        ticketUrl
      }
    }`
  })
    
  return {
    props: {
      people: data.allPeople,
      cities: data.allCities,
      events: data.allEvents,
      groupedPeople: groupItemBy(data.allPeople, "city.name")
    },
    revalidate: 1,
  }
}


export async function getEventPaths() {  
  const data = await request({
    query: `{
      allEvents {
        id
      }
    }`
  })
    
  const paths = data.allEvents.map((event) => `/events/${event.id}`)

  return { paths, fallback: false }
}


export async function getEvent(id) {  
  const data = await request({
    query: `{
      event(filter: {id: {eq: "${id}"} }) {
        image {
          url
          height
          width
        }
        eventType
        description
        longDescription(markdown: false)
        date
        id
        title
        facebookUrl
        ticketUrl
        speakers {
          name
          role
          id
          image {
            url
          }
        }
      }
    }`
  })
  
  return {
    props: {
      event: data.event
    },
    revalidate: 1,
  }
}

export async function getTeam() {  
  const data = await request({
    query: `{
      allPeople {
        bio
        image {
          url
        }
        name
      }
    }`
  })
  
  return {
    props: { data },
    revalidate: 1,
  }
}
