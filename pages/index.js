import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import { H2 } from '../components/designSystem'
import FeaturedEvent from '../components/FeaturedEvent'
import Community from '../components/Community'
import Person from '../components/Person'
import Intro from '../components/Intro'
import { getEverything } from "../lib/api"


export default function Home({people, cities, events}) {
  return (
    <>
      <Head>
        <title>Design Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container">
        <Header />
        
        <Intro />
        
        <H2>Upcoming Events</H2>
        {events.map(event => 
          <FeaturedEvent event={event} />  
        )}
        
        <H2>Our Communities</H2>
        <div className="communities">
          {cities.map(city =>
            <Community city={city.name} country={city.country} imageURL={city.image.url} />  
          )}
        </div>
        
        <H2>About Us</H2>
        <div className="people">
          {people.map(person =>
            <Person person={person} />  
          )}
        </div>
        
      </div>
    
      <style jsx>
        {`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px;
          }
          
          .communities {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 40px;
          }
          
          .people {
            display: grid;
            grid-gap: 40px;
          }
        `}
      </style>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  return await getEverything(preview)
}
