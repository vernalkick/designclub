 import Peace from "./Peace"
 
 const Intro = () => (
  <>
    <div className="intro">
      <div className="peace-wrapper">
        <Peace />
      </div>
      <p className="lede">The Design Club is a network of communities created by designers, for designers. You may find them in Montreal, Ottawa, Marseille, and online!</p>
      
      <p className="secondary">Through speaker events, panel discussions, workshops, podcasts and zines, they feature inspirational designers and creators from different background and disciplines. The club's mission is to bring creatives together through these initiatives and showcase all of the incredible design work happening in their communities and beyond.</p>
    </div>
    
  
    <style jsx>
      {`
        .intro {
          position: relative;
        }
        
        .peace-wrapper {
          position: absolute;
          left: 70%;
          top: -332px;
          display: none;
        }
        
        .lede {
          font-size: 24px;
          font-weight: bold;
          line-height: 1.3;
          margin-top: 130px;
          margin-bottom: 25px;
        }
        
        .secondary {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.4;
        }
        
        @media (min-width: 800px) {
          .peace-wrapper {
            display: block;
          }
          
          .lede {
            font-size: 33px;
            margin-right: 28%;
            margin-bottom: 130px;
          }
          
          .secondary {
            font-size: 21px;
            margin-left: 31%;
            margin-right: 22%;
          }
        }
      `}
    </style>
  </>
)

export default Intro