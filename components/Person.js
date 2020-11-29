import { H3, P, Button } from "./designSystem"
import { Box, BoxContainer } from "./Box"

const Person = ({person}) => (
  <>
    <Box>
      <div className="container">
        <div className="imageContainer">
          <img src="/images/event-graphic.png" className="image" />
        </div>
        <BoxContainer>
          <H3>{person.name}</H3>
          <P>{person.bio}</P>
          <Button href={person.instagram}>Follow on Instagram</Button>
        </BoxContainer>
      </div>
    </Box>
    
    <style jsx>
      {`
        .container {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }
        
        .image {
          height: 100%;
          object-fit: cover;
        }
      `}
    </style>
  </>
)

export default Person