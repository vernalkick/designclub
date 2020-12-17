import { Box, BoxContainer } from './Box'
import { H4, P } from './designSystem'
import { Sparkles } from './Icons'

const NoEvents = () => (
  <>
    <Box>
      <BoxContainer large>
        <div className="container">
          <Sparkles />
          <div className="text">
            <H4>We haven't announced our next&nbsp;event&nbsp;yet!</H4>
            <P>Follow us on Instagram to know when the next one will be.</P>
          </div>
        </div>
      </BoxContainer>
    </Box>
    
    <style jsx>{`
      .container {
        text-align: center;
        display: grid;
        grid-gap: 20px;
        justify-items: center;
      }
      
      .text {
        display: grid;
        grid-gap: 8px;
      }
      
      @media (min-width: 800px) {
       
      }
    `}</style>
  </>
)

export default NoEvents