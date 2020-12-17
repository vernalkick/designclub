import Layout from "../../components/Layout"
import FeaturedEvent from "../../components/FeaturedEvent"
import {getAllEvents} from "../../lib/api"
import { H2 } from "../../components/designSystem"
// import { Box, BoxContainer } from "../../components/Box"
// import Pill from "../../components/Pill"
// import Speaker from "../../components/Speaker"
// import Markdown from "../../components/Markdown"

const Event = ({events}) => (
  <Layout>
    <H2>Events</H2>
    <div className="events">
      {events.map(event =>
        <FeaturedEvent event={event} />
      )}
    </div>
    <style jsx>{`
        .events {
          display: grid;
          grid-gap: 20px;
        }
      `}
    </style>
  </Layout>
)

export const getStaticProps = async function({preview = false}) {
  return await getAllEvents(preview)
}

export default Event