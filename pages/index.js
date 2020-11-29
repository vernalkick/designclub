import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import { H2 } from '../components/designSystem'
import FeaturedEvent from '../components/FeaturedEvent'
import Community from '../components/Community'
import Person from '../components/Person'

const team = [
  {
    name: "Ariane Bédard",
    bio: "Ariane is the co-founder of the Ottawa Design Club. The idea of being part of an inclusive community of like-minded creatives is what pushed Ariane to join forces with Isabelle and create this chapter of the Design Club in her city. Designer for over 10 years, she now works as a Senior Graphic Designer for the University of Ottawa. There, she works with a dynamic marketing team to promote the Student Experience. Multi-passionate, she loves to learn and to take on all kinds of new projects.",
    instagram: ""
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container">
        <Header />
        
        <H2>Upcoming Events</H2>
        <FeaturedEvent />
        
        <H2>Our Communities</H2>
        <div className="communities">
          <Community city="Marseille" country="France" />
          <Community city="Montreal" country="Canada" />
          <Community city="Ottawa" country="Canada" />
        </div>
        
        <H2>About Us</H2>
        {team.map(person =>
          <Person person={person} />  
        )}
        
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
        `}
      </style>
    </>
  )
}
