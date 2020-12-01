import { H4, P, Button } from "./designSystem"
import { Box, BoxContainer } from "./Box"
import { Facebook, Instagram } from "./Icons"

const Community = ({city, ...props}) => (
  <div {...props}>
    <Box>
      <img src={city.image.url} />
      <BoxContainer>
        <div className="content">
          <div className="description">
            <a href={city.website || city.instagram}>
              <H4>{city.name}</H4>
              <P>{city.country}</P>
            </a>
          </div>
          <div className="links">
            {city.instagram && <a href={city.instagram} className="link"><Instagram /></a>}
            {city.facebook && <a href={city.facebook} className="link"><Facebook /></a>}
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

export default Community