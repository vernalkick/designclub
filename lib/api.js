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
      events: data.allEvents,
      groupedPeople: groupItemBy(data.allPeople, "city.name")
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
