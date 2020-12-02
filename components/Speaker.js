import { H4, P, Button } from "./designSystem"
import { Box, BoxContainer } from "./Box"
import { Facebook, Instagram } from "./Icons"

const Speaker = ({image, name, job, instagram, facebook, ...props}) => (
  <div {...props}>
    <Box>
      <img src={image} />
      <BoxContainer>
        <div className="content">
          <div className="description">
            <H4>{name}</H4>
            <P>{job}</P>
          </div>
          <div className="links">
            {instagram && <a href={city.instagram} className="link"><Instagram /></a>}
            {facebook && <a href={city.facebook} className="link"><Facebook /></a>}
          </div>
        </div>
      </BoxContainer>
    </Box>
    
    <style jsx>
      {`
        .content {
          display: grid;
          grid-gap: 10px;
          align-items: center;
        }
        
        .links > *+* {
          margin-left: 10px;
        }
        
        @media (min-width: 800px) {
          .content {
            grid-template-columns: 1fr max-content;
          }
        }
      `}
    </style>
  </div>
)

export default Speaker