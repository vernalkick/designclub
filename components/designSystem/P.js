const P = ({children, ...props}) => (
  <>
    <p {...props}>{children}</p>
    <style jsx>{`
      p {
        font-size: 16px;
        line-height: 1.4;
        margin: 0;
        color: rgba(255, 255, 255, 0.75);
      }
      
      @media (min-width: 800px) {
        p {
          font-size: 19px;
        }
      }
    `}</style>
  </>
)

export default P

