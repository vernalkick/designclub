import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import { H2, H3 } from '../components/designSystem'
import FeaturedEvent from '../components/FeaturedEvent'
import Community from '../components/Community'
import Person from '../components/Person'
import Intro from '../components/Intro'
import { getEverything } from "../lib/api"


export default function Home({cities, events, groupedPeople}) {
  return (
    <>
      <Head>
        <title>Design Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="wrapper">
        <div className="container">
          <Header />
          
          <div className="section">
            <Intro />
          </div>
          
          <div className="section">
            <H2>Upcoming Events</H2>
            {events.map(event => 
              <FeaturedEvent event={event} key={event.id} />  
            )}
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
          .wrapper {
            overflow: hidden;
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
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 40px;
          }
          
          .people {
            display: grid;
            grid-gap: 40px;
            margin-top: 20px;
          }
          
          .about-city {
            margin-bottom: 40px;
          }
          
          @media (min-width: 800px) {
            .container {
              padding: 40px;
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
