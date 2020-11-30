const Box = ({children, ...props}) => (
  <>
    <div {...props}>
      {children}
    </div>
    
    <style jsx>
      {`
        div {
          background: rgba(255,255,255, 0.07);
          border-radius: 18px;
          overflow: hidden;
        }
      `}
    </style>
  </>
)

const BoxContainer = ({children, large, ...props}) => (
  <>
    <div className={large && "large"} {...props}>
      {children}
    </div>
    
    <style jsx>
      {`
        div {
          padding: 20px;
        }
        
        .large {
          padding: 20px;
        }
        
        @media (min-width: 800px) {
          div {
            padding: 25px;
          }
          
          .large {
            padding: 50px;
          }
        }
      `}
    </style>
  </>
)

export {
  Box,
  BoxContainer 
}
 