import { H4, P, Button } from "./designSystem"
import { Box, BoxContainer } from "./Box"

const Community = ({imageURL, city, country}) => (
  <>
    <Box>
      <img src={imageURL} />
      <BoxContainer>
        <div className="content">
          <div className="description">
            <H4>{city}</H4>
            <P>{country}</P>
          </div>
        </div>
      </BoxContainer>
    </Box>
    
    <style jsx>
      {`
  
      `}
    </style>
  </>
)

export default Community