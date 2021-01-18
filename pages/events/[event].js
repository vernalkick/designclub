import { getEvent, getEventPaths } from "../../lib/api"
import Layout from "../../components/Layout"
import { H2, H3, H4, P, Button, Hr } from "../../components/designSystem"
import { Box, BoxContainer } from "../../components/Box"
import Pill from "../../components/Pill"
import Speaker from "../../components/Speaker"
import Markdown from "../../components/Markdown"
import { useRouter } from 'next/router'


const formattedDate = (dateString) => {
  const date = Date.parse(dateString)
  const options = { weekday: 'long', month: 'long', day: 'numeric' }
  
  const formatter = new Intl.DateTimeFormat('default', options)
  return formatter.format(date)
}

const formattedTime = (dateString) => {
  const date = Date.parse(dateString)
  const options = { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' }
  
  const formatter = new Intl.DateTimeFormat('default', options)
  return formatter.format(date)
}

const Event = ({event}) => {
  const router = useRouter()
  
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
    <Layout>
      <div className="section">
        <div className="title">
          <Pill>{event.eventType} Event</Pill>
          <H2>{event.title}</H2>
        </div>
        <Box>
          <img src={event.image.url} />
        </Box>
        
        <div className="info">
          <div className="metadataContainer">
            <Box>
              <BoxContainer>
                <div className="metadata">
                  <H4>{formattedDate(event.date)}</H4>
                  <P>{formattedTime(event.date)}</P>
                  <div className="buttonGroup">
                    {event.ticketUrl && <Button primary href={event.ticketUrl}>Get a ticket</Button>}
                    {event.facebookUrl && <Button href={event.facebookUrl}>View on Facebook</Button>}
                  </div>
                </div>
              </BoxContainer>
            </Box>
          </div>
      
          <div>
            <Markdown>{event.longDescription}</Markdown>      
          </div>
        </div>
      </div>
      {event.speakers &&
        <div className="section">
          <H3>Speakers</H3>
          <div className="speakers">
          {event.speakers.map(speaker =>
            <Speaker name={speaker.name} job={speaker.role} key={speaker.id} image={speaker.image.url} />  
          )}
          </div>
        </div>
      }
    </Layout>
    
      <style jsx>
        {`
          
          .title > :global(*:first-child) {
            margin-bottom: 5px;
          }
      
        .speakers {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          grid-gap: 15px;
          margin-top: 15px;
        }
        
          .info {
            display: grid;
            grid-gap: 30px;
            grid-auto-flow: dense;
            margin-top: 15px;
          }
          
          .section {
            padding: 30px 0;
          }
          
          .buttonGroup {
            display: grid;
            grid-gap: 15px;
            margin-top: 20px;
          }
          
        `}
      </style>
      
      
      <style jsx>
      {`
        @media (min-width: 800px) {
          .section {
            padding: 90px 0;
          }
          
          .info {
            grid-template-columns: 4fr 3fr;  
            margin-top: 30px;
          }
          
          .metadataContainer {
            grid-column-start: 2;
          }
          
          .speakers {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 40px;
          }
        }
        
      `}
    </style>
    </>
  )
}

export default Event

export async function getStaticPaths() {
  return await getEventPaths()
}

export async function getStaticProps(context) {
  return await getEvent(context.params.event)
}