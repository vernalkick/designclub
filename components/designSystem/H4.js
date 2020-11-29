const H4 = ({children, ...props}) => (
  <>
    <h4>{children}</h4>
    <style jsx>{`
      h4 {
        font-size: 19px;
        font-weight: 700;
        line-height: 1.1;
        margin: 0;
      }
    `}</style>
  </>
)

export default H4