const Pill = ({children}) => (
  <>
    <span>{children}</span>
    
    <style jsx>
      {`
        text-transform: uppercase;
        background: rgba(255, 255, 255, 0.1);
        padding: 0.25em 0.75em;
        border-radius: 1em;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.02em;
        display: inline-block;
      `}
    </style>
  </>
)

export default Pill