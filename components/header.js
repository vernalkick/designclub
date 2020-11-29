import Navigation from "./navigation"

const Header = () => (
  <>
    <header>
      <a href="/" className="logo">
        <span className="design">Design</span>
        <span className="dash" />
        <span className="club">Club</span>
      </a>
      <Navigation />
    </header>
    
    <style jsx>
      {`
        header {
          display: grid;
          grid-row-gap: 20px;
        }
        
        .logo {
          font-size: 28px;
          text-transform: uppercase;
          font-weight: bold;
          display: flex;
          align-items: center;
        }
        
        .logo:hover .dash {
          width: 60px;
        }
        
        .dash {
          display: inline-block;
          height: 4px;
          background: #fff;
          width: 30px;
          margin: 0 5px;
          transition: all .3s ease-in-out;
        }
      `}
    </style>
  </>
)

export default Header