const P = ({children, ...props}) => (
  <>
    <p {...props}>{children}</p>
    <style jsx>{`
      p {
        font-size: 21px;
        line-height: 1.3;
        margin: 0;
        color: rgba(255, 255, 255, 0.75);
      }
    `}</style>
  </>
)

export default P

