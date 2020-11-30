import { request } from "./datocms"

[
  {no: "1", title: "potato"},
  {no: "2", title: "potato"},
  {no: "3", title: "banana"}, 
]

// const groupBy = (keys) => (array) => {
//   return array.reduce((objectsByKeyValue, obj) => {
//      // Instead of creating a unique key for each grouped by values, we are now traversing (and building) 
//      // the whole object structure for every array value:
//       keys.reduce((builder, key, index) => {
//         if (index !== keys.length - 1) {
//           // Building the nested grouped by structure
//           builder[obj[key]] = builder[obj[key]] || {};
//         } else {
//           // Appending the current object at the leaf node
//           builder[obj[key]] = (builder[obj[key]] || []).concat(obj);
//         }
//         return builder[obj[key]];
//       }, objectsByKeyValue);
//     
//       return objectsByKeyValue;
//     }, {})  
// }

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


// const sortByCity = (people) => {
//   people.reduce((accumulator, currentValue) => {
//     accumulator[a.city.name]
//   })
// }

export async function getEverything() {  
  const data = await request({
    query: `{
      allPeople {
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
    
  console.log(groupItemBy(data.allPeople, "city.name"))
    
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
