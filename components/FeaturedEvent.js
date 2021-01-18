import { H3, P, Button } from "./designSystem"
import { Box, BoxContainer } from "./Box"
import Pill from "./Pill"
import Image from 'next/image'

const formattedDate = (dateString) => {
  const date = Date.parse(dateString)
  const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' }
  
  const formatter = new Intl.DateTimeFormat('default', options)
  return formatter.format(date)
}

const FeaturedEvent = ({event, ...props}) => (
  <div {...props}>
    <Box className="container">
      <a href={`/events/${event.slug}`}>
        <Image src={event.image.url} width={event.image.width} height={event.image.height} className="image" />
      </a>
      <BoxContainer large>
        <div className="detailsContainer">
          <div className="titleContainer">
            <H3 className="title">{event.title}</H3>
            <P className="date">{formattedDate(event.date)}</P>
            <Pill>{event.eventType}</Pill>
          </div>
          <div className="descriptionContainer">
            <P className="description">{event.description}</P>
            <div className="actions">
              {event.ticketUrl && <Button primary href={event.ticketUrl}>Get a ticket</Button>}
              {event.facebookUrl && <Button href={event.facebookUrl}>View on Facebook</Button>}
            </div>
          </div>
        </div>
      </BoxContainer>
    </Box>
    
    <style jsx>
      {`
      
        .titleContainer > :global(.title) {
          margin-bottom: 5px;
        }
        
        .titleContainer > :global(.date) {
          margin-bottom: 15px;
        }
        
        .detailsContainer {
          display: grid;
          grid-gap: 25px;
        }
        
        .descriptionContainer {
          display: grid;
          grid-gap: 25px;
        }
        
        .actions {
          display: grid;
          grid-gap: 15px;
        }
      
  
      `}
    </style>
    
    <style jsx>
      {`@media (min-width: 800px) {
        .detailsContainer {
          grid-template-columns: 3fr 5fr;
        }
        
        .actions {
          display: block;
        }
        
        .actions > :global(*) {
          margin-right: 15px;
        }
      }
    `}
    </style>
  </div>
)

export default FeaturedEvent