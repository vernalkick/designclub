const H2 = ({children}) => (
  <>
    <h2>{children}</h2>
    <style jsx>{`
      h2 {
        // font-size: clamp(20px, 4vw, 40px);
        font-size: 72px;
        font-weight: 700;
        line-height: 1.1;
      }
    `}</style>
  </>
)

export default H2

