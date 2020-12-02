 import Peace from "./Peace"
 import ThumbsUp from "./ThumbsUp"
 
 const Intro = () => (
  <>
    <div className="intro">
      <div className="peace-wrapper">
        <Peace />
      </div>
      <div className="thumbs-up">
        <ThumbsUp />
      </div>

      <p className="lede">The Design Club is a network of communities created by designers, for designers. You may find them in Montréal, Ottawa, Marseille, and online!</p>

      <div className="secondary">
        <p>Through speaker events, panel discussions, workshops, podcasts and zines, they feature inspirational designers and creators from different background and disciplines. The club's mission is to bring creatives together through these initiatives and showcase all of the incredible design work happening in their communities and beyond.</p>
        <p className="welcome">Welcome to the club.</p>
      </div>
    </div>
    
  
    <style jsx>
      {`
        .intro {
          position: relative;
        }
        
        .peace-wrapper {
          position: absolute;
          left: 100%;
          top: -300px;
          transform: scale(0.4) translateX(-100%);
          margin-left: 80px;
          display: none;
        }
        
        .thumbs-up {
          position: absolute;
          right: 75%;
          bottom: -500px;
          display: none;
        }
        
        .lede {
          font-size: 24px;
          font-weight: bold;
          line-height: 1.3;
          margin-top: 30px;
          margin-bottom: 25px;
          // margin-right: 30%;
        }
        
        .secondary {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.4;
          // margin-right: 30%;
        }
        
        .welcome {
          margin-top: 30px;
          font-weight: 600;
          color: #fff;
        }
        
        @media (min-width: 800px) {
          .welcome {
            margin-top: 60px;
          }
          
          .peace-wrapper {
            position: absolute;
            left: 70%;
            top: -332px;
            display: block;
            transform: none;
            margin: 0;
          }
          
          .thumbs-up,
          .peace-wrapper {
            display: block;
          }
          
          .lede {
            font-size: 33px;
            margin-right: 28%;
            margin-top: 130px;
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