import { H3, P, Button } from "./designSystem"
import { Box, BoxContainer } from "./Box"
import Pill from "./Pill"

const formattedDate = (dateString) => {
  const date = Date.parse(dateString)
  const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  const formatter = new Intl.DateTimeFormat('default', options)
  return formatter.format(date)
}

const FeaturedEvent = ({event}) => (
  <>
    <Box className="container">
      <img src={event.image.url} className="image" />
      <BoxContainer>
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
              {event.facebookUrl && <Button>View on Facebook</Button>}
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
          // grid-template-columns: 3fr 5fr;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 25px;
        }
        
        .descriptionContainer {
          grid-column: span 2;
          display: grid;
          grid-gap: 25px;
        }
        
        .actions > :global(*) {
          margin-right: 15px;
        }
      `}
    </style>
  </>
)

export default FeaturedEvent