import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import { H2, H3, H4, P } from '../components/designSystem'
import FeaturedEvent from '../components/FeaturedEvent'
import { Box, BoxContainer } from '../components/Box'
import Community from '../components/Community'
import Person from '../components/Person'
import Intro from '../components/Intro'
import { getEverything } from "../lib/api"




export default function Home({cities, events, groupedPeople}) {
  const filterSortEvents = (events) => {
    return events.filter(event => {
      const eventDate = Date.parse(event.date)
      const currentDate = Date.now()
    
      return eventDate > currentDate
    }).reverse()
  }
    
  const upcomingEvents = filterSortEvents(events)
    
  return (
    <>
      <Head>
        <title>Design Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="video">
        <div className="overlay" />
        <img src="/video.gif" loading="lazy" />
      </div>
      
      <div className="wrapper">
        <div className="container">
          <Header />
          
          <div className="section">
            <Intro />
          </div>
          
          
          <div className="section">
            <H2>Upcoming Events</H2>
            <div className="events">
              {upcomingEvents.length == 0 &&
                <Box>
                  <BoxContainer>
                    <H4>We haven't announced our next event yet!</H4>
                    <P>Follow us on Instagram to know when the next one will be.</P>
                  </BoxContainer>
                </Box>
              }
              {upcomingEvents.map(event => 
                <FeaturedEvent event={event} key={event.id} />  
              )}
            </div>
          </div>
          
          <div className="section">
            <H2>Our Communities</H2>
            <div className="communities">
              {cities.map(city =>
                <Community city={city} key={city.id} />  
              )}
            </div>
          </div>
          
          
          <div className="section" id="about-us">
            <H2>About Us</H2>
            {Object.keys(groupedPeople).map(city =>
              <div className="about-city">
                <H3>{city}</H3>
                <div className="people">
                  {groupedPeople[city].map(person =>
                    <Person person={person} key={person.id} />
                  )}
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>

    
      <style jsx>
        {`
          .video {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            // z-index: -1;
          }
          
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(transparent, #1F1F1F);
          }
          
          .wrapper {
            overflow: hidden;
            z-index: 2;
          }
          
          .section {
            padding: 30px 0;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 15px;
          }
          
          .communities {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            grid-gap: 15px;
          }
          
          .events {
            display: grid;
            grid-gap: 40px;
          }
          
          .people {
            display: grid;
            grid-gap: 40px;
            margin-top: 20px;
          }
          
          .about-city {
            margin-bottom: 60px;
          }
          
          @media (min-width: 800px) {
            .container {
              padding: 40px;
            }
            
            .communities {
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              grid-gap: 40px;
            }
            
            .section {
              padding: 90px 0;
            }
          }
        `}
      </style>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  return await getEverything(preview)
}
