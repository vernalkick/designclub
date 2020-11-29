const Navigation = () => (
  <>
    <ul>
      <NavigationItem url="/" isSelected>Home</NavigationItem>
      <NavigationItem url="/about">About</NavigationItem>
      <NavigationItem url="https://design-club-podcast.simplecast.com">Podcast</NavigationItem>
      <NavigationItem url="https://ottawa-design-club.myshopify.com">Shop</NavigationItem>
      <NavigationItem url="mailto:kevin@kevinclark.ca">Contact</NavigationItem>
    </ul>
    
    <style jsx>
      {`
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }
      `}
    </style>
  </>
)

const NavigationItem = ({url, isSelected, children}) => (
  <>
    <li className={isSelected && "selected"}>
      <a href={url}>
        {children}
      </a>
    </li>
    
    
    <style jsx>
      {`
        li {
          text-transform: uppercase;
          letter-spacing: 0.17em;
          color: rgba(255, 255, 255, 0.6);
          margin-right: 2em;
          font-size: 0.875em;
        }
        
        li:hover {
          color: #fff;
        }
        
        .selected {
          font-weight: bold;
          color: #fff;
        }
        
        @media (min-width: 800px) {
          li { 
            font-size: 1em;
          }
        }
      `}
    </style>
  </>
)

export default Navigation