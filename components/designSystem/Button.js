const Button = ({primary, href, children, ...props}) => (
  <>
    <a href={href} className={primary ? 'primary' : 'secondary'} {...props}>{children}</a>
    
    <style jsx>{`
      a {
        padding: 18px 30px 20px;
        display: inline-block;
        border-radius: 13px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        text-align: center;
      } 
      
      .primary {
        background: white;
        color: #000;
      }
      
      .secondary {
        box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.2);
      } 
      
      @media (min-width: 800px) {
        a {
          font-size: 19px;
        }
      }
    `}</style>
    

  </>
)

export default Button

