import Header from "./Header"

const Layout = ({children}) => (
  <>
    <div className="wrapper">
      <div className="container">
        <Header />
      
        {children}
      </div>
    </div>
    
    <style jsx>{`
      .wrapper {
        overflow: hidden;
        
      }
      
      .wrapper :global(*) {
        z-index: 2;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 15px;
      }
      
      @media (min-width: 800px) {
        .container {
          padding: 40px;
        }
      }
    `}</style>
  </>
)

export default Layout