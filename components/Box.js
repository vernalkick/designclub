const Box = ({children, ...props}) => (
  <>
    <div props>
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

const BoxContainer = ({children, ...props}) => (
  <>
    <div {...props}>
      {children}
    </div>
    
    <style jsx>
      {`
        div {
          padding: 25px;
        }
      `}
    </style>
  </>
)

export {
  Box,
  BoxContainer 
}
 