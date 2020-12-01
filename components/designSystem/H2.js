const H2 = ({children}) => (
  <>
    <h2>{children}</h2>
    <style jsx>{`
      h2 {
        // font-size: clamp(20px, 4vw, 40px);
        font-size: 36px;
        font-weight: 700;
        line-height: 1.1;
        margin: 0 0 0.5em 0;
        font-family: 'sharp_grotesk_medium_25Rg', system;
      }
      
      @media (min-width: 800px) {
        h2 {
          font-size: 72px;
        }
      }
    `}</style>
  </>
)

export default H2

