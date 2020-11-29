const H3 = ({children, ...props}) => (
  <>
    <h3 {...props}>{children}</h3>
    <style jsx>{`
      h3 {
        font-size: 35px;
        font-weight: 700;
        line-height: 1.1;
        margin: 0;
      }
    `}</style>
  </>
)

export default H3