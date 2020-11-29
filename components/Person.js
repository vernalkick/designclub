import { H3, P, Button } from "./designSystem"
import { Box, BoxContainer } from "./Box"

const Person = ({person}) => (
  <>
    <Box>
      <div className="container">
        <div className="imageContainer">
          <img src={person.image.url} className="image" />
        </div>
        <BoxContainer large>
          <H3>{person.name}</H3>
          <P>{person.bio}</P>
          <div className="buttonContainer">
            <Button href={person.instagram}>Follow on Instagram</Button>
          </div>
        </BoxContainer>
      </div>
    </Box>
    
    <style jsx>
      {`
        .container {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }
        
        .imageContainer {
          position: relative;
        }
        
        .image {
          object-fit: cover;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
        }
        
        .buttonContainer {
          margin-top: 25px;
        }
      `}
    </style>
  </>
)

export default Person