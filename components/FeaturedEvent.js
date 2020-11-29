import { H3, P, Button } from "./designSystem"
import { Box, BoxContainer } from "./Box"
import Pill from "./Pill"

const FeaturedEvent = ({event}) => (
  <>
    <Box className="container">
      <img src="/images/event-graphic.png" className="image" />
      <BoxContainer>
        <div className="detailsContainer">
          <div className="titleContainer">
            <H3 className="title">Open Letters</H3>
            <P className="date">Thursday November 26 at 7PM</P>
            <Pill>Online Event</Pill>
          </div>
          <div className="descriptionContainer">
            <P className="description">Pour notre premier événement en ligne, nous accueillerons Audrey Girard et Patricia Lussier de la firme d’architecture Lemay et Martin Laviolette, fondateur de Cité Mémoire qui vont nous parler de comment nos espaces publics doivent évoluer pour répondre à notre nouvelle réalité tout en les optimisant pour le long terme.</P>
            <div className="actions">
              <Button primary>Get a ticket</Button>
              <Button>View on Facebook</Button>
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