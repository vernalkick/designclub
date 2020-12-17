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
      
      p + p {
        margin-top: 1.5em;
      }
      
      p > :global(a) {
        color: #fff;
        font-weight: 500;
        // text-decoration: underline;
        // text-decoration-thickness: 2px;
        // text-decoration-color: rgba(255, 255, 255, 0.2);
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

