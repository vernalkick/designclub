import { request } from "./datocms"

export async function getEverything() {  
  const data = await request({
    query: `{
      allPeople {
        bio
        image {
          url
        }
        name
      }
      allCities {
        country
        name
        id
        image {
          url
        }
      }
      allEvents {
        image {
          url
        }
        eventType
        description
        date
        id
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
      events: data.allEvents
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
